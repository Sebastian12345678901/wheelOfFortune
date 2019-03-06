let radioButtons = {
    abc: [false, false, false],

    setRadioButton: function (radio1, radio2, radio3) {
        document.getElementById("radioContent1").innerHTML = radio1;
        document.getElementById("radioContent2").innerHTML = radio2;
        document.getElementById("radioContent3").innerHTML = radio3;
    },
    clickRaidoButtonA: function () {
        this.abc = [true, false, false];

        console.log(this.abc[0]);
        console.log(this.abc[1]);
        console.log(this.abc[2]);
    },

    clickRaidoButtonB: function () {
        this.abc = [false, true, false];

        console.log(this.abc[0]);
        console.log(this.abc[1]);
        console.log(this.abc[2]);
    },

    clickRaidoButtonC: function () {
        this.abc = [true, false, true];

        console.log(this.abc[0]);
        console.log(this.abc[1]);
        console.log(this.abc[2]);
    },
    submit: function () {
        if (this.abc[0, 1, 2] === this.abc[0, 1, 2]) {
            console.log("true");
        }
    }


}