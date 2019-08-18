function calculated(){
    var empTab = document.getElementById('tableCr');
    var rowCount = empTab.rows.length;

            let GP1 = document.getElementById('GP1').value, courseUnit1 = document.getElementById("courseUnit1").value, creditPoint1 = document.getElementById('creditPoint1');
                creditPoint1 = GP1 * courseUnit1; document.getElementById('creditPoint1').innerHTML = creditPoint1;
            let GP2 = document.getElementById('GP2').value, courseUnit2 = document.getElementById("courseUnit2").value, creditPoint2 = document.getElementById('creditPoint2');
                creditPoint2 = GP2 * courseUnit2; document.getElementById('creditPoint2').innerHTML = creditPoint2;
            let GP3 = document.getElementById('GP3').value, courseUnit3 = document.getElementById("courseUnit3").value, creditPoint3 = document.getElementById('creditPoint3');
                creditPoint3 = GP3 * courseUnit3; document.getElementById('creditPoint3').innerHTML = creditPoint3;
            let GP4 = document.getElementById('GP4').value, courseUnit4 = document.getElementById("courseUnit4").value, creditPoint4 = document.getElementById('creditPoint4');
                creditPoint4 = GP4 * courseUnit4; document.getElementById('creditPoint4').innerHTML = creditPoint4;
            let GP5 = document.getElementById('GP5').value, courseUnit5 = document.getElementById("courseUnit5").value, creditPoint5 = document.getElementById('creditPoint5');
                creditPoint5 = GP5 * courseUnit5; document.getElementById('creditPoint5').innerHTML = creditPoint5;
            let GP6 = document.getElementById('GP6').value, courseUnit6 = document.getElementById("courseUnit6").value, creditPoint6 = document.getElementById('creditPoint6');
                creditPoint6 = GP6 * courseUnit6; document.getElementById('creditPoint6').innerHTML = creditPoint6;

    if(rowCount === 7){

            let totalNumberOfUnit = parseInt(courseUnit1) + parseInt(courseUnit2) + parseInt(courseUnit3) + parseInt(courseUnit4) + parseInt(courseUnit5)+ parseInt(courseUnit6),
            tnu = document.getElementById('tnu'); tnu.innerHTML = totalNumberOfUnit;
            let totalCreditPoint = parseInt(creditPoint1) + parseInt(creditPoint2) + parseInt(creditPoint3) + parseInt(creditPoint4) + parseInt(creditPoint5)+ parseInt(creditPoint6),
            tcp = document.getElementById('tcp'); tcp.innerHTML = totalCreditPoint;
            let gp = totalCreditPoint/totalNumberOfUnit;
            let approximateGpTo2DecimalFigure = gp.toFixed(2);
            document.getElementById('gp').innerHTML = approximateGpTo2DecimalFigure;
            document.getElementById('calculate').style.display = "none";
            document.getElementById('diableAddCourse').style.display = "none";
            document.getElementById('cgpa').innerHTML = approximateGpTo2DecimalFigure;

    } else if(rowCount === 8){

            let GP7 = document.getElementById('GP7').value, courseUnit7 = document.getElementById("courseUnit7").value, creditPoint7 = document.getElementById('creditPoint7');
                creditPoint7 = GP7 * courseUnit7; document.getElementById('creditPoint7').innerHTML = creditPoint7;


            let totalNumberOfUnit = parseInt(courseUnit1) + parseInt(courseUnit2) + parseInt(courseUnit3) + parseInt(courseUnit4) + parseInt(courseUnit5)+ parseInt(courseUnit6) + parseInt(courseUnit7),
            tnu = document.getElementById('tnu'); tnu.innerHTML = totalNumberOfUnit;
            let totalCreditPoint = parseInt(creditPoint1) + parseInt(creditPoint2) + parseInt(creditPoint3) + parseInt(creditPoint4) + parseInt(creditPoint5)+ parseInt(creditPoint6) + parseInt(creditPoint7),
            tcp = document.getElementById('tcp'); tcp.innerHTML = totalCreditPoint;
            let gp = totalCreditPoint/totalNumberOfUnit;
            let approximateGpTo2DecimalFigure = gp.toFixed(2);
            document.getElementById('gp').innerHTML = approximateGpTo2DecimalFigure;
            document.getElementById('calculate').style.display = "none";
            document.getElementById('diableAddCourse').style.display = "none";
            document.getElementById('cgpa').innerHTML = approximateGpTo2DecimalFigure;
    }
    else if(rowCount === 9){
        let GP7 = document.getElementById('GP7').value, courseUnit7 = document.getElementById("courseUnit7").value, creditPoint7 = document.getElementById('creditPoint7');
                creditPoint7 = GP7 * courseUnit7; document.getElementById('creditPoint7').innerHTML = creditPoint7;
        let GP8 = document.getElementById('GP8').value, courseUnit8 = document.getElementById("courseUnit8").value, creditPoint8 = document.getElementById('creditPoint8');
            creditPoint8 = GP8 * courseUnit8; document.getElementById('creditPoint8').innerHTML = creditPoint8;


        let totalNumberOfUnit = parseInt(courseUnit1) + parseInt(courseUnit2) + parseInt(courseUnit3) + parseInt(courseUnit4) + parseInt(courseUnit5)+ parseInt(courseUnit6) + parseInt(courseUnit7) + parseInt(courseUnit8),
        tnu = document.getElementById('tnu'); tnu.innerHTML = totalNumberOfUnit;
        let totalCreditPoint = parseInt(creditPoint1) + parseInt(creditPoint2) + parseInt(creditPoint3) + parseInt(creditPoint4) + parseInt(creditPoint5)+ parseInt(creditPoint6) + parseInt(creditPoint7) + parseInt(creditPoint8),
        tcp = document.getElementById('tcp'); tcp.innerHTML = totalCreditPoint;
        let gp = totalCreditPoint/totalNumberOfUnit;
        let approximateGpTo2DecimalFigure = gp.toFixed(2);
        document.getElementById('gp').innerHTML = approximateGpTo2DecimalFigure;
        document.getElementById('calculate').style.display = "none";document.getElementById('diableAddCourse').style.display = "none";
        document.getElementById('cgpa').innerHTML = approximateGpTo2DecimalFigure;
} else if(rowCount === 10){
    let GP7 = document.getElementById('GP7').value, courseUnit7 = document.getElementById("courseUnit7").value, creditPoint7 = document.getElementById('creditPoint7');
            creditPoint7 = GP7 * courseUnit7; document.getElementById('creditPoint7').innerHTML = creditPoint7;
    let GP8 = document.getElementById('GP8').value, courseUnit8 = document.getElementById("courseUnit8").value, creditPoint8 = document.getElementById('creditPoint8');
        creditPoint8 = GP8 * courseUnit8; document.getElementById('creditPoint8').innerHTML = creditPoint8;
    let GP9 = document.getElementById('GP9').value, courseUnit9 = document.getElementById("courseUnit9").value, creditPoint9 = document.getElementById('creditPoint9');
            creditPoint9 = GP9 * courseUnit9; document.getElementById('creditPoint9').innerHTML = creditPoint9;


    let totalNumberOfUnit = parseInt(courseUnit1) + parseInt(courseUnit2) + parseInt(courseUnit3) + parseInt(courseUnit4) + parseInt(courseUnit5)+ parseInt(courseUnit6) + parseInt(courseUnit7) + parseInt(courseUnit8)+ parseInt(courseUnit9),
    tnu = document.getElementById('tnu'); tnu.innerHTML = totalNumberOfUnit;
    let totalCreditPoint = parseInt(creditPoint1) + parseInt(creditPoint2) + parseInt(creditPoint3) + parseInt(creditPoint4) + parseInt(creditPoint5)+ parseInt(creditPoint6) + parseInt(creditPoint7) + parseInt(creditPoint8)+ parseInt(creditPoint9),
    tcp = document.getElementById('tcp'); tcp.innerHTML = totalCreditPoint;
    let gp = totalCreditPoint/totalNumberOfUnit;
    let approximateGpTo2DecimalFigure = gp.toFixed(2);
    document.getElementById('gp').innerHTML = approximateGpTo2DecimalFigure;
    document.getElementById('calculate').style.display = "none";document.getElementById('diableAddCourse').style.display = "none";
    document.getElementById('cgpa').innerHTML = approximateGpTo2DecimalFigure;
}
else if(rowCount === 11){
    let GP7 = document.getElementById('GP7').value, courseUnit7 = document.getElementById("courseUnit7").value, creditPoint7 = document.getElementById('creditPoint7');
            creditPoint7 = GP7 * courseUnit7; document.getElementById('creditPoint7').innerHTML = creditPoint7;

    let GP8 = document.getElementById('GP8').value, courseUnit8 = document.getElementById("courseUnit8").value, creditPoint8 = document.getElementById('creditPoint8');
            creditPoint8 = GP8 * courseUnit8; document.getElementById('creditPoint8').innerHTML = creditPoint8;

    let GP9 = document.getElementById('GP9').value, courseUnit9 = document.getElementById("courseUnit9").value, creditPoint9 = document.getElementById('creditPoint9');
            creditPoint9 = GP9 * courseUnit9; document.getElementById('creditPoint9').innerHTML = creditPoint9;

    let GP10 = document.getElementById('GP10').value, courseUnit10 = document.getElementById("courseUnit10").value, creditPoint10 = document.getElementById('creditPoint10');
            creditPoint10 = GP10 * courseUnit10; document.getElementById('creditPoint10').innerHTML = creditPoint10;


    let totalNumberOfUnit = parseInt(courseUnit1) + parseInt(courseUnit2) + parseInt(courseUnit3) + parseInt(courseUnit4) + parseInt(courseUnit5)+ parseInt(courseUnit6) + parseInt(courseUnit7) + parseInt(courseUnit8)+ parseInt(courseUnit9) + parseInt(courseUnit10),
    tnu = document.getElementById('tnu'); tnu.innerHTML = totalNumberOfUnit;
    let totalCreditPoint = parseInt(creditPoint1) + parseInt(creditPoint2) + parseInt(creditPoint3) + parseInt(creditPoint4) + parseInt(creditPoint5)+ parseInt(creditPoint6) + parseInt(creditPoint7) + parseInt(creditPoint8)+ parseInt(creditPoint9) + parseInt(creditPoint10),
    tcp = document.getElementById('tcp'); tcp.innerHTML = totalCreditPoint;
    let gp = totalCreditPoint/totalNumberOfUnit;
    let approximateGpTo2DecimalFigure = gp.toFixed(2);
    document.getElementById('gp').innerHTML = approximateGpTo2DecimalFigure;
    document.getElementById('calculate').style.display = "none";document.getElementById('diableAddCourse').style.display = "none";
    document.getElementById('cgpa').innerHTML = approximateGpTo2DecimalFigure;
}
else if(rowCount === 12){
    let GP7 = document.getElementById('GP7').value, courseUnit7 = document.getElementById("courseUnit7").value, creditPoint7 = document.getElementById('creditPoint7');
            creditPoint7 = GP7 * courseUnit7; document.getElementById('creditPoint7').innerHTML = creditPoint7;

    let GP8 = document.getElementById('GP8').value, courseUnit8 = document.getElementById("courseUnit8").value, creditPoint8 = document.getElementById('creditPoint8');
            creditPoint8 = GP8 * courseUnit8; document.getElementById('creditPoint8').innerHTML = creditPoint8;

    let GP9 = document.getElementById('GP9').value, courseUnit9 = document.getElementById("courseUnit9").value, creditPoint9 = document.getElementById('creditPoint9');
            creditPoint9 = GP9 * courseUnit9; document.getElementById('creditPoint9').innerHTML = creditPoint9;

    let GP10 = document.getElementById('GP10').value, courseUnit10 = document.getElementById("courseUnit10").value, creditPoint10 = document.getElementById('creditPoint10');
            creditPoint10 = GP10 * courseUnit10; document.getElementById('creditPoint10').innerHTML = creditPoint10;

     let GP11 = document.getElementById('GP11').value, courseUnit11 = document.getElementById("courseUnit11").value, creditPoint11 = document.getElementById('creditPoint11');
            creditPoint11 = GP11 * courseUnit11; document.getElementById('creditPoint11').innerHTML = creditPoint11;


    let totalNumberOfUnit = parseInt(courseUnit1) + parseInt(courseUnit2) + parseInt(courseUnit3) + parseInt(courseUnit4) + parseInt(courseUnit5)+ parseInt(courseUnit6) + parseInt(courseUnit7) + parseInt(courseUnit8)+ parseInt(courseUnit9) + parseInt(courseUnit10) + parseInt(courseUnit11),
    tnu = document.getElementById('tnu'); tnu.innerHTML = totalNumberOfUnit;
    let totalCreditPoint = parseInt(creditPoint1) + parseInt(creditPoint2) + parseInt(creditPoint3) + parseInt(creditPoint4) + parseInt(creditPoint5)+ parseInt(creditPoint6) + parseInt(creditPoint7) + parseInt(creditPoint8)+ parseInt(creditPoint9) + parseInt(creditPoint10) + parseInt(creditPoint11),
    tcp = document.getElementById('tcp'); tcp.innerHTML = totalCreditPoint;
    let gp = totalCreditPoint/totalNumberOfUnit;
    let approximateGpTo2DecimalFigure = gp.toFixed(2);
    document.getElementById('gp').innerHTML = approximateGpTo2DecimalFigure;
    document.getElementById('calculate').style.display = "none";document.getElementById('diableAddCourse').style.display = "none";
    document.getElementById('cgpa').innerHTML = approximateGpTo2DecimalFigure;
}

else if(rowCount === 13){
    let GP7 = document.getElementById('GP7').value, courseUnit7 = document.getElementById("courseUnit7").value, creditPoint7 = document.getElementById('creditPoint7');
            creditPoint7 = GP7 * courseUnit7; document.getElementById('creditPoint7').innerHTML = creditPoint7;

    let GP8 = document.getElementById('GP8').value, courseUnit8 = document.getElementById("courseUnit8").value, creditPoint8 = document.getElementById('creditPoint8');
            creditPoint8 = GP8 * courseUnit8; document.getElementById('creditPoint8').innerHTML = creditPoint8;

    let GP9 = document.getElementById('GP9').value, courseUnit9 = document.getElementById("courseUnit9").value, creditPoint9 = document.getElementById('creditPoint9');
            creditPoint9 = GP9 * courseUnit9; document.getElementById('creditPoint9').innerHTML = creditPoint9;

    let GP10 = document.getElementById('GP10').value, courseUnit10 = document.getElementById("courseUnit10").value, creditPoint10 = document.getElementById('creditPoint10');
            creditPoint10 = GP10 * courseUnit10; document.getElementById('creditPoint10').innerHTML = creditPoint10;

     let GP11 = document.getElementById('GP11').value, courseUnit11 = document.getElementById("courseUnit11").value, creditPoint11 = document.getElementById('creditPoint11');
            creditPoint11 = GP11 * courseUnit11; document.getElementById('creditPoint11').innerHTML = creditPoint11;
    let GP12 = document.getElementById('GP12').value, courseUnit12 = document.getElementById("courseUnit12").value, creditPoint12 = document.getElementById('creditPoint12');
            creditPoint12 = GP12 * courseUnit12; document.getElementById('creditPoint12').innerHTML = creditPoint12;


    let totalNumberOfUnit = parseInt(courseUnit1) + parseInt(courseUnit2) + parseInt(courseUnit3) + parseInt(courseUnit4) + parseInt(courseUnit5)+ parseInt(courseUnit6) + parseInt(courseUnit7) + parseInt(courseUnit8)+ parseInt(courseUnit9) + parseInt(courseUnit10) + parseInt(courseUnit11) + parseInt(courseUnit12),
    tnu = document.getElementById('tnu'); tnu.innerHTML = totalNumberOfUnit;
    let totalCreditPoint = parseInt(creditPoint1) + parseInt(creditPoint2) + parseInt(creditPoint3) + parseInt(creditPoint4) + parseInt(creditPoint5)+ parseInt(creditPoint6) + parseInt(creditPoint7) + parseInt(creditPoint8)+ parseInt(creditPoint9) + parseInt(creditPoint10) + parseInt(creditPoint11) + parseInt(creditPoint12),
    tcp = document.getElementById('tcp'); tcp.innerHTML = totalCreditPoint;
    let gp = totalCreditPoint/totalNumberOfUnit;
    let approximateGpTo2DecimalFigure = gp.toFixed(2);
    document.getElementById('gp').innerHTML = approximateGpTo2DecimalFigure;
    document.getElementById('calculate').style.display = "none";document.getElementById('diableAddCourse').style.display = "none";
    document.getElementById('cgpa').innerHTML = approximateGpTo2DecimalFigure;
}

}

