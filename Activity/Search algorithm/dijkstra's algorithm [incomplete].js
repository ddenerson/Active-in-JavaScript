class PriorityQueu
{
    constructor()
    {
        this.value = [];
    }
    enqueue(val,priority)
    {
        this.value.push({val,priority});
        this.sort();
    };
    dequeue()
    {
        return this.value.shift();
    };
    sort()
    {
        this.value.sort((a,b)=> a.priority - b.priority);
    };
}
class WeightedGraph
{
    constructor()
    {
        this.adjacencyList = {};
    }
    addVertex(vertex)
    {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2,weight)
    {
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1,weight});
    }
    Dijkstra(start,finish)
    {
        const nodes = new PriorityQueu();
        const distance = {};
        const previous = {};
        // BUILD UP INITIAL STATE
        for(let vertez in this.adjacencyList)
        {
            if(vertez === start)
            {
                distance[vertez] = 0;
                nodes.enqueue(vertez,0);
            }
            else
            {
                distance[vertez] = Infinity;
                nodes.enqueue(vertez,Infinity);
            }
            previous[vertez] = null;
        }


    }
}
let graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");


graph.addEdge("A","B",4);
graph.addEdge("A","C",2);
graph.addEdge("B","E",3);
graph.addEdge("C","D",2);
graph.addEdge("C","F",4);
graph.addEdge("D","E",3);
graph.addEdge("D","F",1);
graph.addEdge("E","F",1);