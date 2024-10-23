function minMax(arrayOfNumber) {
    let currentMin = arrayOfNumber[0];
    let currentMax = arrayOfNumber[0];
    for (value of arrayOfNumber) {
        if (value < currentMin) {
            currentMin = value;
        } else if (value > currentMax) {
            currentMax = value;
        }
        
    }

    console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);