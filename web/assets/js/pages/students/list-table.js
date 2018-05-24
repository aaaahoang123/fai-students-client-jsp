
function loadStudent() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://students-api-fai.appspot.com/api/students');
    request.onload = function () {
        var data = JSON.parse(this.response).data;
        var meta = JSON.parse(this.response).meta;
        document.getElementById('list-student-tbody').innerHTML = '';
        for (var i = 0; i < data.length; i++) {
            bindStudentToTable(data[i]);
        }
        genPagination(meta);
    };
    request.onerror = function () {
        var data = JSON.parse(this.response);
        console.log(data);
    };
    request.send();
}

loadStudent();

function bindStudentToTable(student) {
    // <tr role="row" class="even">
    //     <td class="sorting_1">Angelica Ramos</td>
    //     <td>Chief Executive Officer (CEO)</td>
    //     <td>$1,200,000</td>
    //     <td>
    //              <button class="btn btn-link waves-effect"><i class="material-icons">mode_edit</i></button>
    //     </td>
    //     <td>
    //              <button class="btn btn-link waves-effect"><i class="material-icons">delete</i></button>
    //     </td>
//     </tr>
    var row = document.createElement('tr');
    row.className = 'even';
    var rollCol = document.createElement('td');
    rollCol.className = 'sorting_1';
    rollCol.innerHTML = student.attributes.rollNumber;

    var nameCol = document.createElement('td');
    nameCol.innerHTML = student.attributes.name;

    var phoneCol = document.createElement('td');
    phoneCol.innerHTML = student.attributes.phone;

    var editCol = document.createElement('td');
    var editBtn = document.createElement('a');
    editBtn.className = 'btn btn-link waves-effect';
    editBtn.innerHTML = '<i class="material-icons">mode_edit</i>';
    editBtn.href = '#';
    editBtn.onclick = function (ev) {
        alert(student.attributes.name);
    };
    editCol.appendChild(editBtn);

    var deletCol = document.createElement('td');
    var deleteBtn = document.createElement('a');
    deleteBtn.className = 'btn btn-link waves-effect';
    deleteBtn.innerHTML = '<i class="material-icons">delete</i>';
    deletCol.appendChild(deleteBtn);

    row.appendChild(rollCol);
    row.appendChild(nameCol);
    row.appendChild(phoneCol);
    row.appendChild(editCol);
    row.appendChild(deletCol);

    document.getElementById('list-student-tbody').appendChild(row);
}
// <li class="paginate_button previous disabled" id="DataTables_Table_1_previous">
//     <a href="#" aria-controls="DataTables_Table_1" data-dt-idx="0"
// tabindex="0">Previous</a>
//     </li>
//     <li class="paginate_button active">
//     <a href="#" aria-controls="DataTables_Table_1" data-dt-idx="1" tabindex="0">1</a>
//     </li>
//     <li class="paginate_button ">
//     <a href="#" aria-controls="DataTables_Table_1" data-dt-idx="2" tabindex="0">2</a>
//     </li>
//     <li class="paginate_button next" id="DataTables_Table_1_next"><a href="#"
// aria-controls="DataTables_Table_1"
// data-dt-idx="7"
// tabindex="0">Next</a>
//     </li>
function genPagination(meta) {
var li = document.createElement('li');
li.className = 'paginate_button previous disabled';

}