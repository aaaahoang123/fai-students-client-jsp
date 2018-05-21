<%--
  Created by IntelliJ IDEA.
  User: Admin
  Date: 5/17/2018
  Time: 8:49 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix = "fn" uri = "http://java.sun.com/jsp/jstl/functions" %>
<%
  request.setAttribute("assets",  new StringBuilder().append(request.getRequestURL().toString().replace(request.getRequestURI(), "")).append("/assets/").toString());
%>
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>${title}</title>
  <link rel="icon" href="/favicon.ico" type="image/x-icon">
  <!-- Core css -->
  <link rel="stylesheet" href="${assets}plugins/bootstrap/css/bootstrap.css">
  <link rel="stylesheet" href="${assets}plugins/node-waves/waves.css">
  <link rel="stylesheet" href="${assets}plugins/animate-css/animate.css">
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&subset=latin,cyrillic-ext" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" type="text/css">
  <!-- /Core css -->

  <!-- Extra css -->
  <c:if test="${extraCss != null}">
    <c:forEach var="ecss" items="${extraCss}">
      <link rel="stylesheet" href="${assets}${ecss}">
    </c:forEach>
  </c:if>
  <!-- /Extra css -->
  <link rel="stylesheet" href="${assets}css/style.css">
  <link rel="stylesheet" href="${assets}css/themes/all-themes.css">
</head>
<body class="theme-red">
<c:import url="pages/layouts/loader.jsp" />
<!-- overlay -->
<div class="overlay"></div>
<!-- /overlay -->
<c:import url="pages/layouts/header.jsp" />
<c:import url="pages/layouts/sidebar.jsp" />

<section class="content">
  <c:import url="${content}" />
</section>

<!-- Script file -->

<script type="text/javascript" src="${assets}plugins/jquery/jquery.min.js"></script>
<script type="text/javascript" src="${assets}plugins/bootstrap/js/bootstrap.js"></script>
<script type="text/javascript" src="${assets}plugins/bootstrap-select/js/bootstrap-select.js"></script>
<script type="text/javascript" src="${assets}plugins/jquery-slimscroll/jquery.slimscroll.js"></script>
<script type="text/javascript" src="${assets}plugins/node-waves/waves.js"></script>
<script type="text/javascript" src="${assets}js/admin.js"></script>
<script type="text/javascript" src="${assets}js/demo.js"></script>
<!-- Extra script -->
<c:if test="${extraScript != null}">
  <c:forEach var="escript" items="${extraScript}">
    <script type="text/javascript" src="${assets}${escript}"></script>
  </c:forEach>
</c:if>
<!-- /Extra script -->
</body>
</html>