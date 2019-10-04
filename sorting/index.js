// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0 ; i < arr.length ; i++) {
    for (let j = i + 1 ; j < arr.length ; j++) {
      if (arr[i] > arr[j]) {
        let tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
      }
    }
  }

  return arr
}

function selectionSort(arr) {
  let indexOfMin = 0
  for (let i = 0 ; i < arr.length ; i++) {
    indexOfMin = i
    for (let j = i + 1 ; j < arr.length ; j++) {
      if ((arr[i] > arr[j]) && (arr[indexOfMin] > arr[j] )) {
        indexOfMin = j
      }
    }

    let tmp = arr[i]
    arr[i] = arr[indexOfMin]
    arr[indexOfMin] = tmp
    
  }

  return arr
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr
  }

  let left = null
  let right = null

  if (arr.length % 2) {
    // odd
    left = arr.slice(0, (arr.length)/2 + 1)
    right = arr.slice((arr.length)/2 + 1)
  } else {
    // even
    left = arr.slice(0, (arr.length) / 2)
    right = arr.slice((arr.length) / 2)
  }

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const result = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  return [...result, ...left, ...right]
}


module.exports = { bubbleSort, selectionSort, mergeSort, merge };
