var STUDENTS_API = 'https://students-api-fai.appspot.com/api/students';
var query = location.search;
var hasPage = (query !== "" && query.includes('page'));
var hasLimit = (query !== "" && query.includes('limit'));
function loadStudent() {
    var request = new XMLHttpRequest();
    console.log(STUDENTS_API + query);
    request.open('GET', STUDENTS_API + query);
    request.onloadend = function () {
        if (this.status === 200) {
            var data = JSON.parse(this.response).data;
            var meta = JSON.parse(this.response).meta;
            document.getElementById('list-student-tbody').innerHTML = '';
            for (var i = 0; i < data.length; i++) {
                bindStudentToTable(data[i]);
            }
            genPagination(meta);
            document.getElementById("list-student-card").style.display = "";
            document.getElementById("list-student-card").className += " animated fadeIn";
        } else {
            console.log(this);
            document.getElementById('error-500-section').style.display = "";
        }
    };
    request.send();
}

loadStudent();

function bindStudentToTable(student) {
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

function genPagination(meta) {
    console.log(meta);
    var pagi = document.getElementById("my-pagination");
    /**
     * Nếu số trang hiện tại là 1 thì ko cho prev
     */
    if (meta.page === 1) pagi.querySelector("li.paginate_button.previous").className += " disabled";
    else pagi.querySelector("li.paginate_button.previous > a").href = "/students/list-table" + location.search.replace("page=" + meta.page, "page=" + (meta.page - 1));

    /**
     * Nếu số trang hiện tại bằng tổng số trang thì ko cho next
     */
    if (meta.page === meta.totalPage) pagi.querySelector("li.paginate_button.next").className += " disabled";
    else {
        if (hasPage) pagi.querySelector("li.paginate_button.next > a").href = "/students/list-table" + location.search.replace('page=' + meta.page, 'page=' + (meta.page + 1));
        if (!hasPage && !hasLimit) pagi.querySelector("li.paginate_button.next > a").href = "/students/list-table?page=" + (meta.page + 1);
        if (!hasPage && hasLimit) pagi.querySelector("li.paginate_button.next > a").href = "/students/list-table" + location.search + "&page=" + (meta.page + 1);
    }

    /**
     * Tạo pagination dựa vào meta
     */
    for (var i=1; i<=meta.totalPage; i++) {
        pagi.insertBefore(pageNode(i, (meta.page === i), meta.page), pagi.querySelector("li.paginate_button.next"));
    }
}

/**
 *
 * @param num
 * @param active
 * @returns {HTMLLIElement}
 * Nhận vào số trang, tình trạng node có active hay không, và return lại node đó
 */
var pageNode = function (num, active, cur) {
   var li = document.createElement("li");
   li.className = "paginate_button";

   var anchor = document.createElement("a");
   anchor.innerHTML = num;
   if (!hasPage && !hasLimit) anchor.href = "/students/list-table?page=" + num;
   if (!hasPage && hasLimit) anchor.href =  "/students/list-table" + location.search + "&page=" + num;
   if (hasPage) anchor.href = "/students/list-table" + location.search.replace('page=' + cur, "page=" + num);

   if (active) {
       li.className += " active";
       anchor.href = "javascript.void(0)";
   }

   li.appendChild(anchor);

   return li;
};

function deleteStudent(id) {
    $.ajax({
        url: STUDENTS_API + "/" + id,
        method: "DELETE",
        success: function (res) {
          console.log(res);
        },
        error: function (res) {
            console.log(res);
        }
    });
}