function calculateCGPA(){

    let totalNumberOfUnit = document.getElementById('tnu').innerText, totalCreditPoint = document.getElementById('tcp').innerText;
    let lastCTNUP = document.getElementById('lastCTNUP').value,
    lastCGPA = document.getElementById('lastCGPA').value;

    let newCTNUP = parseInt(lastCTNUP) + parseInt(totalNumberOfUnit);
    let lastTCP = parseFloat(lastCGPA) * parseFloat(lastCTNUP);
    let roundTCP = Math.round(lastTCP);


    let newTotalCreditPoint = parseInt(roundTCP) + parseInt(totalCreditPoint);
    let totalCGPA = parseInt(newTotalCreditPoint) / parseInt(newCTNUP);

    let approximateCGPATo2DecimalFigure = totalCGPA.toFixed(2);
    let myCGPA = document.getElementById('myCGPA');
    myCGPA.innerHTML = approximateCGPATo2DecimalFigure;
    document.getElementById('cgpa').innerHTML = approximateCGPATo2DecimalFigure;
}


function addCourse(){
    var empTab = document.getElementById('tableCr');
    var rowCount = empTab.rows.length;
    var row = empTab.insertRow(rowCount);

    let y = rowCount;

    if(rowCount <= "12"){

    var cell1 = row.insertCell(0);
    var element1 = document.createElement("input");
    var centers = document.createElement("center");
    element1.type = "text";
    element1.id = "courseTitle";
    element1.placeholder = "ABC123";
    element1.style = "border-style: none; padding: 10px; width: 80px; height: 10px; font-size: 14px; text-transform: uppercase;"
    cell1.appendChild(centers);
    centers.appendChild(element1)

// ===================================================
    var cell2 = row.insertCell(1);
    var center2 = document.createElement("center");
    var select = document.createElement("select");
    var options = document.createElement("option");
    var options2 = document.createElement("option");
    var options3 = document.createElement("option");
    var options4 = document.createElement("option");

    select.id = "courseUnit" + y;
    select.style = "border-style:none;";
    select.className="py-0 px-3 white";

    options.value="0";
    options.selected="";
    options.innerHTML= "0";

    options2.value="2";
    options2.innerHTML= "2";
    options3.value="3";
    options3.innerHTML= "3";
    options4.value="4";
    options4.innerHTML= "4";

    select.appendChild(options);
    select.appendChild(options2);
    select.appendChild(options3);
    select.appendChild(options4);

    cell2.appendChild(center2);
    center2.appendChild(select);

// ===============================================================
    var cell3 = row.insertCell(2);
    var center3 = document.createElement("center");
    var select3 = document.createElement("select");
    var options3 = document.createElement("option");
    var options32 = document.createElement("option");
    var options33 = document.createElement("option");
    var options34 = document.createElement("option");

    select3.style = "border-style:none;";
    select3.className="py-0 px-3 white";

    options3.value="C";
    options3.selected="";
    options3.innerHTML= "C";

    options32.value="2";
    options32.innerHTML= "E";

    options33.value="3";
    options33.innerHTML= "R";

    select3.appendChild(options3);
    select3.appendChild(options32);
    select3.appendChild(options33);
;

    cell3.appendChild(center3);
    center3.appendChild(select3);

// ==========================================================
    var cell4 = row.insertCell(3);
    var center4 = document.createElement("center");
    var select4 = document.createElement("select");
    var options4 = document.createElement("option");
    var options42 = document.createElement("option");
    var options43 = document.createElement("option");
    var options44 = document.createElement("option");
    var options45 = document.createElement("option");

    select4.id = "GP" + y;
    select4.style = "border-style:none;";
    select4.className="py-0 px-3 white";

    options4.value="0";
    options4.selected="";
    options4.innerHTML= "0";

    options42.value="2";
    options42.innerHTML= "2";
    options43.value="3";
    options43.innerHTML= "3";
    options44.value="4";
    options44.innerHTML= "4";
    options45.value="5";
    options45.innerHTML= "5";

    select4.appendChild(options4);
    select4.appendChild(options42);
    select4.appendChild(options43);
    select4.appendChild(options44);
    select4.appendChild(options45);

    cell4.appendChild(center4);
    center4.appendChild(select4);

// ========================================================
    var cell5 = row.insertCell(4);
    var h4 = document.createElement("h4");
    var centers5 = document.createElement("center");
    h4.id = "creditPoint" +y;
    h4.style = "font-size: 12px;"
    h4.className = "font-weight-bold h6";
    cell5.appendChild(centers5);
    centers5.appendChild(h4)


    }else if(rowCount >= "13"){
        // document.getElementById('addbutton').innerHTML = "Completed"
        document.getElementById('diableAddCourse').style.display = "none";
    }

}