export interface GoogleLogin {
  user: User;
}

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoUrl: string;
}
