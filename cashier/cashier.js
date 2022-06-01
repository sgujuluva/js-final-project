let changeAvailable = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05];

function cashierProblem(total, paidWith) {
  let amountToBeReturned = (paidWith - total).toFixed(2);

  console.log(`The amount to be returned is: ${amountToBeReturned}€`);

  for (let item of changeAvailable) {

    if (amountToBeReturned % item === 0) {
      let sum = Math.floor(amountToBeReturned / item);
      console.log(`${sum} x ${item}€`);
      break;
    }else if (amountToBeReturned % item > 0) {
   
      let sum = Math.floor(amountToBeReturned / item);

      amountToBeReturned -= item * sum;
      amountToBeReturned = amountToBeReturned.toFixed(2);

      if (sum != 0) {
        console.log(`${sum} x ${item}€`);
      }
    } 
  }
}
cashierProblem(5.5, 50);

// 44.5 /  100 =  0.445 =>  0
// 44.5/20 = 2

40  % 0 == 0

