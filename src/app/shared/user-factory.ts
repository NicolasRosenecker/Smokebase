import { User } from "./user";

export class UserFactory {
  static empty(): User{
    return new User("0", "", "", "");
  }

  static fromObject(rawUser: any):User{
    return new User(
      rawUser.id,
      rawUser.user_email,
      rawUser.user_nicename,
      rawUser.user_displya_name,
    );
  }
}
