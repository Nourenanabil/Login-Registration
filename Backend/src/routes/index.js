const UserController = require('../controllers/userController')

const routes =[
    {
        method:'GET',
        url:'/api/user',
        handler: UserController.getUsers
    },
    {
        method:'GET',
        url:'/api/user/:id',
        handler: UserController.getSingleUser
    },
    {
        method:'POST',
        url:'/api/user',
        handler: UserController.addUser
    },
    {
        method:'PUT',
        url:'/api/user/:id',
        handler: UserController.updateUser
    },
    {
        method:'DELETE',
        url:'/api/user/:id',
        handler: UserController.deleteUser
    },
    {
        method:'POST',
        url:'/api/login',
        handler: UserController.loginAuth
    },
    {
        method:'GET',
        url:'/api/login',
        handler: UserController.userAuthenticated
    },
]

module.exports = routes