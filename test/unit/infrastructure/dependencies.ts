const usersRepository = {
  findAll: jest.fn(),
  findByEmail: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
};

const huellasRepository = {
  findAll: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
};

export const dependencies = {
  usersRepository,
  huellasRepository,
};
