import { type Request, type Response } from "express";
import { type Dependencies } from "../../infrastructure/config/dependencies";
import FindAllService from "../../application/use-cases/huellas/find-all.use-case";
import FindOneService from "../../application/use-cases/huellas/find-one.use-case";

export default (
  dependencies: Dependencies,
): {
  findAll: (req: Request, res: Response) => Promise<void>;
  findOne: (req: Request, res: Response) => Promise<void>;
} => {
  const findAllService = FindAllService(dependencies);
  const findOneService = FindOneService(dependencies);

  const findAll = async (req: Request, res: Response): Promise<void> => {
    const huellas = await findAllService();
    res.status(200).json(huellas);
  };

  const findOne = async (req: Request, res: Response): Promise<void> => {
    const huella: unknown = await findOneService(req.params.id);

    if (huella === null) {
      res.status(404).json({ message: "Huella not found" });
      return;
    }

    const blob = huella.huella;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const buffer = Buffer.from(blob);

    // Ajustar los headers según el tipo de archivo que estás enviando, por ejemplo, para una imagen PNG:
    res.setHeader("Content-Type", "image/jpg");
    res.setHeader("Content-Disposition", 'attachment; filename="deditos.jpg"');
    res.send(buffer);
  };

  return {
    findAll,
    findOne,
  };
};
