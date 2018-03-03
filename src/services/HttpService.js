import { DataStore } from 'js-data';
import { HttpAdapter } from 'js-data-http';

const store = new DataStore();
const httpAdapter = new HttpAdapter();

httpAdapter.basePath = 'http://127.0.0.1:7667';

store.registerAdapter('http', httpAdapter, { 'default': true });
store.defineMapper('subscriber', {
  name: 'subscriber',
  endpoint: 'subscribers'
});

export {store, httpAdapter}