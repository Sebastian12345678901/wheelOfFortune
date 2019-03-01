let questions = {
    paper: document.getElementById("paperContent"),
    setSubeject: function (subject) {
        if (subject == "ifElse") {
            this.paper.innerHTML = `<h1>Subject: logics operators<h1> <hr> <br>  ${this.ifElse()}`;
        } else if (subject == "trusyFalsy") {
            this.paper.innerHTML = `<h1>Subject: frusy falsy?!?!<h1> <hr> <br>  ${this.trusyFalsy()}`;
        } else if (subject == "functions") {
            this.paper.innerHTML = `<h1>Subject: funcitons <h1> <hr> <br>  ${this.simpleFunctions()}`;
        } else if (subject == "objects") {
            this.paper.innerHTML = `<h1>Subject: objects <h1> <hr> <br>  ${this.objects()}`;
        } else if (subject == "functions-IfElse") {
            this.paper.innerHTML = `<h1>Subject: functions & logical operators <h1> <hr> <br>  ${this.functionsIfElse()}`;
        } else if (subject == "objects-methods") {
            this.paper.innerHTML = `<h1>Subject: objects & methods <h1> <hr> <br>  ${this.objectsMethods()}`;
        } else if (subject == "objects-functionsIf-else") {
            this.paper.innerHTML = `<h1>Subject: objects, methods & logical operators <h1> <hr> <br>  ${this.objectsFunctionsIfElse()}`;
        } else if (subject == "free-for-all") {
            this.paper.innerHTML = `<h1>Subject: Free for all <h1> <hr> <br>  ${this.freeForAll()}`;
        }
    },

    randomNumber: function () {

        return Math.floor(Math.random() * 2);
    },
    ifElse: function () {
        let questionArray = [
            "Question 1",
            "Question 2"
        ];

        return questionArray[this.randomNumber()];
    },
    trusyFalsy: function () {
        let questionArray = [
            "Question 1",
            "Question 2"
        ];

        return questionArray[this.randomNumber()];
    },
    simpleFunctions: function () {
        let questionArray = [
            "Question 1",
            "Question 2"
        ];

        return questionArray[this.randomNumber()];
    },
    objects: function () {
        let questionArray = [
            "Question 1",
            "Question 2"
        ];

        return questionArray[this.randomNumber()];
    },
    functionsIfElse: function () {
        let questionArray = [
            "Question 1",
            "Question 2"
        ];

        return questionArray[this.randomNumber()];
    },
    objectsMethods: function () {
        let questionArray = [
            "Question 1",
            "Question 2"
        ];

        return questionArray[this.randomNumber()];
    },
    objectsFunctionsIfElse: function () {
        let questionArray = [
            "Question 1",
            "Question 2"
        ];

        return questionArray[this.randomNumber()];
    },
    freeForAll: function () {
        let questionArray = [
            "Question 1",
            "Question 2"
        ];

        return questionArray[this.randomNumber()];
    },




}