import gql from 'graphql-tag'

export default gql`
  mutation ScopeCreate(
    $description: String!
    $isLocal: Boolean! 
    $name: String!
    $url: String
  ) {
    createBitScope(data: {
      description: $description
      isLocal: $isLocal
      name: $name
      url: $url
    }) {
      bitCount
      description
      id
      isLocal
      name
      pathName
      url
    }
  } 
`
