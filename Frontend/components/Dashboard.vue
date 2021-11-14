<template>
    <div class="center-align">
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
               <tr v-for="user in Users" :key="user" >
                   <!-- <tr> -->
                    <td>{{ user._id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.username }}</td>
                 
                </tr>
             
            </tbody>
        </table>
    </div>
</template>


<script>

import axios from 'axios'

export default ({
   name:'Dashboard',
//    async created(){
//        const response =await axios.get('http://localhost:5000/api/login',
//       { headers: {
//            Authorization: 'Bearer' + localStorage.getItem('token')
//        }});
//        alert(response)
//    },
   data() {
       return {
           Users : {},
       }
   },
   mounted(){
       axios.get('http://localhost:5000/api/user')
       .then(
        res=>{
            //console.log(res)
            this.Users=res.data;
            console.log(this.Users)
        })
    .catch(err =>{
        console.log(err)
    })
   }
})
</script>
