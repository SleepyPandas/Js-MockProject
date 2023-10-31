//By: Anthony Hua and Xuyanhan Chen

function problem1() {
  let output = document.getElementById("output");
  output.innerHTML = "";
  let num = parseInt(prompt("Enter a number see if it is PRIME: "), 10);
  if (isNaN(num)) {
    output.innerHTML = "Are you sure that is a number? Lmaooooo try it again, please!";
    return;
  }
  if (num < 2) {
    output.innerHTML = "The number you have entered is " + num + ", and it is NOT prime :(";
    return;
  }
//If I don't check "number" and "<2", 
//it will return them as prime anyway, 
//e.g., it returns abc or 0 as prime :(

  let prime = true;
  let d = 2;

  while (prime && d <= num / 2) {
    if (num % d === 0){
      prime = false;
    }
    d += 1;
  }

  if (prime) {
    output.innerHTML = "The number you have entered is " + num + ", and it is PRIME!!!";
  } else {
    output.innerHTML = "The number you have entered is " + num + ", and it is NOT prime :(";
  }
}


function problem2() {
  let output = document.getElementById("output");
  output.innerHTML = "";
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 1; i <= 4; i++) {
    let num = parseInt(prompt("We sum this number to the FIRST set (will count as 0 if not a number): "), 10);
    if (isNaN(num)) {
      num = 0;
    }
    sum1 += num;
  }

  for (let i = 1; i <= 4; i++) {
    let num = parseInt(prompt("We sum this number to the SECOND set (will count as 0 if not a number): "), 10);
    if (isNaN(num)) {
      num = 0;
    }
    sum2 += num;
  }

  if (sum1 === sum2) {
    output.innerHTML = "Congrats! The sum of two sets of number is EQUAL to each other!!!";
  } else {
    output.innerHTML = "Sorry! The sum of two sets of number is NOT equal to each other :(";
  }
  
}


function problem3() {
  let output = document.getElementById("output");
  output.innerHTML = "";
  let p = 0;
  let n = 0;
  let num;
  do {
    num = parseInt(prompt("Enter a number see if it explodes: "), 10);
    if (isNaN(num)) {
      output.innerHTML = "Sorry but we have to start over since that is not a valid number :(";
      return;
    }
    if (num > 0) {
      p++;
    }
    if (num < 0) {
      n++;
    }
  } while (num !== 0 && p <= 2 * n);
  output.innerHTML = "It supposed to just END but ...<br><br>" + "Boooom!!! Lmaoooo please try it again ;)";
}


function problem4() {
  let output = document.getElementById("output");
  let cnt1 = 0;
  let cnt2 = 0;
  for(let i = 1; i <= 4; i++) {
    const labels = ["1st", "2nd", "3rd", "4th"];
    const label = labels[i - 1];
    num = parseInt(prompt("Enter the " + label + " number"));
     if(num <0) {
      cnt1 = cnt1 + 1 // I think its easier to read than cnt += 1 but then I use it anyway so
     }
  }
  for(let i=1; i<=4; i++) {
    const labels = ["5th", "6th", "7th", "8th"];
    const label = labels[i - 1];
    num = parseInt(prompt("Enter the " + label + " number"));
    if(num >0) {
     cnt2 = cnt2 + 1 // I think its easier to read than cnt += 1 but then I use it anyway so
    }
  }
  if(cnt1 === cnt2) {
    output.innerHTML = "Yes" + " You have the same # of positive and negative numbers in each set"; 
  }else{
    output.innerHTML = "No," + " You don't have the same # of positive and negative numbers in each set";
  }
}


function problem5() {

  function prime(num) {
    let flag = true;
    let d = 2;
    while(flag == true && d <= num/2){
      if(num % d == 0) {
        flag = false;
      }
      d = d + 1;
    }
    return flag;
  }
  
  function primestoN(num) {
    for(let i = 2; i <= num; i++) {
      if(prime(i) == true) {
        output.innerHTML += i +", "; 
      }
    }
  }

  let output = document.getElementById("output");
  const num = parseInt(prompt("Enter a positive number to see it's associated prime numbers: "));
  if(num > 1) {
    output.innerHTML = ("Prime numbers less than or equal to, " + num + " are: ");
    primestoN(num);
  }else{
    output.innerHTML = "invalid 바보";
  }
}


function problem6() {

  function prime(num) {
    let flag = true;
    let d = 2;
    while(flag == true && d <= num/2){
      if(num % d == 0) {
        flag = false;
      }
      d = d + 1;
    }
    return flag;
  }
  //I've used a string but you can use the method involving Modulus 
  function has7(num) {  //sets the perameter of the function to "num"
    let flag = false;
    let digits = num.toString(); //interger to a string
    for (let i = 0; i <= digits.length; i++) {  //iterates until the length of the string
      if (digits[i] === '7') { //if it is strictly a string that has 7 the conidition will be true
          flag = true;
          break;  //ends loop as soon as a 7 is found
      }
    }
    return flag;
  }
  
  function primestoN(num) {
    for(let i = 2; i <= num; i++) {
      if(prime(i) == true && has7(i) == true) {
        output.innerHTML += i +", "; 
      }
    }
  }

  let output = document.getElementById("output");
  const num = parseInt(prompt("Enter a positive number to see it's associated prime numbers with a 7: "));
  if(num > 1) {
    output.innerHTML = ("Prime numbers with a 7 less than or equal to, " + num + " are: ");
    primestoN(num);
  }else{
    output.innerHTML = "invalid 바보";
  }
}

