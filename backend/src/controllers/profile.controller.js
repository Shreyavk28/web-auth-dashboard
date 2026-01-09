const User = require("../models/user.model");

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user).select("-password");
  res.json(user);
};
