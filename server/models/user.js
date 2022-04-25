const users = [
    {
    userId: 1,
    userName: "cathy123"
    },
    {
    userId: 55555,
    userName: "fredburger54"
    }
   ];
   let getUsers = () => users;

   async function login(userName, password)
   {
       const user = user.filter((u) => u.userName === userName)
       if(!user[0]) throw Error('User not found')
       if(user[0].password != password) throw Error('incorrect password')

       return user[0]
   }
   function register(user) {
    const u = userExists(user.username);
    if(u.length>0) throw Error('Username already exists')
  
    const newUser = {
      userId: users[users.length-1].userId + 1,
      userName: user.username,
      password: user.password
    }
    users.push(newUser);
    return newUser;
  }
  
  function deleteUser(userId) {
    let i = users.map((user) => user.userId).indexOf(userId);
    users.splice(i, 1);
    console.log(users)
  }
  
  function userExists(username) {
    return users.filter((u) => u.userName === username);
  }
   module.exports = { getUsers, login, register, deleteUser };
   