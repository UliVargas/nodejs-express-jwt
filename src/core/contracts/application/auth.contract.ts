export interface KeysRepository {
  sign(data: string): Promise<string>;
  decrypt(data: string): Promise<string>;
  getPublicKey(): Promise<unknown>;
}
