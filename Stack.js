class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
    
}


class Stack{
    constructor(value){
        const newNode=new Node(value)
        this.top=newNode
        this.length=1
    }

    push(value){
        const newNode=new Node(value)
        newNode.next=this.top
        this.top=newNode
        this.length++
    }

    pop(){
        if(this.length===0)return undefined
        let temp=this.top
        this.top=this.top.next
        temp.next=null
        this.length--
        return temp
    }

      printList() {
        let temp = this.top;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getTop() {
        if (this.top === null) {
            console.log("Top: null");
        } else {
            console.log("Top: " + this.top.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.top = null;
        this.length = 0;
    }

}

function test() {
    let stack = new Stack(10);
//    stack.push(20)
//    stack.push(30)
    stack.pop()
   stack.getTop();
   stack.getLength();

    console.log("\nStack:");
    stack.printList();
}


test();



