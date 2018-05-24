
var validateRollNumber = function (elm) {
    if(document.getElementById("alert-error").className !== ""){
        document.getElementById("alert-error").className = "";
        document.getElementById("alert-error").innerHTML = "";
    }
    var alert = elm.parentElement.parentElement.querySelector("label");
    var rollNumber = elm.value;
    if (checkNull(rollNumber)) {
        createAlert(alert, elm,"Vui lòng nhập Mã sinh viên");
        return false;
    }else if(!checkCharacter(rollNumber, "rollNumber")){
        createAlert(alert,elm,"Mã sinh viên không đúng định dạng, hợp lệ: D00496");
        return false;
    }else if(!checkLength(rollNumber, 6)){
        createAlert(alert, elm,"Vui lòng nhập ít nhất 6 kí tự");
        return false;
    }else {
        removeAlert(alert, elm);
        return true;
    }
}

var validateFullName = function (elm) {
    var alert = elm.parentElement.parentElement.querySelector("label");
    var fullName = elm.value;
    if (checkNull(fullName)) {
        createAlert(alert,elm, "Vui lòng nhập Họ Tên");
        return false;
    }else if(!checkCharacter(fullName, "fullName")){
        createAlert(alert, elm,"Họ Tên chỉ bao gồm các kí tự : A-Z, a-z, khoảng trắng");
        return false;
    }else if(!checkLength(fullName, 5)){
        createAlert(alert, elm,"Vui lòng nhập ít nhất 5 kí tự");
        return false;
    }else {
        removeAlert(alert, elm);
        return true;
    }
}

var validateEmail = function (elm) {
    var alert = elm.parentElement.parentElement.querySelector("label");
    var email = elm.value;
    if (checkNull(email)) {
        createAlert(alert, elm,"Vui lòng nhập Email");
        return false;
    }else if(!checkCharacter(email, "email")){
        createAlert(alert, elm, "Email không đúng định dạng, email hợp lệ: example@gmail.com");
        return false;
    }else if(!checkLength(email, 15)){
        createAlert(alert, elm, "Vui lòng nhập ít nhất 15 kí tự");
        return false;
    }else {
        removeAlert(alert, elm);
        return true;
    }
}

var validatePhone = function (elm) {
    var alert = elm.parentElement.parentElement.querySelector("label");
    var phone = elm.value;
    console.log(phone);
    if (checkNull(phone)) {
        createAlert(alert,elm,"Vui lòng nhập Số điện thoại");
        return false;
    }else if(!checkCharacter(phone, "phone")){
        createAlert(alert,elm, "Số điện thại không đúng định dạng, hợp lệ: 0988 123 456 hoặc 0123 456 12 12")
        return false;
    }else if(!checkLength(phone, 12)){
        createAlert(alert,elm,"Vui lòng nhập ít nhất 12 kí tự");
        return false;
    }else {
        removeAlert(alert, elm);
        return true;
    }
}

var validateBirthday = function (elm) {
    if(!elm.parentElement.className.includes('focused')){
        elm.parentElement.className += ' focused';
    }
    var alert = elm.parentElement.parentElement.querySelector("label");
    var birthday = elm.value;
    if (checkNull(birthday)) {
        createAlert(alert,elm,"Vui lòng nhập Birthday");
        return false;
    }else if(((new Date()).getFullYear() - (new Date(birthday)).getFullYear()) < 11){
        createAlert(alert,elm,"Độ tuổi cho phép đăng kí là trên 11 tuổi");
        return false;
    }else {
        removeAlert(alert, elm);
        return true;
    }
};

var validateGender = function (elm) {
    if(!elm.parentElement.parentElement.className.includes('focused')){
        elm.parentElement.parentElement.className += ' focused';
    }
    var alert = elm.parentElement.parentElement.parentElement.querySelector("label");
    var gender = elm.value;
    if (checkNull(gender)) {
        createAlert(alert,elm.parentElement,"Vui lòng chọn giới tính.");
        return false;
    }else {
        removeAlert(alert,elm.parentElement);
        return true;
    }
}

var validateAddress = function (elm) {
    var alert = elm.parentElement.parentElement.querySelector("label");
    var address = elm.value;
    if (checkNull(address)) {
        createAlert(alert, elm, "Vui lòng nhập địa chỉ.");
        return false;
    }else if(!checkLength(address, 10)){
        createAlert(alert, elm, "Vui lòng nhập ít nhất 10 kí tự");
    }else {
        removeAlert(alert,elm);
        return true;
    }
}

