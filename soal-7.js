function findIndex(array, number) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === number) {
        return i;
      }
    }
  
    return -1;
  }
  

  console.log(findIndex([12, 3, 4, 5], 3));
  console.log(findIndex([12, 3, 4, 5], 6));
  console.log(findIndex([12, 1, 3, 4, 5], 5));