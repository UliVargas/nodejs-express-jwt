import { FindAllUseCase } from "../../../../../src/application/use-cases/users/index.use-cases";
import { user } from "../../../../fixtures/user.mock";
import { dependencies } from "../../../infrastructure/dependencies";
describe("Unit: FindAllUseCase", () => {
  const findAllUseCase = FindAllUseCase(dependencies);
  it("should return a list of users", async () => {
    // Arrange
    dependencies.usersRepository.findAll = jest.fn().mockResolvedValue([user]);

    // Act
    const result = await findAllUseCase();

    // Assert
    expect(result).toEqual([user]);
    expect(dependencies.usersRepository.findAll).toHaveBeenCalled();
    expect(dependencies.usersRepository.findAll).toHaveBeenCalledTimes(1);
  });

  it("should return an empty list", async () => {
    // Arrange
    dependencies.usersRepository.findAll = jest.fn().mockResolvedValue([]);

    // Act
    const result = await findAllUseCase();

    // Assert
    expect(result).toEqual([]);
    expect(dependencies.usersRepository.findAll).toHaveBeenCalled();
    expect(dependencies.usersRepository.findAll).toHaveBeenCalledTimes(1);
  });
});
