import ApolloClient from 'apollo-boost'

export default new ApolloClient({
  uri: process.env.VUE_APP_GRAPHQL_HTTP || 'http://localhost:4000'
})
