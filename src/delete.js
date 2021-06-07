function del(n){

    var id ="id" + n  ; 
    var mod = "modeldiv1" + n;
    var del = document.getElementById(id);
    var del2 = document.getElementById(mod);
    del2.remove();
    del.remove();
    console.log(del)
    var add= parseInt(n)
    var del= parseInt(n - 1)
    var bt2= "del(" + del + ")";
    var bt = "AddNewSem(" + add + ") , model(" + add +")" ;
    document.getElementById("bt").setAttribute("onclick",bt);
    document.getElementById("ConDel").setAttribute("onclick",bt2);
    document.getElementById("bt2").style.display = "block";
    if (add <= 8){
      document.getElementById("bt").style.display = "block";
    }
    if (add <= 2){
      document.getElementById("bt2").style.display = "none";
  
    }
  }