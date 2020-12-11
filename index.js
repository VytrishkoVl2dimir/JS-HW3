
const employee = {
    id: 0,
    name: 'Valeriy',
    surname: 'Zhmishenko',
    salary: 1000, 
    workExperience: 10, 
    isPrivileges: true, 
    gender: 'male',
    }

const Employee = function(user){
    this.id = user.id;
    this.name = user.name;
    this.surname = user.surname;
    this.salary = user.salary;
    this.workExperience = user.workExperience;
    this.isPrivileges = user.isPrivilegestrue;
    this.gender = user.gender;
}

const employeeObj = new Employee(employee);
console.log("task_1----------------");
console.log(employeeObj);
employeeObj.getFullName = function() {
    return this.surname + ' ' + this.name;
}
let userFullName = employeeObj.getFullName();
console.log("task_2----------------");
console.log(userFullName);
//--------------------------Задание 3------------------------------
    
let newArr = [];
let createEmployesFromArr = (arr) => {
    for(let arg of arr){
        const employeeObj = new Employee(arg);
        newArr.push(employeeObj);
    }
    return newArr
    }
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr)   
console.log("task_3---------------------");
console.log(emplyeeConstructArr);

//-------------------------Задание 4-------------------------------
let arrfullName = [];
const getFullNamesFromArr = (arr) => {
    for(let arg of arr){
        Object.assign(this, arg);
        arrfullName.push(this.surname + ' ' + this.name);
    }
    return arrfullName;
}  
const fullName = getFullNamesFromArr(emplyeeConstructArr);
console.log("task_4-------------------------------");
console.log(fullName);
//-------------------------Задание 5--------------------------------

const getMiddleSalary = (arr) => {
    let sumUserSalary = 0;
    for(let arg of arr){
        Object.assign(this, arg);
        sumUserSalary = sumUserSalary + Number(this.salary);
    }
    let userSalary = sumUserSalary / arr.length;
    return userSalary;
}
const averageuserSalary = getMiddleSalary(emplyeeConstructArr);
console.log("task_5-------------------------------");

console.log(averageuserSalary);

//-------------------------Задание 6--------------------------------

const getRandomEmployee = (arr) => {
    return arr[Math.floor((Math.random()*arr.length))];
    // return itemRandom;
}
    randomUser = getRandomEmployee(emplyeeConstructArr);
    console.log("task_6-------------------------------");
    console.log(randomUser);