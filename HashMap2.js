var LinkedList= require('./LinkedList.js');

class HashMap2 {
    constructor(initialCapacity=8) {
        this.length = 0;
        this._hashTable = [];
        this._capacity = initialCapacity;
        this._deleted = 0;
    }

    get(key) {
        const node = this._findSlot(key);
      
        return node.value;
    }

    set(key, value){
        const loadRatio = (this.length + this._deleted + 1) / this._capacity;
        if (loadRatio > HashMap2.MAX_LOAD_RATIO) {
            this._resize(this._capacity * HashMap2.SIZE_RATIO);
        }
        //Find the slot where this key should be in
        let node = this._findSlot(key);

      
        node.value = {
            key,
            value,
            DELETED: false
        }; 
    }

    delete(key) {
        const node = this._findSlot(key);
      
      node.DELETED = true;
       
       
    }

    _findSlot(key) {
        const hash = HashMap2._hashString(key);
        const start = hash % this._capacity;

       
            const index = start % this._capacity;
            const slot = this._hashTable[index];
        //    var ls=null;
            if (!slot ) {
                console.log(LinkedList)
          var ls = new LinkedList();
          console.log(ls);

               this._hashTable[index]=ls;
               this.length++;
            }
            return ls.find2(key);
              
        
    }

    _resize(size) {
        const oldSlots = this._hashTable;
        this._capacity = size;
        // Reset the length - it will get rebuilt as you add the items back
        this.length = 0;
        this._deleted = 0;
        this._hashTable = [];

        for (const slot of oldSlots) {
            if (slot !== undefined && !slot.DELETED) {
                this.set(slot.key, slot.value);
            }
        }
        
    }

    _getcapacity()
    {
        return this._capacity;
    }

    static _hashString(string) {
        let hash = 5381;
        for (let i = 0; i < string.length; i++) {
            //Bitwise left shift with 5 0s - this would be similar to
            //hash*31, 31 being the decent prime number
            //but bit shifting is a faster way to do this
            //tradeoff is understandability
            hash = (hash << 5) + hash + string.charCodeAt(i);
            //converting hash to a 32 bit integer
            hash = hash & hash;
        }
        //making sure hash is unsigned - meaning non-negtive number. 
        return hash >>> 0;
    }
}

module.exports = HashMap2;