const name1 = [];
const name2 = [];

console.log(same('anagram','nagaram'));

function same(array1,array2)
{
    if(array1.length !== array2.length)
    {
        return false;
    }

    const look = {};

    for(let i =0; i < array1.length ; i++)
    {
        let letter = array1[i];
        // SE A LETRA EXISTE, IRA INCREMENTAR. SE NÃO SE TORNA 1
        look[letter] ? look[letter] += 1 : look[letter] = 1;
    }
    for(let i = 0; i < array2.length ; i++)
    {
        let letter2 = array2[i];

        if(!look[letter2])
        {
            return false;
        }
        else
        {
            look[letter2] -=1;
        }
    }

    return true;

}

