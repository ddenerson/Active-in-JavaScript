function getddl() {
        var value = document.getElementById('ddlselect').value;
        var dados = 0;
        if (value === 'Gasolina') {
                dados = 4.74;
        }
        else if (value === 'Etanol') {
                dados = 2.99;
        }
        document.getElementById('litros').innerHTML = dados
}

function intervalo_gas(esch) {
        document.getElementById('gdisp').value = esch;

        if (esch > 500) {

                document.getElementById('gdisp').value = esch;
                document.getElementById('gdisp').style.color = "green";
        }
        else if (esch >= 100 && esch <= 500) {
                document.getElementById('gdisp').value = esch;
                document.getElementById('gdisp').style.color = "orange";
        }
        else if (esch <= 100) {
                document.getElementById('gdisp').value = esch;
                document.getElementById('gdisp').style.color = "red";
        }
        else if (esch <= 0) {
                document.getElementById('gdisp').value = esch;
                document.getElementById('gdisp').style.color = "grey";
        }

}
function intervalo_eta(esch) {
        document.getElementById('edisp').value = esch;

        if (esch > 500) {
                document.getElementById('edisp').value = esch;
                document.getElementById('edisp').style.color = "green";
        }
        else if (esch >= 100 && esch <= 500) {
                document.getElementById('edisp').value = esch;
                document.getElementById('edisp').style.color = "orange";
        }
        else if (esch <= 100) {
                document.getElementById('edisp').value = esch;
                document.getElementById('edisp').style.color = "red";
        }
        else if (esch <= 0) {
                document.getElementById('edisp').value = esch;
                document.getElementById('edisp').style.color = "grey";
        }
}

function calc() {
        var value = document.getElementById('ddlselect').value;
        var num2 = parseInt(document.getElementById('qtd').value);
        var gasolina = parseInt(document.getElementById('gdisp').value);
        var alcool = parseInt(document.getElementById('edisp').value);

        var descont = 0;
        var result = 0;
        var arr = [];
        var Vtotal = 0;

        if (num2 > gasolina || num2 > alcool) {
                alert("Impossível concluir a venda por falta de combustível")
        } else {
                if (value === 'Gasolina') {
                        result = 4.54 * num2;
                        descont = gasolina - num2;
                        intervalo_gas(descont);
                }
                else if (value === 'Etanol') {
                        result = 2.79 * num2;
                        descont = alcool - num2;
                        intervalo_eta(descont);
                }
                arr.push(result);
                for (var i = 0; i < arr.length; i++) {
                        Vtotal += arr[i];

                }
                document.getElementById('resp').value = Vtotal;
                document.getElementById('resultado').innerHTML =
                        ("<b style='color.red;'>" + formid.ddlselect[formid.ddlselect.selectedIndex].text + '</b>' + " - " + num2 + "L" +
                                " - R$ " + result + "|")
        }
}




