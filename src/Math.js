function Sem1math(){
    var sub1C =document.getElementById("ceinputid11").value;
    var sub1 = document.getElementById("gdinputid11").value * sub1C;

    var sub2C =document.getElementById("ceinputid12").value;
    var sub2 = document.getElementById("gdinputid12").value * sub2C;
    
    var sub3C =document.getElementById("ceinputid13").value;
    var sub3 = document.getElementById("gdinputid13").value * sub3C;
    
    var sub4C =document.getElementById("ceinputid14").value;
    var sub4 = document.getElementById("gdinputid14").value * sub4C;

    var sub5C =document.getElementById("ceinputid15").value;
    var sub5 = document.getElementById("gdinputid15").value * sub5C;

    var sub6C =document.getElementById("ceinputid16").value;
    var sub6 = document.getElementById("gdinputid16").value * sub6C;
    
    var sub7C =document.getElementById("ceinputid17").value;
    var sub7 = document.getElementById("gdinputid17").value * sub7C;
    
    var sub8C =document.getElementById("ceinputid18").value;
    var sub8 = document.getElementById("gdinputid18").value * sub8C;

    var sub9C =document.getElementById("ceinputid19").value;
    var sub9 = document.getElementById("gdinputid19").value * sub9C;
    
    var sub10C =document.getElementById("ceinputid110").value;
    var sub10 = document.getElementById("gdinputid110").value * sub10C;
    

    var TotalCe = sub1C + sub2C + sub3C + sub4C + sub5C + sub6C + sub7C + sub8C + sub9C + sub10C ;
    var GPA = ( sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10  ) / TotalCe;
    console.log(GPA);
    
}