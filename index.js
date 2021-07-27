/* index.js */

const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const schema = require("./schema");
const resolvers = require("./resolvers");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
  })
);


const port = process.env.PORT || 4000;

app.listen(port);

console.log(`🚀 Server ready at http://localhost:${port}/graphql`);