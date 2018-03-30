# JsSwitchStatement
switch文

## 処理
`Math.random()`関数を使用して1 ～ 6のランダムな数字を使って、おみくじの結果を出力します。

## コード
```
(function () {
    'use strict';

    var omikuji = Math.floor(Math.random () * 6) + 1;
    switch (omikuji) {
        case 1:
            console.log("大吉");
            break;
        case 2:
            console.log("中吉");
            break;
        case 3:
            console.log("小吉");
            break;
        case 4:
            console.log("吉");
            break;
        case 5:
            console.log("凶");
            break;
        default:
            console.log("大凶");
            break;
    }

})();
```

## 出力結果  
```
大吉
```
  
## 開発環境
| 開発ツール |  |
|:-|:-|
| OS | Windows10 |
| 仮想化ソフト | Oracle VM VirtualBox 5.2 |
| 構築ソフト | Vagrant 2.0.2 |
| 仮想化上OS | CentOS 6.9 |
| SSHクライアント | PuTTY 0.6.8 |
| FTPクライアント | Cyberduck 6.3.5 |
| エディタ | Atom 1.24.0 |
| 開発言語 | Java Script |
| Js環境 | Node.js 8.10.0 |
