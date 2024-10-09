function calculateTriangleArea(a, b, c) {
    // Calculate the semi-perimeter
    const s = (a + b + c) / 2;

    // Calculate the area using Heron's formula
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return area;
}

// Triangle sides
const side1 = 5;
const side2 = 6;
const side3 = 7;

// Calculate area
const area = calculateTriangleArea(side1, side2, side3);

console.log(`The area of the triangle with sides ${side1}, ${side2} and ${side3} is ${area.toFixed(2)}`);
