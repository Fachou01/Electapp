const passport = require("passport");
const passportJwt = require("passport-jwt");
const prisma = require("../config/prismaInstance");
const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;
const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.SECRET_KEY;

passport.use(new JwtStrategy(options, async (jwt_payload, done) => {
  try {
    const admin = await prisma.admin.findFirst({
      where: {
        id: jwt_payload.id,
      },
    });
    if (!admin) return done(null, false);
    return done(null, admin);
  } catch (error) {
    return done(err, admin);
  }
})
);
