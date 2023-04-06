function springVacation(input) {
    let days = Number(input.shift());
    let budget = Number(input.shift());
    let groupSize = Number(input.shift());
    let fuelPrice = Number(input.shift());
    let foodPricePerPerson = Number(input.shift());
    let hotelPricePerPerson = Number(input.shift());
    let expenses = 0;
    let currentDay = 0;
    let discountedHotelPrice = groupSize > 10 ? 0.75 * hotelPricePerPerson : hotelPricePerPerson;
  
    for (let i = 0; i < days; i++) {
      currentDay++;
      let distance = Number(input.shift());
      let travelExpenses = distance * fuelPrice;
      expenses += foodPricePerPerson * groupSize + discountedHotelPrice * groupSize + travelExpenses;
  
      if (currentDay % 3 === 0 || currentDay % 5 === 0) {
        expenses *= 1.4;
      }
  
      if (currentDay % 7 === 0) {
        expenses -= expenses / groupSize;
      }
  
      if (expenses > budget) {
        let neededMoney = (expenses - budget).toFixed(2);
        console.log(`Not enough money to continue the trip. You need ${neededMoney}$ more.`);
        return;
      }
    }
  
    let remainingBudget = (budget - expenses).toFixed(2);
    console.log(`You have reached the destination. You have ${remainingBudget}$ budget left.`);
  }

  springVacation([
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
