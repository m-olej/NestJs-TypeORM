export class CreateUserDto {
  username: string;
  email: string;
  password: string;
}

export class UpdateUserDto {
  username: string;
  email: string;
  password: string;
}

export class CreateUserDtoUserProfileDto {
  firstName: string;
  lastName: string;
  age: number;
  dob: Date;
}

export class CreateUserPost {
  title: string;
  content: string;
}
