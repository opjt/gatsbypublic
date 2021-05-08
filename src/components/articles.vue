<template>
  <Header />
  <div class="category">
        <ul>
          
            
            <li v-bind:class="{ active: typeof(this.$route.query.q) == 'undefined' }"><router-link to="/">All</router-link></li>
            <!-- this.actag -->
            <li v-for="value in this.cate" v-bind:key="value" v-bind:class="{ active: this.$route.query.q == value.name }">
              <!-- <li v-for="value in this.cate" v-bind:key="value"> -->

              <router-link :to="'?q=' + value.name">{{value.name}}</router-link>
            </li>
            <li><a href="">AboutMe</a></li>
            <li><a href=""><i class="fab fa-github"></i></a></li>
            <li><a href="">🌙</a></li>
    
        </ul>
    </div>
    <div class="container">
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
import Articles from "../../public/post/data.json";
import Header from './part/header.vue'; //import header 추가

export default {
  name: "ArticleList",
  components: {
    Header
  },
  data() {
    return {
      tag: "All"
    };
   },
  created() {
    var arr = [];
    var count = 0;
    var cate = [];
    
    for(var i in Articles.posts) {
      var cat = Articles.posts[i].category;
      // console.log("cat2" + cat);
      if(typeof(cate[cat]) == 'undefined') {
        cate[cat] = count;
        // console.log("cat" + Articles.posts[i].category);
        
        arr.push({"name": cat,"count": 0});
        count++;
      }
      arr[cate[cat]].count++;
    }
    arr.sort(function (a, b) {
      if (a.count > b.count) {
        return -1;
      }
      if (a.count < b.count) {
        return 1;
      }
      return 0;
    });
    this.cate = arr;
    console.log(arr);
     
   },

  computed: {
    articles() { // #1
      
      var tag = this.$route.query.q;
      if(typeof(this.$route.query.q) == 'undefined') {
        console.log("없음");
        return Articles.posts;
      }
      console.log("tag "  + this.tag);
      var result = Articles.posts.filter(value => value.category == tag);
      for(var i in Articles.posts) {
        console.log(Articles.posts[i]);
      }
      return result;
    }, 
    // tags() {

    // }
  }
}
</script>

<style>
 @import '../../public/style.css';
</style>