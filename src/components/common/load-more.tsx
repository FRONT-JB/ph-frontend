import Button from './button';
import Loader from './loader';

interface LoadMoreProps {
  isFetching: boolean;
  hasNextPage?: boolean;
  fetchNextPage: () => void;
}

const LoadMore = ({ isFetching, hasNextPage, fetchNextPage }: LoadMoreProps) => {
  if (isFetching) {
    return (
      <div style={{ height: '120px' }}>
        <Loader />
      </div>
    );
  }

  if (!isFetching && hasNextPage) {
    return (
      <div>
        <Button buttonText="더보기" variantSize="fill" onClick={() => fetchNextPage()} />
      </div>
    );
  }

  return null;
};

export default LoadMore;
