this.subject.innerHTML = `<h1>Subject: Free for all!</h1>`;

document.getElementById("paperContent").innerHTML = `let objectOne = { <br>
    &ensp;    x: 10, <br>
    &ensp;    myMethod: function () { <br>
    &ensp;&ensp;        return this.x + 5; <br>
    &ensp;    } <br>
    } <br>
    let objectTwo = { <br>
    &ensp;    y: 5, <br>
    &ensp;    myMethod: function () { <br>
    &ensp;&ensp;        this.y += objectOne.myMethod(); <br>
    &ensp;&ensp;        return this.y + 5; <br>
    &ensp;    } <br>
    } <br>
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
    console.log(objectThree.myMethod());`