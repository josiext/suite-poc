export const logout = async () => {
  await fetch("http://localhost:3000/sessions", {
    method: "DELETE",
  });
};
