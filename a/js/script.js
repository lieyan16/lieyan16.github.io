function clockon() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    var day = now.getDay();
    var week;
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    month = month + 1;
    var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    week = arr_week[day];
    var greetings;
    if (day == 0) {
        greetings = "今天是星期天，周末就要结束了😢";
    } else if (day == 6) {
        greetings = "今天是星期六，太棒了😁";
    } else if (day == 5) {
        greetings = "今天是星期五，坚持一下就放假了😁";
    } else {
        greetings = "今天是" + week + "，愿你有美好的一天🙌！";
    }
    var time = year + "年" + month + "月" + date + "日 " + week + " " + hour + "时" + minute + "分" + second + "秒";
    var textTime = document.createTextNode(time);
    var textGreetings = document.createTextNode(greetings);
    var clockDiv = document.getElementById("clock");
    if (clockDiv.hasChildNodes()) {
        clockDiv.removeChild(clockDiv.firstChild);
    }
    clockDiv.appendChild(textTime);
    var greetingsDiv = document.getElementById("greetings");
    if (greetingsDiv.hasChildNodes()) {
        greetingsDiv.removeChild(greetingsDiv.firstChild);
    }
    greetingsDiv.appendChild(textGreetings);
}
window.onload = function () {
    clockon();
    setInterval(clockon, 1000); // 每隔1秒钟更新时间和祝福语
}