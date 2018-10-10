import gql from 'graphql-tag'

export default gql`
  mutation Login ($email: String!, $password: String!) {
    login(data: {
      email: $email,
      password: $password
    }) {
      profile {
        email
        name
        role
      },
      token
    }
  }
`
