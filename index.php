<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="icon" type="image/png" href="resources/note.jpg">
    <title>SÅNGBOK</title>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="resources/style.css">

    <?php echo '<!--bahjs-->'; ?>
</head>
<!-- MAIN VIEW -->
<body style="height: 100%">
    <!-- Left pane -->
    <div id="leftpane" class="container col-md-3" style="background-color: #c7ffde; height: 100%">
        <div id="upperLeft" style="border-bottom: solid #b25c56; border-bottom-width: 1px">
            
                <div class="row" style="text-align: right"><button id="searchBtn" class="btn btn-default" style="margin-bottom: 4px; background-color: #ffb3ae; color: #b25c56;">Search</button></div> <!--float: right-->
                <div class="row" style="text-align: right"><button id="browseBtn" class="btn btn-default" style="margin-bottom: 4px; background-color: #68b287; color: #c7ffde;">Browse</button></div>
                <div class="row" style="text-align: right"><h5 style="color: #ffb3ae; margin-bottom: 0px; margin-right: 15px">User</h5></div> <!--text-align: right-->
                <div class="row" style="text-align: right"><h4 style="color: #b25c56; text-transform: uppercase; margin-top: 1px; margin-right: 15px">Username</h4></div>
        </div>
        <div id="middleLeft">

        </div>
        <div id="lowerLeft" style="text-align: center; border-top: solid #b25c56; border-top-width: 1px">
            <button type="button" class="btn btn-default" style="background-color: #c7ffde; color: #ffb3ae; border: none !important; float: center"> <span class="glyphicon glyphicon-plus"></span></button>
        </div>
    </div>

    <!-- Middle pane -->
    <div id="midpane" class="container col-md-6" style="background-color: #ffb3ae; height: 100%">
        <div id="search" class="row">
            <div id="searchFieldArea">
                <input id="searchField" type="text">
            </div>
            <div id="selectSearchArea">
                <select>
                    <option value="songs">Songs</option>
                    <option value="users">Users</option>
                    <option value="collections">Collections</option>
                </select>
            </div>
            <div id="searchresults">
            </div>
        </div>
        <div id="browse" style="display:none;" class="row">
            browse lol
        </div>
    </div>

    <!-- Right pane -->
    <div id="rightpane" class="container col-md-3" style="background-color: #c7ffde; height: 100%">
        <div id="upperRight" style="border-bottom: solid #b25c56; border-bottom-width: 1px">
            <h5 style="color: #ffb3ae;">Current collection</h4>
            <h4 style="color: #b25c56; text-transform: uppercase"><span id="currentColl"></span></h4>
        </div>

        <div id="lowerRight" style="text-align: center; border-top: solid #b25c56; border-top-width: 1px">

            <span class="glyphicon glyphicon-trash" style="color: #ffb3ae"></span>

        </div>

    </div>

    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script src="scripts/model.js"></script>
    <script src="scripts/controllers.js"></script>
</body>
</html>