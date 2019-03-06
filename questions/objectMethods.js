let objectMethods = [

   [
      `let person = {<br>
      &ensp; FirstName: "Sebastian",<br>
      &ensp; lastName: "Eriksson",<br>
      &ensp; middleName: "Jan",<br>
      &ensp; secondMiddleName: "Karl",<br>
      &ensp; greeting: function () {<br>
      &ensp;  &ensp;   console.log("Hello my name is " + FirstName + " " + lastName);<br>
      &ensp; }<br>
      }<br>
      <br>
      person.greeting();`,
      () => {
         radioButtons.setRadioButton("Hello my name is Jan Karl", "Hello my name is Sebastian Karl", "Hello my name is Sebastian Eriksson");
      },
      [false, false, true]
   ],
   [
      // let person = {
      //     FirstName: "Sebastian",
      //     lastName: "Eriksson",
      //     middleName: "Jan",
      //     secondMiddleName: "Karl",
      //     greeting: function () {
      //         console.log("Hello my name is " + FirstName + " " + lastName);
      //     }
      // }
      // // hello my name is Sebastian Eriksson
      // person.greeting();
      // -----------------------------------------------------------------------------------------------
      `let plant = {<br>
   &ensp;    daysOld: 10,<br>
   &ensp;    height: 5,<br>
   &ensp;    growth: function (daysOld) {<br>
   &ensp;&ensp;        return this.height = daysOld * 0.5;<br>
   &ensp;    },<br>
   &ensp;    addOneDay: function () {<br>
   &ensp;&ensp;        this.daysOld++;<br>
   &ensp;<br>
   &ensp;&ensp;        return [this.daysOld, this.growth(this.daysOld)];<br>
   &ensp;    }<br>
   &ensp;<br>
   }<br>
   let plandInfo = plant.addOneDay();<br>
   <br>
   console.log("Your plant is " + plandInfo[0] + " days old and " + plandInfo[1]);
   `,
      () => {
         radioButtons.setRadioButton("Your plant is 11 days old and 5.5", "Your plant is 12 days old and 6", "Your plant is 13 days old and 6.5");
      },
      [true, false, false]

      // let plant = {
      //     daysOld: 10,
      //     height: 5,
      //     growth: function (daysOld) {
      //         return this.height = daysOld * 0.5;
      //     },
      //     addOneDay: function () {
      //         this.daysOld++;

      //         return [this.daysOld, this.growth(this.daysOld)];
      //     }

      // }
      // let plandInfo = plant.addOneDay();
      // //Your plant is 11 days old and 5.5
      // console.log("Your plant is " + plandInfo[0] + " days old and " + plandInfo[1]);
      // -------------------------------------------------------------------------------------------------------
   ],
   [
      `let car = {<br>
&ensp;    litersOfGas: 30,<br>
&ensp;    litersPerMile: 0.5,<br>
&ensp;<br>
&ensp;    drive: function (miles) {<br>
&ensp; &ensp;       return litersLeft = this.litersOfGas - (miles * this.litersPerMile);<br>
&ensp;    }<br>
}<br>
<br>
console.log("You have " + car.drive(20) + " left in the tank.");`,
      () => {
         radioButtons.setRadioButton("You have 15 liters left in the tank!", "You have 20 liters left in the tank!", "You have 25 liters left in the tank!");
      },
      [false, true, false]
      // let car = {
      //     litersOfGas: 30,
      //     litersPerMile: 0.5,

      //     drive: function (miles) {
      //         return litersLeft = this.litersOfGas - (miles * this.litersPerMile);
      //     }
      // }
      ////you have 20 liters left in the tank.
      // console.log("You have " + car.drive(20) + " left in the tank.");

   ]
]