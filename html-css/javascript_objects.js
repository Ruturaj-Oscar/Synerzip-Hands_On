var myObj = {
    "name": "Ruturaj",
    "address": {
        "city": "Pune",
        "state": "Maharashtra",
        "pincode": 411038,
    },
    "Phone": 9876543210
};
console.log(myObj);

function createEmp(name, add, phone, city) {
    var newObject = {};
    newObject.name = name;
    newObject.address = add;
    newObject.Phone = phone;
    newObject.city = city;
    return newObject;
}
function printme() {


    var nm, addr, ph, ci;
    nm = document.getElementById("name").value;
    addr = document.getElementById("addr").value;
    ph = parseInt(document.getElementById("phone").value);
    ci = document.getElementById("city").value;
    var emp = Object.create(createEmp(nm, addr, ph, ci));
    console.log(emp);



    var propValue = "";
    for (var propName in emp) {
        propValue = emp[propName];

        document.write(propName + ":  " + propValue + "<br>");
    }
}
function validate(obj, lowval, hival) {
    if ((obj.value < lowval) || (obj.value > hival)) {
        alert('Invalid Value!');
    }
}


