let count1 = 0;
let count2 = 0;
let count3 = 0;

document.getElementById("decrease1").onclick = function() {
    if (count1 > 0) { 
        count1 -= 1;
    }
    document.getElementById("count1").innerText = count1;
}

document.getElementById("increase1").onclick = function() {
    count1 += 1;
    document.getElementById("count1").innerText = count1;
}

document.getElementById("decrease2").onclick = function() {
    if (count2 > 0) { 
        count2 -= 1;
    }
    document.getElementById("count2").innerText = count2;
}

document.getElementById("increase2").onclick = function() {
    count2 += 1;
    document.getElementById("count2").innerText = count2;
}

document.getElementById("decrease3").onclick = function() {
    if (count3 > 0) { 
        count3 -= 1;
    }
    document.getElementById("count3").innerText = count3;
}

document.getElementById("increase3").onclick = function() {
    count3 += 1;
    document.getElementById("count3").innerText = count3;
}
