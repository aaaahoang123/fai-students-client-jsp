<%--
  Created by IntelliJ IDEA.
  User: Admin
  Date: 5/21/2018
  Time: 2:46 PM
  To change this template use File | Settings | File Templates.
--%>
<div class="card">
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


                <table class="table table-bordered table-striped table-hover dataTable js-exportable m-t-20"
                       id="DataTables_Table_1" role="grid" aria-describedby="DataTables_Table_1_info">
                    <thead>
                    <tr role="row">
                        <th class="sorting_asc" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1"
                            aria-sort="ascending" aria-label="Name: activate to sort column descending"
                            style="width: 119px;">Roll Number
                        </th>
                        <th class="sorting" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1"
                            aria-label="Position: activate to sort column ascending" style="width: 201px;">Full Name
                        </th>
                        <th class="sorting" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1"
                            aria-label="Salary: activate to sort column ascending" style="width: 64px;">Phone
                        </th>
                    </tr>
                    </thead>
                    <tfoot>
                    <tr>
                        <th rowspan="1" colspan="1">Roll Number</th>
                        <th rowspan="1" colspan="1">Full Name</th>
                        <th rowspan="1" colspan="1">Phone</th>
                    </tr>
                    </tfoot>
                    <tbody>
                    <tr role="row" class="odd">
                        <td class="sorting_1">Airi Satou</td>
                        <td>Accountant</td>
                        <td>$162,700</td>
                    </tr>
                    <tr role="row" class="even">
                        <td class="sorting_1">Angelica Ramos</td>
                        <td>Chief Executive Officer (CEO)</td>
                        <td>$1,200,000</td>
                    </tr>
                    <tr role="row" class="odd">
                        <td class="sorting_1">Ashton Cox</td>
                        <td>Junior Technical Author</td>
                        <td>$86,000</td>
                    </tr>
                    <tr role="row" class="even">
                        <td class="sorting_1">Bradley Greer</td>
                        <td>Software Engineer</td>
                        <td>$132,000</td>
                    </tr>
                    <tr role="row" class="odd">
                        <td class="sorting_1">Brenden Wagner</td>
                        <td>Software Engineer</td>
                        <td>$206,850</td>
                    </tr>
                    <tr role="row" class="even">
                        <td class="sorting_1">Brielle Williamson</td>
                        <td>Integration Specialist</td>
                        <td>$372,000</td>
                    </tr>
                    <tr role="row" class="odd">
                        <td class="sorting_1">Bruno Nash</td>
                        <td>Software Engineer</td>
                        <td>$163,500</td>
                    </tr>
                    <tr role="row" class="even">
                        <td class="sorting_1">Caesar Vance</td>
                        <td>Pre-Sales Support</td>
                        <td>$106,450</td>
                    </tr>
                    <tr role="row" class="odd">
                        <td class="sorting_1">Cara Stevens</td>
                        <td>Sales Assistant</td>
                        <td>$145,600</td>
                    </tr>
                    <tr role="row" class="even">
                        <td class="sorting_1">Cedric Kelly</td>
                        <td>Senior Javascript Developer</td>
                        <td>$433,060</td>
                    </tr>
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
                            <ul class="pagination ">
                                <li class="paginate_button previous disabled" id="DataTables_Table_1_previous">
                                    <a href="#" aria-controls="DataTables_Table_1" data-dt-idx="0"
                                       tabindex="0">Previous</a>
                                </li>
                                <li class="paginate_button active">
                                    <a href="#" aria-controls="DataTables_Table_1" data-dt-idx="1" tabindex="0">1</a>
                                </li>
                                <li class="paginate_button ">
                                    <a href="#" aria-controls="DataTables_Table_1" data-dt-idx="2" tabindex="0">2</a>
                                </li>
                                <li class="paginate_button ">
                                    <a href="#" aria-controls="DataTables_Table_1" data-dt-idx="3" tabindex="0">3</a>
                                </li>
                                <li class="paginate_button "><a href="#" aria-controls="DataTables_Table_1"
                                                                data-dt-idx="4" tabindex="0">4</a>
                                </li>
                                <li class="paginate_button "><a href="#" aria-controls="DataTables_Table_1"
                                                                data-dt-idx="5" tabindex="0">5</a>
                                </li>
                                <li class="paginate_button "><a href="#" aria-controls="DataTables_Table_1"
                                                                data-dt-idx="6" tabindex="0">6</a>
                                </li>
                                <li class="paginate_button next" id="DataTables_Table_1_next"><a href="#"
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