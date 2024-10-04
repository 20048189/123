function sum(a,b,n)
    {
        s=0;
        for(i=1;i<n;i++)
        {
            if(i%a==0 || i%b==0)
                s+=i;
        }
        alert("Sum = "+s);
    }

function GetValues()
{
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    limit = document.getElementById("limit").value;
    document.getElementById("num1").style.display="none";
    document.getElementById("num2").style.display="none";
    document.getElementById("limit").style.display="none";
    document.getElementById("sum").style.display="none";
    document.getElementById("label1").style.display="none";
    document.getElementById("label2").style.display="none";
    document.getElementById("label3").style.display="none";
 
    
}

 function Show()
{
    document.getElementById("num1").style.display="block";
    document.getElementById("num2").style.display="block";
    document.getElementById("limit").style.display="block";
    document.getElementById("sum").style.display="block";
    document.getElementById("label1").style.display="block";
    document.getElementById("label2").style.display="block";
    document.getElementById("label3").style.display="block";
}