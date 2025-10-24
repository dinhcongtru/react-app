import { BaseSessionStore } from './BaseSessionStore';
import { SESSION_STORAGE_KEY } from '@/constants/webStorage';

export interface SessionStoreExampleData {
  name: string;
  age: number;
}

class SessionStoreExample extends BaseSessionStore<SessionStoreExampleData> {}

const sessionStoreExample = new SessionStoreExample({
  key: SESSION_STORAGE_KEY.STORE_SESSION_STORAGE_SAMPLE,
  storage: null as unknown as SessionStoreExampleData,
});

export { sessionStoreExample };
