# [MUDIO](https://mudio-enjoy-music.web.app/) :musical_note:

##### 中文 | [English](./README.md)

## 大綱

- [簡介](#簡介)
- [DEMO](#DEMO)
  - [測試帳戶](#測試帳戶)
- [使用技術](#使用技術)
- [功能](#功能)
- [聯絡方式](#聯絡方式)

## 簡介

MUDIO 是一個仿 Spotify 的音樂網站，旨在提供用戶豐富的音樂體驗，在不同裝置皆可收聽古典音樂，使用關鍵字搜尋並播放專輯中的音樂，並透過會員系統讓用戶可自由建立個人化的播放清單。

![專案圖片（裝置別）](/images/readme-pic.png)

## DEMO

https://mudio-enjoy-music.web.app/

##### 測試帳戶

MUDIO 需要登入才可建立個人化播放清單，測試帳密如下：

| 帳 號         | 密 碼   |
| ------------- | ------- |
| user@user.com | user123 |

## 使用技術

![專案使用技術](/images/tool.png)

## 功能

#### :play_or_pause_button: 播放/暫停

進入首頁後，點擊畫面下方播放鍵即可播放儲存在 Firebase Storage 的音樂。


https://github.com/GemaLuo/Mudio/assets/112456014/67033676-e4a2-4e52-b1cb-f96521562a39

<br>

#### :level_slider: 拖曳進度條

播放音樂的同時，播放/暫停鍵下方的進度條會隨著歌曲進度變化，也可以操作滑鼠左右拖曳進度條，調整歌曲進度，左側的當前時間也會同步改變。


https://github.com/GemaLuo/Mudio/assets/112456014/5a81967a-8d6e-4d94-a31a-e9133902e8ac

<br>

#### :arrow_backward::arrow_forward: 上/下一首

在播放預設音樂時，可依照喜好調整上一首與下一首。


https://github.com/GemaLuo/Mudio/assets/112456014/87afbe61-b1be-471f-af33-5cedf6fb36c3

<br>

#### :twisted_rightwards_arrows: 隨機播放

選取隨機播放鍵後，會隨機自動播放曲目。


https://github.com/GemaLuo/Mudio/assets/112456014/24ce50c7-965a-4a78-a388-f260635d2021

<br>

#### :mag: 搜尋

點擊左側選單的搜尋後，在搜尋框中輸入關鍵字即可找到想聽的曲目，直接點擊並播放該曲目。


https://github.com/GemaLuo/Mudio/assets/112456014/129029cd-337d-43a9-b5d8-0d312de62531

<br>

#### :heavy_plus_sign: 建立播放清單

點擊左側選單的「建立播放清單」，畫面中央跳出的表單填選完畢後送出，資訊及相片會儲存至 Firebase 的 Firestore Database，確認上傳成功後，可以至左側選單的「你的音樂庫」中查找建立過的播放清單以及詳細內容。


https://github.com/GemaLuo/Mudio/assets/112456014/872e2738-6115-4f0b-b537-d12093d6b69b

<br>

#### :loud_sound: 音量調整

電腦使用者可以點擊網頁右下角的音量鍵調整音量大小。


https://github.com/GemaLuo/Mudio/assets/112456014/8e9a441d-8ea7-41da-af31-72da99400fac

<br>

#### :bust_in_silhouette: 會員頁

點擊右上角的會員頭貼，選擇個人檔案後，從Firestore Database提取使用者註冊時建立的資料及頭貼並渲染在畫面。


https://github.com/GemaLuo/Mudio/assets/112456014/6299d4d7-754a-4ab1-8a23-427b5dc6b954

<br>

#### 專輯與藝人頁面

無論點擊進入專輯或是藝人區塊，都有列出相關資訊與曲目供使用者參考與聆聽。


https://github.com/GemaLuo/Mudio/assets/112456014/4c3f6928-fcb9-454f-a16f-da32ac9d6e61

<br>

#### :iphone: 響應式頁面

響應式頁面的設計讓平板及手機使用者也能有好的使用體驗。


https://github.com/GemaLuo/Mudio/assets/112456014/bfedc284-8d8d-48d3-8e2f-ad531cfb5860

<br>

## 聯絡方式

:woman_technologist: Gema Luo<br>
:email: gemaluowenjun@gmail.com
