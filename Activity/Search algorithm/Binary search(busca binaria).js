// Binary Search
// APENAS FUNCIONARA SE TODOS OS ELEMENTOS FORAM CONJUNTOS UM DO OUTRO
// POR EXEMPLO O VETOR SE COMPOSTA APENAS DE NUMEROS OU APENAS DE LETRAS


function bSearch(array,num)
{
    let left = 0;
    let right = array.length - 1;
    let midle = Math.floor((left + right) / 2);

    while(array[midle] !== num && left <= right)
    {
        if(num < array[midle])
        {
            right = midle - 1
        }
        else
        {
            left = midle + 1
        }
        midle = Math.floor((left + right) / 2 );
    }
    return array[midle] === num ? midle : "DON'T EXIST";
}


console.log(bSearch([2,5,6,9,13,15,28],5));