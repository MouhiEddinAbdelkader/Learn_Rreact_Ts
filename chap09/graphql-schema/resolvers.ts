import { IResolvers } from "apollo-server-express";

import { v4 } from "uuid";

import { GqlContext } from "./GqlContext";

interface User {

  id: string;

  username: string;

  description?: string;

}

interface Todo {

  id: string;

  title: string;

  description?: string;

}
export default resolvers;