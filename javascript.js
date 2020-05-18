$(document).ready(onReady);
// document.getElementById("myTable");

// let myTable = document.getElementById("myTable");

function onReady() {
    $('#submit').on('click', submitEmployee);
    $('#peopleList').on('click', '.deleteBtn', deleteItem);
    $('#total').on('click', '.deleteBtn', deleteItem);
}

function deleteItem() {
    $(this).parent().remove();
};

let employee = [];

function submitEmployee() {
    let newEmployee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        idNumber: $('#idNumber').val(),
        jobTitle: $('#jobTitle').val(),
        annualSalary: $('#annualSalary').val()
    }
    employee.push(newEmployee);

    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('')
    displayPeople(newEmployee);

    let monthlyCost = 0;
    // console.log('in Salary');
    for (let i = 0; i < employee.length; i++) {
        monthlyCost = monthlyCost + Number(employee[i].annualSalary);
        //console.log(annualSalary);
    }
    //let x = employee[i].annualSalary
    monthlyCost = monthlyCost / 12;

    $('#monthlyTotal').remove();
    if (monthlyCost > 20000) {
        $('#total').append(`<p id ="monthlyTotal" class = "red-background">monthly Total: ${monthlyCost}</p>`)
    } else {
        $('#total').append(`<p id ="monthlyTotal">monthly Total: ${monthlyCost}</p>`)

    }
    displayPeople();
}



function displayPeople() {
    $('#peopleList').empty();
    for (let i = 0; i < employee.length; i++) {
        $('#peopleList').append(`
        <li>
        ${employee[i].firstName} ${employee[i].lastName}, ${employee[i].idNumber}, ${employee[i].jobTitle}, ${employee[i].annualSalary}
        <button class="deleteBtn">delete</button>
        </li>
        `)
        console.log('in displayPeople');
        // let row = document.getElementById("myTable");
    }

}
