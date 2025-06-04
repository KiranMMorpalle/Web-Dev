

let empNo=[10];
let empName=[10];
let sal=[10];
let deptNo=[10];
let i=0, j=0;
let table;

function add(){
    empNo[i]=parseInt(prompt("Enter Emp No :"));
    empName[i]=prompt("Enter Emp Name :");
    sal[i]=parseInt(prompt("Enter Emp Salary :"));
    deptNo[i]=parseInt(prompt("Enter Dept No :"));
    i++;
}

function show(){
    let tb=document.getElementById("id1");

    for(j=0; j<i; j++)
    {
        table=`
        <tr>
            <td>${empNo[j]}</td>
            <td>${empName[j]}</td>
            <td>${sal[j]}</td>
            <td>${deptNo[j]}</td>
        </tr>`

        tb.innerHTML += table;
    }
}
