import gql from 'graphql-tag'

export default gql`
  query {
    settings {
      companyName
      id
      installed
    }
  }
`
