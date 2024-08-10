import express from "express";

import { ApolloServer, makeExecutableSchema } from "apollo-server-express";

import typeDefs from "./typeDefs";

import resolvers from "./resolvers";

// Now we create our Express server app object:
const app = express();

// Build the schema from typeDefs and resolvers
const schema = makeExecutableSchema({ typeDefs, resolvers });


const apolloServer = new ApolloServer({

      schema,
    
      context: ({ req, res }: any) => ({ req, res }),
    
    });
    
    apolloServer.applyMiddleware({ app, cors: false });

app.listen({ port: 8000 }, () => {

          console.log("GraphQL server ready.");
        
        });