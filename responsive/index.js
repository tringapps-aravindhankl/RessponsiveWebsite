let getimage=document.getElementById("getImage");
let setimage=document.getElementById("setImage");
function On(picture){
    getimage.src=picture;
    setimage.style.display="block";
}
function Remove(){
    setimage.style.display="none";
}