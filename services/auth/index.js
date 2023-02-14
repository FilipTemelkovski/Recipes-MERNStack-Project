const auth = require('./handlers/index');
const connectDB = require("../../pkg/database/index");
const express = require('express');
const cors = require('cors');
const { expressjwt: checkJWTFunction } = require('express-jwt');
const config = require('../../pkg/config');
const morgan = require('morgan');

const { authentication: { port } } = config.getConfigPropertyValue("services");
const { jwt_secret_key: JWT_SECRET } = config.getConfigPropertyValue("security");

connectDB();


const app = express();


app.use(express.json());

app.use(morgan("tiny"));

app.use(cors());

app.use(checkJWTFunction({ secret: JWT_SECRET, algorithms: ["HS256"] })
  .unless({
    path: [
      '/api/v1/auth/login',
      '/api/v1/auth/create-user',
      '/api/v1/auth/logout',
      '/api/v1/auth/reset-password',
      '/api/v1/auth/forgot-password',
      '/api/v1/auth/refresh-token',
      '/api/v1/auth/updateUser',
    ]
  }));



app.post("/api/v1/auth/create-user", auth.register);
app.post("/api/v1/auth/login", auth.login);
app.post("/api/v1/auth/logout", auth.logout);
app.put("/api/v1/auth/updateUser", auth.updateUser);


app.listen(port, (err) => {
  if (err) {
    throw new Error(
      `Cannot start server running on http://localhost:${port}`,
      err
    );
  }
  console.log(`Authentication server running on http://localhost:${port}`);
});