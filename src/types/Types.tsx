export interface IerrorsSignIn {
  emailError: boolean;
  passwordError: boolean;
}

export interface IerrorsSignUp {
  emailError: boolean;
  passwordError: boolean;
  repeatPasswordError: boolean;
}

export interface Idata {
  title: string;
  thumbnail: {
    trending: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export interface IUser {
  userEmail: string;
  userPassword: string;
}
