//Queues THE FIRST ENTER IS THE FIRST OUT

class Node
{
    constructor(valor)
    {
        this.valor = valor;
        this.next = null;
    }
}
class Queue
{
    constructor()
    {
        this.top    = null;
        this.last   = null;
        this.lenght = 0;
    }
    start()
    {
        return this.top;
    }
    pop(value)
    {
        const NVnó = new Node(value);
        if(this.lenght === 0)
        {
            this.top  = NVnó;
            this.last = NVnó;
        }
        else
        {
           this.last.next = NVnó;
           this.last = NVnó;
        }
        this.lenght++;
        return this;
    }
    push()
    {
        if(!this.lenght)
        {
            return null;
        }
        if(this.top === this.last)
        {
            this.last = null;
        }
        const Ponteito = this.top;
        this.top = this.top.next;
        this.lenght--;
        return this;
    }
}

let valor = new Queue();

valor.start();
valor.pop('p');
valor.pop('s');
valor.pop('t');




console.log(valor);
