// Merge Sort

function Sort(array,array2)
{
    let results = [];
    let i = 0;
    let j = 0;

    while(i < array.length && j < array2.length)
    {
        if(array2[j] > array[i])
        {
            results.push(array[i]);
            i++;
        }
        else
        {
            results.push(array2[j])
            j++;
        }
    }
    while(i < array.length)
    {
        results.push(array[i]);
        i++;
    }
    while(j < array2.length)
    {
        results.push(array2[j]);
        j++;
    }

    return results;
}

function MergeSort(array)
{
    if(array.length <= 1) return array;
    let midle = Math.floor(array.length / 2);
    let left =MergeSort(array.slice(0,midle));
    let right =MergeSort(array.slice(midle));
    return Sort(left,right);
}

console.log(MergeSort([10,24,76,73,72,1,9,855,27,3669,41,25]));


