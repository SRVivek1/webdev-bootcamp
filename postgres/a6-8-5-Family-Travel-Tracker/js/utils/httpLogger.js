// log http requests
export function httpLogger(req, res, next) {
  console.log("\nHttp Logger:");
  console.log(`${req.method} ${req.url}.`);
  console.log(`Query: ${JSON.stringify(req.query)}`);
  console.log(`Params: ${JSON.stringify(req.params)}`);
  console.log(`Body: ${JSON.stringify(req.body)} \n`);

  // next componenent
  next();
}
