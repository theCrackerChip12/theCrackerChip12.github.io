let x=Math.PI/2;
let x1=x/2
let n1=Math.pow((Math.cos(x1)),2).toPrecision(10);
let n2=((Math.tan(x)+Math.sin(x))/(2*Math.tan(x))).toPrecision(10);
document.write("The identify is ","<b>",n1==n2,"</b>"," to ",x)
