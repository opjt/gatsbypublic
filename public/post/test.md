# Hello hugo!

>  원래는 동적블로그를 만들고있었지만 github.io 도메인에 대해서 검색하다가  github-page를 알게되어서 정적사이트생성기에 대해 알게됨 그래서 hugo를 이용하여 블로그를 만들기로함 


## hugo 설치

```brew
MAC
$ brew install hugo
```
- [hugo 공식 깃헙](https://github.com/gohugoio/hugo/releases) 에서 운영체제에 맞는 최신버전 다운로드
-   `C:\Hugo\bin`  디렉토리 생성해서 다운받은 압축파일 해제
-   어느 위치에서나 Hugo가 실행될 수 있도록`$ set PATH=%PATH%;C:\Hugo\bin`  명령으로 환경변수에  `C:\Hugo\bin`추가
-   명령 프롬프트에  `$ hugo version`  혹은  `$ hugo help`로 동작 확인

## hugo 실행

- `$ hugo new site [이름]` 명령어로 저장소 생성
- [https://themes.gohugo.io/](https://themes.gohugo.io/) 에서 원하는 테마를 선택
- `cd themes > git clone ~~`
- config 파일 수정 theme = "테마이름" 추가
- `hugo server -D` 실행

## github page

- github 저장소 두개 생성
-  하나는 Hugo의 컨텐츠와 소스파일들을 포함할  `<YOUR-PROJECT>`  저장소 생성
-   다른 하나는 렌더링된 public 폴더로 구성할  `<USERNAME>.github.io`  저장소 생성 
> git init <br>
> git remote add origin ~~.git <br>
>  git add . <br>
> git commit -m "message" <br>
> git push origin master<br>
> git submodule add -b master ~~github.io.git public<br>
- public 폴더를 submodule로 설정
> hugo -t [테마이름]<br>
> cd public<br>
> git init<br>
> git remote add origin ~~github.io.git<br>
> git add . > git commit -m "message"<br>
> git push origin master<br>
-  Settings 탭에서 Github Pages 설정하면 완료

## 링크
- [toml yaml 컨버터](https://toolkit.site/format.html)
- https://github.com/Integerous/Integerous.github.io#readme
- 마크다운 작성 https://stackedit.io/app