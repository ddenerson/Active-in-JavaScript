//Select Sort


function SelectionSort(array)
{

    for(let i =0 ; i < array.length;i++)
    {
        let mini = i;
        for(let j = i + 1 ; j < array.length ; j++)
        {
                if(array[j] < array[mini])
                {
                    mini = j ;
                }
        }

        let temp = array[i];
        console.log("TRANSFERINDO");
        array[i] = array[mini];
        array[mini] = temp;
        console.log(array);
        console.log("**************");
    }
    return array;
}
SelectionSort([34,22,10,19,17]);
