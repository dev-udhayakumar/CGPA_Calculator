
function model(n){
    var div1 = document.createElement("div");
    var div1id = "modeldiv1" + n;
    div1.setAttribute("id",div1id);
    div1.setAttribute("class","modal fade");
    document.getElementById("models").appendChild(div1);
  
    var div2 = document.createElement("div");
    var div2id = "modeldiv2" + n;
    div2.setAttribute("id",div2id);
    div2.setAttribute("class","modal-dialog modal-dialog-centered");
    document.getElementById(div1id).appendChild(div2);
  
    var div3 = document.createElement("div");
    var div3id = "modeldiv3" + n;
    div3.setAttribute("id",div3id);
    div3.setAttribute("class","modal-content");
    document.getElementById(div2id).appendChild(div3);
    content();
  
    function content(){
      modelTitle();
      modelbody();
      modelFoot();
  
      function modelTitle(){
        var divHead = document.createElement("div");
        var divHeadid = "modeldivHead" + n;
        divHead.setAttribute("id",divHeadid);
        divHead.setAttribute("class","modal-header");
        document.getElementById(div3id).appendChild(divHead);
  
        var Title = document.createElement("h5");
        var Titleid = "Titleid" + n;
        Title.setAttribute("id",Titleid);
        Title.setAttribute("class","modal-title");
        document.getElementById(divHeadid).appendChild(Title);
        document.getElementById(Titleid).innerHTML = "Sem " + n ;
      }
      function modelbody(){
        var divBody = document.createElement("div");
        var divBodyid = "modeldivBody" + n;
        divBody.setAttribute("id",divBodyid);
        divBody.setAttribute("class","modal-body");
        document.getElementById(div3id).appendChild(divBody);
        table()
        function table(){
          
          var table = document.createElement("table");
          var tableid = "table1" + n;
          table.setAttribute("id",tableid);
          table.setAttribute("class","table table-primary table-bordered border-secondary")
          document.getElementById(divBodyid).appendChild(table);
          tableHead();
          tableBody();
        
          function tableHead(){
            var thead = document.createElement("thead");
            var theadid = "theadid" + n ;
            thead.setAttribute("id",theadid);
            thead.setAttribute("class","table-dark")
            document.getElementById(tableid).appendChild(thead);
        
            var trHead = document.createElement("tr");
            var trHeadid = "trHeadid" + n;
            trHead.setAttribute("id",trHeadid);
            document.getElementById(theadid).appendChild(trHead);
            th()
            function th(){
              var thno = document.createElement("th");
              var thnoid = "thnoid" + n;
              thno.setAttribute("id",thnoid);
              thno.setAttribute("sope","col");
              document.getElementById(trHeadid).appendChild(thno);
              document.getElementById(thnoid).innerHTML = "#";
        
              var thsub = document.createElement("th");
              var thsubid = "thsubid" + n;
              thsub.setAttribute("id",thsubid);
              thsub.setAttribute("sope","col");
              document.getElementById(trHeadid).appendChild(thsub);
              document.getElementById(thsubid).innerHTML = "Subject";
        
              var thGa = document.createElement("th");
              var thGaid = "thGaid" + n;
              thGa.setAttribute("id",thGaid);
              thGa.setAttribute("sope","col");
              document.getElementById(trHeadid).appendChild(thGa);
              document.getElementById(thGaid).innerHTML = "Grade";
        
              var thCe = document.createElement("th");
              var thCeid = "thCeid" + n;
              thCe.setAttribute("id",thCeid);
              thCe.setAttribute("sope","col");
              document.getElementById(trHeadid).appendChild(thCe);
              document.getElementById(thCeid).innerHTML = "Credit";
            }
            
          }
        
          function tableBody(){
            var tbody = document.createElement("tbody");
            var tbodyid = "tbodyid" + n ;
            tbody.setAttribute("id",tbodyid);
            tbody.setAttribute("class","p-3");
            document.getElementById(tableid).appendChild(tbody);
            tr(1)
            tr(2)
            tr(3)
            tr(4)
            tr(5)
            tr(6)
            tr(7)
            function tr(i){
              
              var trbody = document.createElement("tr");
              var trbodyid = "trbodyid1" + n + i;
              trbody.setAttribute("id",trbodyid);
              document.getElementById(tbodyid).appendChild(trbody);
            
              var thnof = document.createElement("th");
              var thbodyid = "thnoidf" + n + i;
              thnof.setAttribute("id",thbodyid);
              thnof.setAttribute("sope","row");
              document.getElementById(trbodyid).appendChild(thnof);
              document.getElementById(thbodyid).innerHTML = i;
              subject();
              grade();
              credit();

              function subject(){
                var tdsub = document.createElement("td");
                var tdsubid = "tdsubid" + n + i;
                tdsub.setAttribute("id",tdsubid);
                document.getElementById(trbodyid).appendChild(tdsub);
                
                var subinput = document.createElement("input");
                var subinputid = "subinputid" + n + i ;
                subinput.setAttribute("id",subinputid);
                subinput.setAttribute("type","text");
                subinput.setAttribute("class","form-control");
                subinput.setAttribute("placeholder","subject");
                document.getElementById(tdsubid).appendChild(subinput);
              }
 
              function grade(){
                var tdgd = document.createElement("td");
                var tdgdid = "tdgdid" + n + i;
                tdgd.setAttribute("id",tdgdid);
                document.getElementById(trbodyid).appendChild(tdgd);
                
                var gdinput = document.createElement("select");
                var gdinputid = "gdinputid" + n + i ;
                gdinput.setAttribute("id",gdinputid);
                gdinput.setAttribute("class","form-control");
                gdinput.setAttribute("aria-label","Default select example");
                document.getElementById(tdgdid).appendChild(gdinput);
                options()
                function options(){
                  var gdoption0 = document.createElement("option");
                  gdoption0id = "gdoption0id" + n + i;
                  gdoption0.setAttribute("selected","");
                  gdoption0.setAttribute("id",gdoption0id);
                  document.getElementById(gdinputid).appendChild(gdoption0);
                  document.getElementById(gdoption0id).innerHTML = "Grade";
  
                  var gdoption1 = document.createElement("option");
                  gdoption1id = "gdoption1id" + n + i;
                  gdoption1.setAttribute("value","1");
                  gdoption1.setAttribute("id",gdoption1id);
                  document.getElementById(gdinputid).appendChild(gdoption1);
                  document.getElementById(gdoption1id).innerHTML = "O";

                  var gdoption2 = document.createElement("option");
                  gdoption2id = "gdoption2id" + n + i;
                  gdoption2.setAttribute("value","2");
                  gdoption2.setAttribute("id",gdoption2id);
                  document.getElementById(gdinputid).appendChild(gdoption2);
                  document.getElementById(gdoption2id).innerHTML = "A+";

                  var gdoption3 = document.createElement("option");
                  gdoption3id = "gdoption3id" + n + i;
                  gdoption3.setAttribute("value","3");
                  gdoption3.setAttribute("id",gdoption3id);
                  document.getElementById(gdinputid).appendChild(gdoption3);
                  document.getElementById(gdoption3id).innerHTML = "A";

                  var gdoption4 = document.createElement("option");
                  gdoption4id = "gdoption4id" + n + i;
                  gdoption4.setAttribute("value","4");
                  gdoption4.setAttribute("id",gdoption4id);
                  document.getElementById(gdinputid).appendChild(gdoption4);
                  document.getElementById(gdoption4id).innerHTML = "B+";

                  var gdoption5 = document.createElement("option");
                  gdoption5id = "gdoption5id" + n + i;
                  gdoption5.setAttribute("value","5");
                  gdoption5.setAttribute("id",gdoption5id);
                  document.getElementById(gdinputid).appendChild(gdoption5);
                  document.getElementById(gdoption5id).innerHTML = "B";

                  var gdoption6 = document.createElement("option");
                  gdoption6id = "gdoption6id" + n + i;
                  gdoption6.setAttribute("value","6");
                  gdoption6.setAttribute("id",gdoption6id);
                  document.getElementById(gdinputid).appendChild(gdoption6);
                  document.getElementById(gdoption6id).innerHTML = "U";
                }
                



              }
              function credit(){
                
                var tdce = document.createElement("td");
                var tdceid = "tdceid" + n + i;
                tdce.setAttribute("id",tdceid);
                document.getElementById(trbodyid).appendChild(tdce);
                
                var ceinput = document.createElement("select");
                var ceinputid = "ceinputid" + n + i ;
                ceinput.setAttribute("id",ceinputid);
                ceinput.setAttribute("class","form-control");
                ceinput.setAttribute("aria-label","Default select example");
                document.getElementById(tdceid).appendChild(ceinput);
                options()
                function options(){
                  var ceoption0 = document.createElement("option");
                  ceoption0id = "ceoption0id" + n + i;
                  ceoption0.setAttribute("selected","");
                  ceoption0.setAttribute("id",ceoption0id);
                  document.getElementById(ceinputid).appendChild(ceoption0);
                  document.getElementById(ceoption0id).innerHTML = "Credit";
              
                  var ceoption1 = document.createElement("option");
                  ceoption1id = "ceoption1id" + n + i;
                  ceoption1.setAttribute("value","1");
                  ceoption1.setAttribute("id",ceoption1id);
                  document.getElementById(ceinputid).appendChild(ceoption1);
                  document.getElementById(ceoption1id).innerHTML = "1";
              
                  var ceoption2 = document.createElement("option");
                  ceoption2id = "ceoption2id" + n + i;
                  ceoption2.setAttribute("value","2");
                  ceoption2.setAttribute("id",ceoption2id);
                  document.getElementById(ceinputid).appendChild(ceoption2);
                  document.getElementById(ceoption2id).innerHTML = "2";
              
                  var ceoption3 = document.createElement("option");
                  ceoption3id = "ceoption3id" + n + i;
                  ceoption3.setAttribute("value","3");
                  ceoption3.setAttribute("id",ceoption3id);
                  document.getElementById(ceinputid).appendChild(ceoption3);
                  document.getElementById(ceoption3id).innerHTML = "3";
              
                  var ceoption4 = document.createElement("option");
                  ceoption4id = "ceoption4id" + n + i;
                  ceoption4.setAttribute("value","4");
                  ceoption4.setAttribute("id",ceoption4id);
                  document.getElementById(ceinputid).appendChild(ceoption4);
                  document.getElementById(ceoption4id).innerHTML = "4";
              
                  
                }
                
              
              
              
              
              } 


              
            } 
          }   
        }
      }
      function modelFoot(){
  
        var divFoot = document.createElement("div");
        var divFootid = "modeldivFoot" + n;
        divFoot.setAttribute("id",divFootid);
        divFoot.setAttribute("class","modal-footer");
        document.getElementById(div3id).appendChild(divFoot);
  
        var btnFoot = document.createElement("div");
        var btnFootid = "btnFoot" + n;
        btnFoot.setAttribute("id",btnFootid);
        btnFoot.setAttribute("data-bs-dismiss","modal");
        btnFoot.setAttribute("class","btn btn-outline-secondary");
        document.getElementById(divFootid).appendChild(btnFoot);
        document.getElementById(btnFootid).innerHTML ="Done";
      }
      
  
    }
  
    
  
  
  }