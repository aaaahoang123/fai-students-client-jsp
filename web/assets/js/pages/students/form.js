Dropzone.options.frmFileUpload = false;
const BLOB_STORE_UPLOAD_IMG_URL = "https://students-api-fai.appspot.com/api/upload";
/**
 * Request get to the upload img api, and get the blob store upload url
 * Then initial the page
 */
$(document).ready(function () {
    $.ajax({
        url: BLOB_STORE_UPLOAD_IMG_URL,
        method: "GET",
        success: function (res) {
            document.getElementById("frm-file-upload").setAttribute("action", res);
            initializePlugins(res);
        },
        error: function (err) {
            console.log(err);
        }
    });
});

function initializePlugins(uploadImgUrl) {

    /**
     * Config and initialize the datepicker
     */
    $('.datepicker').bootstrapMaterialDatePicker({
        format: 'MM/DD/YYYY',
        clearButton: true,
        weekStart: 1,
        time: false
    });


    /**
     * Config and initial the input mask of email and phone
     */
    if (!String.prototype.startsWith) {
        Object.defineProperty(String.prototype, 'startsWith', {
            enumerable: false,
            configurable: false,
            writable: false,
            value: function (searchString, position) {
                position = position || 0;
                return this.lastIndexOf(searchString, position) === position;
            }
        });
    }

    var phone_field = $("form[name='student-form'] input[name='phone']");

    var masks = ['0000 000 000', '0000 000 00 00', '000 0000 0000'];

    var maskOptions = {
        onKeyPress: function(phone, e, currentField, options) {

            var selectedMask = "";
            var cleanPhone = (phone || "").replace(/\D+/, '');
            if(cleanPhone.startsWith("09") || cleanPhone.startsWith("08")){
                selectedMask = masks[0];
            }else if(cleanPhone.startsWith("02")){
                selectedMask = masks[2];
            }else {
                selectedMask = masks[1];
            }
            phone_field.mask(selectedMask, options);
        },
        clearIfNotMatch:true
    };

    phone_field.mask(masks[0], maskOptions);

    $("form[name='student-form'] input[name='email']").inputmask({ alias: "email" });

    /**
     * Config and initialize the drop zone
     */
    $("#frm-file-upload").dropzone({
        url: uploadImgUrl,
        method: 'POST',
        paramName: 'myImg',
        error: function (file, err) {
            console.log(err);
        },
        success: function (file, res) {
            document.getElementById("demo-avatar").src = res;
            document.getElementById("demo-avatar").style.display = "";
            document.forms["student-form"]['avatar'].value = res;
            $("#frm-file-upload").hide();
        }
    });
}