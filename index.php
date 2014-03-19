<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="icon" type="image/png" href="resources/note.jpg">
    <title>SÅNGBOK</title>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="resources/style.css">

    <?php echo '<!--bahjs-->'; ?>
</head>
<!-- MAIN VIEW -->
<body>
    <table id="page">
        <tbody>
            <tr>
                <!-- TOP LEFT -->
                <td id="a1">
                    <button id="searchBtn">SEARCH</button><br>
                    <button id="browseBtn">BROWSE</button><br><br>
                    <span id="user">Jesper Bratt</span><br>
                    <span id="user_thing">MEGA POWER</span>
                    <hr>
                </td>
                <!-- TOP MIDDLE -->
                <td id="a2">
                    <div id="searchFieldArea">
                        <input id="searchField" type="text">
                    </div>
                    <div id="selectSearchArea">
                        <form>
                            <input type="radio" name="type" id="songs" value="songs" checked><label for="songs">SONGS</label> | 
                            <input type="radio" name="type" id="users" value="users"><label for="users">USERS</label> | 
                            <input type="radio" name="type" id="collections" value="collections"><label for="collections">COLLECTIONS</label>
                        </form>
                    </div>
                    <hr>
                </td>
                <!-- TOP RIGHT -->
                <td id="a3">
                    <div>lol</div>
                    <hr>
                </td>
            </tr>
            <tr>
                <!-- MIDDLE LEFT -->
                <td id="b1">
                    
                </td>
                <!-- MIDDLE MIDDLE -->
                <td id="b2">
                    
                </td>
                <!-- MIDDLE RIGHT -->
                <td id="b3">
                    
                </td>
            </tr>
            <tr>
                <!-- BOTTOM LEFT -->
                <td id="c1">
                    
                </td>
                <!-- BOTTOM MIDDLE -->
                <td id="c2">
                    
                </td>
                <!-- BOTTOM RIGHT -->
                <td id="c3">
                    
                </td>
            </tr>
        </tbody>
    </table>
    <!-- 

    <div id="leftpane">
        <div id="upperLeft" style="border-bottom: solid #b25c56; border-bottom-width: 1px">
            
                <div class="row" style="text-align: right">Search</button></div>
                <div class="row" style="text-align: right"><button id="browseBtn" class="btn btn-default" style="margin-bottom: 4px; ">Browse</button></div>
                <div class="row" style="text-align: right"><h5 style="color: #ffb3ae; margin-bottom: 0px; margin-right: 15px">User</h5></div>
                <div class="row" style="text-align: right"><h4 style="color: #b25c56; text-transform: uppercase; margin-top: 1px; margin-right: 15px">Username</h4></div>
        </div>
        <div id="middleLeft">

        </div>
        <div id="lowerLeft" style="text-align: center; border-top: solid #b25c56; border-top-width: 1px">
            <button type="button" class="btn btn-default" style="background-color: #c7ffde; color: #ffb3ae; border: none !important; float: center"> <span class="glyphicon glyphicon-plus"></span></button>
        </div>
    </div>

    <div id="midpane" class="container col-md-6" style="background-color: #ffb3ae; height: 100%">
        <div id="search" class="row">
            <div id="searchFieldArea">
                <input id="searchField" type="text">
            </div>
            <div id="selectSearchArea">
                <form>
                    <input type="radio" name="type" id="songs" value="songs" checked><label for="songs">SONGS</label> | 
                    <input type="radio" name="type" id="users" value="users"><label for="users">USERS</label> | 
                    <input type="radio" name="type" id="collections" value="collections"><label for="collections">COLLECTIONS</label>
                </form>
            </div>
            <div id="searchresults">
            </div>
        </div>
        <div id="browse" style="display:none;" class="row">
            browse lol
        </div>
    </div>

    <div id="rightpane" class="container col-md-3" style="background-color: #c7ffde; height: 100%">
        <div id="upperRight" style="border-bottom: solid #b25c56; border-bottom-width: 1px">
            <h5 style="color: #ffb3ae;">Current collection</h4>
            <h4 style="color: #b25c56; text-transform: uppercase"><span id="currentColl"></span></h4>
        </div>

        <div id="lowerRight" style="text-align: center; border-top: solid #b25c56; border-top-width: 1px">

            <span class="glyphicon glyphicon-trash" style="color: #ffb3ae"></span>

        </div>

    </div> -->

    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script src="scripts/model.js"></script>
    <script src="scripts/controllers.js"></script>
</body>
</html>