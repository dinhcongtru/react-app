import { BaseSessionStore } from './BaseSessionStore';
import { SESSION_STORAGE_KEY_CONTACT_FORM } from '@/constants/webStorage';

export interface SessionStoreFormContactData {
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  message: string;
}

class SessionStoreFormContact extends BaseSessionStore<SessionStoreFormContactData> {}

const sessionStoreFormContact = new SessionStoreFormContact({
  key: SESSION_STORAGE_KEY_CONTACT_FORM.CONTACT_FORM,
  storage: null as unknown as SessionStoreFormContactData,
});

export { sessionStoreFormContact };
