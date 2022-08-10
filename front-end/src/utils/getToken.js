export const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) return true;
  else return false;
};

export const getTokenValue = () => {
  const token = localStorage.getItem("token");
  return token;
};
