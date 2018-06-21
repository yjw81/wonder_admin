# BackEnd UI 표준화 가이드

현재까지  진행된 BackOffice 관리툴에 대한 UI 중 컴포넌트화 할 수 있는 부분을 추려서 공통화한다.

대부분 Bootstrap으로 되어있어 해당 라이브러리를 기반으로, 원더쇼핑의 톤앤매너를 사용하여 가볍게 테마화한다. (Pure Bootstrap사용)

![Dooray](http://52.78.228.231/img/capture_adminUI.png)

## Installation

사용하고자 하는 프로젝트의 package.json의 의존성에 다음과 같이 정의 후 npm install.

```json
"dependencies": {
  "wonder_admin": "git+https://[id]:[password]@git-codecommit.ap-northeast-2.amazonaws.com/v1/repos/wonder_admin"
}
```

git repository (git clone)

```url
https://git-codecommit.ap-northeast-2.amazonaws.com/v1/repos/wonder_admin
```

### Table of Contents

- Bootstrap components
- UIO -User Interface Object- Group
- Toast UI

### [Demo](http://52.78.228.231)

#### Bootstrap components

- Typography
- Alert
- Badge
- Breadcrumb
- Buttons
- Button Group
- Collapse(Accordion)
- Dropdowns
- form group
- Modal
- Navs(tab)
- Progress

#### UIO Group

- Layouts
- Login
- List
- View

#### Toast UI

- Data Tables(grid)
- pagination
- Date Picker
- Editor
- Tree UI

### Library 공식 문서

#### [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/)

#### [![Toast UI](https://dooray.com/static_images/toast_dooray.png)](http://ui.toast.com/)

#### [![Sweet Alert](https://sweetalert.js.org./assets/images/logo.svg)](https://sweetalert.js.org/docs/)
