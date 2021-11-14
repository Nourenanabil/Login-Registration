<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <h3>Login</h3>
            <div class= "form-group">
                <label for="">Username</label>
                   <input type="text" v-model="username" class="form-control" required>
            </div>
            <div class="form-group">
             
                <label for="">Password</label>
                <input type="password" v-model="password" class="form-control" required>
                </div>
                <br>
        <button class="btn btn-dark">LOGIN</button>

        </form>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name:'Login',
    data(){
        return{
            username: '',
            password: ''
        }
    },
    methods:
    {
         handleSubmit(){
            
                  axios.post('http://localhost:5000/api/login',
                {username:this.username,
                password:this.password
                },
                {
                    headers:
                    {"Content-Type" : "application/json"}
                    })
                    .then(response =>{
 if(response.data.message==='success'){
                        alert(response.data.message)
                    console.log(response.data.token);
                    localStorage.setItem('token',response.data.token)
                    this.$router.push('/dashboard');
                    }
                    })
                    .catch(error=>{
                        alert("Username or Password incorrect ")
                        throw error;
                        
                    })
                      
                    
                   
                    
                        
                    
                    

        }
    }
}
</script>