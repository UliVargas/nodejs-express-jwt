import { type Request, type Response } from "express";

export interface Repository {
  findAll: (req: Request, res: Response) => Promise<void>;
  findOne: (req: Request, res: Response) => Promise<void>;
  create: (req: Request, res: Response) => Promise<void>;
}
