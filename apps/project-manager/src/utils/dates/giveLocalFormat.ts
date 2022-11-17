export const giveLocalFormat = (date: Date) => {
  const options = { year: "numeric", month: "long", day: "numeric" } as any;
  return date.toLocaleDateString("es-ES", options);
};
