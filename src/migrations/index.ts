import * as migration_20260205_211221_initial from './20260205_211221_initial';
import * as migration_20260212_195557_add_primordial_collections from './20260212_195557_add_primordial_collections';

export const migrations = [
  {
    up: migration_20260205_211221_initial.up,
    down: migration_20260205_211221_initial.down,
    name: '20260205_211221_initial',
  },
  {
    up: migration_20260212_195557_add_primordial_collections.up,
    down: migration_20260212_195557_add_primordial_collections.down,
    name: '20260212_195557_add_primordial_collections'
  },
];
