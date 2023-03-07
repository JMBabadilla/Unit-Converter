function kg(){
    let kg_input = document.getElementById("num1").value;
    let lb_input = document.getElementById("num2");
    let g_input = document.getElementById("num3");
    let t_input = document.getElementById("num4");


    let lb = (kg_input * 2.20462);
    lb_input.value = lb;

    
    let g = (kg_input * 1000);
    g_input.value = g;

    let t = (kg_input / 1000);
    t_input.value = t;
}

function lb(){
    let kg_input = document.getElementById("num1");
    let lb_input = document.getElementById("num2").value;
    let g_input = document.getElementById("num3");
    let t_input = document.getElementById("num4");

    let g = (lb_input /0.00220462);
    g_input.value = g;

    let kg = (lb_input /2.20462);
    kg_input.value = kg;

    let t = (lb_input /2204.62);
    t_input.value = t;
}

function g(){
    let kg_input = document.getElementById("num1");
    let lb_input = document.getElementById("num2");
    let g_input = document.getElementById("num3").value;
    let t_input = document.getElementById("num4");

    let kg = (g_input /1000);
    kg_input.value = kg;

    let lb = (g_input /453.592);
    lb_input.value = lb;

    let t = (g_input /1000000);
    t_input.value = t;
}

function t(){
    let kg_input = document.getElementById("num1");
    let lb_input = document.getElementById("num2");
    let g_input = document.getElementById("num3");
    let t_input = document.getElementById("num4").value;

    let g = (t_input /1000000);
    g_input.value = g;

    let kg = (t_input /0.001);
    kg_input.value = kg;

    let lb = (t_input /0.000453592);
    lb_input.value = lb;
}