// JavaScript source code(
function showClock() {
    let nowTime = new Date();
    let Hour = nowTime.getHours();
    let Min = nowTime.getMinutes();
    let Sec = nowTime.getSeconds();
    let Hour12 = Hour;
    if (Hour > 11) {
        Hour12 = Hour - 12;
    }
    if (Hour < 10) {
        Hour = "0" + Hour
    }
    if (Hour >= 12 && Hour < 22) {
        Hour12 = "0" + Hour12
    }
    if (Min < 10) {
        Min = "0" + Min
    }
    if (Sec < 10) {
        Sec = "0" + Sec
    }
    let AMPM = ""
    if (Hour < 12) {
        AMPM = "AM"
    }
    else {
        AMPM = "PM"
    }
    let hyouzi = localStorage.getItem("thyouzi");
    if (hyouzi == "t24") {
        time = "現在時刻　　" + Hour + "：" + Min + "：" + Sec + "　　　　　";
        document.getElementById("time").innerHTML = time;
    }
    else if (hyouzi == "t12") {
        let time = "現在時刻　　" + AMPM + "　" + Hour12 + "：" + Min + "：" + Sec + "　　";
        document.getElementById("time").innerHTML = time;
    }
}
    showClock();
    setInterval("showClock()", 1000)
    let flag = 0;
    let able = document.getElementById("able");
    let GPAenter = document.getElementById("GPAenter");
    let numvalue = document.getElementById("GPAin").value;
    if (localStorage.getItem("flag") == "1") {
        numvalue = localStorage.getItem("GPAhozon");
        document.getElementById("GPAin").value = localStorage.getItem("GPAhozon");
        document.getElementById("hozon").checked = true;
        document.getElementById("able").innerHTML = ""
        if (numvalue.trim() === "") {
            document.getElementById("GPAin").value = ""
            document.getElementById("hozon").checked = false
        }
        else {
            let value = Number(numvalue);
            if (value >= 2.5 && value <= 4) {
                document.getElementById("able").innerHTML = "99";
            }
            else if (value >= 0 && value < 2.5) {
                document.getElementById("able").innerHTML = "12";
            }
            else {
                document.getElementById("able").innerHTML = ""
            }
        }

        let hozon = document.getElementById("hozon");
        if (hozon.checked == true) {
            localStorage.setItem("GPAhozon", document.getElementById("GPAin").value);
            localStorage.setItem("flag", "1");
        }
        else {
            localStorage.removeItem("GPAhozon");
            localStorage.removeItem("flag");
            hozon.checked = false;
        }
        GPAenter.addEventListener("click", () => {
            let numvalue = document.getElementById("GPAin").value;
            document.getElementById("able").innerHTML = ""
            if (numvalue.trim() === "") {
                alert("正しく入力してください")
                document.getElementById("GPAin").value = ""
            }
            else {
                value = Number(numvalue);
                if (value >= 2.5 && value <= 4) {
                    document.getElementById("able").innerHTML = "99";
                }
                else if (value >= 0 && value < 2.5) {
                    document.getElementById("able").innerHTML = "12";
                }
                else {
                    alert("正しく入力してください")
                    document.getElementById("GPAin").value = ""
                }
            }

            let hozon = document.getElementById("hozon");
            if (hozon.checked == true) {
                localStorage.setItem("GPAhozon", document.getElementById("GPAin").value);
                localStorage.setItem("flag", "1");
            }
            else {
                localStorage.removeItem("GPAhozon");
                localStorage.removeItem("flag");
            }
        });
        GPAin.addEventListener("keydown", (e) => {
            if (e.key !== "Enter") {
                return;
            }
            let numvalue = document.getElementById("GPAin").value;
            document.getElementById("able").innerHTML = ""
            if (numvalue.trim() === "") {
                alert("正しく入力してください")
                document.getElementById("GPAin").value = ""
            }
            else {
                value = Number(numvalue);
                if (value >= 2.5 && value <= 4) {
                    document.getElementById("able").innerHTML = "99";
                }
                else if (value >= 0 && value < 2.5) {
                    document.getElementById("able").innerHTML = "12";
                }
                else {
                    alert("正しく入力してください")
                    document.getElementById("GPAin").value = ""
                }
            }
            let hozon = document.getElementById("hozon");
            if (hozon.checked == true) {
                localStorage.setItem("GPAhozon", document.getElementById("GPAin").value);
                localStorage.setItem("flag", "1");
            }
            else {
                localStorage.removeItem("GPAhozon");
                localStorage.removeItem("flag");
            }
        });
    }
    else {
        document.getElementById("GPAin").value = "";
        document.getElementById("hozon").checked = false;
        GPAenter.addEventListener("click", () => {
            let numvalue = document.getElementById("GPAin").value;
            document.getElementById("able").innerHTML = ""
            if (numvalue.trim() === "") {
                alert("正しく入力してください")
                document.getElementById("GPAin").value = ""
            }
            else {
                value = Number(numvalue);
                if (value >= 2.5 && value <= 4) {
                    document.getElementById("able").innerHTML = "99";
                }
                else if (value >= 0 && value < 2.5) {
                    document.getElementById("able").innerHTML = "12";
                }
                else {
                    alert("正しく入力してください")
                    document.getElementById("GPAin").value = ""
                }
            }

            let hozon = document.getElementById("hozon");
            if (hozon.checked == true) {
                localStorage.setItem("GPAhozon", document.getElementById("GPAin").value);
                localStorage.setItem("flag", "1");
            }
            else {
                localStorage.removeItem("GPAhozon");
                localStorage.removeItem("flag");
            }
        });
        GPAin.addEventListener("keydown", (e) => {
            if (e.key !== "Enter") {
                return;
            }
            let numvalue = document.getElementById("GPAin").value;
            document.getElementById("able").innerHTML = ""
            if (numvalue.trim() === "") {
                alert("正しく入力してください")
                document.getElementById("GPAin").value = ""
            }
            else {
                value = Number(numvalue);
                if (value >= 2.5 && value <= 4) {
                    document.getElementById("able").innerHTML = "99";
                }
                else if (value >= 0 && value < 2.5) {
                    document.getElementById("able").innerHTML = "12";
                }
                else {
                    alert("正しく入力してください")
                    document.getElementById("GPAin").value = ""
                }
            }
            let hozon = document.getElementById("hozon");
            if (hozon.checked == true) {
                localStorage.setItem("GPAhozon", document.getElementById("GPAin").value);
                localStorage.setItem("flag", "1");
            }
            else {
                localStorage.removeItem("GPAhozon");
                localStorage.removeItem("flag");
            }
        });
}