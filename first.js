function fact(){  
    var i, num, f;  
    f = 1;  
    num = document.getElementById("num").value;  
    for(i = 1; i <= num; i++)    
    {  
        f = f * i;  
    }  
    i = i - 1;    
    document.getElementById("res").style.color = "green";
    document.getElementById("res").innerHTML = "The factorial of the number " + i + " is: " + f ;
}
function prime()
{
  num = parseInt(document.getElementById("num").value);
  if(num)
  {
    chk=0;
    for(i=2; i<num; i++)
    {
      if(num%2==0)
      {
        chk++;
        break;
      }
    }
    if(chk==0){
      document.getElementById("res").style.color = "green";
      document.getElementById("res").innerHTML = "Prime Number";
    }
      else{
      document.getElementById("res").innerHTML = "Not A Prime Number";
      document.getElementById("res").style.color = "red"; 
    }
}
}

function arm()
{
    num = document.getElementById("num").value;
    var Number = num;
    var digits = 0;
    while(num > 0)
    {
        digits = digits + 1;
        num = parseInt(num/10);
    }
    num = Number;
    var sum = 0;
    // calculating sum
    while(num > 0) {
    var digit = num%10;
    sum = sum + Math.pow(digit, digits);
    num = parseInt(num/10);
    }
    // checking sum with original number
    if(sum == Number){
    document.getElementById("res").style.color = "green";
    document.getElementById("res").innerHTML = "Armstrong Number";
    }else{
    document.getElementById("res").style.color = "red";
    document.getElementById("res").innerHTML = "Not an Armstrong Number";
    }
}
function pal()
{  
    var a, b, no, temp = 0;  
    no = Number(document.getElementById ("num").value);  
    b = no;  
    while (no > 0)  
    {  
        a = no % 10;  
        no = parseInt( no / 10);  
        temp = temp*10 + a;  
    }  
    if (temp == b)  
    {  
        document.getElementById("res").style.color = "green";
        document.getElementById("res").innerHTML = "It is a Palindrome Number"; 
    }  
    else  
    {  
        document.getElementById("res").style.color = "red";
        document.getElementById("res").innerHTML = "It is not a Palindrome Number";  
    }    
} 