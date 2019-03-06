let functionsIfElse = [
   [
      `let priceOfCookie = 5;<br>
   <br>
   function myCookieCalc(myMoney, priceOfCookie) {<br>
      &ensp; if (myMoney < priceOfCookie) {<br>
      &ensp;   &ensp;  return "You can not afford a coockie";<br>
      &ensp; } else {<br>
      &ensp;   &ensp;  return "You can afford a cookie";<br>
      &ensp; }<br>
   }<br>
   <br>
   console.log(myCookieCalc(10));`,
      () => {
         radioButtons.setRadioButton("You can afford a cookie", "You can not afford a coockie", "You have enough money for a coockie");
      },
      [true, false, false]
      // let priceOfCookie = 5;

      // function myCookieCalc(myMoney, priceOfCookie) {
      //     if (myMoney < priceOfCookie) {
      //         return "You can not afford a coockie";
      //     } else {
      //         return "You can afford a cookie";
      //     }
      // }
      // //you can afford a cookie
      // console.log(myCookieCalc(10));
      // -----------------------------------------------------------------------

   ],

   [
      `function difference(x, y) { <br>
     &ensp;  if (x > y) { <br>
     &ensp;   &ensp;   return x - y; <br>
     &ensp;  } else { <br>
     &ensp;  &ensp;    return y - x; <br>
     &ensp;  } <br>
   } <br>
    <br>
   console.log(difference(4, 10));`,
      () => {
         radioButtons.setRadioButton("14", "5", "6");
      },
      [false, false, true]
      // function difference(x, y) {
      //     if (x > y) {
      //         return x - y;
      //     } else {
      //         return y - x;
      //     }
      // }

      // console.log(difference(4, 10));
      // ----------------------------------------------------------------------------------------

   ],
   [
      `function isDivisable(x) { <br>
      &ensp; if (x % 2 === 0 && x % 4 !== 0 && x % 8 !== 0) { <br>
      &ensp;   &ensp;  return x + " Is divisable by 2"; <br>
      &ensp; } else if (x % 4 === 0 && x % 8 !== 0) { <br>
      &ensp;   &ensp;  return x + " Is divisable by 4" <br>
      &ensp; } else if (x % 8 === 0) { <br>
      &ensp;  &ensp;   return x + " Is divisable by 8" <br>
      &ensp; } <br>
   } <br>
    <br>
   console.log(isDivisable(12));`,
      () => {
         radioButtons.setRadioButton("2", "4", "8");
      },
      [false, true, false]
      // function isDivisable(x) {
      //     if (x % 2 === 0 && x % 4 !== 0 && x % 8 !== 0) {
      //         return x + " Is divisable by 2";
      //     } else if (x % 4 === 0 && x % 8 !== 0) {
      //         return x + " Is divisable by 4"
      //     } else if (x % 8 === 0) {
      //         return x + " Is divisable by 8"
      //     }
      // }

      // console.log(isDivisable(12));

   ]
]