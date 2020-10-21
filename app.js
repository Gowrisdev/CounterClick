// set initial count
console.log('Start')
let count = 0;

//select value and buttons
console.log('selecting buttons and value')
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
console.log(btns);

console.log("entering forEach");

btns.forEach(function(btn){
console.log("inside forEach");
console.log(btn)
 btn.addEventListener("click",function(e){
  console.log("inside eventListener");
  console.log(e.currentTarget.classList);
  const styles = e.currentTarget.classList;
  if(styles.contains('decrease')){
      console.log("inside if")
      count--;
  }//if
  value.textContent = count;
 });
});