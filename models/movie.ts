import {
  Model,
  InferCreationAttributes,
  CreationOptional,
  InferAttributes,
  Sequelize,
  DataTypes,
} from "sequelize";

class Movie extends Model<
  InferAttributes<Movie>,
  InferCreationAttributes<Movie>
> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare description: string;
  declare releaseDate: Date;
  declare imageUrl: string;

  //declare static associations: {
  //  decks: Association<User, Deck>;
  //};

  static initialize(sequelize: Sequelize) {
    Movie.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        releaseDate: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        imageUrl: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Movie",
      },
    );
  }
}

export default Movie;
