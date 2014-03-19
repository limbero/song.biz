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
                    <span class="semibold lightred" id="user">Jesper Bratt</span><br>
                    <span class="semilight darkred" id="user_thing">MEGA POWER</span>
                    <hr>
                </td>
                <!-- TOP MIDDLE -->
                <td id="a2">
                    <div class="search">
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
                    <div class="search">
                        <div id="searchresults">
                        </div>
                    </div>
                    <div class="browse">
                        <div id="browse" style="display:none;" class="row">
                            browse lol
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

    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script src="scripts/model.js"></script>
    <script src="scripts/controllers.js"></script>
</body>
</html>