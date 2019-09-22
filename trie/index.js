class Node {
  constructor (value) {
    this.value = value
    this.children = []
    this.done = false
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
  }

  addWords (words) {
    for (let word of words) {
      this.addWord(word)
    }
  }

  addWord (word) {
    let cursor = this.root
    for (let c of word) {
      let indexOfChar = this.findChar(c, cursor.children)
      if (indexOfChar > -1) {
        cursor = cursor.children[indexOfChar]
      } else {
        const newNode = cursor.add(c)
        cursor = newNode
      }
    }

    cursor.done = true
    cursor = null
  }

  findWordsBy (prefix) {
    let cursor = this.root
    const result = []

    for (let c of prefix) {
      let indexOfChar = this.findChar(c, cursor.children)
      if (indexOfChar > -1) {
        cursor = cursor.children[indexOfChar]
      }
    }

    if (cursor.done) {
      result.push(prefix)
    }

    function search (prefix, children=null, word='') {
      for (let child of children) {
        if (child.done) {
          result.push(prefix + word + child.value)
        }

        if (child.children.length) {
          search(prefix, child.children, word + child.value)
        }
      }
    }

    search(prefix, cursor.children, '')

    return result
  }

  findChar (char, objs) {
    for (let obj of objs) {
      if (obj.value === char) {
        return objs.indexOf(obj)
      }
    }

    return -1
  }

}

//////////////////
// Example code //
//////////////////
// const a = new Trie()
// a.addWords([
//   'transmit', 
//   'transaction', 
//   'translation', 
//   'transfer',
//   'unfinished', 
//   'unskilled',
//   'ungraceful',
//   'unfriendly',
//   'extracurricular', 
//   'extramarital',
//   'extravagant'
// ])

// console.log(a.findWordsBy('trans'))
// console.log(a.findWordsBy('extra'))
// console.log(a.findWordsBy('unf'))
