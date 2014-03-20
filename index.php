<?php
setcookie("user", "limbero", time()+86400);
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="icon" type="image/png" href="resources/newnote.png">
    <title>SÅNGBOK</title>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="resources/style.css">
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
                    <span class="semibold lightred" id="user">Jesper Bratt</span><br>
                    <a href="?logout=1" class="semilight darkred" id="user_thing">LOGOUT</a>
                    <hr>
                </td>
                <!-- TOP MIDDLE -->
                <td id="a2">
                    <div id="searchFieldArea" class="search">
                        <input id="searchField" type="text">
                    </div>
                    <div id="selectSearchArea" class="search">
                        <form id="searchtype">
                            <input type="radio" name="type" id="songs" value="songs" checked><label for="songs">SONGS</label> | 
                            <input type="radio" name="type" id="users" value="users"><label for="users">USERS</label> | 
                            <input type="radio" name="type" id="collections" value="collections"><label for="collections">COLLECTIONS</label>
                        </form>
                    </div>
                    <div id="browseTop" class="browse" style="display:none">
                        <h2>Browse</h2>
                        <h4>Browse through a selection of our most popular songs</h4>
                    </div>
                    <hr>
                </td>
                <!-- TOP RIGHT -->
                <td id="a3">
                    <span id="curcol" class="semibold lightred">Current collection</span><br>
                    <span id="current_collection" class="semilight darkred">AWESOME SONGS OF LOVE</span>
                    <hr>
                </td>
            </tr>
            <tr>
                <!-- MIDDLE LEFT -->
                <td id="b1">

                </td>
                <!-- MIDDLE MIDDLE -->
                <td id="b2">
                    <!--Search-->
                    <div id="searchresults" class="search">
                    </div>
                    <!--Browse-->
                    <div id="browse" class="browse" style="display:none;" class="row">
                       <h2>Student</h2>
                       <div id="browseStudent">

                       </div>
                       <h2>Party</h2>
                       <div id="browseParty">

                       </div>
                       <h2>National Anthem</h2>
                       <div id="browseNa">

                       </div>
                   </div>
               </td>
               <!-- MIDDLE RIGHT -->
               <td id="b3">

               </td>
           </tr>
           <tr>
            <!-- BOTTOM LEFT -->
            <td id="c1">
                <hr>
                <form id="createColl">
                <p><label for="collName">Name:</label><input id="collectionName" type="text" name="collName"></p> 
                <p><label for="collDesc">Description:</label><input id="collectionDescription" type="text" name="collDesc"></p>
                <button id="addBtn">+</button>
                </form>
            </td>
            <!-- BOTTOM MIDDLE -->
            <td id="c2">

            </td>
            <!-- BOTTOM RIGHT -->
            <td id="c3">
                <hr>
            </td>
        </tr>
    </tbody>
</table>

<script> var userid = "<?php echo $_COOKIE["user"]; ?>";</script>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
<script src="scripts/model.js"></script>
<script src="scripts/controllers.js"></script>
<script src="scripts/views.js"></script>
</body>
</html>