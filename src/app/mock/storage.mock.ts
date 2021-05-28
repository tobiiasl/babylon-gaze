export class StorageMock implements Storage {
  public length = 0;
  public clear(): void { return null; }
  public getItem(_key: string): string { return null; }
  public key(_index: number): string { return null; }
  public removeItem(_key: string): void { return null; }
  public setItem(_key: string, _value: string): void { return null; }
}
