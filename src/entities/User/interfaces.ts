export interface IUser {
  id: number;
  email: string;
  username: string;
  password: string;
  active: boolean;
  its: Date;
  uts?: Date;
  dts?: Date;
}

export interface IUserCreateInput {
  email: string;
  username: string;
  password: string;
}

export interface IUserEditInput {
  id: number;
  email?: string;
  username?: string;
  password?: string;
  active?: boolean;
}