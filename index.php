<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
    <!-- <meta http-equiv="X-UA-Compatible" content="ie=edge"> --> 
    <title>taniatours – экскурсии в Бельгии</title>
    <!-- <link rel="shortcut icon" href="http://example.com/favicon.ico" /> -->

    <!-- FONT AWESOME -->
    <script src="https://kit.fontawesome.com/9471a05e89.js" type="text/javascript" crossorigin="anonymous"></script>
    
    <!-- JQUERY -->
    <!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> -->
    <!-- <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/jquery.easing.1.3.js"></script>
    <script src="js/jquery.scrollify.js"></script>     -->
    
    <!-- Google Web Font  -->
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"> 

    <!-- RESET -->
    <link rel="stylesheet" href="css/reset.min.css" />

   <!-- PERSONAL CSS -->
   <link rel="stylesheet" href="css/screen.css" />
</head>

<body>
    <!-- Heading  -->
    <?php // require 'php/component.nav.php'; ?>
    <?php require 'php/component.header.php'; ?>

     
    <!-- Main  -->
    <main>
        <?php require 'php/component.aboutme.php'; ?>
        <?php require 'php/component.blog.php'; ?>
        <?php require 'php/component.tours.php'; ?>
        <?php require 'php/component.contact.php'; ?>
    </main>

    

    <?php // require 'php/component.aboutme.php'; ?>


    <!-- JAVASCRIPT -->
    <script src="js/scroll.js"></script>

    <!-- <script>
        $(function() {
    	  $.scrollify({
    	    section : ".scrollify"
    	  });
    	});
    </script> -->

    <!-- FOOTER  -->
    <footer></footer>
</body>
</html>