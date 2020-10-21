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
  console.log("styles -",styles);
  if(styles.contains('decrease')){
      console.log("inside if styles - decrease")
      count--;
  }//if
  else if(styles.contains('increase')){
    count++;
  }//if
  else{
      count=0;
  }//else
  if(count > 0){
      console.log("inside color if");
      value.style.color = "green";
  }
  if(count < 0){
      value.style.color = 'red';
  }
  if(count ===0){
      value.style.color = "#333";
  }
  value.textContent = count;
 });//addEventListener
});//forEach