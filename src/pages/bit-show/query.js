import gql from 'graphql-tag'

export default gql`
  query LoadBit($pathName: String!, $box: String!, $name: String!) {
    bit(where: {
      box: $box,
      name: $name,
      scopeName: $pathName
    }) {
      box
      compiler
      dependencies
      deprecated
      devDependencies
      devPackageDependencies
      dists
      docs
      envsPackageDependencies
      files
      lang
      license
      log
      mainFile
      name
      packageDependencies
      peerPackageDependencies
      specsResults
      tester
      version
    }
  }
`
