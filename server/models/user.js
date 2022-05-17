const con = require('./db_connect')
 async function createTable(){
   
    let sql = `CREATE TABLE IF NOT EXISTS user (
      userId INT NOT NULL AUTO_INCREMENT,
      userName VARCHAR(255),
      password VARCHAR(255),
      PRIMARY KEY(userId)
    )`
    await con.query(sql)
  }

  createTable()

  let getUsers = async () => {
    const sql = `SELECT * FROM users`;
    return await con.query(sql);
  };

  async function getUser(user) {
    let sql;
    if(user.userId) {
      sql = `SELECT * FROM users
        WHERE user_id = ${user.userId}
      `;
    } else {
      sql = `SELECT * FROM users
        WHERE username = "${user.userName}"
      `;
    }
  
    return await con.query(sql);
  }

   async function login(userName, password)
   {
    const user = await userExists(userName);
    if(!user[0]) throw Error('User not found')
    if(user[0].user_password !== password) throw Error("Password is incorrect");
  
    return user[0];
   }

   async function register(user) {
    const u = userExists(user.userName);
    if(u.length>0) throw Error("Username already exists");
  
    const sql = `INSERT INTO users (userName, password)
      VALUES ("${user.username}", "${user.password}")
    `;
  
    const insert =  con.query(sql);
    const newUser = await getUser(user);
    return newUser[0];
  }
  
  async function deleteUser(userId) {
    const sql = `DELETE FROM users 
    WHERE user_id = ${userId}
  `;
  await con.query(sql);
  }

  async function userExists(username) {
    const sql = `SELECT * FROM users
      WHERE username = "${username}"
    `;
    return await con.query(sql);
  }
  
   module.exports = { getUsers, login, register, deleteUser, getUser };
   