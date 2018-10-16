import gql from 'graphql-tag'

export default gql`
  query BitScopes(
    $after: String
    $before: String
    $first: Int
    $skip: Int
    $where: BitScopeWhereInput
  ) {
    bitScopes(
      after: $after
      before: $before
      first: $first
      skip: $skip
      where: $where
    ) {
      bitCount
      description
      id
      name
      pathName
      url
    }
  }
`
