import { ZodError } from "zod";

export function validateForm(schema, formData) {
  try {
    schema.parse(formData);
    return { isValid: true, errors: {} };
  } catch (err) {
    const errors = {};
    if (err instanceof ZodError) {
      err.errors.forEach((e) => {
        errors[e.path[0]] = e.message;
      });
    }
    return { isValid: false, errors };
  }
}
