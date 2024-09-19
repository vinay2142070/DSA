class Graph{

    constructor(){

        this.adjacentList={}
    }

    addVertex(vertex){
        if(this.adjacentList[vertex])
        return false
    else
    this.adjacentList[vertex]=[]
    }


    addEdge(vertex1,vertex2){
        if(this.adjacentList[vertex1]&&this.adjacentList[vertex2]){
            this.adjacentList[vertex1].push(vertex2)
            this.adjacentList[vertex2].push(vertex1)
            return true
        }
        return false
    }

    removeEdge(vertex1,vertex2){
        if(!this.adjacentList[vertex1])return false
        if(!this.adjacentList[vertex2])return false
        this.adjacentList[vertex1]=this.adjacentList[vertex1].filter((item)=>item!==vertex2)
        this.adjacentList[vertex2]=this.adjacentList[vertex2].filter((item)=>item!==vertex1)
    
        return true
    }

    removeVertex(vertex){

        if(!this.adjacentList[vertex])return undefined
        while(this.adjacentList[vertex].length){
            let temp=this.adjacentList[vertex].pop()
            this.removeEdge(temp,vertex)
        }
        delete this.adjacentList[vertex]
        return this
    }
}

const graph=new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdge('A','B')
graph.addEdge('B','C')
graph.removeVertex('C')

console.log(graph)

