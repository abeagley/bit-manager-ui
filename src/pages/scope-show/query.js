import gql from 'graphql-tag'

export default gql`
  query ScopeShow($pathName: String!) {
    bits(where: {
      scope: {
        pathName: $pathName
      }
    }) {
      box
      name
      version
    }
    
    bitScope(where: {
      pathName: $pathName
    }) {
      description
      pathName
      id
      name
      url
    }
  }
`
