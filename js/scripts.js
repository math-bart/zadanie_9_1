function getTriangleArea(a, h) {
    if (a > 0 && h > 0) {
        var triangleArea = a * h / 2;
    } else {
      alert("Nieprawidłowe dane");
      consle.log("Nieprawidłowe dane");
    }
    return triangleArea;
}

console.log(getTriangleArea(10, 6));
var a = prompt("Enter length of the base of the triangle");
var h = prompt("Enter height of the triangle");
var triangleArea1 = getTriangleArea(10, 15);
var triangleArea2 = getTriangleArea(5, 5);
var triangleArea3 = getTriangleArea(a, h);
alert("Titangle arena is, " + triangleArea3);
