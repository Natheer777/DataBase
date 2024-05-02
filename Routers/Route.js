const express = require('express')
const UserController = require("../Controllers/Usecontroller")
const Route = require('express').Router()

Route.get("/alluser" ,UserController.getallusers)
Route.post("/adduser" ,UserController.adduser)
Route.post("/delete" ,UserController.deleteuser)
Route.post("/edite" ,UserController.editeuser)

module.exports=Route;

