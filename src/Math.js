var scgpa =[0,0,0,0,0,0,0,0]
var credit =[0,0,0,0,0,0,0,0]
function sum(l,m){
    gp =parseInt(0)
    cred = parseInt(0)
    for (i = 1; i <= m; i++){
        ge = document.getElementById("gdinputid"+ l + i).value
        ce =  parseInt(document.getElementById("ceinputid" +l + i).value)
        ans = parseInt(ge * ce)
        gp = parseInt(gp + ans);
        cred = parseInt(cred  + ce)
    }
    sgpa = gp / cred;
    fsgpa = sgpa.toFixed(2);
    document.getElementById("p1" + l).innerHTML = "SGPA : " + fsgpa + ".Credits : " +cred;
    document.getElementById("p" + l).innerHTML = " Sem " + l+ ":  SGPA : " + fsgpa + "   Credits : " +cred;
    z = l - 1
    scgpa[z] = gp;
    credit[z] = cred
    console.log("semester "+ l +" scgpa : " + sgpa )
    console.log("semester " +  l + " total credit : " + cred )
    console.log("----------------------------")
    console.log(scgpa)
    console.log(credit)
    console.log("----------------------------")
    cgpa = 0;
    totcre = 0;
    for (i=0 ; i<8 ; i++){
        cgpa = ( cgpa + scgpa[i])
    }
    for (i=0 ; i<8 ; i++){
        totcre = parseInt( totcre + credit[i])
    }
    totcgpa = cgpa / totcre
    last = totcgpa.toFixed(2);
    document.getElementById("totcgpa").innerHTML = last;
}