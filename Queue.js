class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
    
}


class Queue{
    constructor(value){
        const newNode=new Node(value)
        this.first=newNode
        this.last=newNode
        this.length=1
    }

    enqueue(value){
        const newNode=new Node(value)
        this.last.next=newNode
        this.last=newNode
        this.length++
    }

    dequeue(){
        if(this.length===0)return undefined
        let temp=this.first
        this.first=this.first.next
        temp.next=null
        this.length--
        return temp
    }

      printList() {
        let temp = this.first;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getFirst() {
        if (this.first === null) {
            console.log("first: null");
        } else {
            console.log("first: " + this.first.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.first = null;
        this.length = 0;
    }

}

function test() {
    let queue = new Queue(10);
//    stack.push(20)
//    stack.push(30)
    queue.enqueue(20)
    queue.dequeue()
    queue.dequeue()
    queue.getFirst();
    queue.getLength();

    console.log("\Queue:");
    queue.printList();
}


test();



