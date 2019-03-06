    let ifElse = [
      [
        `
    let x = 5;<br>
    <br>
    if (x <= 5) {<br>
    &ensp; console.log("Hi!"); <br>
    } else {<br>
    &ensp; console.log("Ho!"); <br>
    }`,
        () => {
          radioButtons.setRadioButton("Hi!", "Ho!", "undefined")
        },
        [true, false, false]
        // let x = 5;

        // if (x <= 5) {
        //     console.log("Hi!");
        // } else {
        //     console.log("Ho!");
        // }
        // //-----second question-------------------------------------------------------------------

      ],
      [
        `let x = 5;<br>
     let y = 10;<br>
     <br>
     if (x > 3 && y < 7) {<br>
     &ensp; console.log("Hi!"); <br>
     } else {<br>
     &ensp; console.log("Ho!"); <br>
     }`,
        () => {
          radioButtons.setRadioButton("Hi!", "Ho!", "undefined")
        },
        [true, false, false]
        // let x = 5;
        // let y = 10;

        // if (x > 3 && y < 7) {
        //     console.log("Hi!");
        // } else {
        //     console.log("Ho!");
        // }
        // //--------third question-----------------------------------------------------------------

      ],
      [
        `let x = 5;<br>
     let y = 10;<br>
     let myBool = true;<br>
     <br>
     if (x > 6) {<br>
        &ensp; console.log("Hi"); <br>
     } else if (y === "10") {<br>
       &ensp;console.log("Ho!") <br>
     } else if (myBool === true) {<br>
       &ensp; console.log("lets go!"); <br>
     }`,
        () => {
          radioButtons.setRadioButton("Hi!", "Ho!", "lets go!")
        },
        [false, true, false]
        // let x = 5;
        // let y = 10;
        // let myBool = true;

        // if (x > 6) {
        //     console.log("Hi");
        // } else if (y === "10") {
        //     console.log("Ho!")
        // } else if (myBool === true) {
        //     console.log("lets go!");
        // }

      ]

    ]