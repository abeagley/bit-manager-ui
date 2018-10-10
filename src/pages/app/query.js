import gql from 'graphql-tag'

export default gql`
  query {
    settings {
      baseBitPath
      companyName
      id
      installed
    }
  }
`
