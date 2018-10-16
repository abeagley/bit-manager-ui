import gql from 'graphql-tag'

export default gql`
  query SanityCheck {
    sanityCheck {
      bitVersion
      currentUser
      gitVersion
    }
  }  
`
