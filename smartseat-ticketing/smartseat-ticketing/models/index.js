// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { EVENTS } = initSchema(schema);

export {
  EVENTS
};