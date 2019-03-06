let trusyFalsy = [
   [
      `if(1 == true){<br>
     &ensp; console.log("true"); <br>
   }else{<br>
   &ensp; console.log("false"); <br>
   }`,
      () => {
         radioButtons.setRadioButton("true", "false", "else")
      },
      [true, false, false]
      // first question
      // if(1 == true){
      //     //true
      //     console.log("true");
      // }else{
      //     console.log("false");
      // }
      ////-----------------------------------------------

   ],
   [
      `if(0 == false){<br>
      &ensp; console.log("true"); <br>
   }else{<br>
      &ensp; console.log("false"); <br>
   }`,
      () => {
         radioButtons.setRadioButton("true", "false", "else")
      },
      [true, false, false]
      // if(0 == false){
      //     //true
      //     console.log("true");
      // }else{
      //     console.log("false");
      // }
      ////-----------------------------------------------------

   ],
   [
      `if (undefined == false) {<br>
      &ensp;
      console.log("true"); <br>
   } else {<br>
     &ensp; console.log("false"); <br>
   }`,
      () => {
         radioButtons.setRadioButton("true", "false", "else")
      },
      [true, false, false]
      // if (undefined == false) {
      //     console.log("true");
      // } else {
      //        //false
      //     console.log("false");
      // }
      ////-----------------------------------------

   ],
   [
      `if (null == true) {<br>
     &ensp; console.log("true");<br>
   } else {<br>
   &ensp; console.log("false");<br>
   }`,
      () => {
         radioButtons.setRadioButton("true", "false", "else")
      },
      [false, true, false]

      // if (null == true) {
      //     console.log("true");
      // } else {
      //        //false
      //     console.log("false");
      // }
      ////------------------------------------------

   ],
   [
      `if (null == undefined) {<br>
    &ensp; console.log("true");<br>
   } else {<br>
    &ensp; console.log("false");<br>
   }`,
      () => {
         radioButtons.setRadioButton("true", "false", "else")
      },
      [true, false, false]
      // if (null == undefined) {
      //     //true
      //     console.log("true");
      // } else {
      //     console.log("false");
      // }

   ]

]