spinObject = {
    i: 0,
    isSpinning: false,
    randomDegre: function () {
        return Math.floor(Math.random() * 361);
    },
    moveArrowDown: function(){
        document.getElementById("arrow").style.transition = "all 0.05s";
        document.getElementById("arrow").style.transform = "rotate(-5deg)";
    },
    moveArrowUp: function(){
        document.getElementById("arrow").style.transition = "all 0.05s";
        document.getElementById("arrow").style.transform = "rotate(0deg)";
    },

    moveArrow: function(i){
        if(i % 45 === 0){    
            spinObject.moveArrowDown();
        }else if(i % 50 === 0){
            spinObject.moveArrowUp();
        }

    },
    //firstSpeedOf the wheel.
    startSpin: function (randomDegre) {
        
        if(this.isSpinning == false){
            this.isSpinning = true;
            let maxSpeed = setInterval(() => {
                document.getElementById("wheelOfFortune").style.transform = `rotate(${spinObject.i}deg)`;
                spinObject.i += 1;
                //moves the arrow up and down when it hits a spike.
                spinObject.moveArrow(spinObject.i);
    
                //Changes the image so that the lights twinkle.
                if (spinObject.i % 200 < 100) {
                    document.getElementById("backGroundWheel").src = "./images/backGroundWheel.svg"
                } else {
                    document.getElementById("backGroundWheel").src = "./images/backGroundWheel2.svg"
                }
    
                if (spinObject.i > 250) {
    
                    clearInterval(maxSpeed);
                    //second speed of the wheel
                    let midSpeed = setInterval(() => {
                        document.getElementById("wheelOfFortune").style.transform = `rotate(${spinObject.i}deg)`;
                        //moves the arrow up and down when it hits a spike.
                        spinObject.moveArrow(spinObject.i);
                        //Changes the image so that the lights twinkle.
                        if (spinObject.i % 200 < 100) {
                            document.getElementById("backGroundWheel").src = "./images/backGroundWheel.svg"
                        } else {
                            document.getElementById("backGroundWheel").src = "./images/backGroundWheel2.svg"
                        }
    
                        spinObject.i += 1;
                    
                        if (spinObject.i > 750) {
    
                            clearInterval(midSpeed);
                            //third speed of the wheel
                            let midSlowSpeed = setInterval(() => {
                                //moves the arrow up and down when it hits a spike.
                                spinObject.moveArrow(spinObject.i);
                                //Changes the image so that the lights twinkle.
                                if (spinObject.i % 200 < 100) {
                                    document.getElementById("backGroundWheel").src = "./images/backGroundWheel.svg"
                                } else {
                                    document.getElementById("backGroundWheel").src = "./images/backGroundWheel2.svg"
                                }
    
                                document.getElementById("wheelOfFortune").style.transform = `rotate(${spinObject.i}deg)`;
                                spinObject.i += 1;
    
                                if (spinObject.i > 1000) {
                                    console.log("3")
                                    clearInterval(midSlowSpeed);
                                    //Fourth and slowest speed of the wheel
                                    let SlowSpeed = setInterval(() => {
                                        //moves the arrow up and down when it hits a spike.
                                        spinObject.moveArrow(spinObject.i);
                                        console.log(spinObject.i);
                                        //Changes the image so that the lights twinkle.
                                        if (spinObject.i % 200 < 100) {
                                            document.getElementById("backGroundWheel").src = "./images/backGroundWheel.svg"
                                        } else {
                                            document.getElementById("backGroundWheel").src = "./images/backGroundWheel2.svg"
                                        }
    
                                        document.getElementById("wheelOfFortune").style.transform = `rotate(${spinObject.i}deg)`;
                                        spinObject.i += 1;
    
                                        if (spinObject.i > 1250 + randomDegre) {
                                            clearInterval(SlowSpeed);
                                            console.log("hello");
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
        


    },




}