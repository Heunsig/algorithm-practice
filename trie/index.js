// cat
// car
// zebra
// try
// trie


class Node {
  constructor (value) {
    this.value = value
    this.children = []
    // this.values = []
    // this.child = null
  }

  add (value) {
    const node = new Node(value)
    this.children.push(node)
    return node
  }
}

class Trie {
  constructor () {
    this.root = new Node(null)
    this.cursor = null
  }

  addWords (words) {
    for (let word of words) {
      this.addWord(word)
    }
  }

  addWord (word) {
    this.cursor = this.root
    for (let c of word) {
      if (this.findChar(c, this.cursor.children) > -1) {
        // this.cursor = this.cursur.child
        // this.cursor = this.cursor.child
        this.cursor = this.cursor.children[this.findChar(c, this.cursor.children)]
      } else {
        // this.cursor.children.push(new Node(c))
        const newNode = this.cursor.add(c)
        this.cursor = newNode
        // this.cursor.child = new Node()
        // this.cursor = this.cursor.child
        // debugger
      }
    }

    this.cursor = null
  }

  findChar (char, objs) {
    for (let obj of objs) {
      if (obj.value === char) {
        return objs.indexOf(obj)
      }
    }

    return -1
  }

  findWordsBy () {

  }
}

const a = new Trie()
debugger
a.addWord('cat')
debugger
a.addWord('car')
debugger
a.addWord('try')
debugger
a.addWord('trie')
debugger

// const objs = [{value: 'a'}, {value: 'b'}, {value: 'c'}]
// for(let a of objs) {
//   console.log(a)
// }