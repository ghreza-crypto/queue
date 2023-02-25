// Start with your code from LinkedList challenge.
// Linked List
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  isEmpty() {
    return !this.size
  }


  add(item) {
    const node = new Node(item)
    if (this.isEmpty()) {
      this.first = node
      this.last = node
    }
    else {
      this.last.next = node
      this.last = node
    }
    this.size++
    return this
  }

  remove() {
    if (this.isEmpty()) return -1
    const remove = this.first
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return remove.data
  }
}

const queue = new Queue()

queue.add(3)
queue.add(5)
console.log(queue.remove())
// => 3

queue.add(2)
queue.add(7)
console.log(queue.remove())
// => 5

console.log(queue.remove())
// => 2

console.log(queue.remove())
// => 7

console.log(queue.remove())
// => -1

module.exports = Queue
