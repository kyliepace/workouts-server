import User from '../models/user.model';
import { ICreateUser } from '../interfaces/user.interfaces';
import { WodProps } from '../models/wod.model';

export async function addUser(user: ICreateUser): Promise<any> {
  const newUser = new User(user);
  await newUser.save();
  console.log('added a new user: ', newUser);
  return newUser;
}

export async function getUser(uid: string): Promise<any> {
  const user = await User.findOne({ uid }).lean();
  return user;
}

export async function bookmarkWod({wod, uid}: {wod: WodProps, uid: string}): Promise<any>{
  console.log('wod: ', wod);
  console.log('uid: ', uid);
  const updatedUser = await User.findOneAndUpdate({ uid }, {
    $addToSet: {
      bookmarked_wods: wod,
      bookmarked_wod_ids: wod._id
    }
  }, {
    projection: {
      _id: false
    },
    new: true
  });
  return updatedUser;
}

export async function unbookmarkWod(body: { wod_id: string, uid: string}): Promise<any>{
  return User.findOneAndUpdate({ uid: body.uid }, {
    $pull: {
      bookmarked_wods: {
        _id: body.wod_id
      }, 
      bookmarked_wod_ids: body.wod_id
    }
  }, {
    projection: { _id: false},
    new: true
  })
}