<%--
  Created by IntelliJ IDEA.
  User: Admin
  Date: 5/21/2018
  Time: 2:46 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<style>
    .form-group{
        margin-bottom: 0 !important;
    }
    .custom-dropzone{
        height: 245px !important;
    }
    .custom-dropzone-text{
        font-size: 18px !important;
    }
    @media only screen and (max-width: 823px) and (min-width: 767px) {
        .custom-dropzone-text{
            font-size: 15px !important;
        }
        .dz-message > em{
            font-size: 12px;
        }
    }
</style>
<div class="container-fluid">
    <div class="card">
        <div class="header bg-red">
            <i class="material-icons md-36" style="float: left; margin-left: 1%; margin-right: 1%">person_add</i>
            <h2>
                Thêm mới sinh viên
                <small>Hãy điền đầy đủ thông tin!</small>
            </h2>
        </div>
        <div class="body">
            <div class="row">
                <div class="col-sm-4">
                    <form action="/" id="frm-file-upload" class="dropzone custom-dropzone" enctype="multipart/form-data">
                        <div class="dz-message">
                            <div class="drag-icon-cph">
                                <i class="material-icons md-18">add_a_photo</i>
                            </div>
                            <h4 class="custom-dropzone-text">Kéo tệp hoặc kích vào đây để tải ảnh lên</h4>
                            <em>(Ảnh được tải lên sẽ là ảnh đại diện của sinh viên.)</em>
                        </div>
                        <div class="fallback">
                            <input name="myImg" type="file">
                        </div>
                    </form>
                    <div class="text-center">
                        <img class="image" id="demo-avatar" style="width: 100%; display: none" src="">
                    </div>
                </div>

                <div class="col-sm-8">
                    <div id="alert-error" class=""></div>
                    <form id="form_validation" name="student-form" class="m-t-30" novalidate="novalidate">
                        <!-- first line: full name + email -->
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="input-group form-group form-float">
                                    <span class="input-group-addon">
                                        <i class="material-icons">credit_card</i>
                                    </span>
                                    <div class="form-line">
                                        <input type="text" class="form-control" name="rollNumber" placeholder="Mã số sinh viên" aria-required="true" onkeyup="validateRollNumber(this)">
                                    </div>
                                    <label></label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group input-group form-float">
                                    <span class="input-group-addon">
                                        <i class="material-icons">person</i>
                                    </span>
                                    <div class="form-line">
                                        <input type="text" class="form-control" name="fullName" placeholder="Họ tên" aria-required="true" onkeyup="validateFullName(this)">
                                    </div>
                                    <label></label>
                                </div>
                            </div>
                        </div>
                        <!-- /first line: full name + email -->

                        <!-- second line: address + email -->
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group input-group form-float">
                                    <span class="input-group-addon">
                                        <i class="material-icons">home</i>
                                    </span>
                                    <div class="form-line">
                                        <input type="text" class="form-control" name="address" placeholder="Địa chỉ"
                                               aria-required="true" onkeyup="validateAddress(this)">
                                    </div>
                                    <label></label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group input-group form-float">
                                    <span class="input-group-addon">
                                        <i class="material-icons">email</i>
                                    </span>
                                    <div class="form-line">
                                        <input type="text" class="form-control" name="email" placeholder="Email"
                                               aria-required="true" onkeyup="validateEmail(this)">
                                    </div>
                                    <label></label>
                                </div>
                            </div>
                        </div>
                        <!-- /second line: address + email -->
                        <!-- Third line: gender, phone -->

                        <div class="row">
                            <div class="col-sm-4">
                                <div class="form-group input-group">
                                    <span class="input-group-addon">
                                        <i class="material-icons">wc</i>
                                    </span>
                                    <div id="gender" class="form-line">
                                        <select style="display: none" class="form-control show-tick" name="gender" onchange="validateGender(this)">
                                            <option value="">-- Giới tính --</option>
                                            <option value="0">Nữ</option>
                                            <option value="1">Nam</option>
                                        </select>
                                    </div>
                                    <label></label>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group input-group form-float">
                                    <span class="input-group-addon">
                                        <i class="material-icons">local_phone</i>
                                    </span>
                                    <div class="form-line">
                                        <input type="text" name="phone" class="form-control"
                                               placeholder="Số điện thoại" onkeyup="validatePhone(this)">
                                    </div>
                                    <label></label>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="form-group input-group form-float">
                                    <span class="input-group-addon">
                                        <i class="material-icons">date_range</i>
                                    </span>
                                    <div class="form-line">
                                        <input type="text" name="birthday" class="form-control datepicker"
                                               placeholder="Sinh nhật" onchange="validateBirthday(this)">
                                    </div>
                                    <label></label>
                                </div>
                            </div>
                        </div>

                        <input type="text" name="avatar" style="display: none">
                        <button class="btn btn-primary waves-effect" type="button" onclick="doSubmit(event)">Lưu</button>
                        <button class="btn bg-red waves-effect" type="button" onclick="doReset()">Reset</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

