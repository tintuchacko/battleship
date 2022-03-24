<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Battleship</title>
    <link type="text/css" rel="stylesheet" href="css/bootstrap.min.css" />
    <link type="text/css" rel="stylesheet" href="css/style.css" />
    <script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script src="js/battleship.js"></script>
  </head>
  <body>
  <div class="container">
    <div class="row">
      <div class="col-md-6" id="messageArea">
        &nbsp;
      </div>
      <div class="col-md-6" id="formArea">
        <form>
        <input type="text" id="guessInput" placeholder="00">
        <input type="button" id="fireButton" value="Fire!">
        </form>
      </div>
    </div>
    <div class="row" id="board" >
      <!-- <div id="messageArea"></div> -->
      <table>
        <tr>
          <td></td>
          <?php
          for($i=0;$i<8;$i++)
          {
          ?>
          <td class="header"><?php echo $i;?></td>
          <?php
          }
          ?>
        </tr>
        <?php
        for($i=0;$i<8;$i++)
        {
        ?>

        <tr>
          <td class="header"><?php echo $i;?></td>
          <?php
          for($j=0;$j<8;$j++)
          {

          ?>
          <td class="normal" id="<?php echo $i.$j;?>"></td>
          <?php
          } 
          ?>
        </tr>
        <?php
        }
      ?>
      </table>
      
    </div>
    
  </div>
  </body>
</html>