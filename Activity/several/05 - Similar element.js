// VERIFICAR SE ELEMENTOS SÃO SEMELHANTES (VARIAVEIS)

function Uniq(num1,num2)
{
    let auxNum  = num1.toString();
    let auxNum2 = num2.toString();

    let comparar  = {};
    let comparar2 = {};

    if(auxNum.length !== auxNum2.length)return "No the same";

    for(let i = 0 ; i < auxNum.length ; i++)
    {
        comparar[auxNum[i]] = (comparar[auxNum[i]] || 0) + 1;
    }
    for(let j = 0 ; j < auxNum2.length ;j++)
    {
        comparar2[auxNum2[j]] = (comparar2[auxNum2[j]] || 0)+ 1;
    }
    for(let key in comparar)
    {
        if(comparar[key] !== comparar2[key])
        {
            return false
        }
    }
    return true;
}

console.log(Uniq(34,14));

