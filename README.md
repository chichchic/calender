# calender
[데모 링크](https://chichchic.github.io/calender/)

Todo List를 관리할 수 있는 달력 뷰입니다.

you don't know js도서 1부를 읽고 응용해보기 위해 제작된 프로젝트입니다.

## 사용 기술 스택

- javascript
- scss
- webpack

## 구조

소스 폴더를 5가지로 분류하여 제작했습니다.

-  component

페이지 혹은 공통으로 사용될 수 있는 컴포넌트를 관리하는 폴더입니다.

- fixture

공용으로 사용되는 함수와 상수들을 관리하는 폴더입니다.

- page

라우터에서 렌더링할 때 사용되는 코드를 관리하는 폴더입니다.

- router

 SPA 구조에서 페이지 변경을 시키기 위해 사용되는 라우터 기능을 제공합니다.

- style

스타일을 관리하는 폴더입니다.

공통, 컴포넌트, 페이지로 분류하여 관리합니다.

## 페이지 설명

URI를 변경해 페이지를 이동시킬 수 있습니다.

적절한 파라미터를 사용 해 페이지 정보 또한 변경 가능합니다.

### day_page

![Screen Shot 2021-05-04 at 8.28.19 PM](https://github.com/chichchic/calender/blob/main/readme_img/day_page.png)

**주소**

page: /date:year:month:date

**기능**

- +버튼을 통해 할 일을 추가할 수 있습니다.
- 체크박스를 클릭해 완료 항목으로 만들 경우 텍스트에 취소선이 표시됩니다.
- 텍스트를 클릭해 수정이 가능합니다.
- 텍스트에 아무것도 적지않을 경우 삭제됩니다.
- 항목들의 순서를 드래그를 통해 변경이 가능합니다.



### month_page

![Screen Shot 2021-05-04 at 8.38.47 PM](https://github.com/chichchic/calender/blob/main/readme_img/month_page.png)

**주소**

page: /month:year:month

**기능**

- 일에 해당하는 항목 선택시 해당 날짜의 페이지로 이동

### year_page

![Screen Shot 2021-05-04 at 8.38.47 PM](https://github.com/chichchic/calender/blob/main/readme_img/year_page.png)

**주소**

page: '/year:year'

**기능**

- 네비게이션 바에 위치한 연도를 더하거나 빼 다른 연도의 달력을 볼 수 있음
- 달에 해당하는 항목 선택시 해당 달의 페이지로 이동
- 오늘에 해당하는 날짜 표시