export default (prop, value, cb) => {
  if (!value.match(/^(ssh-rsa AAAAB3NzaC1yc2|ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNT|ssh-ed25519 AAAAC3NzaC1lZDI1NTE5|ssh-dss AAAAB3NzaC1kc3)[0-9A-Za-z+/]+[=]{0,3}( [^@]+@[^@]+)?$/)) {
    return cb(new Error('Invalid SSH public key'))
  }

  cb()
}
