const EditController = function () {
    this.id = "";
    try {
        this.id = location.pathname.replace("students/edit").replace("/");
    } catch (e) {
        console.log(e);
    }

};

EditController.prototype = {
    isValidId: function () {
        if (this.id === "") {
            return false;
        }
    }
};