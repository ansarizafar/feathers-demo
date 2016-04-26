'use strict';

import { apolloServer } from 'graphql-tools';
import Schema from './schema';
import Mocks from './mocks';

module.exports = function(req) {
  return apolloServer(async (req) => {
console.log(req);
    return {
    graphiql: true,
    pretty: true,
    schema: Schema,
    //resolvers,
     mocks: Mocks,

    // Attach the user to the context object
    context: {
      // The current user will now be available on context.user in all resolvers
    //  user,
    },
  };
    
    
 /*   
    {
  graphiql: true,
  pretty: true,
  schema: Schema,
 // resolvers: Resolvers,
  mocks: Mocks, */
});
  
};