 var randomNum1 = Math.floor(Math.random()*6)+1;// generating randomnum1
 var randomNum2= Math.floors(Math.random() *6)+1;

 //make sure using floor instead of round as when random generator goes 
//  above 6.5 , it rounds to 7 -> which is not valid
 

 document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomNum1+".png");
 document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNum2+".png");
 
 if(randomNum1>randomNum2){
     document.querySelector("h1").textContent="Player1 wins"
 }

else if(randomNum1==randomNum2) {
    document.querySelector("h1").textContent="IT's a draw"
}
 else{
    document.querySelector("h1").textContent="Player2 wins"
 }
 
// console.log(random);

