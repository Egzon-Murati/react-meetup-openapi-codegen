import { useGetApiV1Flowers } from './generated-api';

const SwrConsumer = () => {
  const { data, isLoading, error } = useGetApiV1Flowers();
  console.log(data, isLoading, error);
  return (
    <div className='flowers-grid'>
      {data &&
        data.data.flowers?.map((flower) => {
          return (
            <div key={flower.id} className='flower-card'>
              <img src={flower.profile_picture} />
              <h4>{flower.name}</h4>
              <p>{flower.sightings}</p>
            </div>
          );
        })}
    </div>
  );
};

export default SwrConsumer;
