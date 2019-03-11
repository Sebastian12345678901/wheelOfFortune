let radioButtons = {
    abc: [false, false, false],
    points: 0,
    missed: 0,
    setRadioButton: function (radio1, radio2, radio3) {
        document.getElementById("radioContent1").innerHTML = radio1;
        document.getElementById("radioContent2").innerHTML = radio2;
        document.getElementById("radioContent3").innerHTML = radio3;
    },
    clickRaidoButtonA: function () {
        this.abc = [true, false, false];
        document.getElementById("radio1").checked = true;
        document.getElementById("radio2").checked = false;
        document.getElementById("radio3").checked = false;
        document.getElementById("container1").style.backgroundImage = 'url("./images/checked.svg")';
        document.getElementById("container2").style.backgroundImage = 'url("./images/unchecked.svg")';
        document.getElementById("container3").style.backgroundImage = 'url("./images/unchecked.svg")';
        console.log(this.abc[0]);
        console.log(this.abc[1]);
        console.log(this.abc[2]);


    },

    clickRaidoButtonB: function () {
        this.abc = [false, true, false];
        document.getElementById("radio1").checked = false;
        document.getElementById("radio2").checked = true;
        document.getElementById("radio3").checked = false;
        document.getElementById("container1").style.backgroundImage = 'url("./images/unchecked.svg")';
        document.getElementById("container2").style.backgroundImage = 'url("./images/checked.svg")';
        document.getElementById("container3").style.backgroundImage = 'url("./images/unchecked.svg")';
        console.log(this.abc[0]);
        console.log(this.abc[1]);
        console.log(this.abc[2]);
    },

    clickRaidoButtonC: function () {
        this.abc = [false, false, true];
        document.getElementById("radio1").checked = false;
        document.getElementById("radio2").checked = false;
        document.getElementById("radio3").checked = true;
        document.getElementById("container1").style.backgroundImage = 'url("./images/unchecked.svg")';
        document.getElementById("container2").style.backgroundImage = 'url("./images/unchecked.svg")';
        document.getElementById("container3").style.backgroundImage = 'url("./images/checked.svg")';
        console.log(this.abc[0]);
        console.log(this.abc[1]);
        console.log(this.abc[2]);
    },


    submit: function () {
        //counter is for counting how many evaluations that are true.
        let counter = 0;
        if (questions.i === 2) {
            for (let i = 0; i <= 2; i++) {
                if (this.abc[i] === questions.correctAnswer[i]) {
                    counter++;
                }
            }
            if (counter === 3) {
                this.points++;
                document.getElementById("points").innerHTML = "points: " + this.points;
            } else {
                this.missed++;
                document.getElementById("missed").innerHTML = "missed: " + this.missed;
            }


            questions.i = 0;
            document.getElementById("radioDiv").style.display = "none";
            document.getElementById("paperContent").innerHTML = "";
            document.getElementById("subject").innerHTML = "<h1> Spin the wheel to get a new subject </h1>";
            this.abc = [false, false, false];
            return false;
        }

        questions.i++;
        console.log(questions.i);
        for (let i = 0; i <= 2; i++) {
            if (this.abc[i] === questions.correctAnswer[i]) {
                counter++;
            }
        }
        if (counter === 3) {
            this.points++;
            document.getElementById("points").innerHTML = "points: " + this.points;
        } else {
            this.missed++;
            document.getElementById("missed").innerHTML = "missed: " + this.missed;
        }

        this.abc = [false, false, false];
        console.log(questions.i);
        questions.setSubeject(spinObject.subject);


    }


}