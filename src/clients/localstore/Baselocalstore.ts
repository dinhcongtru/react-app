export class BaseLocalStore<T> {
  protected key: string;
  protected storage: T | null;

  constructor({ key, storage }: { key: string; storage: T }) {
    this.key = key;
    this.storage = storage;
    this.loadInitialData();
  }

  public loadInitialData(): void {
    const storedValue = localStorage.getItem(this.key);
    if (!storedValue) return;
    this.storage = JSON.parse(storedValue) as T;
  }

  public setItem(value: T): void {
    localStorage.setItem(this.key, JSON.stringify(value));
  }

  public getItem(key: string): T | null {
    const storedValue = localStorage.getItem(key);
    if (!storedValue) return null;
    return JSON.parse(storedValue) as T;
  }

  public removeItem(): void {
    localStorage.removeItem(this.key);
  }

  public clear(): void {
    localStorage.clear();
  }
}
