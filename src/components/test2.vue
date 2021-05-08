<template>
<div>


<div id="example" style="width: 600px;margin: 0 auto;">#안녕</div>
</div>
</template>

<script>
import axios from 'axios';

import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';


export default {
  name: 'App',
  components: {
    
  },
  
  async mounted(){
    
    
    const response = await axios.get('/post/test.md');
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

