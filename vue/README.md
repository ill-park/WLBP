![header](https://capsule-render.vercel.app/api?type=waving&color=auto&height=300&section=header&text=AIDT%20PROJECT&fontSize=70&animation=fadeIn&fontAlignY=38&desc=AIDT%20GITHUB%20START%20PROJECT!&descAlignY=51&descAlign=62)
<p align='center'> 주요 기술 스택 </p>
<p align='center'>
  <a href="https://github.com/kyechan99/capsule-render/labels/Idea">
    <img src="https://img.shields.io/badge/backEnd-SpringBoot%20-%23F7DF1E.svg?&style=for-the-badge&&logoColor=white"/>
    <img src="https://img.shields.io/badge/DBMS-Mysql%20-%23F7DF1E.svg?&style=for-the-badge&&logoColor=white"/>
  </a>
  <a href="#demo">
    <img src="https://img.shields.io/badge/FrontEnd-VUE3%20-%234FC08D.svg?&style=for-the-badge&&logoColor=white"/>
    <img src="https://img.shields.io/badge/FrontEnd-VITE%20-%234FC08D.svg?&style=for-the-badge&&logoColor=white"/>
  </a>
</p>


### 서비스 설명

AI 디지털교과서는 학생 개인의 능력과 수준에 맞는 다양한 맞춤형 학습 기회를 지원하고자 
인공지능을 포함한 지능정보기술을 활용하여 다양한 학습자료 및 학습 지원 기능 등을 탑재한 
소프트웨어로 다음의 특성을 가짐
- AI에 의한 학습 진단과 분석(Learning Analytics)
- 개인별 학습 수준과 속도를 반영한 맞춤형 학습(Adaptive Learning)
- 학생의 관점에서 설계된 학습 코스웨어(Human-Centered Design)

[AI 디지털교과서 개발 가이드라인1][AI 디지털교과서 개발 가이드라인-1-90.pdf](https://github.com/ill-park/vue-aidt/files/13359344/AI.-1-90.pdf)

[AI 디지털교과서 개발 가이드라인2][AI 디지털교과서 개발 가이드라인-91-191.pdf](https://github.com/ill-park/vue-aidt/files/13359347/AI.-91-191.pdf)


---
### 사용 기술 스택

- Node 16.20.2
- JAVA 17.0.7
- SpringBoot 2.7.0
- MyBatis 2.2.2
- MySQL 8.0.28
- Docker

UI/UX
- [Tailwindcss Component](https://tailwindcomponents.com/)
- [TailWindcss cheatSheet](https://umeshmk.github.io/Tailwindcss-cheatsheet/)
- [Tailwindcss cheatSheet2](https://nerdcave.com/tailwind-cheat-sheet)
- [Heroicons](https://heroicons.com/)

---
### 트러블 슈팅 & 기술 선택 과정

[위키에 있는 내용은 더 디테일 하게 작업하여 차근차근 블로그로 링크 첨부 예정]



---
### Testing

Unit Test Command
- Application layer 의 비즈니스 로직을 테스트 할 수 있습니다.     
  `$ ./gradlew test`

---
Modular Monolithic 아키텍처이므로, 다음과 같은 모듈들로 구성되어 있습니다.

| Modules       | Description                                  |
|---------------|----------------------------------------------|
| Server        | 각 도메인 별 모듈을 통합하고 실행하는 Main 애플리케이션이 있는 모듈입니다. |
| Common        | 모든 모듈에서 전역적으로 사용하는 공통 개체가 담긴 모듈입니다.          |
| User-Api      | 사용자 관리 기능을 담당하는 모듈입니다.                       |
| Seller-Api    | 판매자 관리 기능을 담당하는 모듈입니다.                       |
| Order-Api     | 주문을 생성하고, 주문을 관리 및 처리하는 기능을 담당하는 모듈입니다.      |
| Payment-Api   | 주문한 상품에 대한 결제 처리를 담당하는 모듈입니다. (현재 Fake로 구현)  |
| Item-Api      | 상품을 관리하는 기능을 담당하는 모듈입니다.                     |
| Inventory-Api | 재고를 관리하는 기능을 담당하는 모듈입니다.                     |

각 도메인 모듈은 하위에 아래와 같이 Layered Architecture 형식으로 분리되어 구성됩니다.

예시)

|Build Artifacts| Description                                                      |
|------|------------------------------------------------------------------|
|Order-Presentation| 주문 HTTP Api에 대한 요청 및 응답을 제공하는 모듈입니다.                             |
|Order-Application| 주문 로직에 대한 비즈니스 로직을 정의하며 정상적으로 수행될 수 있도록 도메인, 인프라 계층과 협력하는 모듈입니다. |
|Order-Domain| 실질적인 주문의 정보를 가지며, 주문의 상태를 직접적으로 제어하는 모듈입니다.                      |
|Order-Infrastructure| DIP를 통한 상위 계층을 지원하는 일반화된 기술적 기능을 제공하는 계층 모듈입니다.                  |

--- 
### 화면 예시
<img width="1913" alt="image" src="https://github.com/ill-park/vue-aidt/assets/150448803/368ebf3b-f307-454e-a249-7a175b26e2a4">


<details><summary> 스키마 아이콘의 설명   </summary>

<img width="1913" alt="image" src="https://github.com/ill-park/vue-aidt/assets/150448803/368ebf3b-f307-454e-a249-7a175b26e2a4">
</details>


---

### 공통 응답 객체

| 필드                   | 타입      | 필수여부 | 설명                                                            | 
|----------------------|---------|------|---------------------------------------------------------------|
| success              | Boolean | 필수   | API 호출 실행 결과입니다.<br/>[true]:성공 <br/>[false]: 실패               | 
| data                 | Object  | 필수   | API 호출에 따른 결과값입니다.                                            | 
| error{errorCode}     | String  | 필수   | API 호출 오류 상황을 구분하는 코드입니다.<br/>(API 호출 실패시 제공합니다. 호출 성공시 null) | 
| error{errorMessage}  | String  | 필수   | API 호출 오류 상세 설명입니다.<br/>(API 호출 실패시 제공합니다. 호출 성공시 null)        |

---
