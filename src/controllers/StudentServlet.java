package controllers;

import utility.Viewer;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class StudentServlet extends Viewer {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        List<String> extraCss = new ArrayList<>();
        List<String> extraJS = new ArrayList<>();
        switch (req.getPathInfo()) {
            case "/form":
                extraCss.add("plugins/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css");
                extraCss.add("plugins/bootstrap-select/css/bootstrap-select.css");
                extraCss.add("plugins/dropzone/dropzone.css");
                extraJS.add("plugins/momentjs/moment.js");
                extraJS.add("plugins/jquery-inputmask/jquery.inputmask.bundle.js");
                extraJS.add("plugins/dropzone/dropzone.js");
                extraJS.add("plugins/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js");
                extraJS.add("js/pages/students/form.js");
                responseView(req, resp, "Add Student Form", "/pages/students/form.jsp", extraJS, extraCss);
                break;
            case "/list-table":
                extraJS.add("plugins/bootstrap-notify/bootstrap-notify.js");
                extraJS.add("js/pages/students/list-table.js");

                responseView(req, resp, "List Student Table", "/pages/students/list-table.jsp", extraJS, extraCss);
                break;
            default:
                req.setAttribute("code", 404);
                req.getRequestDispatcher("/pages/errors/layout.jsp").forward(req, resp);
                break;
        }
    }
}
