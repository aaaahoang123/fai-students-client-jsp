<%--
  Created by IntelliJ IDEA.
  User: Admin
  Date: 5/21/2018
  Time: 2:46 PM
  To change this template use File | Settings | File Templates.
--%>
<div class="card" style="display: none" id="list-student-card">
    <div class="header bg-red">
        <h2>
            LIST STUDENTS
        </h2>
    </div>
    <div class="body">
        <div class="table-responsive">
            <div id="DataTables_Table_1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
                <div class="dt-buttons col-sm-5">
                    <a class="dt-button buttons-copy buttons-html5" tabindex="0" aria-controls="DataTables_Table_1"
                       href="#"><span>Copy</span></a>
                    <a class="dt-button buttons-csv buttons-html5" tabindex="0" aria-controls="DataTables_Table_1"
                       href="#"><span>CSV</span></a>
                    <a class="dt-button buttons-excel buttons-html5" tabindex="0" aria-controls="DataTables_Table_1"
                       href="#"><span>Excel</span></a>
                    <a class="dt-button buttons-pdf buttons-html5" tabindex="0" aria-controls="DataTables_Table_1"
                       href="#"><span>PDF</span></a>
                    <a class="dt-button buttons-print" tabindex="0" aria-controls="DataTables_Table_1" href="#"><span>Print</span></a>
                </div>
                <div id="DataTables_Table_1_filter" class="dataTables_filter col-sm-4">
                    <label class="focused">Search:<input type="search" class="form-control input-sm" placeholder=""
                                                         aria-controls="DataTables_Table_1"></label>
                </div>
                <div class="col-sm-3">
                    <a href="javascript:void(0)" class="btn bg-red btn-block waves-effect "><i class="material-icons">person_add</i>
                        <span class="icon-name">Add New Student</span>
                    </a>
                </div>


                <table class="table table-bordered table-striped table-hover dataTable js-exportable m-t-20 text-center"
                       id="DataTables_Table_1" role="grid" aria-describedby="DataTables_Table_1_info">
                    <thead>
                    <tr role="row">
                        <th class="sorting_asc text-center" tabindex="0" aria-controls="DataTables_Table_1" aria-label="Roll number of Student">
                            Roll Number
                        </th>
                        <th class="sorting text-center" tabindex="0" aria-controls="DataTables_Table_1" aria-label="Full name of Student">
                            Full Name
                        </th>
                        <th class="sorting text-center" tabindex="0" aria-controls="DataTables_Table_1" aria-label="Phone number of Student">
                            Phone
                        </th>
                        <th class="sorting text-center" tabindex="0" aria-controls="DataTables_Table_1" aria-label="Action with Students">
                            Edit
                        </th>
                        <th class="sorting text-center" tabindex="0" aria-controls="DataTables_Table_1" aria-label="Action with Students">
                            Delete
                        </th>
                    </tr>
                    </thead>
                    <tfoot>
                    <tr>
                        <th rowspan="1" colspan="1" class="text-center">Roll Number</th>
                        <th rowspan="1" colspan="1" class="text-center">Full Name</th>
                        <th rowspan="1" colspan="1" class="text-center">Phone</th>
                        <th rowspan="1" colspan="1" class="text-center">Edit</th>
                        <th rowspan="1" colspan="1" class="text-center">Delete</th>
                    </tr>
                    </tfoot>
                    <tbody id="list-student-tbody">

                    </tbody>
                </table>
                <div class="row">
                    <div class="col-sm-5">
                        <div class="dataTables_info" id="DataTables_Table_1_info" role="status" aria-live="polite">
                            Showing 1 to 10 of 57 entries
                        </div>
                    </div>
                    <div class="col-sm-7">
                        <div class="dataTables_paginate paging_simple_numbers " id="DataTables_Table_1_paginate"
                             style="text-align: right;">
                            <ul class="pagination" id="my-pagination">
                                <li class="paginate_button previous">
                                    <a href="#" aria-controls="DataTables_Table_1" data-dt-idx="0"
                                       tabindex="0">Previous</a>
                                </li>
                                <li class="paginate_button next"><a href="#"
                                     aria-controls="DataTables_Table_1"
                                     data-dt-idx="7"
                                     tabindex="0">Next</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
