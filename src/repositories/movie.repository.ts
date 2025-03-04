import { InferAttributes, InferCreationAttributes } from "sequelize";
import Movie from "../../models/movie";

const findAll = async () => {
  return await Movie.findAll();
};

const findById = async (id: number) => {
  return await Movie.findByPk(id);
};

const create = async (data: InferCreationAttributes<Movie>) => {
  return await Movie.create(data);
};

const update = async (data: InferAttributes<Movie>) => {
  const id = data.id;
  return await Movie.update(data, { where: { id } });
};

const destroy = async (id: number) => {
  return await Movie.destroy({ where: { id } });
};

export default {
  findAll,
  findById,
  create,
  update,
  destroy,
};
