function sum(a,b,n)
    {
        s=0;
        for(i=1;i<n;i++)
        {
            if(i%a==0 || i%b==0)
                s+=i
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


Array
//  1. Create a function which takes parameters a,b,l
// l is a list of integers, Find the sum of all the multiples of a or b in l.

function sumMultiples(a, b, l) {
    return l.reduce((sum, current) => {
        if (current % a === 0 || current % b === 0) {
            return sum + current;
        } else {
            return sum;
        }
    }, 0);
}

const a = 3;
const b = 5;
const l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumMultiples(a, b, l));