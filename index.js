function myFunction() {
    var x = document.lastModified;
    document.getElementById("demo").innerHTML = new Date(document.lastModified).toISOString().substr(11, 8);
  }
  
  myFunction()