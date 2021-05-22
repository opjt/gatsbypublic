
# gh-page ssg vue 리로드시 404 error
>  gh-page에 배포한 vue 정적사이트가 새로고침하면 
>  404 error가 발생한다는걸 발견


## createRouter()

[https://next.router.vuejs.org/guide/migration/](https://next.router.vuejs.org/guide/migration/)

### mode hash vs history ?

`hash` 모든 url을 hash형태로 서비스한다. URL이 변경될 때 페이지가 다시 로드 되지 않는다.

`history` 페이지를 다시 로드하지 않고 URL을 탐색할 수 있다. SPA의 단일 페이지 클라이언트앱이기 때문에 
사용자가 직접 `http://example.com/user/id` 에 접속하면 404오류가 발생한다.

- 현재는 hash모드로 사용중 history로 사용하면 주소에 #이 안뜨지만 따로 서버로 구축해야함
- 하지만 hash 모드를 사용할경우 검색엔진에 표시가 안됨


### prerender-spa-plugin (5/22 수정)

- [참고사이트](https://myeongjae.kim/blog/2018/09/23/single-page-app의-search-engine-optimizaion과-vuejs)

prerender-spa-plugin 을 이용하여 vue build 시 자동으로 
페이지마다 index 파일을 생성하여 주소 리다이렉트시 404page가 뜨는걸 방지할 수 있음


