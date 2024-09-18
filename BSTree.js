class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }

}

class BSTree{

    constructor(){
        this.root=null
       
    }

    insert(value){
        const newNode=new Node(value)
        if(this.root===null){
            this.root=newNode
            return this.root;
        }
        let temp=this.root
        //if newnode < go to left else go to right
        while(true){
            if(this.root.value===newNode.value)return undefined
        if(newNode.value < temp.value){
            if(temp.left===null){
                temp.left=newNode
                return this
            }
           temp=temp.left 
        }
        else {
            if(temp.right===null){
                temp.right=newNode
                return this
            }
            temp=temp.right 

        }
      
    }

    }

    contains(key){
        if(this.root===null) return false
        let temp=this.root
        while(temp){
            if(key<temp.value){
                temp=temp.left
            }
            else if(key>temp.value){
                temp=temp.right
            }
            else{
                return true
            }
            
        }
        return false
    }

      // Method to print the tree in a hierarchical format with pipe symbols
    printTree(node = this.root, space = 0, levelGap = 5, branch = null) {
        if (node === null) {
            return;
        }

        // Increase distance between levels
        space += levelGap;

        // Process the right child first
        this.printTree(node.right, space, levelGap, 'right');

        // Print the pipe symbol and the current node value
        let connector = '';
        if (branch === 'left') {
            connector = ' └─ ';
        } else if (branch === 'right') {
            connector = ' ┌─ ';
        }
        console.log(' '.repeat(space - levelGap) + connector + node.value);

        // Process the left child
        this.printTree(node.left, space, levelGap, 'left');
    }
}


const bst=new BSTree()
bst.insert(20)
bst.insert(30)
bst.insert(25)
bst.insert(18)
bst.insert(17)
bst.insert(31)
console.log(bst.contains(33))
console.log(bst.printTree())