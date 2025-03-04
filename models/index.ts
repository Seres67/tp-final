import { Sequelize } from "sequelize";

import Movie from "./movie";
import User from "./user";

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

const db = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable] as string, config)
  : new Sequelize(config.database, config.username, config.password, config);

User.initialize(db);
Movie.initialize(db);

export default db;
