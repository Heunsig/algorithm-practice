class Node {
  constructor (name) {
    this.name = name
    this.children = []
    this.is_last = false
  }

  add (name) {
    const node = new Node(name)
    this.children.push(node)
    return node
  }
}

class Trie {
  constructor () {
    this.root = new Node(null)
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
      let indexOfName = this.findNameNotLast(name, cursor.children)

      if (indexOfName > -1) {
        if (index === names.length - 1) {
          const newNode = cursor.add(name)
          cursor = newNode
        } else {
          cursor = cursor.children[indexOfName]  
        }
      } else {
        const newNode = cursor.add(name)
        cursor = newNode
      }
    }

    cursor.is_last = true
  }


  findKey (key) {
    let cursor = this.root
    const names = key.split('/')

    for (const [index, name] of names.entries()) {
      if (index === names.length - 1) {
        let indexOfName = this.findNameLast(name, cursor.children)
        if (indexOfName > -1) {
          return cursor.children[indexOfName]  
        }

        return null
        
      } 

      let indexOfName = this.findNameNotLast(name, cursor.children)
      if (indexOfName > -1) {
        cursor = cursor.children[indexOfName]  
      } else {
        return null
      }
    }

    return null
  }

  list (key='') {
    let cursor = this.root
    const names = key.split('/')

    for (let name of names) {
      let indexOfName = this.findNameNotLast(name, cursor.children)
      if (indexOfName > -1) {
        cursor = cursor.children[indexOfName]
      } else {
        return null
      }
    }

    return cursor
  }

  findNameNotLast (name, objs) {
    for (let obj of objs) {
      if (obj.name === name && obj.is_last !== true) {
        return objs.indexOf(obj)
      }
    }

    return -1
  }

  findNameLast (name, objs) {
    for (let obj of objs) {
      if (obj.name === name && obj.is_last === true) {
        return objs.indexOf(obj)
      }
    }

    return -1
  }

}

const a = new Trie()
a.addKey('name')
debugger
a.addKey('test/name/test')
debugger
a.addKey('test/name')
a.addKey('test/name/test2')

// console.log(a.list('name'))
debugger
a.addKey('test/name/test2')
a.addKey('test/age')
a.addKey('test/address')
a.addKey('test/address')
a.addKey('test/address1/basic')
a.addKey('test/address1/basic/hi')
a.addKey('test/address/basic')
a.addKey('test/address/basic/hi')
a.addKey('good/address/basic/hi')

// console.log(a.findKeysBy('test/address1'))
console.log(a.findKey('test/address1/basic'))
// console.log(a.list('test'))
// console.log(a.list('test/name'))
