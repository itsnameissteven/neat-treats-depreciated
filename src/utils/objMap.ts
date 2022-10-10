function objMap<Type>(
  obj: { [key: string]: Type },
  func: (v: Type) => Type
): { [key: string]: Type } {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, func(v)]));
}

export default objMap;
