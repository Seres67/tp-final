import { Request, Response } from "express";
import movieService from "../services/movie.service";

const getAllMovies = async (req: Request, res: Response) => {
  const movies = await movieService.getAllMovies();
  res.status(200).json(movies);
};

const findById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const movie = await movieService.findById(id);
  res.status(200).json(movie);
};

const create = async (req: Request, res: Response) => {
  const data = req.body;
  const file = req.file;
  data.imageUrl = file?.path;
  const movie = await movieService.create(data);
  res.status(201).json(movie);
};

const update = async (req: Request, res: Response) => {
  const data = req.body;
  const movie = await movieService.update(data);
  res.status(200).json(movie);
};

const destroy = async (req: Request, res: Response) => {
  const id = parseInt(req.body.id);
  await movieService.destroy(id);
  res.status(200).json({ id: id });
};

export default { getAllMovies, findById, create, update, destroy };
