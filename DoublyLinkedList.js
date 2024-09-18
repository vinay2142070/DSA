class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
    
}

class DoublyLinkedList{

    constructor(value){
        const newNode=new Node(value)
        this.head=newNode
        this.tail=this.head
        this.length=1
    }

     push(value){

        
        if(this.head){
            const newNode=new Node(value)
            this.tail.next=newNode
             newNode.prev=this.tail
            this.tail=newNode
        }
        else{
            this.head=newNode
            this.tail=this.head
        }
        this.length+=1
       return this;
    }

    pop(){

        //no items 
        if(this.head==null)return undefined
        //many items
       this.tail=this.tail.prev
       let temp=this.tail.next
       this.tail.next=null
       temp.prev=null
        this.length-=1
        //1 item
        if(this.length==0){
            this.head=null
            this.tail=null
            this.prev=null
        }
        return this
    }

    unshift(value){
        const newNode=new Node(value)

        if(this.head){
         newNode.next=this.head
         this.head.prev=newNode
         this.head=newNode
        }
        else{
            this.head=newNode
            this.tail=newNode
        }
        this.length+=1
        

        return this
      

    }

    shift(){
        if(this.length===0) return undefined
        let temp=this.head
        if(this.length===1){
            this.head=this.tail=null
        }
       else{        
            this.head=this.head.next
            temp.next=null
            temp.prev=null
            this.head.prev=null
            
        }
        this.length--
        return temp
        
       
    }

    get(index){
        if(index<0 || index>this.length-1) return undefined
        let temp=this.head
    
        for(let i=0;i<index;i++){
            temp=temp.next
        }
       return temp
    }

    set(index,value){
        let temp=this.get(index)

        if(temp){
            temp.value=value
            return true
        }
        return false

    }


    insert(index,value){
        if(index<0 || index>this.length-1) return false
        if(index===0)return this.unshift(value)
        if(index==this.length-1)return this.push(value)
            const newNode=new Node(value)
            let temp=this.get(index-1)
           newNode.next=temp.next
           temp.next=newNode
           newNode.prev=temp.next.prev
            this.length++
            return true
    }

    remove(index){
        if(index<0 || index>this.length-1) return false
        if(index===0)return this.shift()
        if(index==this.length-1)return this.pop()

        let target=this.get(index)
        let beforeNode=target.prev
        let afterNode=target.next
        beforeNode.next=afterNode
        afterNode.prev=beforeNode
        target.next=target.prev=null
        this.length--
        return target
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

}

function test() {
    let myDLL = new DoublyLinkedList(10);
   // myDLL.makeEmpty()
   myDLL.push(20)
   myDLL.push(30)
    console.log('insert()',myDLL.remove(1))

    myDLL.getHead();
    myDLL.getTail();
    myDLL.getLength();

    console.log("\nDoubly Linked List:");
    myDLL.printList();
}


test();




