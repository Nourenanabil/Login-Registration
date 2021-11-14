const fastify = require('fastify')({
    logger:true
})

//to hash the password use fastify-bcrypt
fastify.register(require('fastify-bcrypt'), {
    saltWorkFactor: 12
  })


//to be able do the token 
fastify.register(require('fastify-cookie'), {
    secret: "secret", // for cookies signature
    parseOptions: {}     // options for parsing cookies
  })


//to able to use axios to connect the frontend and backend because each has different port number
fastify.register(require('fastify-cors'), { 
    // put your options here
    credentials:true,//this means that the frontend should get the cookie
     origin: ['http://localhost:8000']
  })

//bring in routes
const routes = require ('./routes')

//db
const mongoose = require('mongoose')

//connecting to db

mongoose.connect('mongodb://localhost/blog')
.then(()=>console.log("mongo is ready"))
.catch(err=>console.log(err))


//routes
// fastify.get("/",async(request,reply)=>{
//     return "hello there"
// })

routes.forEach((route,index)=>{
    fastify.route(route)
})

const port =5000


//starting server
const start= async ()=>{
try {

    await fastify.listen(port)
    fastify.log.info('server is running at ${address}')
}
catch(error){
//  fastify.log.error(error)
//  process.exit(1)
}
}

start()

