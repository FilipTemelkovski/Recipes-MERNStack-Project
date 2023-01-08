const path = require('path');
const config = require("../../pkg/config");
const morgan = require("morgan");
const express = require("express");
const expressProxy = require("express-http-proxy");
const app = express();

const {
	proxy: { port },
	authentication: { port: authPort },
	recipes: { port: recipesPort }
} = config.getConfigPropertyValue("services");

app.use(morgan("tiny"));

// reroute the request to the auth service
app.use(
	"/api/v1/auth",
	expressProxy(`http://localhost:${authPort}`, {
		proxyReqPathResolver: (request) =>
			`http://localhost:${authPort}/api/v1/auth${request.url}`,
	})
);
// reroute the request to the books service
app.use(
	"/api/v1/recipes",
	expressProxy(`http://localhost:${recipesPort}`, {
		proxyReqPathResolver: (request) =>
			`http://localhost:${recipesPort}/api/v1/recipes${request.url}`,
	})
);




app.use("/", express.static(path.join(__dirname, "../../web/build")));

app.listen(port, (err) => {
	if (err) {
		throw new Error(
			`Cannot start proxy running on http://localhost:${port}`,
			err
		);
	}
	console.log(`Proxy on http://localhost:${port}`);
});
