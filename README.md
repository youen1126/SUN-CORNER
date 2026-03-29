# 日角工作室 Sun Corner

以「日角工作室」為題的前端切版練習專案，主軸是品牌形象網站的雙頁面呈現（首頁 + About）。

## 專案內容

- `index.html`：首頁，包含 Hero、主打選物、工作室日常與招募區塊
- `about.html`：品牌願景、起源與特色介紹頁
- 固定式導覽列（Navbar）
- 手機版漢堡選單
- 回到頂端按鈕
- 客製化捲軸樣式

## 使用技術

- HTML5
- CSS3
- 簡單的JavaScript（互動邏輯）

## 檔案結構

```text
sunCorner/
├── index.html
├── about.html
├── navbar.html          # 共用 navbar partial
├── navbarLoader.js      # 將 navbar 載入到各頁掛載點
├── navMenu.js           # 漢堡選單開合邏輯
├── backToTop.js         # 回到頂端按鈕邏輯
├── base.css             # 共用基礎樣式
├── style.css            # 首頁樣式
├── about.css            # About 頁樣式
├── scrollbar.css        # 共用自訂捲軸樣式
└── README.md
```

## 開發重點

- 基礎語意化 HTML 結構
- CSS 區塊排版、視覺層次建立
- RWD 響應式調整
- 共用元件抽離

## 後期新增 About 頁面與 Codex 協作紀錄

在專案後期新增 `about.html` 時，使用 Codex 協助完成以下工作：

- 新增 About 頁面與對應樣式檔 `about.css`
- 導覽列手機版改為漢堡選單（含開闔動畫與鍵盤 Esc 關閉）
- 將捲軸樣式從 `style.css` 抽離為 `scrollbar.css`，並套用到兩頁
- 將 Navbar 抽成獨立 `navbar.html`，透過 `navbarLoader.js` 載入到兩頁
- 修正 About 頁手機版 navbar 會遮住 `eyebrow` 文字的間距問題

## 作者

- UN
