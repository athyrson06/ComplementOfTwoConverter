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


f1.addEventListener("submit", writeBinN);
function writeBinN(e){

    var base = parseInt(document.f1.base.value);
    if (base > 64 || base <2){
        alert("Valor Máximo = 64 e Valor minímo = 2");
        document.f1.base.value = 64;
        base = 64;
    } 
    var num = parseInt(document.f1.num.value);
    if ((num >= Math.pow(2,31)) || (num < - Math.pow(2,31))){
        num = NaN;
        alert("Número Inválido!")
    }
    var binNum = to_binaryC2(num);

    var tr = document.createElement("tr");
    var tdN = document.createElement("td");
    var tdB = document.createElement("td");

    tdN.setAttribute("class", "tdN");
    tdN.setAttribute("class", "tdB");

    var nodeN = document.createTextNode(num);
    var nodeB = document.createTextNode(binNum);    

    tdN.appendChild(nodeN);
    tdB.appendChild(nodeB);
    tr.appendChild(tdN);
    tr.appendChild(tdB);    

    var table = document.getElementById("tab1");

    table.appendChild(tr);
    
    e.preventDefault();
};




// Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};