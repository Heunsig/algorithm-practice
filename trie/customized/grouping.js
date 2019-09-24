class Node {
  constructor (key, name) {
    this.key = key
    this.name = name
    this.children = []
    this.is_last = false
  }

  add (key, name) {
    const node = new Node(key, name)
    this.children.push(node)
    return node
  }
}

class Trie {
  constructor () {
    this.root = new Node(null, null)
  }

  addKeys (keys) {
    for (let key of keys) {
      this.addKey(key)
    }
  }

  addKey (key) {
    let cursor = this.root
    const names = key.split('/')

    for (const [index, name] of names.entries()) {
      let childKey = names.slice(0, index + 1).join('/')

      if (index === names.length - 1) {
        const newNode = cursor.add(childKey, name)
        newNode.is_last = true
        return newNode
      }

      let child = this.findChildOfName(name, cursor.children)
      if (child) {
        cursor = child
      } else {
        const newNode = cursor.add(childKey, name)
        cursor = newNode
      }
    }
  }

  findValueBy (key='') {
    let cursor = this.root
    const names = key.split('/')

    for (const [index, name] of names.entries()) {
      if (index === names.length - 1) {
        return this.findChildOfName(name, cursor.children, true)
      }

      let child = this.findChildOfName(name, cursor.children)
      if (child) {
        cursor = child
      } else {
        return null
      }
    }
  }

  list (key='') {
    let cursor = this.root
    const names = key.split('/')

    for (let name of names) {
      let child = this.findChildOfName(name, cursor.children)
      if (child) {
        cursor = child
      } else {
        return null
      }
    }

    return cursor.children
  }

  findChildOfName (name, children, is_last=false) {
    for (let child of children) {
      if (child.name === name && child.is_last === is_last) {
        return child
      }
    }

    return null
  }
}

const a = new Trie()
a.addKey('name')
debugger
a.addKey('test/name/test')
debugger
a.addKey('test/name')
a.addKey('test/name/test2')

// console.log(a.list('test/name'))
debugger
a.addKey('test/name/test2')
a.addKey('test/age')
a.addKey('test/address')
// a.addKey('test/address')
a.addKey('test/address1/basic')
a.addKey('test/address1/basic/hi')
a.addKey('test/address/basic')
a.addKey('test/address/basic/hi')
a.addKey('good/address/basic/hi')

// console.log(a.list('test/name'))
// console.log(a.findKeysBy('test/address1'))
// console.log(a.findValueBy(''))
// console.log(a.list('test/address1'))
// console.log(a.list('test/name'))
