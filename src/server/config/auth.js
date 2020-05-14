module.exports = {
  justPost: function (req, res, next) {
    if (req.method == "POST") {
      return res.status(400).send("Request not allowed");
    } else {
      return next();
    }
  },
};
