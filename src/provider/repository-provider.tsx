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
  handleChangeFavoritRepository: (repository: RepositoryType) => void;
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

  const handleChangeFavoritRepository = useCallback((repository: RepositoryType) => {
    const localStorageFavorit: RepositoryType[] =
      JSON.parse(localStorage.getItem(StorageKeyConstants.Repository) as string) || [];

    const hasFavorit = localStorageFavorit.find((list) => list.id === repository.id);

    const newStorageValue = hasFavorit
      ? localStorageFavorit.filter((list) => list.id !== repository.id)
      : [...localStorageFavorit, repository];

    localStorage.setItem(StorageKeyConstants.Repository, JSON.stringify(newStorageValue));
    window.dispatchEvent(new Event(StorageKeyConstants.Event));
  }, []);

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
