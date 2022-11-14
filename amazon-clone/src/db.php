<?php
	$dbServer = 'localhost';
	$dbUser = 'root';
	$dbPass = '';
	$db = 'amazon-warehouse';

    $con = mysqli_connect($dbServer, $dbUser, $dbPass, $db)

    $method = $_SERVER['REQUEST_METHOD'];

    if (!$con) {
        die("Connection fialed: " . mysqli_connect_error());
    }

    swithc ($method) {
        case 'GET':
            $sql = "select * from product";
            break;
    }

    // run SQL statement
    $result = mysqli_query($con, $sql);

    //die if SQL failed
    if (!$result) {
        http_respoonse_code(404);
        die(mysqli_error($con));
    }

    if ($method == 'GET')
    {
        if (!$id) echo '[';
        for ($i=0; $i<mysqli_num_rows($result); $i++) {
            echo ($i>0?',':'').jason_encode(mysqli_fetch_object($result));
        }
        if (!$id) echo ']';
    }
    else {
        echo mysqli_affected_rows($con);
    }
    $con->close();

?>