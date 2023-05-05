function vacation(input) {
  let days = Number(input[0]);
  let budget = Number(input[1]);
  let people = Number(input[2]);
  let fuelPrice = Number(input[3]);
  let foodPrice = Number(input[4]);
  let roomPrice = Number(input[5]);

  let totalFoodAndAccommodationExpenses = roomPrice * people * days;
  if (people > 10) {
    totalFoodAndAccommodationExpenses *= 0.75;
  }

  let totalExpenses = totalFoodAndAccommodationExpenses;
  let moneyLeft = budget - totalExpenses;

  for (let i = 1; i <= days; i++) {
    let distance = Number(input[5 + i]);
    let expensesForFuel = distance * fuelPrice;
    let expensesForFood = people * foodPrice;

    totalExpenses += expensesForFuel + expensesForFood;

    if (i % 3 === 0 || i % 5 === 0) {
      totalExpenses += totalExpenses * 1.40;
    }

    if (i % 7 === 0) {
      let amountReceived = totalExpenses / people;
      totalExpenses -= amountReceived;
      moneyLeft = budget - totalExpenses;
    }

    if (totalExpenses > budget) {
      console.log(`Not enough money to continue the trip.You need ${ (totalExpenses - budget).toFixed(2) }$ more.`);
      break;
    }
  }

  moneyLeft = budget - totalExpenses;
   console.log(`You have reached the destination.You have ${ moneyLeft.toFixed(2) }$ budget left.`);
}

vacation([
  "10",
  "20500",
  "11",
  "1.2",
  "8",
  "13",
  "100",
  "150",
  "500",
  "400",
  "600",
  "130",
  "300",
  "350",
  "200",
  "300"
]);
