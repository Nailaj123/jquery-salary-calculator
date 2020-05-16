$(document).ready(onReady);

function onReady() {
    $('#submit').on('click', submitEmployee);
    $('#peopleList').on('click', '.deleteBtn', deleteItem);
}

function deleteItem() {
    console.log('in delete');
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
    $('#annualSalary').val('');
    displayPeople(employee);

}

function displayPeople(employee) {
    $('#peopleList').empty();
    console.log('in displayPeople');
    for (let i = 0; i < employee.length; i++) {
        $('#peopleList').append(`
        <li>
        ${employee[i].firstName}, ${employee[i].lastName}, ${employee[i].idNumber}, ${employee[i].jobTitle}, ${employee[i].annualSalary}
        <button class = "deleteBtn">delete</button
        </li>)
        `)
    }
}