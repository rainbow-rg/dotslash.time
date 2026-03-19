// JavaScript source code
let koushinflag = 0;
let backgroundcolor = localStorage.getItem("backgroundcolor"); 
let thyouzikeisiki = localStorage.getItem("thyouzi");
function henkoudelete() {
    document.getElementById("kanryou").innerHTML = ""
}
if (localStorage.getItem("koushinflag") === "1") {
    document.body.style.backgroundColor = backgroundcolor;
    thyouzikeisiki = localStorage.getItem("thyouzi");
    document.getElementById("hyouzikeisiki").value = thyouzikeisiki;
    document.getElementById("haikei").value = backgroundcolor;
}
koushin.addEventListener("click", function () {
    backgroundcolor = document.getElementById("haikei").value;
    thyouzikeisiki = document.getElementById("hyouzikeisiki").value;
    document.body.style.backgroundColor = backgroundcolor;
    localStorage.setItem("backgroundcolor", backgroundcolor);
    localStorage.setItem("koushinflag", "1");
    localStorage.setItem("thyouzi", thyouzikeisiki);
    document.getElementById("kanryou").innerHTML = "変更されました";
    setTimeout("henkoudelete()", 5000)
    let bg = document.getElementById("haikei").value
    switch (bg) {
        case "#F0F0F0":
            document.getElementById("GPAin").style.backgroundColor = "#F0F0F0"
    }
});
defaultbutton.addEventListener("click", function () {
    localStorage.removeItem("backgroundcolor");
    localStorage.removeItem("koushinflag");
    localStorage.removeItem("thyouzi");
    document.body.style.backgroundColor = "white";
    localStorage.setItem("thyouzi", "t24");
    document.getElementById("hyouzikeisiki").value = "t24";
    document.getElementById("haikei").value = "white";
    document.getElementById("kanryou").innerHTML = "変更されました";
    setTimeout("henkoudelete()", 5000)
});

