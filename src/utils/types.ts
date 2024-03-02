// Sometimes a User might send additional data that is not needed by using a type different than DTO
// you can filter the data that is not needed.
export type CreateUserParams = {
  username: string;
  email: string;
  password: string;
};

export type UpdateUserParams = {
  username: string;
  password: string;
};

export type CreateUserProfileParams = {
  firstName: string;
  lastName: string;
  age: number;
  dob: Date;
};

export type CreateUserPostParams = {
  title: string;
  content: string;
};
