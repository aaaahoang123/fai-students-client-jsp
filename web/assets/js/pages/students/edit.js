var STUDENTS_API_EDIT = 'https://students-api-fai.appspot.com/api/students';
var query = location.search;
function getStudentById() {
    var request = new XMLHttpRequest();
    console.log(STUDENTS_API_EDIT + query);
    request.open('GET', STUDENTS_API_EDIT + '/' + STUDENT_ID);
    request.onload = function () {
        var data = JSON.parse(this.response).data;
        console.log(data)
    };

    request.onerror = function () {
        var data = JSON.parse(this.response).data;
        console.log(data)
    };
    request.send();
}