function offf(){
    alert("Calculator Is Off")
    document.getElementById('1').disabled=true;
    document.getElementById('2').disabled=true;
    document.getElementById('3').disabled=true;
    document.getElementById('4').disabled=true;
    document.getElementById('5').disabled=true;
    document.getElementById('6').disabled=true;
    document.getElementById('7').disabled=true;
    document.getElementById('8').disabled=true;
    document.getElementById('9').disabled=true;
    document.getElementById('0').disabled=true;
    document.getElementById('+').disabled=true;
    document.getElementById('-').disabled=true;
    document.getElementById('*').disabled=true;
    document.getElementById('/').disabled=true;
    document.getElementById('%').disabled=true;
    // document.getElementById('on').disabled=true;
}

function onn(){
    alert("Calculator is on")
    document.getElementById('1').disabled=false;
    document.getElementById('2').disabled=false;
    document.getElementById('3').disabled=false;
    document.getElementById('4').disabled=false;
    document.getElementById('5').disabled=false;
    document.getElementById('6').disabled=false;
    document.getElementById('7').disabled=false;
    document.getElementById('8').disabled=false;
    document.getElementById('9').disabled=false;
    document.getElementById('0').disabled=false;
    document.getElementById('+').disabled=false;
    document.getElementById('-').disabled=false;
    document.getElementById('*').disabled=false;
    document.getElementById('/').disabled=false;
    document.getElementById('%').disabled=false;
    // document.getElementById('on').disabled=false;
}