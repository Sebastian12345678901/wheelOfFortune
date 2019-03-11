spinObject = {
    i: 0,
    subject: "none",
    isSpinning: false,
    randomDegre: function () {
        return Math.floor(Math.random() * 361);
    },
    moveArrowDown: function () {
        document.getElementById("arrow").style.transition = "all 0.05s";
        document.getElementById("arrow").style.transform = "rotate(-5deg)";
    },
    moveArrowUp: function () {
        document.getElementById("arrow").style.transition = "all 0.05s";
        document.getElementById("arrow").style.transform = "rotate(0deg)";
    },

    moveArrow: function (i) {
        if (i % 45 === 0) {
            spinObject.moveArrowDown();
        } else if (i % 50 === 0) {
            spinObject.moveArrowUp();
        }
    },
    //get one slice of the wheel.
    getSubject: function (degrees) {
        console.log(this.subject);
        if (degrees % 360 < 45) {
            this.subject = "ifElse";
            questions.setSubeject(this.subject);
        } else if (degrees % 360 < 90 && degrees % 360 > 45) {
            this.subject = "trusyFalsy";
            questions.setSubeject(this.subject);
        } else if (degrees % 360 < 135 && degrees % 360 > 90) {
            this.subject = "functions";
            questions.setSubeject(this.subject);
        } else if (degrees % 360 < 180 && degrees % 360 > 135) {
            this.subject = "objects";
            questions.setSubeject(this.subject);
        } else if (degrees % 360 < 225 && degrees % 360 > 180) {
            this.subject = "functions-IfElse";
            questions.setSubeject(this.subject);
        } else if (degrees % 360 < 270 && degrees % 360 > 225) {
            this.subject = "objects-methods";
            questions.setSubeject(this.subject);
        } else if (degrees % 360 < 315 && degrees % 360 > 270) {
            this.subject = "objects-functionsIf-else";
            questions.setSubeject(this.subject);
        } else if (degrees % 360 < 360 && degrees % 360 > 315) {
            this.subject = "free-for-all";
            questions.setSubeject(this.subject);
        }
    },
    //firstSpeedOf the wheel.
    startSpin: function (randomDegre) {

        if (this.isSpinning == false) {
            this.isSpinning = true;
            let maxSpeed = setInterval(() => {
                document.getElementById("wheelOfFortune").style.transform = `rotate(${
                    
          spinObject.i
        }deg)`;

                spinObject.i += 2;
                //moves the arrow up and down when it hits a spike.
                spinObject.moveArrow(spinObject.i);
                document.getElementById("click").play();
                //Changes the image so that the lights twinkle.
                if (spinObject.i % 200 < 100) {
                    document.getElementById("backGroundWheel").src =
                        "./images/backGroundWheel.svg";
                } else {
                    document.getElementById("backGroundWheel").src =
                        "./images/backGroundWheel2.svg";

                }

                if (spinObject.i > 250) {
                    clearInterval(maxSpeed);
                    //second speed of the wheel
                    let midSpeed = setInterval(() => {
                        document.getElementById(
                            "wheelOfFortune"
                        ).style.transform = `rotate(${spinObject.i}deg)`;
                        //moves the arrow up and down when it hits a spike.
                        spinObject.moveArrow(spinObject.i);
                        //Changes the image so that the lights twinkle.
                        if (spinObject.i % 200 < 100) {
                            document.getElementById("backGroundWheel").src =
                                "./images/backGroundWheel.svg";



                        } else {
                            document.getElementById("backGroundWheel").src =
                                "./images/backGroundWheel2.svg";
                        }

                        spinObject.i += 1;

                        if (spinObject.i > 400) {
                            clearInterval(midSpeed);
                            //third speed of the wheel
                            let midSlowSpeed = setInterval(() => {
                                //moves the arrow up and down when it hits a spike.
                                spinObject.moveArrow(spinObject.i);
                                //Changes the image so that the lights twinkle.
                                if (spinObject.i % 200 < 100) {
                                    document.getElementById("backGroundWheel").src =
                                        "./images/backGroundWheel.svg";
                                } else {
                                    document.getElementById("backGroundWheel").src =
                                        "./images/backGroundWheel2.svg";
                                }

                                document.getElementById(
                                    "wheelOfFortune"
                                ).style.transform = `rotate(${spinObject.i}deg)`;
                                spinObject.i += 1;

                                if (spinObject.i > 500) {

                                    clearInterval(midSlowSpeed);
                                    //Fourth and slowest speed of the wheel
                                    let SlowSpeed = setInterval(() => {
                                        //moves the arrow up and down when it hits a spike.
                                        spinObject.moveArrow(spinObject.i);

                                        //Changes the image so that the lights twinkle.
                                        if (spinObject.i % 200 < 100) {
                                            document.getElementById("backGroundWheel").src =
                                                "./images/backGroundWheel.svg";
                                        } else {
                                            document.getElementById("backGroundWheel").src =
                                                "./images/backGroundWheel2.svg";
                                        }

                                        document.getElementById(
                                            "wheelOfFortune"
                                        ).style.transform = `rotate(${spinObject.i}deg)`;
                                        spinObject.i += 1;

                                        if (spinObject.i > 600 + randomDegre / 2) {
                                            //click stands for click sound
                                            document.getElementById("click").pause();
                                            document.getElementById("click").currentTime = 0;

                                            clearInterval(SlowSpeed);
                                            spinObject.i += randomDegre;
                                            spinObject.getSubject(spinObject.i);

                                            spinObject.i = 0;
                                            spinObject.moveArrowUp();
                                            this.isSpinning = false;
                                        }
                                    }, 15);
                                }
                            }, 10);
                        }
                    }, 5);
                }
            }, 1);
        }
    }
};