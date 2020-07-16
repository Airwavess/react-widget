# React Widget

這個專案為使用 React 製作能夠鑲嵌於其他網站的元件，可以至 [demo site](https://react-widget.vercel.app/) 瀏覽網站與 [Wix](https://prairie5270.wixsite.com/mysite) 瀏覽結果。

## Quick Start

在本地端執行專案：

1. clone GitHub 專案。
2. 在專案資料夾中執行 `yarn` 安裝相依套件。
3. 確認 `localhost:3000` 可用。
4. 執行 `yarn dev`，至瀏覽器中輸入 `localhost:3000` 進入網站。

你需要執行以下指令:

```bash
git clone https://github.com/Airwavess/react-widget
cd react-widget
yarn
yarn dev
# open localhost:3000
```

## Project Information

* **Framework**: 使用 [Next.js](https://nextjs.org/) 建構專案
* **CSS Framework**: [Material-UI](https://material-ui.com/)
* **Test Framework**: [jest](https://jestjs.io/) 與 [react-testing-library](https://testing-library.com/docs/react-testing-library/intro)
* **Deploying platform**: [Vercel](https://vercel.com/)

## Documentation

**Project Architecture**

瀏覽於 `docs/` 資料夾中的 [project architecture](./docs/architecture.md)。

**Note**

瀏覽於 `docs/` 資料夾中的 [note](./docs/note.md)。

## Tests

使用以下指令執行單元測試:

```bash
yarn test
```
