import { BaseLocalStore } from './Baselocalstore';
import { LOCAL_STORAGE_KEY } from '@/constants/webStorage';

export interface LocalstoreExampleData {
  name: string;
  age: number;
}

class LocalstoreExample extends BaseLocalStore<LocalstoreExampleData> {}

const localstoreExample = new LocalstoreExample({
  key: LOCAL_STORAGE_KEY.STORE_LOCAL_STORAGE_SAMPLE,
  storage: null as unknown as LocalstoreExampleData,
});

export { localstoreExample };
