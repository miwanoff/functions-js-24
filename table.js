function printTable(from, to, step, func) {
    if (func === undefined) {
        return;
    }
    // from = from;
    // to = to;
    step = step || 1;
    document.write("<table border='1' cellspacing='0'>");
    for (let x = from; x <= to; x += step) {
        document.write("<tr>");
        document.write("<td>" + x + "</td>");
        document.write("<td>" + func(x) + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}

function quadratic(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}

let expr = "x * 2";
let f;

eval(`f = function (x) { return ${expr};}`);

let double = new Function("x", "return " + expr);

//alert(f(12));
printTable(-4, 4, 1, double);