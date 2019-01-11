ShowPrime(20);

function ShowPrime(limit)
{
    for(let number =2;number<=limit;number++)
    {
        let prime = true;
        for(let factor= 2; factor < number ;factor++)
        {
            if(number % factor === 0)
            {
                prime = false;
                break;
            }
        }
        if(prime) console.log(number);
    }
}
