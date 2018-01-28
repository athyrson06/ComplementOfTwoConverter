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

function InserirConvBin(x = 0, b = 32){
    var p = document.createElement("p");
    //atribui um texto node a variavel node
    var node = document.createTextNode(to_binaryC2(x,b));
    //atribui o node ao paragrafo
    p.appendChild(node);
    //atribui o elemento div1 a variavel div
    var div = document.getElementById("div1");
    //atribui o paragrafo ao div
    div.appendChild(p);
};

function detalhes(){
    alert("O número será convertido para um número binário de 32 bits em complemento de dois");
};