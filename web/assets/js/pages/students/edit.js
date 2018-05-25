const StudentEditor = {
    studentId: "",
    student: {},
    studentApi: "https://students-api-fai.appspot.com/api/students/",

    bindStudentToForm: function(st) {
        console.log(st);
        if (st === null) st = this.student;
        let form = document.forms["student-form"];
        form['rollNumber'].value = st.rollNumber;
        form['address'].value = st.address;
        form['phone'].value = st.phone;
        form['fullName'].value = st.name;
        form['email'].value = st.email;
        form ['birthday'].value = new Date(st.birthday).toLocaleDateString('en-US');
        form ['gender'].value = st.gender;
        form['avatar'].value = st.avatar;
        $("#gender select").selectpicker('refresh');
    },

    loadStudent: function (id) {
        if (id === undefined || id === "" || id === null) id = this.studentId;
        let st = this.student;
        let control = this;
        $.ajax({
            url: this.studentApi + this.studentId,
            method: "GET",
            success: function (res) {
                st = res.data.attributes;
                control.bindStudentToForm(st);
            },
            error: function (res) {
                console.log(res);
                alert("Error when load students");
            }
        });
    },

    editStudent: function (id, el) {
        createButtonLoader(el);
        if (id === null || id === undefined) id = this.studentId;
        let control = this;

        let form = document.forms["student-form"];
        let rollNumber = form['rollNumber'];
        let address = form['address'];
        let phone = form['phone'];
        let fullName = form['fullName'];
        let email = form['email'];
        let birthday = form ['birthday'];
        let gender = form ['gender'];
        let avatar = form['avatar'];
        if (avatar.value == null || avatar.value === ""){
            avatar.value = "1.png";
        }
        let r = validateRollNumber(rollNumber);
        let f = validateFullName(fullName);
        let e = validateEmail(email);
        let a = validateAddress(address);
        let b = validateBirthday(birthday);
        let p = validatePhone(phone);
        let g = validateGender(gender);
        if ( r && f && e && a && b && p && g){
            let registerData = {
                "data": {
                    "type": "Student",
                    "attributes": {
                        "birthday": new Date(birthday.value)*1,
                        "address": address.value,
                        "gender": parseInt(gender.value),
                        "phone": phone.value,
                        "rollNumber": rollNumber.value,
                        "name": fullName.value,
                        "email": email.value,
                        "avatar": avatar.value
                    }
                }
            };
            $.ajax({
                url: control.studentApi + id,
                method: "PUT",
                data: JSON.stringify(registerData),
                success: function (res) {
                    showNotification("alert-success", "Sửa sinh viên thành công", "bottom", "right", "animated bounceIn", "animated bounceOut");
                    doReset();
                    setTimeout(function () {
                        location.reload();
                    }, 500);
                },
                error: function (res) {
                    console.log(res);
                    creatAlertResponeErrorServer(res);
                },
                complete: function () {
                    el.removeAttribute("disabled");
                    el.innerHTML = "<i class=\"material-icons\">save</i> <span>Lưu</span>";
                }
            });
        }
    }
};

try {
    StudentEditor.studentId = location.pathname.replace("/students/edit", "").replace("/", "");
} catch (e) {
    console.log(e);
}

StudentEditor.loadStudent();

document.getElementById("submit-btn").onclick = function () {
    StudentEditor.editStudent(StudentEditor.studentId, this);
};