import User from '../models/user.model';
import { ICreateUser } from '../interfaces/user.interfaces';

export async function addUser(user: ICreateUser): Promise<any> {
  const newUser = new User(user);
  await newUser.save();
  console.log('added a new user: ', newUser);
  return newUser;
}
