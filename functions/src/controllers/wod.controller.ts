import Wod, { WodProps, WodDoc } from '../models/wod.model';


export async function getWods(): Promise<WodDoc[]> {
  return Wod.find().select({__v: false}).lean();
};

export async function addWod(wod: any): Promise<any> {
  const newone = JSON.parse(wod);
  console.log(typeof newone);
  console.log(newone)
  const newWod = new Wod(newone);
  await newWod.save();
  console.log(newWod);

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