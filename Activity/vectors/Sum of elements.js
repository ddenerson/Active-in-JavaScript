// EXERCICIO SOMAR ELEMENTOS QUE TEM DENTRO DE UM VETOR E CONFERIR E SOMA
DE ALGUM DELES E EQUIVALENTE A ZERO


function Sarray(array)
{
    let left = 0;
    let righy = array.length - 1;

    while(left < righy)
    {
        let sum = array[left] + array[righy];

        if( sum === 0)
        {
            return [array[left] , array[righy]];
        }
        else if (sum > 0)
        {
            righy--;
        }
        else
        {
            left++;
        }
    }
}

let resposta = Sarray([-4,-3,-2,-1,0,1,2,3,10]);

console.log(resposta);

