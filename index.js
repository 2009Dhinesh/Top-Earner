import {boston} from "./boston.js";

let data = boston.data;
let topearners = [];

// if(data.salary < 2000000){
//     topearners.push({name:data[0][8],salary : data[0][11]});
// }
for (let i = 0; i < data.length; i++) {
    if (data[i][11] > 200000) {
        topearners.push({ name: data[i][8], salary: data[i][11] });
    }
}
let Earners = `<h1>Top Earner : </h1> <br>
                <table ><tr><th  style="border: 2px solid black;  background:green;">Name</th><th  style="border: 2px solid black; background:red">Salary</th></tr>
                <tr ><td  style="border: 2px solid black;">${topearners[0].name}</td>
                <td  style="border: 2px solid black;">${topearners[0].salary}</td></tr>`

// topearners.sort(function(a, b) {
//     return b.salary - a.salary;
// });

// topearners = topearners.slice(0, 5);

// let Earners = '<h1><u>Top Earners:</u></h1>';
// for (let i = 0; i < topearners.length; i++) {
//     Earners += `<h2>Top Earner ${i + 1}: ${topearners[i].name} - Salary: ${topearners[i].salary}</h2>`;
// }

document.getElementById("app").innerHTML = Earners;
console.log(topearners)


