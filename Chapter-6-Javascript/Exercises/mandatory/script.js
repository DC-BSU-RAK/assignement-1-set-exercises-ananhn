// Function to calculate
function calculate() {
    const cost = parseFloat(document.getElementById("cost").value);
    const litresPurchased = parseFloat(document.getElementById("litrespurchased").value);
    const total = cost * litresPurchased;
    document.getElementById("total").textContent = `Total Cost: £${total.toFixed(2)}`;
}

// Add event listener to button
document.getElementById("calculate").addEventListener("click", calculate);

