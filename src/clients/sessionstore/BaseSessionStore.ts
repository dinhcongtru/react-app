export class BaseSessionStore<T> {
  protected key: string;
  protected storage: T | null;

  constructor({ key, storage }: { key: string; storage: T }) {
    this.key = key;
    this.storage = storage;
    this.loadInitialData();
  }

  public loadInitialData(): void {
    const storedValue = sessionStorage.getItem(this.key);
    if (!storedValue) return;
    this.storage = JSON.parse(storedValue) as T;
  }

  public setItem(value: T): void {
    sessionStorage.setItem(this.key, JSON.stringify(value));
  }

  public getItem(): T | null {
    const storedValue = sessionStorage.getItem(this.key);
    if (!storedValue) return null;
    return JSON.parse(storedValue) as T;
  }

  public removeItem(): void {
    sessionStorage.removeItem(this.key);
  }

  public clear(): void {
    sessionStorage.clear();
  }
}
