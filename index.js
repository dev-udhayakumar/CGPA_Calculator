
function AddNewSem(n){
        var li = document.createElement("li");
        var id = "id"+ n;
        li.setAttribute("id",id);
        li.setAttribute("class","shadow-sm udhaya border rounded list-group-item d-flex justify-content-between align-items-start  ");
        document.getElementById('hi').appendChild(li);
        div1();
          function div1(){
            var div1id = "div1" + n ;
            var div1 = document.createElement("div");
            div1.setAttribute("id",div1id);
            div1.setAttribute("class","ms-2 me-auto p-2");
            div1.setAttribute("style" ,"transition-delay: 1s;")
            document.getElementById(id).appendChild(div1);
            div2()
            Editbtn()
            function div2(){
              var div2id = "div2" + n ;
              var div2 = document.createElement("div");
              div2.setAttribute("id",div2id);
              div2.setAttribute("class","fw-bold fs-6 ");
              document.getElementById(div1id).appendChild(div2);
              document.getElementById(div2id).innerHTML = "Semester " + n;
  
              var p1id = "p1" + n;
              var p1 = document.createElement("p");
              p1.setAttribute("id",p1id);
              p1.setAttribute("class" ,"fs-6");
              document.getElementById(div1id).appendChild(p1);
              document.getElementById(p1id).innerHTML ="GPA : " + 0 + " Total credit : " + 0;
            }
          }
          function Editbtn(){
            var btnE = "btnE" + n;
            var btn1 = document.createElement("button");
            btn1.setAttribute("id",btnE);
            btn1.setAttribute("class","btn-sm btn btn-outline-primary p-2 mb-2 rounded bi bi-pencil-square");
            btn1.setAttribute("type","button");
            document.getElementById(id).appendChild(btn1);
            document.getElementById(btnE).innerHTML = " Edit";

          }  
        var add= parseInt(n + 1)
        var del= parseInt(n)
        var bt2= "del(" + del + ")";
        var bt = "AddNewSem(" + add + ")";
        console.log(del)
        document.getElementById("bt").setAttribute("onclick",bt);
        document.getElementById("ConDel").setAttribute("onclick",bt2);
        
        if (add > 8){
          document.getElementById("bt").style.display = "none";

        }
        if (add <= 2){
          document.getElementById("bt2").style.display = "none";

        }
        else{
          document.getElementById("bt2").style.display = "block";
        }

        
      }
function del(n){

  var id ="id" + n  ; 
  var del = document.getElementById(id);
  del.remove();
  console.log(del)
  var add= parseInt(n)
  var del= parseInt(n - 1)
  var bt2= "del(" + del + ")";
  var bt = "AddNewSem(" + add + ")";
  
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