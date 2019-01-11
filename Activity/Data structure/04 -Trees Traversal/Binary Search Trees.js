// Binary SearchTree
class Node
{
    constructor(value)
    {
        this.value = value;
        this.left  = null;
        this.right = null;
    }
}

class binarySearchTree
{
    constructor()
    {
        this.root = null;
    }
    // insert element to the tree
    insert(value)
    {
        let newNode = new Node(value);
        if(this.root === null)
        {
            this.root = newNode;
            return this;
        }
        let now = this.root;
        while(true)
        {
            if(value === now.value)return undefined;
            if(value < now.value)
            {
                if(now.left === null)
                {
                    now.left = newNode;
                    return this;
                }
                now = now.left;
            }
            else
            {
                if(now.right === null)
                {
                    now.right = newNode;
                    return this;
                }
                now = now.right;
            }

        }

    }
    // looking for the element
    finding(value)
    {
        if(this.root === null)return undefined;
        let save = this.root,
            found = save;
        while(save && !found)
        {
            if(value < save.value)
            {
               save = save.left;
            }
            else if(value > save.value)
            {
                save = save.right;

            }
            else
            {
                found = true;
            }
        }
        if(!found) return undefined;
        return save;
    }

}

let value = new binarySearchTree();

value.insert(10);
value.insert(5);
value.insert(13);
value.insert(11);
value.insert(16);
value.insert(7);
value.insert(2);
let saber = value.finding(14);


console.log(saber);

