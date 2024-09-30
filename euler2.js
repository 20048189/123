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
    sum(num1,num2,limit);
}