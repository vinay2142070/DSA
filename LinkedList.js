class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
    
}

class LinkedList{

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
        let temp=this.head
        let pre=this.head
        while(temp.next){
            pre=temp
            temp=temp.next
            
        }
        temp=null
        this.tail=pre
        this.tail.next=null
        this.length-=1
        //1 item
        if(this.length==0){
            this.head=null
            this.tail=null
        }
        return this
    }

    unshift(value){
        const newNode=new Node(value)

        if(this.head){
            let temp=this.head
            this.head=newNode
            this.head.next=temp
        }
        else{
            this.head=newNode
            this.tail=newNode
        }
        this.length+=1
        

        return this
      

    }

    shift(){
        if(this.head){
            let temp=this.head
            this.head=this.head.next
            temp.next=null
            this.length-=1
            if(this.length===0){
                this.head=this.tail=null
            }
        }
        else{
            return undefined
        }
        
       
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
            this.length++
            return true
    }

    remove(index){
        if(index<0 || index>this.length-1) return false
        if(index===0)return this.shift()
        if(index==this.length-1)return this.pop()

        let beforeNode=this.get(index-1)
        let temp=beforeNode.next
        beforeNode.next=temp.next
        temp.next=null
        this.length--
        return temp
    }
}

const ll=new LinkedList(10)
ll.push(20)
ll.push(30)
ll.remove(1)
console.log(ll)






