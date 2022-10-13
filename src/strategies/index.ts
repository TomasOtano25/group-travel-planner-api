import passport from "passport";
import { Strategy } from "passport-local";

passport.use(
  new Strategy((username, passport) => {
    console.log("Inside Passport Strategy");
    console.log(username, passport);
  })
);
