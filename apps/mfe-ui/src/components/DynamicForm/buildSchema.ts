import { z } from "zod";
import { FieldConfig } from "./types";

export const buildSchema = (fields: FieldConfig[]) => {
  const shape: Record<string, z.ZodTypeAny> = {};

  fields.forEach((f) => {
    if (f.name) {
      shape[f.name] = f.validation ?? z.any().optional();
    }
  });

  return z.object(shape);
};