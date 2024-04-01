// import Emails from '../model/entryModel.js';
const Emails = require('../model/entryModel.cjs')

let emailControllers = {};

emailControllers.postEmail = async (req, res, next) => {
  try {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const { email } = req.body;
    if (email.match(validRegex)) {
      const newEmail = await Emails.create({ email });
      res.locals.email = newEmail;
      return next();
    } else {
      return next({ message: 'not a valid email' });
    }
  } catch (error) {
    return next({ message: 'Earthquake' });
  }
};
emailControllers.deleteEmail = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id) {
      const deleteEmail = await Emails.findByIdAndDelete(id);
      return next();
    } else {
      return next({ message: 'cant find id' });
    }
  } catch (error) {
    return next({ message: 'Earthquake' });
  }
};

module.exports = emailControllers;
