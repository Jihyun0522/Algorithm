const input = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(input.shift());

class MaxHeap {
    constructor() {
        this.heap = [];
    }
    
    push(val) {
        this.heap.push(val);
        this._heapifyUp();
    }
    
    pop() {
        if (this.heap.length === 0) return 0;
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this._heapifyDown();
        }
        return min;
    }
    
    _heapifyUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] < this.heap[i]) {
                [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
                i = parent;
            } else break;
        }
    }
    
    _heapifyDown() {
        let i = 0;
        while (true) {
            const left = 2 * i + 1;
            const right = 2 * i + 2;
            let biggest = i;
            
            if (left < this.heap.length && this.heap[left] > this.heap[biggest]) {
                biggest = left;
            }
            
            if (right < this.heap.length && this.heap[right] > this.heap[biggest]) {
                biggest = right;
            }

            if (biggest === i) break;

            [this.heap[i], this.heap[biggest]] = [this.heap[biggest], this.heap[i]];
            i = biggest;
        }
    }
}

const heap = new MaxHeap();
const result = [];

for (let i = 0; i < input.length; i++) {
    const num = Number(input[i]);
    
    if (num === 0) {
        if (heap.heap.length === 0) {
            result.push(0);
        } else {
            result.push(heap.pop());
        }
    } else {
        heap.push(num);
    }
}

console.log(result.join('\n'));