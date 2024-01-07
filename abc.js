
function myFunction() {
    // Get the text field
    var copyText = document.getElementById("target");
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}
  let val=document.getElementById("value");
  let src1=document.getElementById("myRange");
  val.innerText=src1.value;
  src1.addEventListener("input",()=>{
    let val=document.getElementById("value");
    let src1=document.getElementById("myRange");
    val.innerText=src1.value;
  })
var Upper=0;
var Lower=0;
var Digit=0;
var Special=0;
////////////////////////////////////////////////////////////////
let src2=document.getElementById("upper");
src2.addEventListener("input",()=>{
    if(src2.checked)
    {
        Upper=1;

    }
    else
    {
        Upper=0;

    }
})
let src3=document.getElementById("lower");
src3.addEventListener("input",()=>{
    if(src3.checked)
    {
        Lower=1;

    }
    else
    {
        Lower=0;

    }
})
let src4=document.getElementById("number");
src4.addEventListener("input",()=>{
    if(src4.checked)
    {
        Digit=1;

    }
    else
    {
        Digit=0;

    }
})
let src5=document.getElementById("special");
src5.addEventListener("input",()=>{
    if(src5.checked)
    {
        Special=1;

    }
    else
    {
        Special=0;
    }
})
function getVal(val)
{
    let max,min;
    let charecter=["#","@","!","_","%"];
    if(val=="Upper")
    {
        min=65;
        max=90;
        return String.fromCharCode(Math.floor(Math.random() * (max - min) ) + min);
    }
    if(val=="Lower")
    {
        min=97;
        max=122;
        return String.fromCharCode(Math.floor(Math.random() * (max - min) ) + min);
    }
    if(val=="Digit")
    {
        min=48;
        max=57;
        return String.fromCharCode(Math.floor(Math.random() * (max - min) ) + min);
    }
    if(val=="Special")
    {
        return charecter[Math.floor(Math.random() *  charecter.length)];
    }
}
async function hero()
{
    let password=" ";
    let arr=[];
    let count=0;
    if(Upper==1) {arr.push("Upper"); count++;}
    if(Lower==1) {arr.push("Lower"); count++;}
    if(Digit==1){arr.push("Digit"); count++;}
    if(Special==1) {arr.push("Special"); count++;}
    let range=arr.length;
    let val=document.getElementById("myRange").value;
    for(let i=0;i<val;i++)
    {
        let x=arr[Math.floor(Math.random() * arr.length)];
        password+=getVal(x);
    }
    let des1=document.getElementById("target");
    des1.value=password;
    des2=document.getElementById("strength");
    if(count==1 || count==2) des2.innerHTML="<span class='box-border h-[25px] w-[25px] rounded-full bg-gradient-to-l from-red-600 to-transparent  ml-[150px] shadow-2xl flex items-center justify-center'><span class='box-border h-[15px] w-[15px] rounded-full bg-red-600  shadow-2xl'></span></span>"
    else if(count==3) des2.innerHTML="<span class='box-border h-[25px] w-[25px] rounded-full bg-gradient-to-l from-orange-600 to-transparent  ml-[150px] shadow-2xl flex items-center justify-center'><span class='box-border h-[15px] w-[15px] rounded-full bg-orange-600  shadow-2xl'></span></span>"
    else if(count==4) des2.innerHTML="<span class='box-border h-[25px] w-[25px] rounded-full bg-gradient-to-l from-green-500 to-transparent  ml-[150px] shadow-2xl flex items-center justify-center'><span class='box-border h-[15px] w-[15px] rounded-full bg-green-500  shadow-2xl'></span></span>"
}    
