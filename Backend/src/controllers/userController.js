const User = require('../model/User')
const jwt = require('jsonwebtoken')
const bcrypt =require('bcrypt')

//to get all users

exports.getUsers = async (req,reply)=>{
    try{
        const users = await User.find()
       return users
      
    }
    catch(error){
        
throw error

    }
}

//get a single user 

exports.getSingleUser = async (req,reply)=>{
    try{
        const userId = req.params.id
        const user = await User.findById(userId)
        return user
    }
    catch(error){
        throw error
    }
}

//add a user to the db

exports.addUser= async(req,reply)=>{
    try{
        
        const user =await User.findOne({username:req.body.username})
        if(!user){
        const addUser = new User(req.body)
         return addUser.save()
        }
        else{
            reply.send({
                message:"user already registered"
            })
        }
        

    }
    catch(error){
       
        throw error
    }
}

//login crediencials
exports.loginAuth = async(req,reply)=>
{
    
        const user =await User.findOne({username:req.body.username})
        if(!user){
            return reply.status(404).send({
                message:'user not found'
            })
        }
        if(req.body.password!==user.password)
        {
            return reply.status(400).send({
                message:'invalid credentials'
            }) 
        }
            const token= jwt.sign({id:user._id},"secret")

            reply.setCookie('jwt',token,{
                httpOnly:true,
                maxAge:24*60*60*1000
            })
            const cookie =req.cookies['jwt']
            reply.send({
                 message:'success',
                 token:token
            }
                
            )
            
    }
//user authenticated
exports.userAuthenticated = async (req,reply)=>
{
    const cookie =req.cookies['jwt']
    //we have to do the opposite of jwt.sign 
    const claims = jwt.verify(cookie,'secret')
    if(!claims){
    return reply.status(401).send({
        message:'unauthenticated'
    }) 
}
    const user = await User.findOne({_id:claims.id})
    reply.send(user)
}


//update an existing user

exports.updateUser = async (req,reply)=>{
    try{

        const id = req.params.id
        const user = req.body
        const {...updatedUser}=user
        const update = await User.findByIdAndUpdate(id,updatedUser,{new:true})
        //return update

    }
    catch(error){
        throw error
    }
}

//delete an existing user

exports.deleteUser= async (req,reply)=>
{
    try{
         const id = req.params.id
         const user = User.findByIdAndDelete(id)
         //return user

    }
    catch(error){

        throw error

    }
}