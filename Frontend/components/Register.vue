<template>
      <div>
        <form @submit="handleSubmit">
            <h3>Registration</h3>
            <div class= "form-group">
                <label for="">Name</label>
                   <input type="text" v-model="name" class="form-control" required>
            </div>
            <div class= "form-group">
                <label for="">Username</label>
                   <input type="text" v-model="username" class="form-control" required>
            </div>
            <div class="form-group">
             
                <label for="">Password</label>
                <input type="password" v-model="password" class="form-control" required>
                </div>

                <div class="form-group">
                <label for=""> Confirm Password</label>
                <input type="password" v-model="passwordConfirm" class="form-control" required>
                </div>
                <br>

        <button class="btn btn-dark">Sign Up</button>

        </form>
    </div>
</template>

<script>

import axios from 'axios'

export default ({
    name:'Register',
    data() {
    return{
     name:'',
     username:'',
     password:'',
     passwordConfirm:''
    }
    },
    methods:{
handleSubmit(e){
    e.preventDefault();
    const data ={
        name : this.name,
        username : this.username,
        password : this.password,
        passwordConfirm: this.passwordConfirm
    };
    if(this.passwordConfirm===this.password){
    axios.post('http://localhost:5000/api/user',data)
    .then(
        res=>{
            if(res.data.message==="user already registered"){
                alert("user already registered")
            }
            else{
                this.$router.push('/login');
            }
        }
    )
    .catch(err =>{
        console.log(err)
    })}
    else{
        alert("password and confirm password must be the same")
    }
    //console.log(data)
  //  this.$router.push('/login');
}   
    }
})
</script>
