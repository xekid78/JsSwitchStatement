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
