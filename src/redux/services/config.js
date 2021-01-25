const env = {
  dev: 'dev',
  test: 'test',
  stg: 'stg',
  product: 'product',
  local: 'local',
};
const API_URL = {
  local: '',
  dev: 'https://reqres.in/api/',
  test: '',
  stg: '',
  product: 'https://app.getsalesguru.com/api/v1/',
};
const currentEnv = env.dev;

export const BASE_API_URL = API_URL[currentEnv];
export const USER_TOKEN = 'USER_TOKEN';
