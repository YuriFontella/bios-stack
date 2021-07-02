export const LOGIN = `
  mutation auth($email: String!, $password: String!) {
    auth: login(email: $email, password: $password) {
      token
      user {
        name
        role
      }
    }
  }
`
export const AUTH = `
  mutation ($user: UserInput, $account: AccountInput) {
    token: auth(user: $user, account: $account)
  }
`
export const USER = `
  query {
    user {
      image
      password
      email
      profile {
        name
        last_name
        career
        localization
        contact
        biography
      }
      networks {
        facebook
        youtube
        instagram
        twitter
      }
      cover {
        file
      }
    }
  }
`
export const SHOW = `
  query ($slug: String) {
    user: show(slug: $slug) {
      image
      name
      email
      profile {
        name
        last_name
        career
        localization
        contact
        biography
      }
      networks {
        facebook
        youtube
        instagram
        twitter
      }
      cover {
        file
      }
    }
  }
`
export const ADD_PROFILE = `
  mutation ($profile: ProfileInput) {
    addProfile(profile: $profile)
  }
`
export const ADD_NETWORKS = `
  mutation ($networks: NetworksInput) {
    addNetworks(networks: $networks)
  }
`
export const UPLOAD = `
  mutation ($file: String) {
    cover(file: $file)
  }
`
export const CHANGE_PASSWORD = `
  mutation ($password: String) {
    change_password(password: $password)
  }
`