
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  watch: {
      '$route' (to) {
        // console.log(to);
        // console.log(to.params.id);
        document.title = to.params.id + " | PJTLOG";
        if(to.path == "/") {
          document.title = "😎PJTLOG";
        } else if(to.path == "/search") {
          document.title = "search | PJTLOG";
        }

      }
    },
  created() {
    
      const darkk = localStorage.getItem('dark');
      // console.log(darkk);
      if(darkk == "true") {
        document.documentElement.classList.toggle("dark")              
      } else {
        document.documentElement.classList.remove("dark")
      }
  }
}
</script>

