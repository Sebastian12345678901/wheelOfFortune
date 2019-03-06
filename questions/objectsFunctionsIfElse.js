let objectsFunctionsIfElse = [
    [
        `let myCat = { <br>
    &ensp;    name: "Yugo", <br>
    &ensp;    age: 14, <br>
    &ensp;    weight: 8, <br>
    &ensp;    fed: false, <br>
    &ensp;    shouldCatEat: function (weight, fed) { <br>
    &ensp;&ensp;        if (weight <= 7 && fed === false) { <br>
    &ensp;&ensp;&ensp;            return "Feed your cat with 400grams of his favorite food"; <br>
    &ensp;&ensp;        } else if (weight > 7 && fed === true) { <br>
    &ensp;&ensp;&ensp;            return "Your cat has eaten and is getting fat, let him starve for a while." <br>
    &ensp;&ensp;        } else if (weight > 7 && fed === false) { <br>
    &ensp;&ensp;&ensp;            return "Your cat is fat but he still needs to eat feed him with 200 grams of his favorite food"; <br>
    &ensp;&ensp;        } <br>
    &ensp;    } <br>
    } <br>
     <br>
    console.log(myCat.shouldCatEat(myCat.weight, myCat.fed));
    `,
        () => {
            radioButtons.setRadioButton("Your cat is fat but he still needs to eat feed him with 200 grams of his favorite food", "Your cat has eaten and is getting fat, let him starve for a while.", "Feed your cat with 400grams of his favorite food")
        },
        [true, false, false]
        // let myCat = {
        //     name: "Yugo",
        //     age: 14,
        //     weight: 8,
        //     fed: false,
        //     shouldCatEat: function (weight, fed) {
        //         if (weight <= 7 && fed === false) {
        //             return "Feed your cat with 400grams of his favorite food";
        //         } else if (weight > 7 && fed === true) {
        //             return "Your cat has eaten and is getting fat, let him starve for a while."
        //         } else if (weight > 7 && fed === false) {
        //             return "Your cat is fat but he still needs to eat feed him with 200 grams of his favorite food";
        //         }
        //     }
        // }
        // //"Your cat is fat but he still needs to eat feed him with 200 grams of his favorite food"
        // console.log(myCat.shouldCatEat(myCat.weight, myCat.fed));
        // ----------------------------------------------------------------------------------------------

    ],
    [
        `let myObject = { <br>
    &ensp;    x: 20, <br>
    &ensp;    y: 10, <br>
    &ensp; <br>
    &ensp;    sum: function () { <br>
    &ensp;&ensp;        return this.x + this.y; <br>
    &ensp;    } <br>
    } <br>
     <br>
    let secondObject = { <br>
    &ensp;    x: 10, <br>
    &ensp;    y: 10, <br>
    &ensp;    sum: function (z) { <br>
    &ensp;&ensp;        if (this.x > 5) { <br>
    &ensp;&ensp; &ensp;           this.x = 0; <br>
    &ensp;&ensp; &ensp;           return this.x + this.y + z; <br>
    &ensp;&ensp;        } <br>
    &ensp;    } <br>
    } <br>
    <br>
    console.log(secondObject.sum(myObject.sum()));`,
        () => {
            radioButtons.setRadioButton("30", "40", "50")
        },
        [false, true, false]

        // let myObject = {
        //     x: 20,
        //     y: 10,

        //     sum: function () {
        //         return this.x + this.y;
        //     }
        // }

        // let secondObject = {
        //     x: 10,
        //     y: 10,
        //     sum: function (z) {
        //         if (this.x > 5) {

        //             this.x = 0;
        //             return this.x + this.y + z;
        //         }


        //     }
        // }
        // //40
        // console.log(secondObject.sum(myObject.sum()));
        // ---------------------------------------------------------------------------------------------------

    ],
    [
        `let car = { <br>
    &ensp;    litersOfGas: 30, <br>
    &ensp;    litersPerMile: 0.5, <br>
    &ensp; <br>
    &ensp;    drive: function (miles) { <br>
    &ensp;&ensp;        litersLeft = this.litersOfGas - (miles * this.litersPerMile); <br>
    &ensp;&ensp;        if (litersLeft <= 5) { <br>
    &ensp;&ensp;&ensp;            console.log("You need to find a gas station!!!"); <br>
    &ensp;&ensp;        } else { <br>
    &ensp;&ensp;&ensp;            console.log("you can keep on driving"); <br>
    &ensp;&ensp;        } <br>
    &ensp;&ensp; <br>
    &ensp;    } <br>
    } <br>
    <br>
    car.drive(55); <br>
    `,
        () => {
            radioButtons.setRadioButton("You need to stop the car", "You can keep on driving", "You need to find a gas station!!!")
        },
        [false, false, true]
        // let car = {
        //     litersOfGas: 30,
        //     litersPerMile: 0.5,

        //     drive: function (miles) {
        //         litersLeft = this.litersOfGas - (miles * this.litersPerMile);
        //         if (litersLeft <= 5) {
        //             console.log("You need to find a gas station!!!");
        //         } else {
        //             console.log("you can keep on driving");
        //         }

        //     }

        // }
        // //"You need to find a gas station!!!"
        // car.drive(55);

    ]
]