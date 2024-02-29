// Sometimes a User might send additional data that is not needed by using a type different than DTO
// you can filter the data that is not needed.
export type CreateUserParams = {
  username: string;
  email: string;
  password: string;
};
