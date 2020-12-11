
class Node
{
    constructor(value)
    {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.lenght = 0;
    }
    //Adding a node to the beginning
    unshift(value)
    {
        let newNode = new Node(value);

        if(this.lenght === 0)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.lenght++;
        return this;
    }

    //Adding a node to the end of the Doubly Linked List
    pushing(value)
    {
        let newNode = new Node(value);
        if(this.lenght === 0)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
           this.tail.next = newNode;
           newNode.prev = this.tail;
           this.tail = newNode;
        }
        this.lenght++;
        return this;
    }
    // removing a node from the end
    popping()
    {
        if(!this.head)
        {
            return null;
        }
        let store = this.tail;
        if(this.lenght === 1)
        {
               this.head = null;
               this.tail = null;
        }
        else
        {
          this.tail = store.prev;
          this.tail.next = null;
          store.prev = null;
        }
        this.lenght--;
        return store;
    }
    // removing a node from the beginning
    shifting()
    {
        if(this.lenght === 0)
        {
            return null;
        }
        let store = this.head;
        if(this.lenght === 1)
        {
            this.head = null;
            this.tail = null;
        }
        else
        {
            this.head.prev = store;
            store.next = this.head;
            this.head = store;
        }
        this.lenght--;
        return store;
    }
    // acessing a node-data in a DoubleLList
    get(value)
    {
        if(value < 0 || value >= this.lenght)
        {
            return null;
        }
        if(value <= this.lenght/2)
        {
            let cont = 0;
            let now = this.head;
            while (cont !== value)
            {
                now = now.next;
                cont++;
            }
            return now;
        }
        else
        {
          let cont2 = this.lenght - 1;
          let now2 = this.tail;
          while(cont2 !== value)
          {
              now2 = now2.prev;
              cont2--;
          }
          return now2;
        }
    }
    // Replacing the value of a node
    set(value,position)
    {
       let sourceNode =  this.get(value);

       if(sourceNode != null)
       {
           sourceNode.position = position;
           return true;
       }
       return false;
    }
    //Adding a node by a certain position
    insert(value,position)
    {
        if(value < 0 || value >= this.lenght)
        {
            return false;
        }
        if(value === 0)
        {
            return this.unshift(position);
        }
        if(value === this.lenght)
        {
            return this.pushing(position);
        }
        // varible declariton
        let newNode = new Node(position);
        let befNode = this.get(value - 1);
        let aftNode = befNode.next;
        //================================//
        befNode.next = newNode;
        newNode.prev = befNode;
        newNode.next = aftNode;
        aftNode.prev = newNode;
        this.lenght++;
        return this;
    }
    //Removing a node in a certain position
    remove(value)
    {
        if(value < 0 || value >= this.lenght)
        {
            return undefined
        }
        if(value === 0)
        {
            return this.shifting();
        }
        if(value === this.lenght-1)
        {
            return this.popping()
        }
        let remNode = this.get(value);
        remNode.prev.next = remNode.next;
        remNode.next.prev = remNode.prev;
        remNode.next = null;
        remNode.prev = null;
        this.lenght--;
        return remNode;

    }
}

let valor = new DoublyLinkList();

valor.pushing(1);
valor.pushing(20);
valor.pushing(300);
valor.insert(0,1000);
valor.remove(3);



console.log(valor);