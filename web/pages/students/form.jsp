<%--
  Created by IntelliJ IDEA.
  User: Admin
  Date: 5/21/2018
  Time: 2:46 PM
  To change this template use File | Settings | File Templates.
--%>
<div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
    <div class="card">
        <div class="header bg-red">
            <h2>
                AVATAR UPLOAD - DRAG &amp; DROP OR WITH CLICK &amp; CHOOSE
                <small>Taken from <a href="http://www.dropzonejs.com/" target="_blank">www.dropzonejs.com</a></small>
            </h2>
        </div>
        <div class="body">
            <form action="/" id="frmFileUpload" class="dropzone dz-clickable" method="post" enctype="multipart/form-data">
                <div class="dz-message">
                    <img class="img-responsive" src="https://template-with-js-1526830219610.appspot.com/assets/images/image-gallery/thumb/thumb-1.jpg">
                    <h3>Drop files here or click to upload.</h3>
                    <em>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</em>
                </div>

            </form>
        </div>
    </div>
</div>

<div class="col-lg-8 col-md-4 col-sm-6 col-xs-12">
    <div class="card">
        <div class="header bg-red">
            <h2>
                Add Student Form <small>Define full information.</small>
            </h2>
        </div>
        <div class="body">
            <form id="form_validation" novalidate="novalidate" name="form-register">
                <div class="form-group form-float">
                    <div class="form-line">
                        <input type="text" class="form-control" name="rollNumber" required="" aria-required="true" onkeyup="validateRollNumber(this)">
                        <label class="form-label">Roll Number</label>
                    </div>
                    <lable class="text-danger"></lable>
                </div>
                <div class="form-group form-float">
                    <div class="form-line">
                        <input type="text" class="form-control" name="name" required="" aria-required="true" onkeyup="validateFullName(this)">
                        <label class="form-label">Name</label>
                    </div>
                    <lable class="text-danger"></lable>
                </div>
                <div class="form-group form-float">
                    <div class="form-line">
                        <input type="text" class="form-control" name="address" required="" aria-required="true" onkeyup="validateAddress(this)">
                        <label class="form-label">Address</label>
                    </div>
                    <lable class="text-danger"></lable>
                </div>
                <div class="form-group form-float">
                    <div class="form-line">
                        <input type="email" class="form-control" name="email" required="" aria-required="true" onkeyup="validateEmail(this)">
                        <label class="form-label">Email</label>
                    </div>
                    <lable class="text-danger"></lable>
                </div>
                <div class="form-group">
                    <input type="radio" name="gender" id="male" class="with-gap">
                    <label for="male">Male</label>

                    <input type="radio" name="gender" id="female" class="with-gap">
                    <label for="female" class="m-l-20">Female</label>

                </div>
                <div class="form-group form-float">
                    <div class="form-line">
                        <input type="text" class="form-control mobile-phone-number" placeholder="Ex: +84 (988) 123-456" name="phone" onkeyup="validatePhone(this)">
                    </div>
                    <lable class="text-danger"></lable>
                </div>
                <div class="form-group form-float">
                    <div class="form-line">
                        <input type="text" class="form-control date" placeholder="Ex: 30/07/1995" name="birthday" onkeyup="validateBirthday(this)">
                    </div>
                    <lable class="text-danger"></lable>
                </div>
                <div class="form-group">
                    <div class="form-line disabled">
                        <input type="text" class="form-control" placeholder="Avatar" disabled="">
                    </div>
                    <lable class="text-danger"></lable>
                </div>
                <button class="btn btn-primary waves-effect" type="button" onclick="doSubmit(this)">SAVE</button>
                <button class="btn bg-red waves-effect" type="button" onclick="doReset()">RESET</button>
            </form>
        </div>
    </div>
</div>
