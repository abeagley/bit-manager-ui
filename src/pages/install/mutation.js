import gql from 'graphql-tag'

export default gql`
  mutation Install(
    $bitPath: String!
    $credentials: String!
    $companyName: String!
    $email: String!
    $password: String!
  ) {
    install(data: {
      bitPath: $bitPath
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
