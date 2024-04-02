// import Emails from '../model/entryModel.js';
const Emails = require('../model/entryModel.cjs');

let emailControllers = {};

emailControllers.postEmail = async (req, res, next) => {
  try {
    const { email } = req.body;

    // Check if the email is valid
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(validRegex)) {
      return next({ message: 'Not a valid email' });
    }

    // Check if the email already exists in the database
    const existingEmail = await Emails.findOne({ email });
    if (existingEmail) {
      return next({
        message: 'Email is already in use. Please provide another email.',
      });
    }

    // If the email is valid and doesn't exist in the database, create a new entry
    const newEmail = await Emails.create({ email });
    res.locals.email = newEmail;
    return next();
  } catch (error) {
    return next({ message: 'Error occurred while processing the request' });
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
