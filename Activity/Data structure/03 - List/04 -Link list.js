
//Link List


class Node
{
    constructor(value)
    {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.lenght = 0;
    }

    addInFirst(value)
    {
        const newNode = new Node(value);
        if(!this.head)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.lenght++;
        return this;
    }
    // putting new element
    push(value)
    {
        const NewNode = new Node(value);
        if(!this.lenght)
        {
            this.head = NewNode;
            this.tail = NewNode;
        }
        else
        {
            this.tail.next = NewNode;
            this.tail = NewNode;
        }
        this.lenght++;
        return this;
    }
    //removing a node from specific position
    removeNode(value)
    {
        if(value < 0 || value > this.lenght)
        {
            return undefined
        }
        if(value === 0)
        {
            return this.removeInFirst();
        }
        if(value === this.lenght-1)
        {
            return this.pop(value);
        }
        let previous = this.get(value - 1);
        let removed = previous.next;
        previous.next = removed.next;
        this.lenght--;
        return removed;
    }
    // remove the first element
    removeInFirst(value)
    {
        if(!this.lenght)
        {
            return null;
        }
        const Ponteiro = this.head;
        this.head = Ponteiro.next;
        this.lenght--;
        if(this.lenght === 0)
        {
            this.tail = null;
        }
        return Ponteiro;
    }
    // remove the elements
    pop()
    {
        if(!this.head)
        {
            return null;
        }
        else
        {
            let now = this.head;
            let newTail = now;

            while(now.next)
            {
                newTail = now;
                now = newTail.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            this.lenght--;
            if(this.head === 0)
            {
                this.head = null;
                this.tail = null;
            }
            return now;
        }
    }
    //KNOW ELEMENT
    get(value)
    {
        if(value < 0 || value >= this.lenght)
        {
            return null;
        }
        let contuer = 0;
        let now = this.head;
        while(contuer !== value)
        {
            now = now.next;
            contuer++;
        }
        return now;
    }
    //CHANGING THE VALUE OF NODE BASE ON IT'S POSITION
    set(value,position)
    {
        let look = this.get(value);
        if(look)
        {
            look.position = position;
            return this;
        }
        return false;
    }
    //ADD NEW ELEMENT IN POSITION
    Insert(value,position)
    {
        if (value < 0 || value > this.lenght) {
            return false;
        }
        if (value === this.lenght) {
            return !! this.push(position);
        }
        if (value === 0) {
            return !! this.addInFirst(position);
        }
        let newNode = new Node(position);
        let previous = this.get(value - 1);
        let temp = previous.next;
        previous.next = newNode;
        newNode.next = temp;
        this.lenght++;
        return true;
    }
    //reverse the ordem
    print()
    {
        let array = [];
        let now = this.head;
        while(now)
        {
            array.push(now.value);
            now = now.next;
        }
        console.log(array);
    }
    reverse()
    {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let previous = null;
        for(let i= 0; i < this.lenght ; i++)
        {
            next = node.next
            node.next = previous;
            previous = node;
            node = next;
        }
        return this;
    }
}

let value = new SinglyLinkList();

value.push(1);
value.push(20);
value.push(300);
value.Insert(3,'ola');
value.reverse();

console.log(value);


