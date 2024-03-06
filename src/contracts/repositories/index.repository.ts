export interface Repository<T> {
  findAll: () => Promise<T[]>
  findOne: (id: string) => Promise<T | null>
  create: (data: Partial<T>) => Promise<T>
}
