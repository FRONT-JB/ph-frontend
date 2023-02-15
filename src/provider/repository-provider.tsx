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
import StorageKey from '@/constants/storage';

import { useDebounce } from '../hooks';
import { RepositoryType } from '../types';

type RepositoryValueContextType = {
  debounceSearchValue: string;
  favorit: RepositoryType[];
};

type RepositoryDispatchContextType = {
  handleChangeSearchValue: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeFavoritRepository: (repository: RepositoryType) => void;
};

const RepositoryValueContext = createContext<RepositoryValueContextType | undefined>(undefined);
const RepositoryDispatchContext = createContext<RepositoryDispatchContextType | undefined>(
  undefined
);

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
      JSON.parse(localStorage.getItem(StorageKey.Repository) as string) || [];

    const hasFavorit = localStorageFavorit.find((list) => list.id === repository.id);

    const newStorageValue = hasFavorit
      ? localStorageFavorit.filter((list) => list.id !== repository.id)
      : [...localStorageFavorit, repository];

    localStorage.setItem(StorageKey.Repository, JSON.stringify(newStorageValue));
    window.dispatchEvent(new Event(StorageKey.Event));
  }, []);

  const repositoryValues = useMemo(
    () => ({ debounceSearchValue, favorit }),
    [debounceSearchValue, favorit]
  );

  const repositoryDispatch = useMemo(
    () => ({ handleChangeSearchValue, handleChangeFavoritRepository }),
    []
  );

  useEffect(() => {
    const checkLocalStorageFavorit = () => {
      const localStorageFavorit: RepositoryType[] =
        JSON.parse(localStorage.getItem(StorageKey.Repository) as string) || [];
      setFavorit(localStorageFavorit);
    };

    checkLocalStorageFavorit();

    window.addEventListener(StorageKey.Event, checkLocalStorageFavorit);
    return () => {
      window.removeEventListener(StorageKey.Event, checkLocalStorageFavorit);
    };
  }, []);

  return (
    <RepositoryValueContext.Provider value={repositoryValues}>
      <RepositoryDispatchContext.Provider value={repositoryDispatch}>
        {children}
      </RepositoryDispatchContext.Provider>
    </RepositoryValueContext.Provider>
  );
};

const useRepositoryValueContext = () => {
  const context = useContext(RepositoryValueContext);
  if (!context) {
    throw Error('useRespositoryContext Error');
  }
  return context;
};

const useRepositoryDispatchContext = () => {
  const context = useContext(RepositoryDispatchContext);
  if (!context) {
    throw Error('useRespositoryContext Error');
  }
  return context;
};

export { RepositoryProvider, useRepositoryDispatchContext, useRepositoryValueContext };
