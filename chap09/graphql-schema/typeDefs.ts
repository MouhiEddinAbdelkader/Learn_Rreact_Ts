import { gql } from "apollo-server-express";

const typeDefs = gql`

type User {

    id: ID!

    username: String!

    email: String

  }
type Todo {

    id: ID!

    title: String!

    description: String

  }

  type Query {

    getUser(id: ID): User

    getTodos: [Todo!]

  }
`

const resolvers: IResolvers = {

      Query: {
    
        getUser: async (
    
          obj: any,
    
          args: {
    
            id: string;
    
          },
    
          ctx: GqlContext,
    
          info: any
    
        ): Promise<User> => {
    
          return {
    
            id: v4(),
    
            username: "dave",
    
          };
    
        },
    getTodos: async (

              parent: any,
        
              args: null,
        
              ctx: GqlContext,
        
              info: any
        
            ): Promise<Array<Todo>> => {
        
              return [
        
                {
        
                  id: v4(),
        
                  title: "First todo",
        
                  description: "First todo description",
        
                },
        
                {
        
                  id: v4(),
        
                  title: "Second todo",
        
                  description: "Second todo description",
        
                },
        
                {
        
                  id: v4(),
        
                  title: "Third todo",
        
                },
        
              ];
        
            },
export default typeDefs;