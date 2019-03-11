let questions = {
    subject: document.getElementById("subject"),
    setSubeject: function (subject) {
        if (subject == "free-for-all") {
            this.subject.innerHTML = `<h1>Subject: Free for all!</h1>`;
            document.getElementById("link").href = "https://www.w3schools.com/js/default.asp";
            this.freeForAllF();

        } else if (subject == "functions-IfElse") {
            this.subject.innerHTML = `<h1>Subject: Functions & if else!</h1>`;
            document.getElementById("link").href = "https://www.w3schools.com/js/js_if_else.asp";

            this.functionsIfElseF();
        } else if (subject == "ifElse") {
            this.subject.innerHTML = `<h1>Subject: if else </h1>`;
            document.getElementById("link").href = "https://www.w3schools.com/js/js_if_else.asp";

            this.ifElseF();
        } else if (subject == "objects-methods") {
            this.subject.innerHTML = `<h1>Subject: objects & methods! </h1>`;
            document.getElementById("link").href = "https://www.w3schools.com/js/js_objects.asp";

            this.objectMethodsF();
        } else if (subject == "objects") {
            this.subject.innerHTML = `<h1>Subject: Objects! </h1>`;
            document.getElementById("link").href = "https://www.w3schools.com/js/js_objects.asp";

            this.objectsF();
        } else if (subject == "objects-functionsIf-else") {
            this.subject.innerHTML = `<h1>Subject: objects & methods & if else!</h1>`;
            document.getElementById("link").href = "https://www.w3schools.com/js/js_objects.asp";

            this.objectsFunctionsIfElseF()
        } else if (subject == "functions") {
            this.subject.innerHTML = `<h1>Subject: Simple functions </h1>`;
            document.getElementById("link").href = "https://www.w3schools.com/js/js_functions.asp";

            this.simpleFunctionsF()
        } else if (subject == "trusyFalsy") {
            this.subject.innerHTML = `<h1>Subject: trusy falsy </h1>`;
            document.getElementById("link").href = "https://www.w3schools.com/js/js_booleans.asp";

            this.trusyFalsyF();
        }
    },

    //gör varje element i arrayen till ett objekt med frågan 
    // I keeps track of wich question is currently beeing asked.
    i: 0,
    correctAnswer: [],
    unCheckRadio: () => {
        document.getElementById("radio1").checked = false;
        document.getElementById("radio2").checked = false;
        document.getElementById("radio3").checked = false;
        document.getElementById("container1").style.backgroundImage = 'url("./images/unchecked.svg")';
        document.getElementById("container2").style.backgroundImage = 'url("./images/unchecked.svg")';
        document.getElementById("container3").style.backgroundImage = 'url("./images/unchecked.svg")';

        if (spinObject.subject === "free-for-all") {
            document.getElementById("paper").style.fontSize = "0.28em";
        } else {
            document.getElementById("paper").style.fontSize = "0.3em";
        }
    },



    freeForAllF: function () {
        this.unCheckRadio();
        let questionArray = freeForAll;
        questionArray[this.i][1]();
        this.correctAnswer = questionArray[this.i][2];
        document.getElementById("paperContent").innerHTML = questionArray[this.i][0];
        console.log(this.correctAnswer);

        document.getElementById("radioDiv").style.display = "block";
        return questionArray[questionArray[this.i][0]];
    },
    functionsIfElseF: function () {
        this.unCheckRadio();
        let questionArray = functionsIfElse;
        questionArray[this.i][1]();
        this.correctAnswer = questionArray[this.i][2];
        document.getElementById("paperContent").innerHTML = questionArray[this.i][0];
        console.log(this.correctAnswer);
        document.getElementById("radioDiv").style.display = "block";
        return questionArray[questionArray[this.i][0]];
    },
    ifElseF: function () {
        this.unCheckRadio();
        let questionArray = ifElse;
        questionArray[this.i][1]();
        this.correctAnswer = questionArray[this.i][2];
        document.getElementById("paperContent").innerHTML = questionArray[this.i][0];
        console.log(this.correctAnswer);
        document.getElementById("radioDiv").style.display = "block";
        return questionArray[questionArray[this.i][0]];
    },
    objectMethodsF: function () {
        this.unCheckRadio();
        let questionArray = objectMethods;
        questionArray[this.i][1]();
        this.correctAnswer = questionArray[this.i][2];
        document.getElementById("paperContent").innerHTML = questionArray[this.i][0];
        console.log(this.correctAnswer);
        document.getElementById("radioDiv").style.display = "block";
        return questionArray[questionArray[this.i][0]];
    },
    objectsF: function () {
        this.unCheckRadio();
        let questionArray = objects;
        questionArray[this.i][1]();
        this.correctAnswer = questionArray[this.i][2];
        document.getElementById("paperContent").innerHTML = questionArray[this.i][0];
        console.log(this.correctAnswer);
        document.getElementById("radioDiv").style.display = "block";
        return questionArray[questionArray[this.i][0]];
    },
    objectsFunctionsIfElseF: function () {
        this.unCheckRadio();
        let questionArray = objectsFunctionsIfElse;
        questionArray[this.i][1]();
        this.correctAnswer = questionArray[this.i][2];
        document.getElementById("paperContent").innerHTML = questionArray[this.i][0];
        console.log(this.correctAnswer);
        document.getElementById("radioDiv").style.display = "block";
        return questionArray[questionArray[this.i][0]];
    },
    simpleFunctionsF: function () {
        this.unCheckRadio();
        let questionArray = simpleFunctions;
        questionArray[this.i][1]();
        this.correctAnswer = questionArray[this.i][2];
        document.getElementById("paperContent").innerHTML = questionArray[this.i][0];
        console.log(this.correctAnswer);
        document.getElementById("radioDiv").style.display = "block";
        return questionArray[questionArray[this.i][0]];
    },
    trusyFalsyF: function () {
        this.unCheckRadio();
        let questionArray = trusyFalsy;
        questionArray[this.i][1]();
        this.correctAnswer = questionArray[this.i][2];
        document.getElementById("paperContent").innerHTML = questionArray[this.i][0];
        console.log(this.correctAnswer);
        document.getElementById("radioDiv").style.display = "block";
        return questionArray[questionArray[this.i][0]];
    }
}