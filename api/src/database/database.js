const Sequelize=require("sequelize")
const connection= new Sequelize('memomind', "root", "waymaker2022@", {
    host:"localhost",
    dialect:"mysql"
});

module.exports=connection;