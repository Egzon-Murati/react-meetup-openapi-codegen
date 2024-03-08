import { useGetPostsQuery } from '../../rtk-query/generated-api';

const SwrConsumer = () => {
  const { data, isLoading, error } = useGetPostsQuery();
  console.log(data, isLoading, error);
  return <></>;
};

export default SwrConsumer;
