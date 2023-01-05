const User = require("../features/users/users.model");

const authMiddleware = async (req, res, next) => {
  const { id } = req.headers;
  if (!id) {
    return res.status(401).send("Unauthorized");
  }
  const isUser = await User.findById({ _id: id });
  if (isUser) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authMiddleware;
