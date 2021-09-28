function display(val){
  document.getElementByid("textval").value+= val;
}
function evaluate(){
  let x= document.getElementById("textval").value;
  let y= eval(x);
  document.getElementById("textval").value=y;
  
}
function clr(){
  document.getElementById("textval").value="";
}