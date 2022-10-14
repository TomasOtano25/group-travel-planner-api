import passport from "passport";
import { Strategy } from "passport-local";
import { number } from "yup";
import { findUser } from "../services/user.service";
import { validatePassword } from "../utils/helpers";

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: number, done) => {
  try {
    const user = await findUser({ id });
    return user ? done(null, user) : done(null, null);
  } catch (error) {
    return done(error, null);
  }
});

passport.use(
  new Strategy(async (username, password, done) => {
    console.log("Inside Passport Strategy");
    console.log(username, password);

    try {
      const user = await findUser({ username }, { selectAll: true });

      if (!user) return done(null, null);

      const validPassword = await validatePassword(password, user.password);
      if (!validPassword) throw new Error("Invalid Credentials");

      return done(null, user);
    } catch (error) {
      return done(error, null);
    }
  })
);
