export const adapterUserData = (data) => {
  const token = data.accessToken;
  const dataUser = {
    userName: data.userName,
    email: data.email,
    role: data.role,
  };

  return { dataUser, token };
};
