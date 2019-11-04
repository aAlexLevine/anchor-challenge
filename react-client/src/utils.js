//Tests in '../test/test.js'

let text = `If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.`

const findLargestUniqueSetToRemove = (string = '', minLength = 0) => {
  
  const getCharCountHash = (str) => {
    const arrStr = str.split('')
    const charCountHash = arrStr.reduce((acc, curr) => {
      if (curr in acc) {
        acc[curr]++
      } else {
        acc[curr] = 1
      }
      return acc
    }, {})
    return charCountHash
  }

  const convertHashToArrayAndSort = (charCountHash) => {
    const charCountArr = []
    for (let char in charCountHash) {
      let tuple = [char, charCountHash[char]]
      charCountArr.push(tuple)
    }
    charCountArr.sort((a, b) => a[1] - b[1])
    return charCountArr
  }

  const removeLeastOccurringChars = (charCountArr) => {
    const uniqueChars = []
    let strLength = string.length
    while (charCountArr.length) {
      const charCount = charCountArr[0][1]
      const diff = strLength - charCount
      if (diff < minLength) {
        return uniqueChars
      }
      let charWithSmallestCount = charCountArr.shift()[0]
      uniqueChars.push(charWithSmallestCount)
      strLength -= charCount
    }
    return uniqueChars
  }

  const charCountHash = getCharCountHash(string)
  const sortedCharCountArr = convertHashToArrayAndSort(charCountHash)
  const uniqueChars = removeLeastOccurringChars(sortedCharCountArr)

  return uniqueChars
};


module.exports = {
  findLargestUniqueSetToRemove,
  text
}