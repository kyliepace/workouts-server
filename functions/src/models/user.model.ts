import { createSchema, Type, typedModel, ExtractDoc, ExtractProps } from 'ts-mongoose';
import { WodSchema } from './wod.model';

const ScheduledWod = createSchema({
  scheduled_day: Type.date(),
  wod: WodSchema
});

// Define our model
const UserSchema = createSchema({
  uid: Type.string({required: true}),
  name: Type.string(),
  email: Type.string(),
  admin: Type.boolean({required: true, default: false}),
  bookmarked_wods: Type.array().of(
    Type.ref(Type.objectId()).to('Wod', WodSchema)
  ),
  scheduled_wods: Type.array().of(ScheduledWod),
});

export default typedModel('User', UserSchema);
export type UserDoc = ExtractDoc<typeof UserSchema>;
export type UserProps = ExtractProps<typeof UserSchema>;
