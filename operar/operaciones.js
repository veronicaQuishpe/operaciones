function factorial(){
    var num=parseInt(prompt("ingresa un numero"));
    var f=1;
    for(var i=1;i<=num;i++){
        f *=i;
    }
    document.write("el factorial es: "+f);
}
function fechaactual(){
    var fecha=new Date();
    document.write("hoy es: " + fecha.getDate()+'/'+(fecha.getMonth()+1)+'/'+fecha.getFullYear());
}
function mostrar(){
    var i=0;
    i++;
    alert("la variable se subtlecypto"+ i++);
}
function suma(){
    var num1 =parseInt(prompt("ingrese el primer numero"));
var num2 =parseInt(prompt("ingrese el segundo numero"));
var suma=num1+num2;
document.write("la suma es: " +suma);


}
function menu(){
    document.write("1.- factorial <br>2.- fecha actaul <br> 3.- suma ")
}
function funcione(){
   
    
var dato=parseInt(document.getElementById("num1").value);
    switch(dato){
        case 1: factorial();
        break;
        case 2: fechaactual();
        break;
        case 3: suma();
        break;
        default: document.write("el numero no se encuentra en el rango");
    }

    

}
function arreglos(array){
    for( i=0;i<array.length;i++){
        array[i]=parseInt(prompt("ingrese sueldo"));
    }

}
function calculargasto(pagos){
    var acum=0;
    for(var i =0 ; i<pagos.length;i++){
        acum+=pagos[i];
    }
    return acum;
}
function generarnumeros(){
    var dim =parseInt(prompt("ingresa la dimesnsion"));
    var listanum = new Array(dim);
    for(var i =0 ; i<listanum.length;i++){
        listanum[i]=parseInt(Math.random()*10);
    }
    document.write(listanum.toString());
}





