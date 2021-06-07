# 자유게시판 - 동료들과 함께해요 🎲

<img src = "https://user-images.githubusercontent.com/65102820/121005566-eab53f00-c7ca-11eb-8405-742dc8dc8f07.png" width = "700" height = "600"/>

<h4> 각 동료들이 사내 혹은 일상생활들을 자유롭게 써내려 갈 수 있도록 만든 게시판입니다. </br>
</br>
개발기간: 5월 7일 ~ 6월 7일 </br>
</br>
개발인원: 1명 </br>

## Contents

1. [프로젝트 소개](#프로젝트-소개)
2. [참여인원](#참여인원)
3. [기술스택 소개](#기술스택-소개)
4. [기능구현 목록](#기능구현 목록)
5. [배운점](#배운점
6. 개선해야될 점
7. Others

________________________________________________


## 프로젝트 소개

**1차 개인 미니프로젝트로써 개인 게시물을 유튜브 및 이미지 업로드하여 꾸미고 공유하는 게시판입니다**
</br>
- 게시물 등록페이지에서 게시물 등록을 자유게시판에서 가장 먼저해야 합니다.
- 게시물을 등록한 이후에 자유게시판 메인페이지로 이동하면 다른 사람들의 게시물들을 확인할 수 있습니다.
- 게시물의 내용을 수정하고 싶다면 게시물 수정페이지로 이동해서 게시물의 일부 내용을 수정할 수 있습니다.
- 다른 동료들의 게시물에 댓글을 달고 수정도 할 수 있습니다.
- 게시물 목록페이지에서 원하는 게시물 제목을 검색할 수 있습니다.
- 가장 좋아요를 많이 받은 게시물 TOP3를 게시하고 있습니다.

</br>

**자유게시판 장점** 

😄
</br>
- 일기장이 될 수도있고 공유하는 페이지가 될 수 있는 자유기능 게시판입니다.</br>
- 다른 동료들의 게시판에 댓글을 달고 평가를 할 수 있습니다.</br>

</br>

**자유게시판 단점** 

😅
- 아직까지 회원가입/로그인 기능이 구현되어있지않아 본인의 게시물만 수정할 수 있도록 호환이 되어있지 않습니다.

</br>
</br>
</br>
</br>
</br>
</br>

## 참여인원 

🙋‍♀️
- Frontend 참여인원: 1명 (Taewoong Moon) - 개인 실습프로젝트
- Backend 참여인원: 1명 (Backend Mentor) - 프론트엔드를 하는 개개인으로 구성되어있기 때문에 경력있는 백엔드 시니어 멘토님과 교류를 하면서 통신과정에 대해서 배웁니다.

</br>
</br>
</br>
</br>
</br>
</br>
</br>

## 기술스택 소개 

🛠
- Frontend: Next.Js, React.Js, Next.JS-Router, Material-UI, Styled-components, Apollo-GraphQL, ESLint, TypeScript, Github, Husky, Prettier, AntDesign
- Backend: Node.js, Apollo-graphql, ... etc

</br>
</br>
</br>
</br>
</br>
</br>
</br>

## 기능구현 목록 

✍️

**1. 게시물들을 등록하면 백엔드에 데이터가 저장되고 데이터들을 게시물에 보여줄 수 있는 기능을 구현하였습니다**
- 각 Input 창마다 validation 검사를 진행하였습니다.
- Radio Button을 통해서 클릭한 값은 value를 정해놓고 클릭을 하면 해당 value가 event.target.value에 입력되서 등록되게끔 구현하였습니다.
- 라이브러리를 사용해서 모달창에 주소 및 zipcode까지 가져올 수 있도록 구현하였습니다.
- 유튜브 링크를 입력하면 게시물에 등록할 수 잇도록 구현하였습니다.
- 이미지를 업로드 할 수 있도록 구현하였습니다 3개의 이미지 업로드 버튼 중 어느 곳을 누르든 순차적으로 이미지가 미리보여지도록 구현하였습니다.
- 게시물 등록을 취소하면 이전 페이지로 이동할 수 있도록 구현하였습니다.
</br>

**2. 게시물을 등록한 이후에 등록한 개인 개시물을 볼 수 있습니다**
- 개인 게시물을 유저들이 확인한 이후에 좋아요 및 싫어요를 누를 수 있도록 구현하였습니다 (좋아요 및 싫어요 갯수는 현재 무한하개 클릭할 수 있도록 설정하였습니다.)
- 개인 게시물을 유저들이 확인한 이후에 댓글을 달 수 있도록 구현하였습니다. 
- 개인 게시물 댓글과 함께 평점도 0점에서 5점까지 찍을 수 있도록 구현하였습니다.
- 개인 게시물 댓글을 수정도 할 수 있도록 구현하였습니다.
- 개인 게시물을 삭제할 수 있도록 구현하였습니다.













