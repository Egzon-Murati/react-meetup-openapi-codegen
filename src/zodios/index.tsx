import { zodiosClient } from './zodios-client';

const ZodiosConsumer = () => {
  const testEndpoint = async () => {
    const flowers = await zodiosClient.getApiv1flowersIdsightings({
      params: {
        id: 2,
      },
    });
    console.log('flow', flowers);
  };
  return <div onClick={testEndpoint}>ZodiosConsumer</div>;
};

export default ZodiosConsumer;
