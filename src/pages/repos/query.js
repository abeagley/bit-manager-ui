import gql from 'graphql-tag'

export default gql`
  query BitRepositories(
    $after: String
    $before: String
    $first: Int
    $skip: Int
    $where: BitRepositoryWhereInput
  ) {
    bitRepositories(
      after: $after
      before: $before
      first: $first
      skip: $skip
      where: $where
    ) {
      id
      name
      url
    }
  }
`