function doSubmit(ev) {
    ev.preventDefault();
    ev.target.disable = true;
    var form = document.forms["student-form"];
    var rollNumber = form['rollNumber'];
    var address = form['address'];
    var phone = form['phone'];
    var fullName = form['fullName'];
    var email = form['email'];
    var birthday = form ['birthday'];
    var gender = form ['gender'];
    var avatar = form['avatar'];
    if(avatar.value == null || avatar.value === ""){
        avatar.value = "1.png";
    }
    var r = validateRollNumber(rollNumber);
    var f = validateFullName(fullName);
    var e = validateEmail(email);
    var a = validateAddress(address);
    var b = validateBirthday(birthday);
    var p = validatePhone(phone);
    var g = validateGender(gender);
    if ( r && f && e && a && b && p && g){
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
                    "avatar": avatar.value
                }
            }
        };
        var req = new XMLHttpRequest();
        req.open("POST", "https://students-api-fai.appspot.com/api/students");
        req.setRequestHeader("Content-Type", "application/json");
        req.onload = function () {
            console.log(JSON.parse(this.responseText));
            if(req.status === 200 ||req.status === 201){
                showNotification("alert-success", "Thêm Sinh viên thành công", "bottom", "right", "animated bounceIn", "animated bounceOut");
                doReset();
                ev.target.disable = false;
            }else {
                var alertError = document.getElementById("alert-error");
                alertError.className = "alert bg-red";
                var errors = JSON.parse(this.responseText).errors;
                for(var i = 0; i < errors.length; i++){
                    if(req.status === 409){
                        alertError.innerHTML = "Mã sinh viên đã tồn tại";
                    }
                }
            }
        };
        req.onerror = function () {
            console.log(JSON.parse(this.responseText));
        };
        req.send(JSON.stringify(registerData))
    }
}

function doReset() {
    $("#gender select").val('default');
    $("#gender select").selectpicker('refresh');
    document.getElementById("demo-avatar").src = "";
    $("#frm-file-upload").show();
    var form = document.forms["student-form"];
    form['rollNumber'].value = "";
    form['address'].value = "";
    form['phone'].value = "";
    form['fullName'].value = "";
    form['email'].value = "";
    form ['birthday'].value = "";
    form ['gender'].value = "";
    form['avatar'].value = "";
    var labels = document.querySelectorAll("div.form-group > label");
    for(var i = 0; i < labels.length; i++){
        labels[i].innerHTML = "";
        labels[i].removeAttribute('class');
        if(labels[i].parentElement.querySelector("div.form-line").className.includes("success")){
            labels[i].parentElement.querySelector("div.form-line").className = labels[i].parentElement.querySelector("div.form-line").className.replace(" success","");
            labels[i].parentElement.querySelector("div.form-line").className = labels[i].parentElement.querySelector("div.form-line").className.replace(" focused","");
        }
        if(labels[i].parentElement.querySelector("div.form-line").className.includes("error")){
            labels[i].parentElement.querySelector("div.form-line").className = labels[i].parentElement.querySelector("div.form-line").className.replace(" error","");
            labels[i].parentElement.querySelector("div.form-line").className = labels[i].parentElement.querySelector("div.form-line").className.replace(" focused","");
        }
    }
    if(document.getElementById("alert-error").className !== ""){
        document.getElementById("alert-error").className = "";
        document.getElementById("alert-error").innerHTML = "";
    }
}


function checkNull(value) {
    var regex = XRegExp('^\\s+$');
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
            regex = XRegExp('^[\\pL\\s]+$');
            break;
        case "phone":
            regex = XRegExp('^[0-9\\s]+$');
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

function createAlert(alert, elm, str) {
    alert.innerHTML = str;
    alert.className = "error";
    if(elm.parentElement.className.includes("success")){
        elm.parentElement.className = elm.parentElement.className.replace(" success", "");
    }
    if(!elm.parentElement.className.includes("error")){
        elm.parentElement.className += " error";
    }

}

function removeAlert(alert, elm) {
    alert.removeAttribute('class');
    alert.innerHTML = "";

    if(elm.parentElement.className.includes("error")){
        elm.parentElement.className = elm.parentElement.className.replace(" error", "");
    }
    if(!elm.parentElement.className.includes("success")){
        elm.parentElement.className += " success";
    }

}

function showNotification(colorName, text, placementFrom, placementAlign, animateEnter, animateExit) {
    if (colorName === null || colorName === '') { colorName = 'bg-black'; }
    if (text === null || text === '') { text = 'Turning standard Bootstrap alerts'; }
    if (animateEnter === null || animateEnter === '') { animateEnter = 'animated fadeInDown'; }
    if (animateExit === null || animateExit === '') { animateExit = 'animated fadeOutUp'; }
    var allowDismiss = true;

    $.notify({
            message: text
        },
        {
            type: colorName,
            allow_dismiss: allowDismiss,
            newest_on_top: true,
            timer: 1000,
            placement: {
                from: placementFrom,
                align: placementAlign
            },
            animate: {
                enter: animateEnter,
                exit: animateExit
            },
            template: '<div data-notify="container" class="bootstrap-notify-container alert alert-dismissible {0} ' + (allowDismiss ? "p-r-35" : "") + '" role="alert">' +
            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
            '<span data-notify="icon"></span> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>'
        });
}
