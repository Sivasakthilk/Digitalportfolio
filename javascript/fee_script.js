function getInputValue(){

    let inputVal=document.getElementById("uid").value;
    let a=1;

    if(inputVal==11){
        document.getElementById("demo").innerHTML ="JEYA GEETHA";
        document.getElementById("demo1").innerHTML ="10000";
    }
    else if(inputVal==33)
    {
        document.getElementById("demo").innerHTML ="JIVITHA";
        document.getElementById("demo1").innerHTML ="230";  
    }
    
    else if(inputVal==22)
    {
        document.getElementById("demo").innerHTML ="SIVA SAKTHI";
        document.getElementById("demo1").innerHTML ="20000"; 
    }
    
    else{
        document.getElementById("demo").innerHTML ="No Records Found";
        document.getElementById("demo1").innerHTML ="0";
    }
    
}

