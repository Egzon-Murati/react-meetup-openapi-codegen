import { useGetApiV1FlowersQuery } from './generated-api';

const RtkConsumer = () => {
  const { data, isLoading, error } = useGetApiV1FlowersQuery({ page: 1 });
  console.log(data, isLoading, error);
  return <div>RtkConsumer</div>;
};

export default RtkConsumer;
