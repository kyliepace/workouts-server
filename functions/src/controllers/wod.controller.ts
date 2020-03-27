import Wod, { WodProps, WodDoc } from '../models/wod.model';


export async function getWods(): Promise<WodDoc[]> {
  return Wod.find().select({__v: false}).lean();
};

export async function addWod(wod: string): Promise<any> {
  const newone = JSON.parse(wod);
  const newWod = new Wod(newone);
  await newWod.save();
  console.log('saved new wod: ', newWod);

  return newWod;
}

export async function updateWod(wod: WodProps) : Promise<WodDoc | null> {
  return Wod.findByIdAndUpdate(wod._id, wod, {
    new: true
  }).lean();
}

export async function deleteWod(id: string): Promise<void> {
  await Wod.findByIdAndDelete(id);
}