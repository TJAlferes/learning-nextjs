import { ApolloServer } from 'apollo-server-micro';
import { schema } from './src/schema';

const server = new ApolloServer({schema});
const handler = server.createHandler({path: "/api/graphql"});

export const config = {api: {bodyParser: false}};

export default handler;

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/*export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}*/