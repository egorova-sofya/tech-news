type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods?: Mods,
  additional?: string[]
): string {
  const modClasses = mods
    ? Object.entries(mods)
        .filter(([className, value]) => Boolean(value))
        .map(([className]) => className)
    : [];

  const filteredAdditional = additional ? additional.filter(Boolean) : [];

  return [cls, ...modClasses, ...filteredAdditional].join(" ").trim();
}
