const sendToken = (user, statusCode, res) => {
  const token = user.getAccessToken();

  //Option for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    sameSite: "None",
  };
  res.status(statusCode).cookie("cookie", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
