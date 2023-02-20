import {
  ChangeEvent,
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { StorageKeyConstants } from '@/constants';
import { useDebounce } from '@/hooks';
import { RepositoryType } from '@/types';

type RepositoryContextType = {
  debounceSearchValue: string;
  favorit: RepositoryType[];
  handleChangeSearchValue: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeFavoritRepository: (repository: RepositoryType, type: 'add' | 'del') => void;
};

const RepositoryContext = createContext<RepositoryContextType | undefined>(undefined);

const RepositoryProvider = ({ children }: { children: ReactNode }) => {
  const [searchValue, setSearchValue] = useState('');
  const [favorit, setFavorit] = useState<RepositoryType[]>([]);
  const debounceSearchValue = useDebounce(searchValue);

  const handleChangeSearchValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  }, []);

  const handleChangeFavoritRepository = useCallback(
    (repository: RepositoryType, type: 'add' | 'del') => {
      const localStorageFavorit: RepositoryType[] =
        JSON.parse(localStorage.getItem(StorageKeyConstants.Repository) as string) || [];
      const hasFavorit = localStorageFavorit.find((list) => list.id === repository.id);

      const storageHandler = {
        add: () => {
          if (hasFavorit) {
            window.alert('이미 저장한 레포지토리 입니다.');
            return;
          }
          if (localStorageFavorit.length >= 4) {
            window.alert('최대 4개까지 저장할 수 있습니다.');
            return;
          }
          const addFavorit = [...localStorageFavorit, repository];
          localStorage.setItem(StorageKeyConstants.Repository, JSON.stringify(addFavorit));
        },
        del: () => {
          const filteredFavorit = localStorageFavorit.filter((list) => list.id !== repository.id);
          localStorage.setItem(StorageKeyConstants.Repository, JSON.stringify(filteredFavorit));
        },
      }[type];

      storageHandler();
      window.dispatchEvent(new CustomEvent(StorageKeyConstants.Event));
    },
    []
  );

  const repositoryValues = useMemo(
    () => ({
      debounceSearchValue,
      favorit,
      handleChangeSearchValue,
      handleChangeFavoritRepository,
    }),
    [debounceSearchValue, favorit]
  );

  useEffect(() => {
    const checkLocalStorageFavorit = () => {
      const localStorageFavorit: RepositoryType[] =
        JSON.parse(localStorage.getItem(StorageKeyConstants.Repository) as string) || [];
      setFavorit(localStorageFavorit);
    };

    checkLocalStorageFavorit();

    window.addEventListener(StorageKeyConstants.Event, checkLocalStorageFavorit);
    return () => {
      window.removeEventListener(StorageKeyConstants.Event, checkLocalStorageFavorit);
    };
  }, []);

  return (
    <RepositoryContext.Provider value={repositoryValues}>{children}</RepositoryContext.Provider>
  );
};

const useRepositoryContext = () => {
  const context = useContext(RepositoryContext);
  if (!context) {
    throw Error('useRespositoryContext Error');
  }
  return context;
};

export { RepositoryProvider, useRepositoryContext };
