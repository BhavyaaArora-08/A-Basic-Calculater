function addDigit(digit) {
    document.getElementById('output').value += digit+"";
}

function clr(){
   document.getElementById("output").value = "";
}

function solve()
{
          var text=document.getElementById('output').value;
          document.getElementById('output').value=eval(text);
}

function sign(){
   document.getElementById("output").value *=-1;
}
