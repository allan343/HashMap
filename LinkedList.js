class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
      
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
        return this.head;
    }

    insertLast(item) {
        let returnvalue= null;
        if (this.head === null) {
            returnvalue=this.insertFirst(item);
            
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
            returnvalue = tempNode.next
        }
        return returnvalue;
    }

    insertBefore(value,item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        let nextNode= currNode.next;
        // Check for the item 
        while (nextNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (nextNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode=nextNode;
                nextNode = currNode.next;
               
            }
        }
        // Found it
       currNode.next= new _Node(value,nextNode);
       
    }

    insertAfter(value,item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        let nextNode= currNode.next;
        // Check for the item 
        while (nextNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (nextNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                nextNode = nextNode.next;
            }
        }
        // Found it
        let saveNext= nextNode.next;
        nextNode.next = new _Node(value, saveNext)
    }

    insertAt(value,pos) { 
        // Start at the head
        let index= pos-1;
        let count=0;
        let currNode = this.head;
        // If the list is empty
        if (pos=="0") {
            this.insertFirst(value);
        }
        let nextNode= currNode.next;
        // Check for the item 
        while (count < index) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode=nextNode;
                nextNode = currNode.next;
               
            }
            count++;
        }
        // Found it
       currNode.next= new _Node(value,nextNode);
       
    }

    
    size() { 
        // Start at the head
    
        let currNode = this.head;
        let size=0;
        // If the list is empty
        if (!this.head) {
           console.log("list is empty")
        }
        let nextNode= currNode.next;
        // Check for the item 
        while (currNode !== null) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
          
                currNode=currNode.next;
            size++;
        }
        // Found it
       return size;
    }

    isEmpty(){
        let currNode = this.head;
        if (currNode==null)
        {
            console.log("list is empty")

        }
        else{
            console.log("list is not empty")
        }
    }

    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    find2(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
      
        // Check for the item 
        while (currNode&&currNode.value.key !== item && !currNode.value.deleted ) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
         
                // Otherwise, keep looking 
                currNode = currNode.next;
            
        }

        if(!currNode)
        {
          currNode=  this.insertLast(null);
        }
        // Found it
        return currNode;
    }



    findPrevious(item) { 
        // Start at the head
        let currNode = this.head;
        let prevNode= null;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                prevNode= currNode;
                currNode = currNode.next;
            }
        }
        // Found it
        return prevNode;
    }

    findLast() { 
        // Start at the head
        let currNode = this.head;
     
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.next !== null) {
          
                // Otherwise, keep looking 
            //    console.log(currNode.value);
                
                currNode = currNode.next;
            
        }
        // Found it
        return currNode;
    }

    thirdFromEnd() { 
        // Start at the head
        let third = this.size()-3;
        console.log(this.size());
        console.log(third);
        let currNode = this.head;
        let pos = 0;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (pos<third) {
          
                // Otherwise, keep looking 
            //    console.log(currNode.value);
                
                currNode = currNode.next;
                pos++;
            
        }
        // Found it
        return currNode;
    }

    reverse() 
    { 
        // Initialize current, previous and 
        // next pointers 
       let currNode = this.head; 
        let prevNode = null;
        let nextNode = null; 
  
        while (currNode !== null) { 
            // Store next 
            nextNode = currNode.next; 
  
            // Reverse current node's pointer 
            currNode.next = prevNode; 
  
            // Move pointers one position ahead. 
            prevNode = currNode; 
            currNode = nextNode; 
        } 
        this.head = prevNode; 
    } 

    middleOfList()  
{  
   let slow_ptr = this.head;  
    let fast_ptr = this.head;  
  
    if (this.head!=null)
    {  
        while (fast_ptr != null && fast_ptr.next != null)  
        {  
            fast_ptr = fast_ptr.next.next;  
            slow_ptr = slow_ptr.next;  
        }  
      //  printf("The middle element is [%d]\n\n", slow_ptr->data);  
      console.log("The middle element is "+ slow_ptr.value);
    }  
}  

    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    SortedInsert(head, newNode)
    {
        let dummy= new _Node("",null);
        let current =  new _Node("",dummy);
        dummy.next = head;
    
        while (current.next != null && current.next.value < newNode.value)
            current = current.next;
    
        newNode.next = current.next;
        current.next = newNode;
        head = dummy.next;
    }
    
    
    InsertSort()
    {
        let result = new _Node("",null); 	// build the answer here
        let current =  new _Node("",this.head);	// iterate over the original list
        let nextNode = current.next;
    
        while (current != null)
        {
            // tricky - note the next pointer before we change it
            nextNode = current.next;
    
            this.SortedInsert(result, current);
            current = nextNode;
        }
    
        this.head = result;
    }
    
  detectLoop() 
{ 
    let slow_p = this.head;  
    let fast_p = this.head;  
   // struct Node *slow_p = list, *fast_p = list; 
  
    while (slow_p && fast_p && fast_p.next) { 
        slow_p = slow_p.next; 
        fast_p = fast_p.next.next; 
        if (slow_p == fast_p) { 
           console.log("true"); 
        } 
    } 
    console.log("false"); 
} 


}

module.exports = LinkedList;