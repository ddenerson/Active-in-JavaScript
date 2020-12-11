function arrayManipulation(n, queries)
{
    let info = [];
    // start each element as empty
    for (let i = 0; i < n; i++)info[i] = null;
    // organizing each element at the end of the vector already added
    for (let j = 0; j < queries.length; j++)
    {
        info[queries[j][0] - 1] = info[queries[j][0] - 1] + queries[j][2];
        if (queries[j][1] > info.length)
        {
            return false;
        }
        else
        {
            info[queries[j][1]] = info[queries[j][1]] - queries[j][2];
        }
    }
    // Init the maximum variable
    let maximum = null;
    // Compare to find the maximum value
    for (let k = 1; k < n; k++)
    {
        info[k] = info[k] + info[k-1];
        if (info[k] < maximum)
        {
            undefined;
        }
        else
        {
            maximum = info[k];
        }
    }
    //return the result
    return maximum;
}

