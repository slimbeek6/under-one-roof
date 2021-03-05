const db = require("../models");
const config = require("../config/auth.config");
const Home = db.Home;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    // Save User to Database
    Home.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })
        .then(user => {

            // user role = 1

            res.send({ message: "User was registered successfully!" });


        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

exports.signin = (req, res) => {
    // console.log("signin");
    Home.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(user => {
            // console.log(user)
            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }

            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // 24 hours
            });
            
            res.json(user);

         
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};