import {
  Model,
  InferCreationAttributes,
  CreationOptional,
  InferAttributes,
  Sequelize,
  DataTypes,
} from "sequelize";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare email: string;
  declare hash: string;

  //declare static associations: {
  //  decks: Association<User, Deck>;
  //};

  static initialize(sequelize: Sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        hash: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "User",
      },
    );
  }
}

export default User;
