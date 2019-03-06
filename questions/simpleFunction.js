let simpleFunctions = [
  [
    `function myFunction(x) {<br>
    &ensp; return x * 2;<br>
  }<br>
  console.log(myFunction(50));`,
    () => {
      radioButtons.setRadioButton("52", "102", "100")
    },
    [false, false, true]
    // function myFunction(x) {
    //     return x * 2;
    // }
    // //100
    // console.log(myFunction(50));
    // ----------------------------------------------------

  ],
  [
    `function myFunction(x, y) {<br>
   &ensp; x += 2;<br>
   &ensp; y += 4;<br>
  <br>
    &ensp; return x + y;<br>
  }<br>
  <br>
  console.log(myFunction(2, 8));`,
    () => {
      radioButtons.setRadioButton("18", "14", "16")
    },
    [false, false, true]
    // function myFunction(x, y) {
    //     x += 2;
    //     y += 4;

    //     return x + y;
    // }
    // //16
    // console.log(myFunction(2, 8));
    // ----------------------------------------------------------
  ],
  [
    `function myFunction(x, y, z) {<br>
    &ensp; return x + y + z;<br>
  }<br>
  <br>
  let mynumber = myFunction(2, 8, 10) + myFunction(5, 20, 3);<br>
  <br>
  console.log(mynumber);`,
    () => {
      radioButtons.setRadioButton("48", "58", "38")
    },
    [true, false, false]

    // function myFunction(x, y, z) {
    //     return x + y + z;
    // }

    // let mynumber = myFunction(2, 8, 10) + myFunction(5, 20, 3);
    // console.log(mynumber);
  ]



]