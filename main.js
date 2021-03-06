var inputs=[];

function paragraph1(){
    for (var i = 1; i <= 6; i++) {
        inputs.push(document.getElementById("para1_box"+i).value);
        document.getElementById("display_para1").innerHTML= inputs.join(".");
    }
}

function paragraph2(){
    for (var i = 1; i <= 6; i++) {
        inputs.push(document.getElementById("para2_box"+i).value);
        document.getElementById("display_para2").innerHTML= inputs.join(".");
    }
}