// GRAPH - ADJCENCY LIST

class Graph
{
    constructor()
    {
        this.adjacenyList = {};
    }
    // ADD THE FIRST INFORMATION
    addVertex(data)
    {
        if(!this.adjacenyList[data])this.adjacenyList[data]= [];
    }
    // ADD THE CONNECTION OF THE INFORMATION
    addEdge(data1,data2)
    {
        this.adjacenyList[data1].push(data2);
        this.adjacenyList[data2].push(data1);
    }
    // REMOVE THE CONNECTION OF THE EDGE
    removeEdge(data1,data2)
    {
        this.adjacenyList[data1] = this.adjacenyList[data1].filter(v => v !== data2);
        this.adjacenyList[data2] = this.adjacenyList[data2].filter(v => v !== data1);
    }
    // REMOVE THE THE FIRST INFORMATION - AND THE NODE WITH THEM
    removeVertex(data)
    {
        while(this.adjacenyList[data].length)
        {
            const adjcentVertex = this.adjacenyList[data].pop();
            this.removeEdge(data,adjcentVertex);
        }
    }
    // VISITED EVERY ELEMENTS - RECURSIVE
    depthFirstRecursive(star)
    {
        const result = [];
        const visited = {};
        const adj = this.adjacenyList;
        (function dfs(data)
        {
           if(!data) return null;
           visited[data] = true;
           result.push(data);
           adj[data].forEach(neighbor =>{
               if(!visited[neighbor])
               {
                   return dfs(neighbor)
               }
           });
        })(star);

        return result;
    }
    // VISITING EVERY ELEMENT INTERATIVE
    depthFirstIterative(start)
    {
        const stack = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        let nowData;
        while(stack.length)
        {
            let currentVertex = stack.pop();
            result.push(nowData);

            this.adjacenyList[nowData].forEach(neighbor =>
            {
                if(!visited[neighbor])
                {
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            });
        }
        return result;
    }
    // VISITING EVERY ELEMENT
    breadthFirst(start)
    {
        const queue  = [start];
        const result = [];
        const visited = {};
        let nowValue;

        while(queue.length)
        {
            nowValue = queue.shift();
            result.push(nowValue);

            this.adjacenyList[nowValue].forEach(neighbor =>
            {
                if(!visited[neighbor])
                {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;

    }



}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");



console.log(g.depthFirstRecursive('A'));
console.log(g);