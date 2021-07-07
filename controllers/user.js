import {v4 as uuidv4} from "uuid";

var users = [
    {
    "firstName": "Ajit",
    "lastName": "Tupe",
    "age": 22,
    "id": "62b33334-2af3-4448-8664-35ca41ab855b"
    },
    {
    "firstName": "Naresh",
    "lastName": "Tupe",
    "age": 44,
    "id": "d8bb6c37-1989-45eb-98db-bea4155b888c"
    },
    {
    "firstName": "Prajay",
    "lastName": "Tupe",
    "age": 19,
    "id": "1cdcb5f7-8ade-4a03-9357-046f2f3cee67"
    }
]
export const getUser = (req, res) => {
    console.log(users)
    res.send(users)
}

export const createUser = (req, res) => {
    const user = req.body;
    users.push({...user, id:uuidv4()});
    res.send(`User with the name ${user.firstName} added`)
}

export const findUser = (req, res) => {
    const {id} = req.params;
    const foundUser = users.find((user) => user.id ===id);
    res.send(foundUser)
}

export const deleteUser = (req, res) => {
    const {id} = req.params;
    users = users.filter((user)=> user.id !== id);
    res.send(`User with id ${id} deleted`)
}

export const updateUser = (req,res)=>{
    const {id} = req.params;
    const {firstName,lastName,age} = req.body;
    console.log(firstName)
    const user = users.find((user)=>user.id ===id)
    if (firstName) user.firstName = firstName
    
    if (lastName) user.lastName = lastName

    if (age) user.age = age
    
    res.send(`User with ${id} updated`)
}