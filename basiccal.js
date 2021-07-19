let display = document.getElementById("dis");
display.innerHTML = 0;
let a,o,b,ans;

function store(num){
    if(o==undefined)
    {
        if(a==undefined)
        {
            a=num;
        }else{
            a = a + num;
        }
        display.innerHTML = a;
    }else{
        if(b==undefined)
        {
            b=num;
        }else{
            b = b + num;
        }
        display.innerHTML = a + o + b;
    }
}

function operation(op){
    o = op;
    display.innerHTML = a + o;

}

function answer(){
    let a1,b1;
    a1 = parseFloat(a);
    b1 = parseFloat(b);
    if(o=="+")
    {
        ans = a1 + b1;
        display.innerHTML = ans;
        a = ans;
        
    }else if(o=="-")
    {
        ans = a1 - b1;
        display.innerHTML = ans;
        a = ans;
    }else if(o=="*")
    {
        ans = a1 * b1;
        display.innerHTML = ans;
        a = ans;
    }else if(o=="/")
    {
        ans = a1 / b1;
        display.innerHTML = ans;
        a = ans;
    }else if(o=="%")
    {
        ans = (a1 * b1)/100;
        display.innerHTML = ans;
        a = ans;
    }
   
    b=undefined;
    o=undefined;
    a = ans;
}

function clr(){
    a=undefined;
    b=undefined;
    ans=undefined;
    o=undefined;
    display.innerHTML = 0;
}

function back(){
    if(o==undefined)
    {
        a = a.substring(0, a.length - 1);
        display.innerHTML = a;
        if(a=="")
        {   
            display.innerHTML = 0;
        }else
        {
            display.innerHTML = a;
        }
    }else if(o!=undefined && b==undefined)
    {
        o = undefined;
        display.innerHTML = a;
    }else{
        if(b=="")
        {
            b=undefined;
            o=undefined;
            display.innerHTML = a;
        }else
        {
            b = b.substring(0, b.length - 1);
            display.innerHTML = a + o + b; 
        }
    }
    
}