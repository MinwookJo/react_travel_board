# React js와 json-server로 여행정보를 get,post,put,delete 하는 웹어플리케이션
atomic디자인, redux, axios, typescript, styled-component 사용

1. 컴포넌트 구조
- atom - 기본적인 요소가 되는 컴포넌트
- molecule - 하나의 기능을 가진 컴포넌트
- organism - 두개 이상의 기능을 가진 컴포넌트
- screen - 한 화면 단위 

2. 파일 구조
src/uitls - 앱 전체적으로 사용하는 유틸
src/assets - 에셋파일
src/constants - 앱 전체적으로 사용하는 상수들 정의
src/store - (1)redux에 action, reducer들이 모여있고 rootReducer로 합쳐서 사용,
            (2)configureStore로 스토어 정의
src/model - 앱 전체적으로 사용할 모델 Type 정의
src/api - api 호출하는 axios 코드 정의
db,json - json-server에서 사용하는 데이터 정의

# 실행법
1. 프로젝트 설치후 npm 관련 dependency를 설치한다(json-server 포함)
2. npm run start-server 로 서버실행
3. npm run start 로 클라이언트 실행