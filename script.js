const input= document.getElementById("input");
const list= document.getElementById("list");
function operation(){
    if(input.value ===''){
        alert("please provide information!!");
    }
    else{
        let li= document.createElement('li');
        li.innerHTML=input.value;
        list.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    input.value="";
}
list.addEventListener("click",function(rem){
    if(rem.target.tagName ==="SPAN"){
        rem.target.parentElement.remove();
    }
},false);