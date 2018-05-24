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
    //$("form[name='student-form'] input[name='phone']").inputmask('9999 999 99 99','9999 999 999', { placeholder: '____ ___ __ __', placeholder:'____ ___ ___'});
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