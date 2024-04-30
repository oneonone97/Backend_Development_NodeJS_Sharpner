const User=require('../model/user');

exports.getUsers=(req,res,next)=>{
    User.findAll()
    .then((user)=>{
        res.json(user);
    })
    .catch(err=>{
        console.log(err);
    })
};
exports.postUsers= async(req,res,next)=>{

    try{

        const name=req.body.name;
        const email=req.body.email;
    
        // console.log(name);
    
        const data =await User.create({
            name:name,
            email:email
        })
    
        res.status(201).json({newUserDetail:data});
        
        // console.log(data);
    }
    catch(err){
        console.log(err)
    };

}

exports.deleteUser = async (req,res,next)=>{

    try{

        const id=req.params.id;
    
        // console.log(id);
    
        const user = await User.findByPk(id);
        user.destroy();
        res.status(200);
    }
    catch(err){
        console.log(err);
    }
 

}