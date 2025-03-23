export function replaceUndefinedWithNull<T>(obj: T): T {
  if (Array.isArray(obj)) {
    return obj.map((item) => replaceUndefinedWithNull(item)) as T;
  }

  if (obj !== null && typeof obj === "object") {
    const newObj: any = {};
    for (const key in obj) {
      const value = (obj as any)[key];
      newObj[key] =
        value === undefined ? null : replaceUndefinedWithNull(value);
    }
    return newObj;
  }

  return obj;
}
