const input = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(input.shift());

class AbsMinHeap {
    constructor() {
        this.heap = [];
    }
    
    push(val) {
        this.heap.push([Math.abs(val), val]);
        this._heapifyUp();
    }
    
    pop() {
        if (this.heap.length === 0) return 0;
        const min = this.heap[0][1];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this._heapifyDown();
        }
        return min;
    }
    
    compare(a, b) {
        if (a[0] !== b[0]) {
            return a[0] < b[0];
        }
        return a[1] < b[1];
    }
    
    _heapifyUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.compare(this.heap[i], this.heap[parent])) {
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
            let smallest = i;
            
            if (left < this.heap.length && this.compare(this.heap[left], this.heap[smallest])) {
                smallest = left;
            }
            
            if (right < this.heap.length && this.compare(this.heap[right], this.heap[smallest])) {
                smallest = right;
            }

            if (smallest === i) break;

            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
    }
}

const heap = new AbsMinHeap();
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