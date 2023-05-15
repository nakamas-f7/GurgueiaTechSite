<!DOCTYPE html>
<html class="wide wow-animation" lang="en">
  <head>
    <title>Home</title>
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <!-- Stylesheets-->
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Poppins:400,500,600%7CTeko:300,400,500%7CMaven+Pro:500">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/fonts.css">
    <link rel="stylesheet" href="css/style.css">
    <style>.ie-panel{display: none;background: #212121;padding: 10px 0;box-shadow: 3px 3px 5px 0 rgba(0,0,0,.3);clear: both;text-align:center;position: relative;z-index: 1;} html.ie-10 .ie-panel, html.lt-ie-10 .ie-panel {display: block;}</style>
  </head>
  <body>
    <div class="page">
      
      <div id="home">
        <!-- Menu-->
          <?php include_once './componentes/menu.php'; ?>
        <!-- Noticias-->
          <?php include_once './componentes/noticias.php'; ?>
      </div>
      <!-- services-->
          <?php include_once './componentes/services.php'; ?>
      <!-- projetos-->
          <?php include_once './componentes/projetos.php'; ?>
      <!-- team-->
          <?php include_once './componentes/team.php'; ?>
      <!-- marketing-->
          <?php include_once './componentes/marketing.php'; ?>
      <!-- Valores -->
          <?php include_once './componentes/valores.php'; ?>
      <!-- Eventos -->
          <?php include_once './componentes/eventos.php'; ?>
      <!-- Contato -->
          <?php include_once './componentes/contato.php'; ?>
      <!-- Footer-->
          <?php include_once './componentes/footer.php'; ?>
    </div>
    <!-- Global Mailform Output-->
    <div class="snackbars" id="form-output-global"></div>
    <!-- Javascript-->
    <script src="js/core.min.js"></script>
    <script src="js/script.js"></script>
  </body>
</html>