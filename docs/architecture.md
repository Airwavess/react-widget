# Project architecture

## Directories Arrangement

```
.
├── components
│   ├── InfoCard.js
│   ├── NavBar.js
│   └── SharedLinkModal.js
├── next.config.js
├── package.json
├── pages
│   ├── _app.js
│   ├── _document.js
│   ├── index.js
│   └── shared-info
│       ├── index.js
│       └── [infoId].js
├── src
│   ├── config.js
│   └── theme.js
├── __tests__
│   ├── components
│   │   ├── InfoCard.test.js
│   │   └── SharedLinkModal.test.js
│   └── pages
│       ├── index.test.js
│       └── shared-info.test.js
└── yarn.lock
```

## Pages

在這個專案中主要提供三個頁面，分別為首頁 `index.js`、管理能夠分享的資訊元件頁面 `shared-info/index.js`，以及能夠嵌入在其他網站的元件頁面 `shared-info/[id].js`。

首頁中使用自定義 API 接取圖片與影片的資料，使用者可從**首頁**點擊連結至**管理分享資訊元件的頁面**`。

在管理分享資訊元件的頁面中同樣會使用自定義 API 接取圖片與影片的資料，使用者可以點擊在資訊卡下方的「Share」按鈕取得 embed url。

embed url 會連結至 `shared-info/[id].js`，使用者可以透過 embed url 嵌入對應的元件至其他網站。

## Components

在這個專案中共有三個元件放在 `components` 資料夾，分別為:

* InfoCard: 能被嵌入至 Wix 或其他網站的元件。
* NavBar: 導覽列元件。
* SharedLinkModal: 使用者點擊在 InfoCard 元件上的「Share」按鈕後，顯示 embed url 的彈跳視窗元件。

## Tests

這個專案使用 Jest 與 react-testing-library 作為主要的測試框架，所有的測試檔案放置於 `__test__/` 資料夾中，而測試檔案則是根據待測檔案的位置與名稱決定，例如 `__test__/pages/index.js`。

## API

這個專案使用的 API 建立於另一個 [GitHUb 專案](https://github.com/Airwavess/react-widget-api)，技術為使用 next.js 的 API Routes。
