<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="icon" type="image/png" href="resources/note.jpg">
    <title>SÅNGBOK</title>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css">

</head>
<!-- MAIN VIEW -->
<body style="height: 100%">

    <!-- Left pane -->
    <div id="leftpane" class="container col-md-3" style="background-color: #c7ffde; height: 100%">
        <div id="upperLeft" style="border-bottom: solid #b25c56; border-bottom-width: 1px">
            <ul style="list-style-type:none; text-align: right">
                <li><button id="searchBtn" class="btn btn-default" style="margin-bottom: 4px; background-color: #ffb3ae; color: #b25c56;">Search</button></li> <!--float: right-->
                <li><button id="browseBtn" class="btn btn-default" style="margin-bottom: 4px; background-color: #68b287; color: #c7ffde;">Browse</button></li>
                <li><h5 style="color: #ffb3ae;">User</h4></li> <!--text-align: right-->
                <li><h4 style="color: #b25c56; text-transform: uppercase">Username</h4></li>
            </ul>
        </div>
        <div id="middleLeft" style="border-bottom: solid #b25c56; border-bottom-width: 1px">

        </div>
        <div id="lowerLeft" style="text-align: center">
            <button type="button" class="btn btn-default" style="background-color: #c7ffde; color: #ffb3ae; border: none !important; float: center"> <span class="glyphicon glyphicon-plus"></span></button>
        </div>
    </div>

    <!-- Middle pane -->
    <div id="midpane" class="container col-md-6" style="background-color: #ffb3ae; height: 100%">
        <span class="initialmsg">Välj en kategori och en drink till vänster</span></div>

    <!-- Right pane -->
    <div id="rightpane" class="container col-md-3" style="background-color: #c7ffde; height: 100%">
        <div id="upperRight" style="border-bottom: solid #b25c56; border-bottom-width: 1px">
            <h5 style="color: #ffb3ae;">Current collection</h4>
            <h4 style="color: #b25c56; text-transform: uppercase"><span id="currentColl"></span></h4>
        </div>

        <div id="lowerRight" style="text-align: center">

            <span class="glyphicon glyphicon-trash" style="color: #ffb3ae"></span>

        </div>

    </div>

    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script src="scripts/model.js"></script>
    <script src="scripts/controllers.js"></script>
</body>
</html>