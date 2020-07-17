# Note

## How did you decide which technologies to use as part of your solution?

這個專案的目標為建立能夠嵌入在其他網站 (例如 Wix) 的 React 元件，原本使用 [Web Component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) 這項技術，但是發現將 Web component 嵌入 Wix 中時會自動跑版，包含 Wix 預設的 Web component 也是，所以最終選擇使用 iframe 嵌入 React 元件。

如果使用 [create-react-app](https://github.com/facebook/create-react-app) 建立 React 元件，其使用的渲染方式是 client-side rendering，不利於嵌入元件的網站 SEO，而且等待元件載入的速度也會影響使用者體驗。

因此，這個專案選擇使用 [next.js](https://nextjs.org/) 並且使用 Static HTML Export，而非使用 server-side rendering，使用 Static HTML Export 有利於元件在其他網站嵌入的加載速度，不僅有利於優化使用者體驗，同時也有利於SEO。

此外，為了測試所建立的 React 元件，使用 [jest](https://jestjs.io/) 與 [react testing library](https://testing-library.com/docs/react-testing-library/intro) 作為主要的測試框架，[React 官方](https://zh-hant.reactjs.org/docs/test-utils.html)推薦使用 react testing library 撰寫測試，它促使我們能寫出像使用者一樣操作元件的測試。 

## Are there any improvements you could make to your submission?

**改善註解**

由於並未考慮到長遠維護，所以在專案中很少註解，如需改善，可以從增加程式註解下手。

**改善測試**

由於對於前端測試並不是非常熟悉，不確定測試應該包含哪些項目，因此測試的改善可以從瞭解前端的測試目標下手，再透過測試目標建立測試。

**改善瀏覽嵌入至其他網站的元件頁面**

由於元件使用 iframe 嵌入至其他網站，而為了使元件的樣式能夠較為符合其他網站，並沒有限制元件的 `height` 與 `width`，因此在單獨瀏覽[嵌入至其他網站的元件頁面](https://react-widget.vercel.app/shared-info/image1)時，樣式是呈顯於滿版的情況。因此可以研究如何像是 [gist](https://gist.github.com/Airwavess/780c4c8099074388560ec77f0371b848)，能夠在嵌入至其他網站時僅保留程式碼區塊，但是在單獨瀏覽時，可以擁有較好的樣式。

## What would you do differently if you were allocated more time?

由於此次的專案時間限制為 4 天，花費不少時間在摸索過往沒碰過的技術，例如: next.js 或測試框架，因此專案較為粗糙，所以如果有更多時間可以朝向優化專案的架構與程式碼註解。此外，單元測試也是現學現賣，如果有更多時間可以研究別人如何撰寫前端測試，並且更瞭解測試框架的細節。

也考慮建立 Storybook，Storybook 可以幫助我們確定各個元件在不同狀態時呈現的模樣，有利於開發團隊討論細節。
