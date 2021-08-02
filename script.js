let inputText = document.getElementById("inputText");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("list");
let cnt = 1;

function listAdd() {
    if(inputText.value != ""){
        let addLi = document.createElement("li");
        addLi.setAttribute("id", "li"+cnt);
        addLi.setAttribute("class", "li_style");
        addLi.setAttribute("onclick", "todoClear("+cnt+")");    // `todoClear(${cnt})`
        addLi.innerHTML = inputText.value;
        addLi.innerHTML += "<button class='btn_style' style='float: right;' onclick='todoDelete("+cnt+")'>삭제</button>";
        list.appendChild(addLi);
        inputText.value = "";
        cnt++;
    } else{
        alert("추가할 내용을 입력해주세요.");
    }
}

inputText.addEventListener("keyup", function(event) {
    if(event.keyCode==13) {
        event.preventDefault();
        addBtn.click();
    }
})

function todoClear(cnt) {
    let choicedLi = document.getElementById('li' + cnt);
    if(choicedLi != null) {
        choicedLi.classList.toggle("clear");
    }
}

function todoDelete(cnt) {
    let removeLi = document.getElementById('li' + cnt);
    list.removeChild(removeLi);
}