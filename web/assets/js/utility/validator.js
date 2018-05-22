function validateRollNumber(elem) {
    var alert = elem.parentElement.parentElement.querySelector("lable");
    var rollNumber = elem.value;
    if (checkNull(rollNumber)) {
        alert.innerHTML = "Vui lòng nhập Mã sinh viên";
        elem.parentElement.className += " focused error";
        return false;
    }else if(!checkCharacter(rollNumber, "rollNumber")){
        alert.innerHTML = "Mã sinh viên không đúng định dạng, hợp lệ: D00496";
        elem.parentElement.className += " focused error";
        return false;
    }else if(!checkLength(rollNumber, 6)){
        alert.innerHTML = "Vui lòng nhập ít nhất 6 kí tự";
        elem.parentElement.className += " focused error";
        return false;
    }else {
        alert.innerHTML = "";
        elem.parentElement.className += " focused success";
        return true;
    }
}

function validateFullName(elem) {
    var alert = elem.parentElement.parentElement.querySelector("lable");
    var fullName = elem.value;
    if (checkNull(fullName)) {
        alert.innerHTML = "Vui lòng nhập Họ Tên";
        elem.parentElement.className += " error";
        return false;
    }else if(!checkCharacter(fullName, "fullName")){
        alert.innerHTML = "Họ Tên không đúng định dạng, chỉ bao gồm các kí tự : A-Z, a-z, khoảng trắng";
        elem.parentElement.className += " focused error";
        return false;
    }else if(!checkLength(fullName, 5)){
        alert.innerHTML = "Vui lòng nhập ít nhất 5 kí tự";
        elem.parentElement.className += " focused error";
        return false;
    }else {
        alert.innerHTML = "";
        elem.parentElement.className += " focused success";
        return true;
    }
}

function validateEmail(elem) {
    var alert = elem.parentElement.parentElement.querySelector("lable");
    var email = elem.value;
    if (checkNull(email)) {
        alert.innerHTML = "Vui lòng nhập Email";
        elem.parentElement.className += " focused error";
        return false;
    }else if(!checkCharacter(email, "email")){
        alert.innerHTML = "Email không đúng định dạng, email hợp lệ: example@gmail.com";
        elem.parentElement.className += " error";
        return false;
    }else if(!checkLength(email, 15)){
        alert.innerHTML = "Vui lòng nhập ít nhất 15 kí tự";
        elem.parentElement.className += " focused error";
        return false;
    }else {
        alert.innerHTML = "";
        elem.parentElement.className += " focused success";
        return true;
    }
}

function validatePhone(elem) {
    var alert = elem.parentElement.parentElement.querySelector("lable");
    var phone = elem.value;
    if (checkNull(phone)) {
        alert.innerHTML = "Vui lòng nhập Số điện thoại";
        elem.parentElement.className += " focused error";
        return false;
    }else if(!checkCharacter(phone, "phone")){
        alert.innerHTML = "Số điện thại không đúng định dạng, hợp lệ: +(84)965 080 258";
        elem.parentElement.className += " focused error";
        return false;
    }else if(!checkLength(phone, 12)){
        alert.innerHTML = "Vui lòng nhập ít nhất 12 kí tự";
        elem.parentElement.className += " focused error";
        return false;
    }else {
        alert.innerHTML = "";
        elem.parentElement.className += " focused success";
        return true;
    }
}

function validateBirthday(elem) {
    var alert = elem.parentElement.parentElement.querySelector("lable");
    var birthday = elem.value;
    if (checkNull(birthday)) {
        alert.innerHTML = "Vui lòng nhập Birthday";
        elem.parentElement.className += " focused error";
        return false;
    }else if(((new Date()).getTime() - (new Date(birthday)).getTime())/31536000 < 11){
        alert.innerHTML = "Bạn chưa đủ tuổi để đăng kí.";
        elem.parentElement.className += " focused error";
        return false;
    }else {
        alert.innerHTML = "";
        elem.parentElement.className += " focused success";
        return true;
    }
}

function validateGender(elm) {
    var alert = elem.parentElement.parentElement.querySelector("lable");
    var gender = elem.value;
    if (checkNull(gender)) {
        alert.innerHTML = "Vui lòng chọn giới tính.";
        elem.parentElement.className += " focused error";
        return false;
    }else {
        alert.innerHTML = "";
        elem.parentElement.className += " focused success";
        return true;
    }
}

function validateAddress(elm) {
    var alert = elem.parentElement.parentElement.querySelector("lable");
    var address = elem.value;
    if (checkNull(address)) {
        alert.innerHTML = "Vui lòng nhập địa chỉ.";
        elem.parentElement.className += " focused error";
        return false;
    }else {
        alert.innerHTML = "";
        elem.parentElement.className += " focused success";
        return true;
    }
}

function doSubmit(e) {
    e.preventDefault();
    var form = document.forms["form-register"];
    var rollNumber = form['rollNumber'];
    var address = form['address'];
    var phone = form['phone'];
    var fullName = form['name'];
    var email = form['email'];
    var birthday = form ['birthday'];
    var gender = form ['gender'];

    if (validateRollNumber(rollNumber) && validateFullname(fullName) && validateEmail(email) && validateAddress(address) && validateBirthday(birthday) && validatePhone(phone) && validateGender(gender)){
        var registerData = {
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
                    "avatar": "1.png"
                }
            }
        };
        var req = new XMLHttpRequest();
        req.open("POST", "https://students-api-fai.appspot.com/api/students");
        req.setRequestHeader("Content-Type", "application/json");
        req.onload = function () {
            console.log(JSON.parse(this.responseText));
        };
        req.onerror = function () {
            console.log(JSON.parse(this.responseText))
        };
        req.send(JSON.stringify(registerData))
    }
}

function doReset() {
    var labels = document.querySelectorAll("div.form-group.form-loat > lable");
    for(var i = 0; i < labels.length; i++){
        labels[i].innerHTML = "";
    }
}

var uploadImgUrl;

$(document).ready(function () {
    var url = "https://fai-students-api.appspot.com/api/upload";
    var req = new XMLHttpRequest();
    req.open("GET",url);
    req.onload = function () {
        uploadImgUrl = this.responseText;
    };
    req.onerror = function () {
        console.log(this.responseText);
    };
    req.send();
});

document.getElementById("myImg").onchange = function (ev) {
    var form = new FormData();
    form.append("myImg", ev.target.files[0]);
    var req = new XMLHttpRequest();
    req.open("POST", uploadImgUrl);
    req.onload = function () {
        document.forms["register-form"]["avatar"].value = this.responseText;
    };
    req.onerror = function () {
        console.log(this.responseText);
    };
    req.send(form);
}

    function checkNull(value) {
        var regex = /^\\s+$/;
        if(value == null || regex.test(value) || value === ""){
            return true;
        }
        return false;
    }

    function checkCharacter(value, type) {
        var regex;
        switch (type){
            case "rollNumber":
                regex = /^([A-Z]{1})([0-9]{5})$/;
                break;
            case "fullName":
                regex = XRegExp("^\\pL+$");
                break;
            case "phone":
                regex = /^(\\+)([0-9\\s]+)$/;
                break;
            case "email":
                regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                break;
        }
        return regex.test(value);
    }

    function checkLength(value, length) {
        if(value.length < length){
            return false;
        }
        return true;
    }
