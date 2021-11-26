// Don't use:
// 1. naming of files/funcs/variables is important
// 2. magical numbers or strings

// 3. nesting of the code, more than 2
// 4. too much if/else statements
// 5. duplicates of the code
// 5. variable that is used only once
// 6. for/while and other loops, use arrays methods

// 7. redundant iteration throught arrays or objects - speed
// 8. take attention to the memory usage, don't create new array if it is not needed
// 10. divide your code into logical blocks
// 11. BIG code blocks (inside {} - if, loop or array methods)

// 12. every line of code should be easy to read
// 13. every piece of code must be tested

// BAD
// const withdraw = (clients, balances, names, amount) => {
//   let result = 0;
//   clients.forEach(function (client, index) {
//     if (client.includes(names) && balances[index] >= amount) {
//       result = balances[index] - amount;
//     } else if (client.includes(names) && balances[index] < amount) {
//       result = -1;
//     }
//   });
//   return result;
// };

// GOOD
// const withdraw = (clients, balances, names, amount) => {
//   let result = 0;
//   clients.forEach(function (client, index) {
//     if (balances[index] >= amount) {
//       result = balances[index] - amount;
//     } else if (balances[index] < amount) {
//       result = -1;
//     }
//   });
//   return result;
// };

// ===================================================

// BAD
// const withdraw = (clients, balances, client, amount) => {
//   const clientIndex = clients.indexOf(client);
//   const balanceIndex = balances[clientIndex];
//   if (balanceIndex < amount) {
//     return -1;
//   } else {
// 	balances[clientIndex] = balanceIndex - amount;
// 	return balances[clientIndex];
// }
// };

// GOOD
// const withdraw = (clients, balances, client, amount) => {
//   const clientIndex = clients.indexOf(client);
//   if (balances[clientIndex] < amount) {
//     return -1;
//   }
//   balances[clientIndex] -= amount;
//   return balances[clientIndex];
// };

// ========================================================

// BAD
// function withdraw(clients, balances, client, amount) {
//   const balance = balances;
//   const index = clients.indexOf(client);
//   if (index !== -1 && balance[index] >= amount) {
//     balance[index] -= amount;
//     const output = balance[index];
//     return output;
//   }
//   if (index !== -1 && balance[index] < amount) {
//     const output = -1;
//     return output;
//   }
//   return true;
// }

// GOOD
// function withdraw(clients, balances, client, amount) {
//   const index = clients.indexOf(client);

//   if (balances[index] < amount) {
//     return -1;
//   }
//   balances[index] -= amount;
//   return balances[index];
// }

// ===========================================================

// BAD
// const withdraw = (clients, balances, client, amount) => {
// 	if(balances[clients.indexOf(client)] < amount) return -1;
//  balances[clients.indexOf(client)] -= amount;
//  return balances[clients.indexOf(client)];
// }

// GOOD
// const withdraw = (clients, balances, client, amount) => {
//   const index = clients.indexOf(client);
//   if (balances[index] < amount) {
//     return -1;
//   }

//   balances[index] -= amount;
//   return balances[index];
// };

// ==============================================================

// bad
// function withdraw(clients, balances, client, amount) {
//   let result = 0;
//   for (let i = 0; i < clients.length; i += 1) {
//     if (client === clients[i]) {
//       if (balances[i] >= amount) {
//         result = balances[i] - amount;
//       } else if (balances[i] < amount) {
//         result = -1;
//       }
//     }
//   }

//   return result;
// }

// good   --   переписать усе
// function withdraw(clients, balances, client, amount) {
//   for (let i = 0; i < clients.length; i += 1) {
//     if (client === clients[i] && balances[i] >= amount) {
//       return balances[i] - amount;
//     }
//   }
//   return -1;
// }

// ===========================================================

// BAD
// put your code here
// function withdraw(clients, balances, client, amount) {
//   for (let i = 0; i < clients.length; i++) {
//     if (clients[i] === client) {
//       if (balances[i] - amount < 0) {
//         return -1;
//       }
//       if (balances[i] - amount >= 0) {
//         balances[i] -= amount;
//         console.log(balances);
//         return balances[i];
//       }
//     }
//   }
// }

// GOOD
// put your code here
function withdraw(clients, balances, client, amount) {
  for (let i = 0; i < clients.length; i += 1) {
    if (clients[i] === client && balances[i] < amount) {
      return -1;
    }
    if (clients[i] === client && balances[i] < amount) {
      balances[i] -= amount;
      return balances[i];
    }
  }
  return -1;
}

// ==============================================================
