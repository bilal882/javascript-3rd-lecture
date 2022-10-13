function testingOfSets() {
    let age = +prompt("Enter your age");
    let weight = +prompt("Enter your weight");

    // if (age <= 18 && weight <= 35) {
    //     alert("You are baby")
    // } else if (age <= 60 && weight <= 70) {
    //     alert("You are smart boy")
    // } else if (age > 60 && weight > 70) {
    //     alert("You are fat boy")
    // }

    if (age <= 18 || weight <= 35) {
        alert("You are baby")
    } else if (age <= 35 || weight <= 70) {
        alert("You are smart boy")
    } else if (age > 35 || weight > 70) {
        alert("You are fat boy")
    }
}



let arrayOfNames = ["Name 1", "Name 2"];




function addElement() {
    let value = prompt("Enter the value");

    arrayOfNames.unshift(value);

    console.log(arrayOfNames);
}


for (var i = 0; i < 2; i++) {
    document.getElementById("output").innerHTML += arrayOfNames[i] + "<br/>";
}  