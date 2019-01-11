//Stack -- PILHA -- LAST IN - FIRST OUT

class Node
{
    constructor(value)
    {
        this.value = value;
        this.next = null;
    }
}
class  Stack {
    constructor() {
        this.top = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }
    // GIVE ELEMENT TO STACK
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.last = newNode;
        } else {
            const holdP = this.top;
            this.top = newNode;
            this.top.next = holdP;
        }
        this.length++;

        return this;
    }
    // REMOVE ELEMENT OF STACK
    pop(value)
    {
        if(!this.top)
        {
            return null;
        }
        if(this.top === this.last)
        {
            this.last = null;
        }
        const holdP = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }

}

let valor =  new Stack();

valor.peek();
valor.push("Pri");
valor.push("Seg");
valor.push("Ter");
valor.pop();
valor.pop();


console.log(valor);




