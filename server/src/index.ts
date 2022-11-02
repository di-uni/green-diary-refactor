import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import * as express from "express";
import { Request, Response } from "express";

AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.name = "박지윤";
    user.email = "wldbs6124@gmail.com";
    await AppDataSource.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await AppDataSource.manager.find(User);
    console.log("Loaded users: ", users);

    console.log(
      "Here you can setup and run express / fastify / any other framework."
    );
  })
  .catch((error) => console.log(error));

// create and setup express app
const app = express();
app.use(express.json());

// register routes
app.get("/users", async function (req: Request, res: Response) {
  const users = await AppDataSource.getRepository(User).find();
  res.json(users);
});
