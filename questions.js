let questions = {
    paper: document.getElementById("paperContent"),
    setSubeject: function (subject) {
        if (subject == "ifElse") {
            this.paper.innerHTML = `<bold>Subject: logics operators</bold> <hr> <br>`;
            this.freeForAllF();
        } else if (subject == "trusyFalsy") {
            this.paper.innerHTML = `<bold>Subject: frusy falsy?!?!</bold> <hr> <br>`;
            this.functionsIfElseF();
        } else if (subject == "functions") {
            this.paper.innerHTML = `<bold>Subject: funcitons </bold> <hr> <br>`;
            this.ifElseF();
        } else if (subject == "objects") {
            this.paper.innerHTML = `<bold>Subject: objects </bold> <hr> <br>`;
            this.objectMethodsF();
        } else if (subject == "functions-IfElse") {
            this.paper.innerHTML = `<bold>Subject: functions & logical operators </bold> <hr> <br>`;
            this.objectsF();
        } else if (subject == "objects-methods") {
            this.paper.innerHTML = `<bold>Subject: objects & methods </bold> <hr> <br>`;
            this.objectsFunctionsIfElseF()
        } else if (subject == "objects-functionsIf-else") {
            this.paper.innerHTML = `<bold>Subject: objects, methods & logical operators </bold> <hr> <br>`;
            this.simpleFunctionsF()
        } else if (subject == "free-for-all") {
            this.paper.innerHTML = `<bold>Subject: Free for all </bold> <hr> <br>`;
            this.trusyFalsyF();
        }
    },

    //gör varje element i arrayen till ett objekt med frågan 

    i: 0,
    correctAnswer: [],


    randomNumber: function () {

        return Math.floor(Math.random() * 2);
    },


    freeForAllF: function () {
        let questionArray = freeForAll;
        questionArray[this.i][1]();
        this.correctAnswer = questionArray[this.i][2];
        document.getElementById("paperContent").innerHTML = questionArray[this.i][0];
        return questionArray[questionArray[this.i][0]];
    },
    functionsIfElseF: function () {
        let questionArray = functionsIfElse;
        questionArray[this.i][1]();
        this.correctAnswer = questionArray[this.i][2];
        document.getElementById("paperContent").innerHTML = questionArray[this.i][0];
        return questionArray[questionArray[this.i][0]];
    },
    ifElseF: function () {
        let questionArray = ifElse;
        questionArray[this.i][1]();
        this.correctAnswer = questionArray[this.i][2];
        document.getElementById("paperContent").innerHTML = questionArray[this.i][0];
        return questionArray[questionArray[this.i][0]];
    },
    objectMethodsF: function () {
        let questionArray = objectMethods;
        questionArray[this.i][1]();
        this.correctAnswer = questionArray[this.i][2];
        document.getElementById("paperContent").innerHTML = questionArray[this.i][0];
        return questionArray[questionArray[this.i][0]];
    },
    objectsF: function () {
        let questionArray = objects;
        questionArray[this.i][1]();
        this.correctAnswer = questionArray[this.i][2];
        document.getElementById("paperContent").innerHTML = questionArray[this.i][0];
        return questionArray[questionArray[this.i][0]];
    },
    objectsFunctionsIfElseF: function () {
        let questionArray = objectsFunctionsIfElse;
        questionArray[this.i][1]();
        this.correctAnswer = questionArray[this.i][2];
        document.getElementById("paperContent").innerHTML = questionArray[this.i][0];
        return questionArray[questionArray[this.i][0]];
    },
    simpleFunctionsF: function () {
        let questionArray = simpleFunctions;
        questionArray[this.i][1]();
        this.correctAnswer = questionArray[this.i][2];
        document.getElementById("paperContent").innerHTML = questionArray[this.i][0];
        return questionArray[questionArray[this.i][0]];
    },
    trusyFalsyF: function () {
        let questionArray = trusyFalsy;
        questionArray[this.i][1]();
        this.correctAnswer = questionArray[this.i][2];
        document.getElementById("paperContent").innerHTML = questionArray[this.i][0];
        return questionArray[questionArray[this.i][0]];
    }
}