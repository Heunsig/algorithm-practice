function Solution (stringA, stringB) {
  function cleanString (str) {
    return str.replace(/[^\w]g/, '').toLowerCase().split('').sort().join('')
  }

  this.execute = () => {
    return cleanString(stringA) === cleanString(stringB)
  }
}

module.exports = Solution