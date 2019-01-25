<?php
session_start();
?>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="description" content="">
      <meta name="author" content="">
      <title>View threads WebApp</title>
      <!-- Bootstrap core CSS -->
      <link href="css/bootstrap.min.css" type="text/css" rel="stylesheet">
   </head>
   <body>
      <!-- Navigation -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
         <div class="container">
            <a class="navbar-brand" href="#">Welcome <?php echo $_SESSION["inputEmail"]; ?></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
               <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                     <a class="nav-link" href="/profile.php">Home</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="view.php">Threads
                      <span class="sr-only">()</span>
                     </a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="/assets/logout.php">Logout</a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
      <!-- Page Content -->
      <div class="container">
         <div class="row">
            <div class="col-lg-12 text-center">
                <br>
                <br>
<?php
$dbhost = 'sql12.freemysqlhosting.net';
$dbuser = 'sql12263927';
$dbpass = '46G4cj7Fs1';
$db     = 'sql12263927';
$conn = mysqli_connect($dbhost,$dbuser,$dbpass,$db);
if (mysqli_connect_errno())
{
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$result = mysqli_query($conn,"SELECT * FROM patients");
                
echo "<table class='table table-dark'>
<thead>
<tr>
<th scope='col'>Patient Name</th>
<th scope='col'>Gender</th>
<th scope='col'>Doctor</th>
<th scope='col'>Age</th>
<th scope='col'>Patient Edit</th>
</tr>
</thead>";
echo "<tbody>";
while($row = mysqli_fetch_array($result))
{

echo "<tr>";
echo "<td>" . $row['name'] . "</td>";
echo "<td>" . $row['sex'] . "</td>";
echo "<td>" . $row['doctor'] . "</td>";
echo "<td>" . $row['age'] . "</td>";
echo "</tr>";
}
echo "/<tbody>";
echo "</table>";

mysqli_close($conn);
?>
</table>
            
         </div>
      </div>
       </div>
   </body>
</html>