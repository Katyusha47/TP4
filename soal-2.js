const stock = 0;
const milkNeeded = 25;

if (stock > milkNeeded) {
    stock = stock - milkNeeded;
    console.log("Processing your order..");
} else {
    console.log("out of stock");
}

console.log("thank you");