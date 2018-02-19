class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class SelfOrganizedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insert(data) {
        var node = new Node(data);
        if (this.size()!=0) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }


    }
    size() {
        var current = this.tail,
            count = 0;
        while(current!=null){
            count++;
            current = current.prev;
        }

        return count;
    }

    at(index) {
        var arr= this.toArray();
        if(this.size()===0||arr[index]===undefined){
            return null;
        }
        return arr[index];

    }

    findNode(data) {
        var a=this.head;
        for(let i=0;i<this.size();i++){
            if(a.data===data){
                return a;
            }
            a=a.next;
        }
        return null;
    }

    toArray() {
        if(this.count===0) {
            return[];
        }
        var arr=[];
        var a=this.head;
        for(let i=0;i<this.size();i++){
            arr.push(a.data);
            a=a.next;
        }
        return arr;
    }

    removeAt(index) {
        if(this.size()===0||index<1||this.size()<index){
            return null;
        }
        var current = this.head,
            count = 1,
            beforeNodeToDelete = null,
            nodeToDelete = null,
            deletedNode = null;

        if(index===1){
            this.head = null;
            return this.head;

            if (!this.head) {
                this.head.previous = null;
            } else {
                this.tail = null;
            }}else if(index===this.size()){
            this.tail = this.tail.prev;
            this.tail.next = null;
        }else{
            while(count < index){
                current = current.next;
                count++;
            }
            beforeNodeToDelete = current.previous;
            nodeToDelete = current;
            afterNodeToDelete = current.next;

            beforeNodeToDelete.next = afterNodeToDelete;
            afterNodeToDelete.previous = beforeNodeToDelete;
            deletedNode = nodeToDelete;
            nodeToDelete = null;

        }
        this.size()--;
    }

    moveToFront(node) {
        var current = this.head,
            a = [node.next,node.prev];

        if(this.size()===1){
            return current;
        }
        this.head = node;
        this.head.next = current;
        a[0].next = a[1];
        a[1].prev = a[0];

    }
    reorganize(data) {

    }
}

module.exports = {
    SelfOrganizedList,
    Node
};

