import gql from 'graphql-tag'

export default gql`
  mutation Install(
    $credentials: String!
    $companyName: String!
    $email: String!
    $password: String!
  ) {
    install(data: {
      companyName: $companyName
      credentials: $credentials
      email: $email
      password: $password
    }) {
      companyName
      id
      installed
    }
  }
`
