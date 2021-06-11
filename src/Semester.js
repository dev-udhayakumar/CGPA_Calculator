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
          p1.setAttribute("class" ,"fs-6");
          document.getElementById(div1id).appendChild(p1);
          document.getElementById(p1id).innerHTML ="GPA : " + 0 + " Total credit : " + 0;
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
          modelFoot();
      
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
    
            var Addsub = document.createElement("button");
            var Addsubid = "Addsubid" + a;
            Addsub.setAttribute("id",Addsubid);
            Addsub.setAttribute("class","btn btn-sm btn-primary col-4");
            Addsub.setAttribute("onclick","tr(" + a +",1)");
            document.getElementById(divHeadid).appendChild(Addsub);
            document.getElementById(Addsubid).innerHTML = "Add Sub" ;
    
            var Delsub = document.createElement("button");
            var Delsubid = "Delsubid" + a;
            Delsub.setAttribute("id",Delsubid);
            Delsub.setAttribute("onclick","delSub(" + a +",0)");
            Delsub.setAttribute("class","btn btn-sm btn-outline-danger col-2");
            document.getElementById(divHeadid).appendChild(Delsub);
            document.getElementById(Delsubid).innerHTML = "Del" ;
    
            
          }
          function modelbody(){
            var divBody = document.createElement("div");
            var divBodyid = "modeldivBody" + a;
            divBody.setAttribute("id",divBodyid);
            divBody.setAttribute("class","modal-body");
            document.getElementById(div3id).appendChild(divBody);
    
            
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
                
                
    
              }   
            }
          }
          function modelFoot(){
      
            var divFoot = document.createElement("div");
            var divFootid = "modeldivFoot" + a;
            divFoot.setAttribute("id",divFootid);
            divFoot.setAttribute("class","modal-footer");
            document.getElementById(div3id).appendChild(divFoot);
      
            var btnFoot = document.createElement("div");
            var btnFootid = "btnFoot" + a;
            btnFoot.setAttribute("id",btnFootid);
            btnFoot.setAttribute("data-bs-dismiss","modal");
            btnFoot.setAttribute("class","btn btn-outline-secondary");
            document.getElementById(divFootid).appendChild(btnFoot);
            document.getElementById(btnFootid).innerHTML ="Done";
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


