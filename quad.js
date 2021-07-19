function subval(){
    let av = document.getElementById("a").value;
    let bv = document.getElementById("b").value;
    let cv = document.getElementById("c").value;
    console.log(av*bv*cv);
    let r1,r2;

    
    r1 = (-bv + Math.sqrt(bv*bv - 4*av*cv))/(2*av);
    r2 = (-bv - Math.sqrt(bv*bv - 4*av*cv))/(2*av);
    let d = bv*bv - 4*av*cv;
    if(d>=0)
    {
        r1 = (-bv + Math.sqrt(d))/(2*av);
        r2 = (-bv - Math.sqrt(d))/(2*av);
        document.getElementById("ans1").innerHTML = "Root 1 : "+r1;
        document.getElementById("ans2").innerHTML = "Root 2 : "+r2;
    }else
    {
        r1 = (-bv)/(2*av) + "+" + ((Math.sqrt(-d))/(2*av)+"i");
        r2 = (-bv)/(2*av) + "-" + (Math.sqrt(-d))/(2*av)+"i";
        document.getElementById("ans1").innerHTML = "Root 1 : "+r1;
        document.getElementById("ans2").innerHTML = "Root 2 : "+r2;
    }
}