let random = Math.random()

console.log(`Number: ${random}`);
if (random < 0.5) { console.log("Your number is less than 0.5!"); }
else { console.log("Your number is greater than or equal to 0.5!"); }

/////////////////////////////////////////////////////////////////////////////////

const dayOfWeek = prompt("Enter a day: ");

if (dayOfWeek === "Monday") { console.log("Ugh, I hate Mondays!"); }
else if (dayOfWeek === "Friday") { console.log("Fridays are decent - especially after work!"); }
else if (dayOfWeek === "Saturday") { console.log("Yay, I love Saturdays!"); }
else { console.log("Meh."); }

/////////////////////////////////////////////////////////////////////////////////

// 0-4    -  BABY    FREE
// 5-10   -  CHILD   $10
// 11-64  -  ADULT   $20
// 65+    -  SENIOR  $10

const age = prompt("Enter an age: ");

if (age < 5) { console.log("You're a BABY; you may enter for free!"); }
else if (age < 11) { console.log("You're a CHILD; you may enter for $10!"); }
else if (age < 64) { console.log("You're an ADULT; you may enter for $20!"); }
else if (age > 65) { console.log("You're a SENIOR; you may enter for $10!"); }
