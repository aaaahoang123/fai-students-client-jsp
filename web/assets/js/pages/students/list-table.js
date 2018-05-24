var ListTableController = function (setup) {
    this.STUDENTS_API = 'https://students-api-fai.appspot.com/api/students';
    this.query = location.search;
    this.hasPage = (this.query !== "" && this.query.includes('page'));
    this.hasLimit = (this.query !== "" && this.query.includes('limit'));
    this.tableBody = setup.tableBody;
    this.infoBlock = setup.infoBlock;
    this.pagination = setup.pagination;
    this.pane = setup.pane;
};

var STUDENT_ID;

ListTableController.prototype = {

    /**
     * Load Student with AJAX and then callback with another method
     */

    loadStudent: function () {
        const table = this.tableBody, pane = this.pane;
        const controller = this;
        var request = new XMLHttpRequest();
        request.open('GET', this.STUDENTS_API + this.query);
        request.onloadend = function () {
            if (this.status === 200) {
                var data = JSON.parse(this.response).data;
                var meta = JSON.parse(this.response).meta;
                table.innerHTML = '';
                for (var i = 0; i < data.length; i++) {
                    controller.bindStudentToTable(data[i], table);
                }
                controller.genPagination(meta);
                controller.bindTableInfo(meta);
                pane.style.display = "";
                pane.className += " animated fadeIn";
            } else {
                console.log(this);
                try {
                    document.getElementById('error-500-section').style.display = "";
                } catch (e) {
                    console.log(e);
                }
            }
        };
        request.send();
    },
    bindTableInfo: function (meta) {
        var infos = this.infoBlock;

        console.log(infos);
        infos[0].innerText = (meta.page - 1) * meta.limit + 1;
        infos[1].innerText = meta.page * meta.limit;
        if ((meta.page * meta.limit) > meta.totalItem) {
            infos[1].innerText = meta.totalItem;
        }
        infos[2].innerText = (meta.totalItem);
    },
    bindStudentToTable: function (student, elem) {
        const controller = this;
        var row = document.createElement('tr');
        row.className = 'even';
        var rollCol = document.createElement('td');
        rollCol.className = 'sorting_1';
        rollCol.innerHTML = student.attributes.rollNumber;

        var nameCol = document.createElement('td');
        nameCol.innerHTML = student.attributes.name;

        var phoneCol = document.createElement('td');
        phoneCol.innerHTML = student.attributes.phone;

        var actionsCol = document.createElement('td');
        var editBtn = document.createElement('a');
        editBtn.className = 'btn btn-link waves-effect';
        editBtn.innerHTML = '<i class="material-icons">mode_edit</i>';
        editBtn.onclick = function (ev) {
            STUDENT_ID = student.id;
            console.log(STUDENT_ID);
            getStudentById();
        };
        editBtn.href = '/edit';
        actionsCol.appendChild(editBtn);


        var deleteBtn = document.createElement('a');
        deleteBtn.className = 'btn btn-link waves-effect';
        deleteBtn.innerHTML = '<i class="material-icons">delete</i>';
        deleteBtn.onclick = function (ev) {
            controller.confirmDelete(student.id, student.attributes.name);
        };
        actionsCol.appendChild(deleteBtn);

        row.appendChild(rollCol);
        row.appendChild(nameCol);
        row.appendChild(phoneCol);
        row.appendChild(actionsCol);

        elem.appendChild(row);
    },
    genPagination: function (meta) {
        var pagi = this.pagination;
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
            if (this.hasPage) pagi.querySelector("li.paginate_button.next > a").href = "/students/list-table" + location.search.replace('page=' + meta.page, 'page=' + (meta.page + 1));
            if (!this.hasPage && !this.hasLimit) pagi.querySelector("li.paginate_button.next > a").href = "/students/list-table?page=" + (meta.page + 1);
            if (!this.hasPage && this.hasLimit) pagi.querySelector("li.paginate_button.next > a").href = "/students/list-table" + location.search + "&page=" + (meta.page + 1);
        }

        /**
         * Tạo pagination dựa vào meta
         */
        for (var i = 1; i <= meta.totalPage; i++) {
            pagi.insertBefore(this.genPageNode(i, (meta.page === i), meta.page), pagi.querySelector("li.paginate_button.next"));
        }
    },
    genPageNode: function (num, active, cur) {
        var li = document.createElement("li");
        li.className = "paginate_button";

        var anchor = document.createElement("a");
        anchor.innerHTML = num;
        if (!this.hasPage && !this.hasLimit) anchor.href = "/students/list-table?page=" + num;
        if (!this.hasPage && this.hasLimit) anchor.href = "/students/list-table" + location.search + "&page=" + num;
        if (this.hasPage) anchor.href = "/students/list-table" + location.search.replace('page=' + cur, "page=" + num);
        if (active) {
            li.className += " active";
            anchor.href = "javascript.void(0)";
        }

        li.appendChild(anchor);

        return li;
    },
    deleteStudent: function (id, callBack) {
        var api = this.STUDENTS_API;
        $.ajax({
            url: api + "/" + id,
            method: "DELETE",
            success: function (res) {
                callBack.success();
            },
            error: function (res) {
                callBack.error(res);
            }
        });
    },
    confirmDelete: function (id, studentName) {
        swal({
                title: "Bạn có chắc chắn muốn xóa sinh viên " + studentName,
                text: "Nếu đã xóa, bạn không thể tìm lại dữ liệu !!!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Xóa",
                cancelButtonText: "Để sau",
                buttons: true,
                dangerMode: true,
                closeOnConfirm: false,
                showLoaderOnConfirm: true
            },
            function (willDelete) {
                if (willDelete) {
                    new ListTableController().deleteStudent(id, {
                        success: function () {
                            swal({
                                title: "Đã Xóa",
                                text: "Xóa sinh viên " + studentName + " thành công.",
                                type: "success",
                                showConfirmButton: false
                            });
                            setTimeout(function () {
                                location.reload();
                            }, 2000);
                        }, error: function (res) {
                            swal("Chưa Xóa", res.errors[0].detail, "error");
                        }
                    });
                }
            });
    }
};


var controller = new ListTableController({
    tableBody: document.getElementById('list-student-tbody'),
    infoBlock: document.querySelectorAll("#student_table_info>span"),
    pagination: document.getElementById("my-pagination"),
    pane: document.getElementById("list-student-card")
});

controller.loadStudent();