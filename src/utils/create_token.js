const createTokenUser = (user) => {
  return {
    npm: user.ID,
    fname: user.FName,
    lname: user.LName,
  };
};

module.exports = createTokenUser;
