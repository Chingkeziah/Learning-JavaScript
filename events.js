window.onload = function(){
    alert('Welcome to a new JavaScript concept! Here you will be learning about events');
}
var btn = document.getElementById('btn')
btn.addEventListener("click", ()=>{
    alert("This button was clicked")
})
 
var mylink = document.getElementById('myLink');
mylink.addEventListener("mouseover", () => {
   console.log("hi there")
})
mouseover();
