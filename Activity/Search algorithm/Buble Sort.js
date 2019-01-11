//Buble Sort

function bSort(array)
{
    let nPula;
    for(let i = array.length ; i > 0 ; i--)
    {
        nPula = true;
        for(let j = 0 ; j < i - 1 ; j++)
        {
            if(array[j] > array[j+1])
            {
                let tempo = array[j];
                array[j] = array[j+1];
                array[j+1] = tempo;
                nPula = false;
            }
        }
        if(nPula) break;
    }
  return array;
}

console.log(bSort([8,7,6,5,2,1,0]));
