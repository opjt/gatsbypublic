<template>
<Header/>
    <div class="container">
        <div class="title-row">
                        <h1>{{articles[0].title}}</h1>
                        <time>{{articles[0].date}}</time>
        </div>
    <div id="example" style=""></div>
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
        articles() {
            var data = Articles.posts;
            var param = this.$route.params;
            var men = data.filter(function (value) { return value.description == param.id });
            return men;
        }
    },
    created() {
        
        console.log(this.articles[0].id);
        axios.get('/post/' + this.articles[0].description + ".md").then(response => this.messages = response.data);
    },
    async mounted(){
    
        
        const response = await axios.get('/post/' + this.articles[0].description + ".md");
        var test = response.data;
        // 토스트 에디터 생성 함수
        var editor = new Viewer({
                el: document.querySelector('#example'),
                height: "600px",
                viewer: true
            });

        editor.setMarkdown(test);
        console.log(test);
        
    //axios.get('/post/test.md').then(response => this.messages = response.data);
  
  }
}
</script>