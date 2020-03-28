import User from '../models/user.model';
import { ICreateUser } from '../interfaces/user.interfaces';
import { WodProps } from '../models/wod.model';

export async function addUser(user: ICreateUser): Promise<any> {
  const newUser = new User(user);
  await newUser.save();
  console.log('added a new user: ', newUser);
  return newUser;
}

export async function bookmarkWod({wod, uid}: {wod: WodProps, uid: string}): Promise<any>{
  const updatedUser = await User.findOneAndUpdate({ uid }, {
    $addToSet: {
      bookmarked_wods: wod,
      bookmarked_wod_ids: wod._id
    }
  });
  return updatedUser;
}
