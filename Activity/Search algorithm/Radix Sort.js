
// Radix Sort


function getDit(num,i)
{
    return Math.floor(Math.abs(num)/ Math.pow(10,i))% 10;
}
function digCount(num)
{
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigi(num)
{
    let maxDig = 0;

    for(let i = 0;i<num.length;i++)
    {
        maxDig = Math.max(maxDig,digCount(num[i]));
    }
    return maxDig;
}
function Sort(num)
{
    let maxDig = mostDigi(num);

    for(let i = 0; i < maxDig; i++)
    {
        let numberAux = Array.from({length:10},() => []);
        for(let j = 0;j < num.length;j++)
        {
           let digit = getDit(num[j],i);
           numberAux[digit].push(num[j]);
        }
        num = [].concat(...numberAux);
    }
    return num;
}

console.log(Sort([23,345,5467,12,2345,9852]));