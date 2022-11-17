export const deleteUser = async (id: string) => {
  await fetch(`http://localhost:3000/users/${id}`, {
    method: "DELETE",
  });
};
