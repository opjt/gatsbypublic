<template>
<Header/>
    <div class="container">
        <div class="title-row">
                        <h1>{{article[0].title}}</h1>
                        <time>{{article[0].date}}</time>
        </div>
 
    <div id="toastview" style=""></div>
    <div class="footnav">
        
        <!-- <router-link v-if='(typeof(articles["prev"]) == "undefined") == false' :to="'/post/' + articles['prev'].description"> -->
        <a v-if='(typeof(articles["prev"]) == "undefined") == false' :href="'/post/' + articles['prev'].description">
            <span>Previous</span>
            {{articles["prev"].title}}
        </a>      
        
        <a v-if='(typeof(articles["next"]) == "undefined") == false' :href="'/post/' + articles['next'].description">
            <span>Next</span>
            {{articles["next"].title}}
        </a> 
    </div>
  </div>
<!--margin: 0 auto; -->
  
</template>

<script>

import Articles from "../../public/post/data.json";
import Header from './part/header.vue'; //import header 추가
import axios from 'axios';

import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';


export default {
    
    title: "detailpost",
    created() {
        // console.log(this.articles[0].id);
        axios.get('/post/' + this.article[0].description + ".md").then(response => this.messages = response.data);
    },
    components: {
        Header
    },
    data() {
        return {
            messages: []
        };
    },
    computed: {
        param() {
            return this.$route.params;
        },
        article() {
            var data = Articles.posts;
            
            var param = this.$route.params;
            var men = data.filter(function (value) { return value.description == param.id });
            var nowid = men[0].id-1;

            console.log(data[nowid]);
            return men;
        }
        ,
        articles() {
            var data = Articles.posts;
            var param = this.$route.params;
            var men = data.filter(function (value) { return value.description == param.id });
            var id = men[0].id-1;
            var retu = [];
            retu["key"] = id;
            retu["prev"] = data[id-1];
            retu["next"] = data[id+1];

            console.log(retu);
            return retu;
        }
    },
    async mounted(){
        
        
        const response = await axios.get('/post/' + this.article[0].description + ".md");
        var test = response.data;
        // 토스트 에디터 생성 함수
        var editor = new Viewer({
                el: document.querySelector('#toastview'),
                // height: "600px",
                viewer: true
            });

        editor.setMarkdown(test);
        // console.log(test);
        
    //axios.get('/post/test.md').then(response => this.messages = response.data);
  
  }
}
</script>