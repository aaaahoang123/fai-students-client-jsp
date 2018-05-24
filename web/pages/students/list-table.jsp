<%--
  Created by IntelliJ IDEA.
  User: Admin
  Date: 5/21/2018
  Time: 2:46 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="card" style="display: none" id="list-student-card">
    <div class="header bg-red">
        <h2>
            Danh Sách Sinh Viên
        </h2>
    </div>
    <div class="body">
        <div class="table-responsive">
            <div id="DataTables_Table_1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">

                <div id="DataTables_Table_1_filter" class="dataTables_filter col-md-11">
                    <label class="focused">

                        <input type="search" class="form-control input-lg " style="font-family:Arial, FontAwesome; font-size: 100%"  placeholder=" &#xF002; Tìm kiếm ..."  aria-controls="DataTables_Table_1">

                    </label>
                    <a href="/students/form" class="btn bg-light-blue btn-circle waves-effect waves-circle waves-float"
                       style="float:right;">
                        <i class="material-icons">add</i>
                    </a>
                </div>


                <table class="table table-bordered table-striped table-hover dataTable js-exportable m-t-20 text-center"
                       id="DataTables_Table_1" role="grid" aria-describedby="DataTables_Table_1_info">
                    <thead>
                    <tr role="row">
                        <th class="sorting_asc text-center" tabindex="0" aria-controls="DataTables_Table_1"
                            aria-label="Roll number of Student">
                            Mã Sinh Viên
                        </th>
                        <th class="sorting text-center" tabindex="0" aria-controls="DataTables_Table_1"
                            aria-label="Full name of Student">
                            Họ Tên
                        </th>
                        <th class="sorting text-center" tabindex="0" aria-controls="DataTables_Table_1"
                            aria-label="Phone number of Student">
                            Điện Thoại
                        </th>
                        <th class="sorting text-center" tabindex="0" aria-controls="DataTables_Table_1"
                            aria-label="Action with Students">
                            Thao Tác
                        </th>
                    </tr>
                    </thead>
                    <tfoot>
                    <tr>
                        <th rowspan="1" colspan="1" class="text-center">Mã Sinh Viên</th>
                        <th rowspan="1" colspan="1" class="text-center">Họ Tên</th>
                        <th rowspan="1" colspan="1" class="text-center">Điện Thoại</th>
                        <th rowspan="1" colspan="1" class="text-center">Thao Tác</th>
                    </tr>
                    </tfoot>
                    <tbody id="list-student-tbody">

                    </tbody>
                </table>
                <div class="row">
                    <div class="col-sm-5">
                        <div class="dataTables_info" id="student_table_info" role="status" aria-live="polite">
                            Đang xem học sinh từ <span></span> đến <span></span> trong tổng số <span></span> học
                            sinh.
                        </div>
                    </div>
                    <div class="col-sm-7">
                        <div class="dataTables_paginate paging_simple_numbers " id="DataTables_Table_1_paginate"
                             style="text-align: right;">
                            <ul class="pagination" id="my-pagination">
                                <li class="paginate_button previous">
                                    <a href="#" aria-controls="DataTables_Table_1" data-dt-idx="0"
                                       tabindex="0">Trước</a>
                                </li>
                                <li class="paginate_button next"><a href="#"
                                                                    aria-controls="DataTables_Table_1"
                                                                    data-dt-idx="7"
                                                                    tabindex="0">Sau</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
