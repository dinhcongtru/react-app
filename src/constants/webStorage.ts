/**
 * localStorageのキー
 */
const LOCAL_STORAGE_KEY = {
  STORE_LOCAL_STORAGE_SAMPLE: 'storeLocalStorageSample',
} as const satisfies Record<string, string>;

/**
 * sessionStorageのキー
 */
const SESSION_STORAGE_KEY = {
  STORE_SESSION_STORAGE_SAMPLE: 'storeSessionStorageSample',
} as const satisfies Record<string, string>;

const SESSION_STORAGE_KEY_CONTACT_FORM = {
  CONTACT_FORM: 'contactForm',
} as const satisfies Record<string, string>;

/**
 * cookieのキー
 */
const COOKIE_KEY = {
  COOKIE_SAMPLE: 'cookieSample',
} as const satisfies Record<string, string>;

export { LOCAL_STORAGE_KEY, SESSION_STORAGE_KEY, COOKIE_KEY, SESSION_STORAGE_KEY_CONTACT_FORM };
