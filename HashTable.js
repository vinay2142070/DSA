class HashTable{

    constructor(size=9){
        this.dataMap=Array(size)
    }

    _hash(key){
        //generate a hash for the give key
        let hash=0
        for(let i=0;i<key.length;i++){
            hash=(hash+key.charCodeAt(i)*23)%this.dataMap.length
        }
        return hash
    }

    set(key,value){
        let index=this._hash(key)
        if(this.dataMap[index])
        {
            this.dataMap[index].push([key,value])
        }
        else{
            this.dataMap[index]=[[key,value]]
        }
        return this;
    }

    get(key){
        let index=this._hash(key)
        if(this.dataMap[index].length>1){
            for(let item of this.dataMap[index]){
                if(item[0]===key){
                    return item[1]
                }
            }
        }
        else{
            return this.dataMap[index][0][1]
        }
        return undefined
    }

    getKeys(){
        let keys=[]
       for(let arr of this.dataMap){
        if(arr){
            if(arr.length>1){
                for(let item of arr){
                    keys.push(item[0])
                }
            }
            else{
                keys.push(arr[0][0])
            }
                
        }
       }
        return keys
    }
}

const ht=new HashTable()
ht.set('vin5','100')
ht.set('test','120')
ht.set('test2','14')
ht.set('tes3t','170')
ht.set('tefst','180')

console.log(ht.getKeys())