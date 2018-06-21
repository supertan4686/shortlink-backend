var db = require('./database');

exports.get_links = async function (shortlink) {
  let query = "SELECT reallink FROM shortlink_data WHERE shortlink = '" + shortlink + "';";
  let reallink = await new Promise((resolve, reject) => db.query(query, function(err, result) {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  }));
  return reallink;
}

exports.get_stat_links = async function (shortlink) {
  let query = "SELECT id, CONCAT('http://localhost:8080/', shortlink) AS shortlink, reallink, amount FROM shortlink_data;";
  let statlink = await new Promise((resolve, reject) => db.query(query, function(err, result) {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  }));
  return statlink;
}

exports.add_links = async function (shortlink, reallink) {
  let query = "INSERT INTO shortlink_data (shortlink, reallink) VALUES ('"+ shortlink +"', '"+ reallink +"')";
  let check = await new Promise((resolve, reject) => db.query(query, function(err, result) {
    if (err) {
      reject(err);
    } else {
      resolve(result.affectedRows);
    }
  }));
  return check;
}

exports.add_amount_links = async function (shortlink) {
  let query = "UPDATE shortlink_data SET amount = amount + 1 WHERE shortlink = '" + shortlink + "';";
  let check = await new Promise((resolve, reject) => db.query(query, function(err, result) {
    if (err) {
      reject(err);
    } else {
      resolve(result.affectedRows);
    }
  }));

  return check;
}

exports.gen_short_links = function () {
  let result = "";
  let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 5; i++)
    result += text.charAt(Math.floor(Math.random() * text.length));

  return result;
}