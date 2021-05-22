<template>
<Header/>
<div class="container">
  <div class="search-box">
    <i class="fas fa-search"></i>
    <input type="text" v-bind:value="inputText" v-on:input="updateInput" placeholder="검색어를 입력하세요">
  </div>
  
  <div class="posts">
          
            <h2>{{articles.length}} posts</h2>
            
            
            <div class="post" v-for="post in articles" v-bind:key="post">
                <router-link :to="'/post/' + post.description">
                    <div class="post-row">
                        <h2>{{post.title}}</h2>
                        <time>{{post.date}}</time>
                    </div>
                    <p>{{post.body}}</p>
                </router-link>
            </div>
        </div>
</div>
</template>

<script>

import Articles from "../../public/article/data.json";
import Header from './part/header.vue'; //import header 추가



export default {
  name: 'test',
  components: {
      Header
  },
  data() {
    return {
      inputText: ""
    };
   },
  methods: {
    updateInput: function(event) {
      var updatedText = event.target.value;
      this.inputText = updatedText;
      this.$router.push('/search?q=' + updatedText);
    }
  },
    
  computed: {
    articles() { // #1
      
      var tag = this.$route.query.q;
      if(typeof(this.$route.query.q) == 'undefined') {
        return false;
      }
      if(tag == '') {
        return false;
      }
       // console.log("searchq "  + this.inputText);
      //  console.log("searchq "  + tag);

      var result = Articles.posts.filter(value => value.title.indexOf(tag) != -1 || value.body.indexOf(tag) != -1);
      return result;
    }, 
    // tags() {

    // }
  }
}
</script>

<style>
</style>