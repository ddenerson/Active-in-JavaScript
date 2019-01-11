// SUM RANGE

function sumRange(num)
{
    if(num === 1) return 1;

    return num + sumRange(num -1);
}

console.log(sumRange(3));


// ESSE CODICO FAZ A SEGUINTE AÇÃO
// RETUNR NUM(3) + SUMRANGE(3-1)
// RETURN NUM(3) + SUMRANGE(2-1)
//RETURN NUM(3) + SUMRANGE(1) = 6