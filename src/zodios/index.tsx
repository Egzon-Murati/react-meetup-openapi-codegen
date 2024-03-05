import { zodiosClient } from './zodios-client';

const ZodiosConsumer = () => {
  const getFlowerSightings = async () => {
    const flowers = await zodiosClient.getApiv1flowersIdsightings({
      params: {
        id: 2,
      },
    });
    console.log('flowers', flowers);
  };
  return <div onClick={getFlowerSightings}></div>;
};

export default ZodiosConsumer;
