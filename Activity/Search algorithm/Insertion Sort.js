//Insertion Sort

function InsertionSort(array)
{
    for(let i = 0; i < array.length ; i++)
    {
        let temporaryV = array[i];

       for(j = i -1 ; j >= 0 && array[j] > temporaryV; j--)
       {
               array[j+1] = array[j];
       }
       array[j+1] = temporaryV;
    }

    return array;
}

console.log(InsertionSort([3,5,9,45,12,7,8,6,4,2,80,1]));