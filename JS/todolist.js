
closeIcon();
let buttonDom=document.getElementById("liveToastBtn");
buttonDom.addEventListener("click", newElement);

checkedFunc();

let closeDom=document.getElementsByClassName("close");
for (var i = 0; i < closeDom.length; i++) {
    closeDom[i].addEventListener('click', closeFunc, false);
}

// X iconu ekleme
function closeIcon(){
        let liTag=document.getElementsByTagName("LI");
    for(let i=0; i<liTag.length; i++){
        let span=document.createElement("span");
        let txt=document.createTextNode("\u00d7");
        span.className="close";
        span.appendChild(txt);
        liTag[i].appendChild(span);
    }
}

// Silme işlemi
function closeFunc(){
    console.log(this, 'clicked element');
    let li=this.parentElement;
    li.style.display="none";
}


// Checked ikon işareti ekleme
function checkedFunc(){
    let list=document.querySelector('#list');
    list.addEventListener('click',function(event){
        if(event.target.tagName==="LI"){
            event.target.classList.toggle('checked');
        }
    },false);
}

// İnput veri ekleme
function newElement(){
    let liDom=document.createElement("li");
    let inputValue=document.getElementById("task").value;
    let liText=document.createTextNode(inputValue);
    liDom.appendChild(liText);
    if(inputValue=== ""){
        errorToast();
        console.log("Listeye boş ekleme yapamazsınız...");
    }else{
        let span=document.createElement("span");
        let txt=document.createTextNode("\u00d7");
        span.className="close";
        span.appendChild(txt);
        span.addEventListener('click', closeFunc, false);
        liDom.appendChild(span);
        document.getElementById("list").appendChild(liDom);
    }
    document.getElementById("list").value="";
   
    successToast();
}

function successToast() {
    let toast = document.querySelector('#successToast');
    let toastAdd = new bootstrap.Toast(toast);
    toastAdd.show();
  }
  
  function errorToast() {
    let toast = document.querySelector('#errorToast');
    let toastAdd = new bootstrap.Toast(toast);
    toastAdd.show();
  }







