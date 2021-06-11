function tr(a,i){

    var tbodyid = "tbodyid" + a;  

    var trbody = document.createElement("tr");
    var trbodyid = "trbodyid" + a + i;
    trbody.setAttribute("id",trbodyid);
    document.getElementById(tbodyid).appendChild(trbody);
  
    var thnof = document.createElement("th");
    var thbodyid = "thnoidf" + a + i;
    thnof.setAttribute("id",thbodyid);
    thnof.setAttribute("sope","row");
    document.getElementById(trbodyid).appendChild(thnof);
    document.getElementById(thbodyid).innerHTML = i;
    subject();
    grade();
    credit();

    function subject(){
      var tdsub = document.createElement("td");
      var tdsubid = "tdsubid" + a + i;
      tdsub.setAttribute("id",tdsubid);
      document.getElementById(trbodyid).appendChild(tdsub);
      
      var subinput = document.createElement("input");
      var subinputid = "subinputid" + a + i ;
      subinput.setAttribute("id",subinputid);
      subinput.setAttribute("type","text");
      subinput.setAttribute("class","form-control");
      subinput.setAttribute("placeholder","subject");
      document.getElementById(tdsubid).appendChild(subinput);
    }

    function grade(){
      var tdgd = document.createElement("td");
      var tdgdid = "tdgdid" + a + i;
      tdgd.setAttribute("id",tdgdid);
      document.getElementById(trbodyid).appendChild(tdgd);
      
      var gdinput = document.createElement("select");
      var gdinputid = "gdinputid" + a + i ;
      gdinput.setAttribute("id",gdinputid);
      gdinput.setAttribute("oninput","Sem1math()");
      gdinput.setAttribute("class","form-control");
      gdinput.setAttribute("aria-label","Default select example");
      document.getElementById(tdgdid).appendChild(gdinput);
      
      options()
      function options(){
        var gdoption0 = document.createElement("option");
        gdoption0id = "gdoption0id" + a + i;
        gdoption0.setAttribute("selected","");
        gdoption0.setAttribute("id",gdoption0id);
        document.getElementById(gdinputid).appendChild(gdoption0);
        document.getElementById(gdoption0id).innerHTML = "Grade or GP";

        var gdoption1 = document.createElement("option");
        gdoption1id = "gdoption1id" + a + i;
        gdoption1.setAttribute("value","10");
        gdoption1.setAttribute("id",gdoption1id);
        document.getElementById(gdinputid).appendChild(gdoption1);
        document.getElementById(gdoption1id).innerHTML = "O";

        var gdoption2 = document.createElement("option");
        gdoption2id = "gdoption2id" + a + i;
        gdoption2.setAttribute("value","9");
        gdoption2.setAttribute("id",gdoption2id);
        document.getElementById(gdinputid).appendChild(gdoption2);
        document.getElementById(gdoption2id).innerHTML = "A+";

        var gdoption3 = document.createElement("option");
        gdoption3id = "gdoption3id" + a + i;
        gdoption3.setAttribute("value","8");
        gdoption3.setAttribute("id",gdoption3id);
        document.getElementById(gdinputid).appendChild(gdoption3);
        document.getElementById(gdoption3id).innerHTML = "A";

        var gdoption4 = document.createElement("option");
        gdoption4id = "gdoption4id" + a + i;
        gdoption4.setAttribute("value","7");
        gdoption4.setAttribute("id",gdoption4id);
        document.getElementById(gdinputid).appendChild(gdoption4);
        document.getElementById(gdoption4id).innerHTML = "B+";

        var gdoption5 = document.createElement("option");
        gdoption5id = "gdoption5id" + a + i;
        gdoption5.setAttribute("value","6");
        gdoption5.setAttribute("id",gdoption5id);
        document.getElementById(gdinputid).appendChild(gdoption5);
        document.getElementById(gdoption5id).innerHTML = "B";

        var gdoption6 = document.createElement("option");
        gdoption6id = "gdoption6id" + a + i;
        gdoption6.setAttribute("value","0");
        gdoption6.setAttribute("id",gdoption6id);
        document.getElementById(gdinputid).appendChild(gdoption6);
        document.getElementById(gdoption6id).innerHTML = "U";
      }
    }
    function credit(){
      
      var tdce = document.createElement("td");
      var tdceid = "tdceid" + a + i;
      tdce.setAttribute("id",tdceid);
      document.getElementById(trbodyid).appendChild(tdce);
      
      var ceinput = document.createElement("select");
      var ceinputid = "ceinputid" + a + i ;
      ceinput.setAttribute("id",ceinputid);
      ceinput.setAttribute("oninput","Sem1math()");
      ceinput.setAttribute("class","form-control");
      ceinput.setAttribute("aria-label","Default select example");
      document.getElementById(tdceid).appendChild(ceinput);
      options()
      function options(){
        var ceoption0 = document.createElement("option");
        ceoption0id = "ceoption0id" + a + i;
        ceoption0.setAttribute("selected","");
        ceoption0.setAttribute("id",ceoption0id);
        document.getElementById(ceinputid).appendChild(ceoption0);
        document.getElementById(ceoption0id).innerHTML = "Credit";
    
        var ceoption1 = document.createElement("option");
        ceoption1id = "ceoption1id" + a + i;
        ceoption1.setAttribute("value","1");
        ceoption1.setAttribute("id",ceoption1id);
        document.getElementById(ceinputid).appendChild(ceoption1);
        document.getElementById(ceoption1id).innerHTML = "1";
    
        var ceoption2 = document.createElement("option");
        ceoption2id = "ceoption2id" + a + i;
        ceoption2.setAttribute("value","2");
        ceoption2.setAttribute("id",ceoption2id);
        document.getElementById(ceinputid).appendChild(ceoption2);
        document.getElementById(ceoption2id).innerHTML = "2";
    
        var ceoption3 = document.createElement("option");
        ceoption3id = "ceoption3id" + a + i;
        ceoption3.setAttribute("value","3");
        ceoption3.setAttribute("id",ceoption3id);
        document.getElementById(ceinputid).appendChild(ceoption3);
        document.getElementById(ceoption3id).innerHTML = "3";
    
        var ceoption4 = document.createElement("option");
        ceoption4id = "ceoption4id" + a + i;
        ceoption4.setAttribute("value","4");
        ceoption4.setAttribute("id",ceoption4id);
        document.getElementById(ceinputid).appendChild(ceoption4);
        document.getElementById(ceoption4id).innerHTML = "4";
    
        
      }
      
    
    
    
    
    } 
    j = i +1;
   document.getElementById("Addsubid"+ a ).setAttribute("onclick","tr("+ a + "," + j + ")");
   document.getElementById("Delsubid"+ a ).setAttribute("onclick","delSub("+ a + "," + i + ")");
  } 

function delSub(a,i){
    var id = "trbodyid" + a + i;
    var del =  document.getElementById(id);
    del.remove();
    j = i - 1;
    document.getElementById("Addsubid"+ a ).setAttribute("onclick","tr("+ a + "," + i + ")");
    document.getElementById("Delsubid"+ a ).setAttribute("onclick","delSub("+ a + "," + j + ")");

}  