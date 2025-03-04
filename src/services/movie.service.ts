import { InferAttributes, InferCreationAttributes } from "sequelize";
import movieRepository from "../repositories/movie.repository";
import Movie from "../../models/movie";

const getAllMovies = () => {
  return movieRepository.findAll();
};

const findById = (id: number) => {
  return movieRepository.findById(id);
};

const create = (data: InferCreationAttributes<Movie>) => {
  return movieRepository.create(data);
};

const update = (data: InferAttributes<Movie>) => {
  return movieRepository.update(data);
};

const destroy = (id: number) => {
  return movieRepository.destroy(id);
};

export default { getAllMovies, findById, create, update, destroy };
