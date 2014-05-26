<?php
?>
<!DOCTYPE html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Sample Modal</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="description" content="">
<meta name="viewport" content="width=device-width">
<meta name="language" content="en">

<link rel="stylesheet" type="text/css" href="css/confirm.css?v='1'">
<script src="js/libs/mootools-core-1.4.5.js"></script>
<script src="js/libs/mootools-more-1.4.0.1.js"></script>
<script src="js/modal.js?v='2'"></script>
</head>

<body>

    <!-- UI DIALOG BOX -->
    <div id="confirm-overlay" style="height: 100%;"></div>

    <div id="confirm">
        <div id="confirm-container">
            <a id="upper-close" class="modal-close" title="Close" href="#">x</a>
            <div class="header">
                <span>Confirm</span>
            </div>
            <div class="message">Continue to the SimpleModal Project page?</div>
            <div class="buttons">
                <div id="cancel-button" class="no simplemodal-close">No</div>
                <div id="submit-button" class="yes">Yes</div>
            </div>
        </div>
    </div>

    <input id="modal-id" type="button" value="Click Me"></input>

</body>
</html>


