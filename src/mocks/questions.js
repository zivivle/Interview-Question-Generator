export const questions = {
  // CS: [
  //   "브라우저 동작 원리",
  //   "DNS란?",
  //   "box model 이란?",
  //   "svg, Canvas 란?",
  //   "webworker란?",
  //   "websocket이란?",
  //   "CSR과 SSR의 차이",
  //   "쿠키, 세션, 로컬스토리지의 차이",
  //   "웹팩(Webpack)",
  //   "Webpack, Babel, Polyfill에 대해 설명해주세요",
  //   "자료구조(Data Structure)",
  //   "웹 표준을 지키며 개발하시나요?",
  //   "SPA와 MPA에 대해 설명해주세요",
  //   "[리액트] 에러바운더리와 서스펜스에 대해서 말씀해주세요.",
  //   "로그인 처리를 할 때 쿠키와 세션을 어떻게 사용하시나요?",
  //   "프로세스와 스레드의 차이점",
  //   "번들 사이즈를 줄이려면 어떻게 해야 하나요?",
  //   "멀티스레딩의 장단점",
  //   "객체 지향 프로그래밍이란 무엇인가요?",
  //   "네트워크에서 TCP와 UDP의 차이점과 사용되는 상황",
  //   "CORS는 무엇이고 해결 방법",
  //   "자료구조 스택과 큐에 대해서 설명해주세요",
  //   "HTTP 메소드 종류와 GET과 POST의 차이",
  //   "HTTP와 HTTPS의 차이점을 말해주세요.",
  //   "RESTFUL API란?",
  //   "주소창에 www.google.com 을 입력하면 생기는 일을 설명해주세요.",
  //   "웹 프로토콜이란?",
  //   "JWT란?",
  //   "MVC와 MVVM 패턴의 차이를 설명해주세요.",
  //   "OOP (Object Oriented Programming)란 무엇인가요?",
  //   "Git을 사용해보셨나요? Git에 대해 아는 것을 말해보세요.",
  //   "깊은복사와 얕은복사의 차이점을 말해주세요.",
  //   "크로스 브라우징이란?",
  //   "크로스 브라우징 경험이 있으신가요?",
  //   "웹 소켓을 사용해 보셨나요?",
  //   "웹사이트 성능 최적화에는 어떤 방법이 있나요?",
  //   "Sementic HTML란 무엇인가요?",
  //   "라이브러리와 프레임워크에 대해 설명해주세요.",
  //   "디자인 패턴",
  // ],
  Typescript: [
    "타입스크립트를 사용하는 이유는?",
    "기본 타입/ 함수 타입",
    "Type Alias에 대해서 설명해주세요",
    "Interface, Class 사용과 확장",
    "tsconfig와 옵션에 대해서 아는대로 설명해주세요.",
    "자신만의 TypeScript 초기세팅 방법이 있나요? 있다면 설명해주세요.",
    "제네릭타입에 대해서 설명해주세요.",
    "타입 가드에 대해서 설명해주세요.",
    "타입 단언과 타입 호환에 대해서 설명해주세요.",
    "export/import type을 해줘야하는 이유가 뭘까요?",
    "sourceMap을 통한 디버깅 경험이 있으신가요?",
    "타입 애너테이션에 대해서 설명해주세요",
  ],
  "HTML/CSS": [
    "HTML 렌더링 도중 JavaScript가 실행되면 렌더링이 멈추는 이유",
    "CSS 선택자 우선순위",
    "Attribute와 Property의 차이",
    "UI.UX",
    "반응형 웹의 3요소",
    "Cascading에 관해서 설명해주세요.",
    "CSS 애니메이션과 JS 애니메이션의 차이에 대해 설명해주세요",
    "Flexbox를 사용해보셨나요?",
    "Flex와 Grid 차이",
    "버블링과 캡쳐링",
    "event.target과 event.current.target의 차이",
  ],
  // JS: [
  //   "콜백함수란",
  //   "Promise와 Async/Await의 차이점",
  //   "비동기 로직 동작원리",
  //   "var, let, const의 차이점을 말해주세요.",
  //   "forEach와 map 차이",
  //   "호이스팅에 대해 설명해주세요.",
  //   "이벤트 루프가 무엇인가요?",
  //   "Promise와 콜백의 차이를 설명해주세요",
  //   "마이크로태스크 큐와 태스크 큐의 차이점을 아시나요?",
  //   "micro task queue 동작 과정",
  //   "함수 선언식과 함수 표현식의 차이를 설명해주세요",
  //   "클로저와 스코프에 대해 설명해주세요.",
  //   "Promise와 setTimeout 우선 순위에 대해 말해주세요.",
  //   `이벤트 버블링과 캡처링이란 무엇인가요?\n이벤트 버블링과 캡처링에 대한 예시를 들어주세요`,
  //   "렉시컬 환경에 대해 설명해주세요.",
  //   "event.target과 event.currentTarget의 차이점을 말해주세요.",
  //   "클로저가 무엇인가요?",
  //   "자바스크립트의 원시타입과 참조타입에 대해 설명해주세요.",
  //   "this에 대해 아는대로 설명해보세요.",
  //   "ES6 문법 아는 것이 있다면 말해주세요.",
  //   "Sass/Scss/css-in-js를 사용해보셨나요? (혹은 차이점을 말해주세요)",
  //   "AJAX란?",
  //   "데이터 타입에 대해 설명해주세요",
  //   "자바스크립트에서 일어나는 데이터 형 변환에 대해서 설명해주세요",
  //   "자바스크립트가 유동적인 언어인 이유는 무엇인가요?",
  //   "프로토타입에 대해서 설명해주세요",
  //   "불변성을 유지하려면 어떻게 해야하나요?",
  //   "requestAnimationFrame을 사용해본 적이 있나요?",
  //   "HTML이 렌더링 중에 자바스크립트가 실행되면 렌더링이 멈추는 이유를 설명해주세요.",
  //   "package.json에서 dependencies와 devDependencies의 차이점을 말해주세요.",
  //   "타입스크립트를 써보신 경험이 있나요? 타입스트립트에 대해서 어떻게 생각하시나요?",
  //   "call( ), apply( ), bind( )의 차이점을 말해주세요.",
  //   "화살표 함수와 일반함수의 차이를 설명해보세요.",
  //   "실행 컨텍스트가 무엇인가요?",
  // ],
  // React: [
  //   "React에 대해 아는대로 말씀해주세요. (원리, 특징, 장단점)",
  //   "Virtual DOM이란? Virtual DOM을 사용하는 이유는 무엇인가요?",
  //   "props와 state에 대해 설명해주세요.",
  //   "props와 state의 차이점",
  //   "React Hook이 무엇인가요?",
  //   "제어 컴포넌트와 비제어 컴포넌트의 차이에 대해 설명해주세요.",
  //   "JSX란?",
  //   "React 라이프사이클에 대해서 설명해주세요.",
  //   "Key Props 사용 이유에 대해서 말해주세요.",
  //   "pure component에 대해서 설명해주세요",
  //   "shouldComponentUpdate에 대해 설명해주세요.",
  //   "클래스형 컴포넌트와 함수형 컴포넌트의 차이에 대해 설명해주세요.",
  //   "생명 주기 메서드에 대해서 설명해주세요",
  //   "왜 state를 직접 바꾸지 않고 useState를 사용해야하나요?",
  //   "리액트에서 메모이제이션을 어떤 방식으로 하나요?",
  //   "React-Query에 대해서 알고있나요?",
  //   "React-Query를 사용해본 경험이 있다면 말씀해주세요",
  //   "React npm 패키지중 가장 좋아하는 패키지가 있을까요?",
  //   "리액트 렌더링 성능 향상을 위해 어떻게 해야하나요?",
  //   "useMemo와 useCallback의 차이점을 말해주세요.",
  //   "원시값과 참조값(array, object)의 차이점(메모리 관점에서)",
  //   "본인이 생각하는 좋은 컴포넌트란",
  //   "Class와 Hooks의 차이를 아시나요?",
  //   "setState는 동기? 비동기? setState가 적용되는 과정 설명",
  //   "React 18버전 업데이트 내용에 대해서 말씀해주세요",
  //   "useEffect와 useLayoutEffect의 차이점에 대해 말씀해주세요",
  //   "Context API에 대해 설명해주세요",
  //   "전역상태관리 툴을 사용해보신 경험이 있나요? 있다면 말씀해주세요.",
  // ],
  Redux: [
    "리덕스를 사용하는 이유에 대해서 말씀해주세요",
    "리덕스의 장단점을 말씀해주세요",
    "Context API와 리덕스를 비교해서 설명해주세요",
    "Redux-saga에 대해서 설명해주세요",
    "Generator 문법에 대해서 설명해주세요",
    "Redux-saga와 Redux-Thunk의 차이에 대해 설명해주세요",
  ],
  프로젝트: [
    "프로젝트에서 협업은 어떤 식으로 진행했는가?",
    "협업에서 기억에 가장 남는 상황",
    "포트폴리오의 프로젝트와 담당하신 파트",
    "프로젝트에서 기술적으로 어려웠던 점과 해결 방법",
    "리팩토링을 할 기회가 있다면 프로젝트에서 어떤 부분을 개선하고 싶은가",
    "프론트엔드와 백엔드 간의 커뮤니케이션 방법과 필요한 데이터에 대해 어떻게 협의하였나",
    "갈등이 생긴 경험과 해결했는지",
    "프로젝트에서 가장 힘들었던 경험",
  ],
  기본질문: [
    "왜 개발자가 되고 싶은가?",
    "프로그래밍이란 뭐라고 생각하나요?",
    "최근 공부해보고 싶은 기술이 있다면 무엇이 있을까요?",
    "최신 기술 트렌드 추적 방법",
    "개발은 평생 공부해야하는 분야인데 어떤 식으로 학습을 하고 있나요? 본인만의 학습법이 있다면?",
    "본인의 장단점",
    "스트레스 관리는 어떻게 하시나요?",
    "기억에 남는 에러",
    "가장 최근에 디버깅에 성공한 얘기",
    "개발자로서 목표가 무엇인가요? 혹은 본인의 인생의 목표가 무엇인가요?",
    "프론트엔드는 기술이 빠르게 변화하는 데 두려워하진 않나요?",
    "프로젝트를 진행하면서 어려웠던 점과 어떻게 극복했는지 말해주세요.",
    "개발을 공부하면서 가장 힘들었던 경험",
    "마지막으로 회사에 궁금한 점 혹은 하고 싶은 말",
  ],
};
