let id = 1
class User{
    constructor(userName, password, email, firstName, lastName){
        
        this.userId = id
        this.username = userName
        this.password = password
        this.email = email
        this.firstName = firstName
        this.lastName = lastName
        id++
    }

    getUserId()
    {
        return this.userId;
    }
    setUserId(id){
        this.userId = id;
    }
    getPasswod(){
        return this.password;
    }
    setPassword(password){
        //if(this.validPasswod(password))
        this.password = password;
    }
    validPasswod(password){
        if(password.length >= 8){
            return true
        }
        return false
    }
    getUserName(){
        return this.userName
    }
    setUserName(userName){
        this.userName = userName
    }
    getEmail(){
        return this.userName
    }
    setEmail(email){
        this.email = email
    }
    getFirstName(){
        return this.firstName
    }
    setFirstName(firstName){
        this.firstName = firstName
    }
    getLastName(){
        return this.lastName
    }
    setLastName(lastName){
        this.lastName = lastName
    }
}

let form = document.getElementById("form")
form.addEventListener('submit', createUser())

function createUser(e)
{
    e.preventDefault()

    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let email = document.getElementById("email").value
    let pswd = document.getElementById("pswd").value

    const user = new User( "name",pswd, email, firstName, lastName)
    console.log(user)

}