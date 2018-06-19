var db = require('./database');

exports.login = async function (username, password) {
  let query = "SELECT id FROM admin WHERE username = '" + username + "' AND password = '" + password +"';";
  let check = await new Promise((resolve, reject) => db.query(query, function(err, result) {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  }));

  return check;
}