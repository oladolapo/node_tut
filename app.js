
const express = require("express")

const app = express()

let allUsers =[ {
    id: "1",
    Name: "dolapo",
    age: "28",
    street: "magodo",
    city:"lagos"
},
    
    {
        id: "2",
        Name: "hassan",
        age: "22",
        street: "ikeja",
        city:"Lagos"
    },

    {
        id: "3",
        Name: "dotun",
        age: "27",
        street: "ogudu",
        city:"lagos"
    },
    {
        id: "4",
        Name: "deji",
        age: "33",
        street: "berger",
        city:"lagos"
    },
    {
        id: "5",
        Name: "jake",
        age: "17",
        street: "lekki",
        city:"lagos"
    },
    {
        id: "6",
        Name: "thelma",
        age: "25",
        street: "akoko-edo",
        city:"edo"
    },

    {
        id: "7",
        Name: "John Obiaku",
        age: "48",
        street: "Ifite",
        city:"Anambra"
    },

    {
        id: "8",
        Name: "jane",
        age: "19",
        street: "ketu",
        city:"lagos"
    },


    {
        id: "9",
        Name: "tunji",
        age: "27",
        street: "magodo",
        city:"lagos"
    },

    {
        id: "11",
        Name: "david",
        age: "28",
        street: "ikorodu",
        city:"lagos"
    },

]






app.get("/all-users", (req, res) => {
    
    res.status(200).json(allUsers)
})
app.get("/user/:id", (req, res) => {
    const user = allUsers.find({ id: req.params.id })
    
    res.status(200).json(user)
    
})

app.post("/user", (req, res) => {
    let newUser = {

        id: "11",
        Name: "Jude",
        age: "20",
        street: "isheri",
        city:"lagos"

    }

    const users = allUsers.create(newUser)
    res.status(200).json(users)
    

})



app.delete('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);


    const user = allUserRecords.find((user, index) => {

        
        if (user.id === id) {
          
            user.dataId = index;
         
            return user;
        } else {
             return false;
        }
    });
    
    if (user) {
        
        allUserRecords.splice(user.dataId, 1);
        
        res.status(200).send({ succes: true, data: user, message: "User deleted successfully" });
    } else res.status(404).json({ success: false, message: "User not found" });
});

 
app.set('port', process.env.PORT || 3000);



console.log(allUsers);
app.listen(app.get("port"), _ => console.log(`listening on port ${app.get("port")}`));