<%@ page import="discapp.PlayerDashboard" %>
<%@ page import="static discapp.PlayerDashboard.*" %><%--
  Created by IntelliJ IDEA.
  User: cruot
  Date: 6/16/2017
  Time: 6:02 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Player Dashboard</title>
</head>
<body>
    <jsp:useBean id = "dashboard" class="discapp.PlayerDashboard"/>
    <p><jsp:getProperty name="dashboard" property="message"/></p>
</body>
</html>
