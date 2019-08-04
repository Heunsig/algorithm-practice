// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {

  constructor (data) {
    this.data = data
    this.children = []
  }

  add (data) {
    this.children.push(new Node(data))
  }

  remove (data) {
    this.children = this.children.filter(node => {
      return node.data !== data
    })
  }

}

class Tree {

  constructor () {
    this.root = null
  }

  traverseBF (callback) {
    const result = [this.root]

    let i = 0
    while (i < result.length) {
      for (let child of result[i].children) {
        result.push(child)
      }

      i++
    }

    for (let node of result) {
      callback(node)
    }
  }

  traverseDF () {
    let arr = [this.root]

    let i = 0
    while (i < arr.length) {
      let node = arr[i]

      if (node.children.length) {
        arr.splice(arr.indexOf(node) + 1, 0, ...node.children)
      }

      i++

    }

    console.log(arr)

  }

}

const letters = [];
const t = new Tree();
t.root = new Node('20');
t.root.add('0');
t.root.add('40');
t.root.add('-15');
t.root.children[0].add('12')
t.root.children[0].add('-2')
t.root.children[0].add('1')
t.root.children[2].add('-2')
// t.root.children[0].add('c');

t.traverseDF()


module.exports = { Tree, Node };
