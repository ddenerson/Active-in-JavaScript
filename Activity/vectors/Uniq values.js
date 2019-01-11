// Count Unique Values Solution -- Contar valores unicos dentro de um vetor

function comparer(array)
{
    if(array.length === 0 ) return 0;

    var i = 0;
    for(let j = 1;j<array.length;j++)
    {
        if(array[i] !== array[j])
        {
            i++ ;
            array[i] = array[j] ;
        }
    }
    return i + 1;
}

let resposta =(countUniqVls([1,2,2,5,7,7,99]));

console.log(resposta);