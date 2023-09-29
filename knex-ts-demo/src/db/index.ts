import Knex from 'knex'; // for creating knex instance
import { config } from '../../knexfile';
export const knexInstance = Knex(config);
