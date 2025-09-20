// -------------------------------
// Part 1: Variables & Conditionals
// -------------------------------
document.getElementById("checkAgeBtn").addEventListener("click", () => {
  const age = document.getElementById("ageInput").value;
  const result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = "✅ You are eligible to vote.";
  } else if (age > 0) {
    result.textContent = "❌ You are too young to vote.";
  } else {
    result.textContent = "⚠️ Please enter a valid age.";
  }
});

// -------------------------------
// Part 2: Functions
// -------------------------------
function calculateTotal(prices) {
  // Loops through prices and sums them up
  let total = 0;
  for (let price of prices) {
    total += price;
  }
  return total;
}

document.getElementById("calcTotalBtn").addEventListener("click", () => {
  const items = [500, 250, 120, 2000, 80000]; // Example shopping cart
  const total = calculateTotal(items);
  document.getElementById("totalResult").textContent = `🛒 Total cost: KES ${total}`;
});

// -------------------------------
// Part 3: Loops
// -------------------------------
document.getElementById("showNumbersBtn").addEventListener("click", () => {
  const list = document.getElementById("numbersList");
  list.innerHTML = ""; // Clear previous results

  // Loop from 1 to 10
  for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    li.textContent = `Number ${i}`;
    list.appendChild(li);
  }
});

// -------------------------------
// Part 4: DOM Manipulation
// -------------------------------
document.getElementById("toggleColorBtn").addEventListener("click", () => {
  // Toggle background color between two states
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightyellow" ? "#8c4c2f" : "lightyellow";
});

document.getElementById("addItemBtn").addEventListener("click", () => {
  const list = document.getElementById("dynamicList");
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${list.children.length + 1}`;
  list.appendChild(newItem);
});
