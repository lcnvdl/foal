import { GraphQLController } from 'foalts2-graphql';
import { buildSchema } from 'foalts2-graphql/node_modules/graphql';

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => {
    return 'Hello world!';
  },
};

export class GraphqlApiController extends GraphQLController {
  schema = schema;
  resolvers = root;
}
