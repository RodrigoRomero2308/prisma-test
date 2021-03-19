import { ApolloServer } from "apollo-server";
import { UserResolver } from "./entities/User/resolver";
import { UserSchema } from "./entities/User/schema";
import { logObjectValues } from "./utils";

const server = new ApolloServer({
  typeDefs: UserSchema,
  resolvers: UserResolver
});

server.listen()
  .then(serverInfo => {
    console.info(`Server ready at ${serverInfo.url}`);
    // logObjectValues(serverInfo, 'serverInfo');
  })
  .catch(err => {
    console.error('Server error:');
    logObjectValues(err, 'serverError')
  })