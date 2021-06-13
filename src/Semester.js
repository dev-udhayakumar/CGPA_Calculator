document.getElementById("nametag").innerHTML = "Name : " +  localStorage['keyname'] ;
document.getElementById("rolltag").innerHTML = "RollNo : " + localStorage['keyroll'];
document.getElementById("deptag").innerHTML = "Department : " + localStorage['keydept'];

var a = 1;
AddNewSem(); 
function AddNewSem(){
    var li = document.createElement("li");
    var id = "id"+ a;
    li.setAttribute("id",id);
    li.setAttribute("class","shadow-sm border rounded list-group-item d-flex justify-content-between align-items-start  ");
    document.getElementById('hi').appendChild(li);
    div1();
    
      function div1(){
        var div1id = "div1" + a ;
        var div1 = document.createElement("div");
        div1.setAttribute("id",div1id);
        div1.setAttribute("class","ms-2 me-auto p-2");
        div1.setAttribute("style" ,"transition-delay: 1s;")
        document.getElementById(id).appendChild(div1);
        div2()
        Editbtn()
        function div2(){
          var div2id = "div2" + a ;
          var div2 = document.createElement("div");
          div2.setAttribute("id",div2id);
          div2.setAttribute("class","fw-bold fs-6 ");
          document.getElementById(div1id).appendChild(div2);
          document.getElementById(div2id).innerHTML = "Semester " + a;

          var p1id = "p1" + a;
          var p1 = document.createElement("p");
          p1.setAttribute("id",p1id);
          p1.setAttribute("class" ,"fs-6 text-dark");
          document.getElementById(div1id).appendChild(p1);
          document.getElementById(p1id).innerHTML ="SGPA : " + 0 + " Total credit : " + 0;
        }
      }
      function Editbtn(){
        var btnE = "btnE" + a;
        var btn1 = document.createElement("button");
        btn1.setAttribute("id",btnE);
        btn1.setAttribute("data-bs-toggle","modal");
        var modeli = "#modeldiv1" + a ;
        btn1.setAttribute("data-bs-target",modeli);
        btn1.setAttribute("class","btn-sm btn btn-outline-primary p-2 mb-2 rounded bi bi-pencil-square");
        btn1.setAttribute("type","button");
        document.getElementById(id).appendChild(btn1);
        document.getElementById(btnE).innerHTML = " Edit";

      } 
      model() 
      function model(){
   
        var div1 = document.createElement("div");
        var div1id = "modeldiv1" + a;
        div1.setAttribute("id",div1id);
        div1.setAttribute("class","modal fade");
        document.getElementById("models").appendChild(div1);
      
        var div2 = document.createElement("div");
        var div2id = "modeldiv2" + a;
        div2.setAttribute("id",div2id);
        div2.setAttribute("class","modal-dialog modal-dialog-centered modal-dialog-scrollable");
        document.getElementById(div1id).appendChild(div2);
      
        var div3 = document.createElement("div");
        var div3id = "modeldiv3" + a;
        div3.setAttribute("id",div3id);
        div3.setAttribute("class","modal-content");
        document.getElementById(div2id).appendChild(div3);
        content();
      
        function content(){
          modelTitle();
          modelbody();
          
      
          function modelTitle(){
            var divHead = document.createElement("div");
            var divHeadid = "modeldivHead" + a;
            divHead.setAttribute("id",divHeadid);
            divHead.setAttribute("class","modal-header");
            document.getElementById(div3id).appendChild(divHead);
      
            var Title = document.createElement("h5");
            var Titleid = "Titleid" + a;
            Title.setAttribute("id",Titleid);
            Title.setAttribute("class","modal-title");
            document.getElementById(divHeadid).appendChild(Title);
            document.getElementById(Titleid).innerHTML = "Semester " + a ;
    
            
            var btnsubmit = document.createElement("button");
            var btnsubmitid = "Submit" + a;
            btnsubmit.setAttribute("id",btnsubmitid);
            btnsubmit.setAttribute("data-bs-dismiss","modal");
            btnsubmit.setAttribute("onclick","sum()");
            btnsubmit.setAttribute("class","btn btn-primary ");
            document.getElementById(divHeadid).appendChild(btnsubmit);
            document.getElementById(btnsubmitid).innerHTML ="Save Changes";
    
            
            
          }
          function modelbody(){
            var divBody = document.createElement("div");
            var divBodyid = "modeldivBody" + a;
            divBody.setAttribute("id",divBodyid);
            divBody.setAttribute("class","modal-body");
            document.getElementById(div3id).appendChild(divBody);

            var divbtn =document.createElement("div")
            var divbtnid = "divbtn"+a;
            divbtn.setAttribute("id",divbtnid);
            divbtn.setAttribute("class","row");
            document.getElementById(divBodyid).appendChild(divbtn)

            var divbtnadd =document.createElement("div")
            var divbtnaddid = "divbtnadd"+a;
            divbtnadd.setAttribute("id",divbtnaddid);
            divbtnadd.setAttribute("class","p-3 col-8");
            document.getElementById(divbtnid).appendChild(divbtnadd)

            var divbtndel =document.createElement("div")
            var divbtndelid = "divbtndel"+a;
            divbtndel.setAttribute("id",divbtndelid);
            divbtndel.setAttribute("class","p-3 col-4");
            document.getElementById(divbtnid).appendChild(divbtndel)

            var Addsub = document.createElement("button");
            var Addsubid = "Addsubid" + a;
            Addsub.setAttribute("id",Addsubid);
            Addsub.setAttribute("class","btn btn-sm btn-success col-md-12");
            Addsub.setAttribute("onclick","tr(" + a +",1)");
            document.getElementById(divbtnaddid).appendChild(Addsub);
            document.getElementById(Addsubid).innerHTML = "Add Subject" ;
            
            var Delsub = document.createElement("button");
            var Delsubid = "Delsubid" + a;
            Delsub.setAttribute("id",Delsubid);
            Delsub.setAttribute("onclick","delSub(" + a +",0)");
            Delsub.setAttribute("class","btn btn-sm btn-danger col-md-12 ");
            document.getElementById(divbtndelid).appendChild(Delsub);
            document.getElementById(Delsubid).innerHTML = "Delete " ;
    

            

            table()
            function table(){
              
              var table = document.createElement("table");
              var tableid = "table1" + a;
              table.setAttribute("id",tableid);
              table.setAttribute("class","table table-primary table-bordered border-secondary")
              document.getElementById(divBodyid).appendChild(table);
              tableHead();
              tableBody();
              
            
              function tableHead(){
                var thead = document.createElement("thead");
                var theadid = "theadid" + a ;
                thead.setAttribute("id",theadid);
                thead.setAttribute("class","table-dark")
                document.getElementById(tableid).appendChild(thead);
            
                var trHead = document.createElement("tr");
                var trHeadid = "trHeadid" + a;
                trHead.setAttribute("id",trHeadid);
                document.getElementById(theadid).appendChild(trHead);
                th()
                function th(){
                  var thno = document.createElement("th");
                  var thnoid = "thnoid" + a;
                  thno.setAttribute("id",thnoid);
                  thno.setAttribute("sope","col");
                  document.getElementById(trHeadid).appendChild(thno);
                  document.getElementById(thnoid).innerHTML = "#";
            
                  var thsub = document.createElement("th");
                  var thsubid = "thsubid" + a;
                  thsub.setAttribute("id",thsubid);
                  thsub.setAttribute("sope","col");
                  document.getElementById(trHeadid).appendChild(thsub);
                  document.getElementById(thsubid).innerHTML = "Subject";
            
                  var thGa = document.createElement("th");
                  var thGaid = "thGaid" + a;
                  thGa.setAttribute("id",thGaid);
                  thGa.setAttribute("sope","col");
                  document.getElementById(trHeadid).appendChild(thGa);
                  document.getElementById(thGaid).innerHTML = "Grade";
            
                  var thCe = document.createElement("th");
                  var thCeid = "thCeid" + a;
                  thCe.setAttribute("id",thCeid);
                  thCe.setAttribute("sope","col");
                  document.getElementById(trHeadid).appendChild(thCe);
                  document.getElementById(thCeid).innerHTML = "Credit";
                }
                
              }
            
              function tableBody(){
                var tbody = document.createElement("tbody");
                var tbodyid = "tbodyid" + a ;
                tbody.setAttribute("id",tbodyid);
                tbody.setAttribute("class","p-3");
                document.getElementById(tableid).appendChild(tbody);
                tr(a,1);tr(a,2);tr(a,3);tr(a,4);tr(a,5);tr(a,6);
                

               
    
              }   
            }
          }
          function modelFoot(){
      
            var divFoot = document.createElement("div");
            var divFootid = "modeldivFoot" + a;
            divFoot.setAttribute("id",divFootid);
            divFoot.setAttribute("class","modal-footer");
            document.getElementById(div3id).appendChild(divFoot);
      
           
          }
        }
      }
    a = a +1;
    if (a > 2){
        document.getElementById("bt2").style.display = "block";
    }
    if (a > 8){
      document.getElementById("bt").style.display = "none";
  }
  }
  function del(){
    b = a -1  
    var id ="id" + b  ; 
    var mod = "modeldiv1" + b;
    var del = document.getElementById(id);
    var del2 = document.getElementById(mod);
    del2.remove();
    del.remove();
    a = a - 1;
    if (a > 2){
        document.getElementById("bt2").style.display = "block";
    }
    else{
      document.getElementById("bt2").style.display = "none";
  }
  if (a <= 8){
    document.getElementById("bt").style.display = "block";
  }
  }
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
      gdinput.setAttribute("class","form-control");
      gdinput.setAttribute("aria-label","Default select example");
      document.getElementById(tdgdid).appendChild(gdinput);
      
      options()
      function options(){
        var gdoption0 = document.createElement("option");
        gdoption0id = "gdoption0id" + a + i;
        gdoption0.setAttribute("selected","");
        gdoption0.setAttribute("value","0");
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
      ceinput.setAttribute("class","form-control");
      ceinput.setAttribute("aria-label","Default select example");
      document.getElementById(tdceid).appendChild(ceinput);
      options()
      function options(){
        var ceoption0 = document.createElement("option");
        ceoption0id = "ceoption0id" + a + i;
        ceoption0.setAttribute("selected","");
        ceoption0.setAttribute("value","0");
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
   document.getElementById("Submit" + a).setAttribute("onclick","sum("+ a + "," + i + ")");
  } 

function delSub(a,i){
    var id = "trbodyid" + a + i;
    var del =  document.getElementById(id);
    del.remove();
    j = i - 1;
    document.getElementById("Addsubid"+ a ).setAttribute("onclick","tr("+ a + "," + i + ")");
    document.getElementById("Delsubid"+ a ).setAttribute("onclick","delSub("+ a + "," + j + ")");
    document.getElementById("Submit"+ a ).setAttribute("onclick","sum("+ a + "," + j + ")");
    
} 