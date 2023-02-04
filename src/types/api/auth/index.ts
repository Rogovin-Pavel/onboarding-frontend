export interface SigninResponse {
  user: {
    email: string
    name: string
  }
  accessToken: string
}
