import "dotenv/config";
import "./strategies";
import { AppDataSource } from "./database";
import express from "express";
import routes from "./routes";
import passport from "passport";
import session from "express-session";

async function main() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  app.use("/api", routes);
  app.use(
    session({
      name: "GROUP_TRAVEL_APP_SESSION_ID",
      secret: "secret",
      saveUninitialized: false,
      resave: false,
      cookie: {
        maxAge: 3600000 * 24,
      },
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  try {
    await AppDataSource.initialize();

    app.listen(PORT, () => {
      console.log(`Listening to requests on PORT: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
