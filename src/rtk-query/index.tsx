import { useGetPost } from '../orval/swr/generated-api';

const RtkConsumer = () => {
  const { data, isLoading, error } = useGetPost(2);
  console.log(data, isLoading, error);
  return <div>RtkConsumer</div>;
};

export default RtkConsumer;
