var main = document.getElementById("main")
var arr = ["./images/others/1.jpg","./images/others/2.jpg","./images/others/3.jpg"]
for(var i=0; i<arr.length;i++){
    var createImg = document.createElement("img")
    createImg.setAttribute("src", arr[i])
    createImg.setAttribute("class", "testClass")
    createImg.setAttribute("onClick", "testFunc(this)")
    main.appendChild(createImg)
}

function testFunc(e){
    var modal = document.getElementById("modal")
    modal.classList.add('modal-open')
    modal.classList.remove('modal-close');
    modal.style.display = "block"
    document.getElementById("modal-img").setAttribute("src",e.src)
}

function onClosedImagModal(){
    var modal = document.getElementById("modal")
    modal.classList.add('modal-close')
    modal.classList.remove('modal-open');
    modal.style.display = "none"
}