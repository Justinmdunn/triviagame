<!DOCTYPE html>
<html lang="en-us">

<head>
  <meta charset="UTF-8">
  <title>

  </title>
</head>

<body>

  <script type="text/javascript"> 


    let answers = ['var sky = "true";' ,
   'var grass = true;'  , 'var hoursinday = true;', ];
   console.log("Var Total " , answers.length);
   console.log("1" ,answers[0]);
   console.log("2" ,answers[1]);
   console.log("3" ,answers[2]);
   
   

     var sky = prompt("the sky is blue ")
     console.log("1" ,sky);
     { if (sky != answers[0] ) {alert("wrong");}
     else   {alert("correct ");}}

     var grass = prompt("the grass is green");
     console.log("2" ,grass);
     {if ( grass != answers[1] ) {alert("wrong");}
     else   {alert("correct");}}

     var hoursinday = prompt("24 hours in a day");
     console.log( "3" ,hoursinday);
     { if (hoursinday != answers[2] ) {alert(" wrong");}
     else   {alert("correct");}}
     
  


   </script>
      
    </body>
    </html>