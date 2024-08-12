const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.postUserRegister = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const checkPassword = await bcrypt.hash(password, 10);

  const checkUnique = await User.findOne({ email });

  if (!!checkUnique) {
    res.json({ success: false, message: "Uniqued! Register new one!" });
  } else {
    const userRegister = new User({
      email: email,
      password: checkPassword,
    });

    userRegister
      .save()
      .then((result) => {
        // console.log("result", result);
        res.json({ success: true, message: "Successful Register!" });
      })
      .catch((err) => {
        res.json({ success: false, message: "err" });
        console.log(err);
      });
  }
};
exports.getUserLogin = async (req, res, next) => {
  User.find()
    .then((user) => {
      console.log("user1", user);
      res.json(user);
    })
    .catch((err) => console.log(err));
};
exports.postUserLogin = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log("req.body", req.body)
  
  const checkHash = await User.findOne({ email });
  const match = await bcrypt.compare(password, checkHash?.password);
  console.log('checkHash', checkHash, checkHash._id)
  try {
    if (match === false) {
      res.send({ success: false, messages: "Wrong password!"});
    } else {
      res.send({ success: true, messages: "Successful Login!", id: checkHash._id, email });
    }
  } catch (e) {
    console.log(e);
  }
};


