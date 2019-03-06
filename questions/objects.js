let objects = [
   [
      `let myObject = { <br>
      &ensp; x: 5, <br>
      &ensp; y: 2, <br>
   } <br>
    <br>
   let z = myObject.x + myObject.y; <br>
   <br>
   console.log(z);`,
      () => {
         radioButtons.setRadioButton("7", "5", "9")
      },
      [true, false, false]
      // let myObject = {
      //     x: 5,
      //     y: 2,
      // }

      // let z = myObject.x + myObject.y;
      // // 7
      // console.log(z);
      // --------------------------------------------------------------

   ],
   [
      `let myObject = { <br>
      &ensp; x: 2, <br>
      &ensp; y: 15, <br>
      &ensp; z: "1", <br>
   } <br>
    <br>
   console.log(myObject.x + myObject.y + myObject.z);`,
      () => {
         radioButtons.setRadioButton("15", "17", "171")
      },
      [false, false, true]
      // let myObject = {
      //     x: 2,
      //     y: 15,
      //     z: "1",
      // }
      // //171
      // console.log(myObject.x + myObject.y + myObject.z);
      // -----------------------------------------------------------------

   ],
   [
      `let person = { <br>
     &ensp; firstName: "John", <br>
     &ensp; lastName: "Doe", <br>
     &ensp; age: 50, <br>
     &ensp; eyeColor: "blue" <br>
   }; <br>
    <br>
   console.log(person.firstName + " " + person.lastName);`,
      () => {
         radioButtons.setRadioButton("Jhon Doe age: 50", " age: 50 firstName:Jhon lastname: Doe", "Jhon Doe")
      },
      [false, false, true]
      // let person = {
      //     firstName: "John",
      //     lastName: "Doe",
      //     age: 50,
      //     eyeColor: "blue"
      // };
      // //John Doe
      // console.log(person.firstName + " " + person.lastName);
   ]

]