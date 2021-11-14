<template>
  <div>
<Nav/>
<router-view/>
    </div>
</template>

<script>

import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {Nav,
}
 
}
</script>

<style>
body{
  padding:100px;
  
}
</style>
