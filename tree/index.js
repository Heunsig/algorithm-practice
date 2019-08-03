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
    // this.children.splice(this.children.indexOf(data), 1)
  }

}

class Tree {

  constructor () {
    this.root = null
  }

  traverseBF () {
    let result = []
    let nodes_have_children = []

    function find_children (node) {
      let arr = []

      for (let child of node.children) {
        arr.push(child)
        if (child.children.length > 0) {
          nodes_have_children.push(child)
        }
      }

      return arr
    }

    result[0] = this.root
    nodes_have_children[0] = this.root
    
    let i = 0
    while (i < nodes_have_children.length) {
      result = [...result, ...find_children(nodes_have_children[i])]
      i++
    }

    console.log(result)

  }

}

const letters = [];
const t = new Tree();
t.root = new Node('a');
t.root.add('b');
t.root.add('c');
t.root.children[0].add('d');
t.root.children[0].add('e');
t.root.children[0].add('f');
t.root.children[1].add('g');
t.root.children[0].children[1].add('h')
t.root.children[0].children[2].add('i')
t.root.children[1].children[0].add('j')
t.root.children[0].children[1].children[0].add('k')


t.traverseBF();

module.exports = { Tree, Node };
