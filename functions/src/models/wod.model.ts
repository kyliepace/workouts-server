import { createSchema, Type, typedModel, ExtractDoc, ExtractProps } from 'ts-mongoose';

const typeEnum = ['time', 'emom', 'rounds', 'amrap', 'reps', 'sets', 'rft', 'cals', 'distance'] as const;
const unitsEnum = ['ft', 'kg', 'lbs', 'm', 'km', 'mi'] as const;
const sectionEnum = ['warmup', 'skill', 'barbell', 'accessory', 'wod'] as const;


const MovementSchema = createSchema(
  {
    type: Type.string({ required: true, enum: typeEnum }),
    movement: Type.string(),
    time: Type.string(),
    reps: Type.number(),
    sets: Type.number(),
    rounds: Type.number(),
    cals: Type.number(),
    distance: Type.number(),
    weight: Type.number(),
    units: Type.string({ enum: unitsEnum })
  }
);

const WodSchema = createSchema(
  {
    created: Type.date({default: Date.now() as any}),
    // ...MovementSchema,
    type: Type.string({ required: true, enum: typeEnum }),
    movement: Type.string(),
    time: Type.string(),
    reps: Type.number(),
    sets: Type.number(),
    rounds: Type.number(),
    cals: Type.number(),
    distance: Type.number(),
    weight: Type.number(),
    units: Type.string({ enum: unitsEnum }),
    source: Type.string(),
    section: Type.string({ required: true, enum: sectionEnum }),
    name: Type.string(),
    note: Type.string(),
    tags: Type.array().of(Type.string()),
    movements: Type.array().of(MovementSchema)
  }
)

export default typedModel('Wod', WodSchema);
export type WodDoc = ExtractDoc<typeof WodSchema>;
export type WodProps = ExtractProps<typeof WodSchema>;