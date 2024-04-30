const express=require('express');

const UserController=require('../controller/user');

const router=express.Router();

router.get('/',UserController.getUsers);

router.post('/',UserController.postUsers);

router.delete('/:id',UserController.deleteUser);

module.exports=router;