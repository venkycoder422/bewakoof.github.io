document.querySelector("#cart").addEventListener("click",cartfn);

// var cartData = ;
// var l=cartData.length();
// console.log(l)

function cartfn(){
    if(JSON.parse(localStorage.getItem('cartData'))===null  || JSON.parse(localStorage.getItem('cartData')).length==0 ){
        window.location.href="ecart.html";
    }
    else{
        window.location.href="cart.html";
    }
}