let freeForAll = [

    [
        `let x = 0;<br>
    <br>
    function myFunction(z) {<br>
    &ensp;    let y = z;<br>
    &ensp;    for (let i = 0; i < z; i++) {<br>
    &ensp;&ensp;        y++;<br>
    &ensp;    }<br>
    &ensp;    console.log(y);<br>
    &ensp;    return y;<br>
    }<br>
    <br>
    x = myFunction(5);<br>
    <br>
    if (x < 15) {<br>
    &ensp;    x += 5;<br>
    } else {<br>
    &ensp;    x -= 5;<br>
    }<br>
    <br>
    console.log(x);`,
        () => {
            radioButtons.setRadioButton("20", "10", "15")
        },
        [false, false, true]
    ],
    // let x = 0;

    // function myFunction(z) {
    //     let y = z;
    //     for (let i = 0; i < z; i++) {
    //         y++;
    //     }
    //     console.log(y);
    //     return y;
    // }

    // x = myFunction(5);

    // if (x < 15) {
    //     x += 5;
    // } else {
    //     x -= 5;
    // }
    // // x = 15
    // console.log(x);

    ////---------------------------------------------------------
    [
        `let x = 25; <br>
         <br>
        function myFunction(i) { <br>
        &ensp;    if (i > 0) { <br>
        &ensp;&ensp;        x -= 1; <br>
        &ensp;&ensp;        i -= 1; <br>
        &ensp; <br>
        &ensp;        myFunction(i); <br>
        &ensp;    } else { <br>
        &ensp;&ensp;        return i; <br>
        &ensp;    } <br>
        } <br>
        myFunction(10); <br>
         <br>
        console.log(x);`,
        () => {
            radioButtons.setRadioButton("20", "15", "10")
        },
        [false, true, false]
        // let x = 25;
        // function myFunction(i) {
        //     if (i > 0) {
        //         x -= 1;
        //         i -= 1;

        //         myFunction(i);
        //     } else {
        //         return i;
        //     }
        // }
        // myFunction(10);
        // // x = 15
        // console.log(x);
        ////---------------------------------------------------------------------

    ],
    [
        `let objectOne = { <br>
    &ensp;    x: 10, <br>
    &ensp;    myMethod: function () { <br>
    &ensp;&ensp;        return this.x + 5; <br>
    &ensp;    } <br>
    } <br>
     <br>
    let objectTwo = { <br>
    &ensp;    y: 5, <br>
    &ensp;    myMethod: function () { <br>
    &ensp;&ensp;        this.y += objectOne.myMethod(); <br>
    &ensp;&ensp;        return this.y + 5; <br>
    &ensp;    } <br>
    } <br>
     <br>
    let objectThree = { <br>
    &ensp;    z: 0, <br>
    &ensp;    myMethod: function () { <br>
    &ensp;        this.z = objectTwo.myMethod(); <br>
    &ensp;        if (this.z < 30) { <br>
    &ensp;&ensp;            return this.z + 5; <br>
    &ensp;        } else { <br>
    &ensp;&ensp;            return this.z - 5; <br>
    &ensp;        } <br>
    &ensp;    } <br>
    } <br>
     <br>
    console.log(objectThree.myMethod());`,
        () => {
            radioButtons.setRadioButton("30", "40", "20")
        },
        [true, false, false]
        // let objectOne = {
        //     x: 10,
        //     myMethod: function () {
        //         return this.x + 5;
        //     }
        // }

        // let objectTwo = {
        //     y: 5,
        //     myMethod: function () {
        //         this.y += objectOne.myMethod();
        //         return this.y + 5;
        //     }
        // }

        // let objectThree = {
        //     z: 0,
        //     myMethod: function () {
        //         this.z = objectTwo.myMethod();
        //         if (this.z < 30) {
        //             return this.z + 5;
        //         } else {
        //             return this.z - 5;
        //         }
        //     }
        // }
        // // 30
        // console.log(objectThree.myMethod());
    ]
]