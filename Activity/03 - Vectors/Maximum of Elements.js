// Slinding windows Pattern 


function maxSumArray(array,number)
{

    let maxS = 0;
    let temS = 0;

    if(number > array.length) return null;

    for(let i =0; i< number ; i++)
    {
        maxS += array[i];
    }
    temS = maxS;

    for(let i = number ; i < array.length ; i++)
    {
        temS = temS - array[ i - number] + array[i];
        maxS = Math.max(maxS,temS);
    }

    return maxS;
}
