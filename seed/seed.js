const db = require('../config/passport')
const camper = require('../models/index')
const user = require('../models/index')

const userSeed = [
    {
        firstname: "Lilly",
        lastname: "Kaycee",
        username: "MommaKC",
        email: "lilly@someemail.com",
        password: "IamSherlocked",
        phonenumber: "555-867-5309",
        address: "1234 Home Street",
        city: "Someplace",
        state: "MO",
        zip: "45678"

    },

    {
        firstname: "Laura",
        lastname: "Gowens",
        username: "LauraG",
        email: "gowens@someemail.com",
        password: "L33t234",
        phonenumber: "555-457-8825",
        address: "7898 House Street",
        city: "Anotherplace",
        state: "MO",
        zip: "69705"
    }
];


const camperSeed = [
    {
        camperfirstname: "Olivia",
        camperlastname: "Kaycee",
        nickname: "KC",
        birthday: "03-30-2001",
        grade: "5",
        shirtsize: "Adult Small",
        allergies: "none",
        dieteryneeds: "none"

    },

    {
        camperfirstname: "Bobert",
        camperlastname: "Gowens",
        nickname: "Bob",
        birthday: "09-21-2004",
        grade: "11",
        shirtsize: "Adult Large",
        allergies: "bee stings",
        dieteryneeds: "none"
    }
];

db.Book
    .remove({})
    .then(() => db.happycamps_db.collection.insertMany(camperSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
