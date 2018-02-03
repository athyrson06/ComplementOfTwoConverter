function to_binary(number){
    return (number).toString(2);
}

function to_decimal(binary){
    return parseInt(binary, 2);
}

function extend_to_bits(binary, bits = 32){
    var result = bits - binary.length;
    var zero_fill = "0".repeat(result);

    return zero_fill+binary;
    
}

function to_binaryC2(number, bits = 32){
    if (number >= 0){
        number = to_binary(number);
        return extend_to_bits(number, bits);
    }
    else{
        number = Math.pow(2, bits) + number;
        number = to_binary(number);
        return extend_to_bits(number, bits);
    }
}

function to_decimalC2(binary){
    bits = binary.length;
    decimal = to_decimal(binary);

    if (binary[0] == '0'){
        return decimal;
    }
    else{
        return -(Math.pow(2, bits)) + decimal;
    }
}


f1.addEventListener("submit", verifyNumber);
function verifyNumber(e){

    var bits = parseInt(document.f1.bits.value);
    if (bits > 32 || bits <2){
        alert("Valor Máximo = 32 e Valor minímo = 2");
        document.f1.bits.value = 32;
        bits = 32;
    } 
    var b = bits -1;
    var num = parseInt(document.f1.num.value);
    if ((num >= Math.pow(2,b) || (num < - Math.pow(2,b)))){
        alert("Número Inválido!");
    }
    else{
        writeHist(num, bits);
        writeResult(num, bits);
    }   

    e.preventDefault();
};

function writeHist(num, bits){
    var binNum = to_binaryC2(num, bits);
    var tr = document.createElement("tr");
    var tdN = document.createElement("td");
    var tdB = document.createElement("td");

    tdN.setAttribute("class", "tdN");
    tdB.setAttribute("class", "tdB");

    var nodeN = document.createTextNode(num);
    var nodeB = document.createTextNode(binNum);    

    tdN.appendChild(nodeN);
    tdB.appendChild(nodeB);
    tr.appendChild(tdN);
    tr.appendChild(tdB);    

    var table = document.getElementById("tbody");

    table.appendChild(tr);    
}

function writeResult(num, bits){
    var binNum = to_binaryC2(num, bits);

    var pRes = document.getElementById("pRes");

    pRes.innerHTML = "Resultado:"+'\n'+binNum;
};