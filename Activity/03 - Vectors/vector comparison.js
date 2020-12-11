// COMPARAR SE EXISTE O DOBRO DO NUMERO EM OUTRO VETOR
//Write a function called same,which accepts two arrays.
//The function should return true if every value in the
//array has it's corresponding value squared in the second
//array.The frequecy of values must be the same

console.log(same([1,2,3,2,5],[9,1,4,4,11]));

function same(opc1,opc2)
{
    if(opc1.length !== opc2.length)
    {
        return false;
    }
    let comparer1 = {};
    let comparer2 = {};

    for(let elements of opc1)
    {
        comparer1[elements] = (comparer1[elements] || 0) + 1;
    }
    for(let elemnts of opc2)
    {
        comparer2[elemnts] = (comparer2[elemnts] || 0) + 1;
    }
    for(let key in comparer1)
    {
        if (!(key ** 2 in comparer2))
        {
            return false
        }
        if (comparer2[key ** 2] !== comparer1[key])
        {
            return false
        }
    }
    return true;
}