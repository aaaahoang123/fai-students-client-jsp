package utility;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public abstract class Viewer extends HttpServlet {

    protected void responseView(HttpServletRequest req, HttpServletResponse resp, String title, String content, List<String> es, List<String> ec) throws ServletException, IOException {
        responseView(req, resp, title, content, es, ec, null);
    }

    protected void responseView(HttpServletRequest req, HttpServletResponse resp, String title, String content, List<String> es, List<String> ec, String path) throws ServletException, IOException {
        if (path == null) path = "/index.jsp";
        req.setAttribute("title", title);
        req.setAttribute("content", content);
        req.setAttribute("extraScript", es);
        req.setAttribute("extraCss", ec);
        req.getRequestDispatcher(path).forward(req, resp);
    }
}
