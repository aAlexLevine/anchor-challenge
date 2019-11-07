const expect = require('chai').expect
const { findLargestUniqueSetToRemove, text } = require('../utils.js')


describe('findLargestUniqueSetToRemove', () =>{
  
  it('handles empty input', () => {
    expect(findLargestUniqueSetToRemove()).to.deep.equal([])
    expect(findLargestUniqueSetToRemove('')).to.deep.equal([])
  })

  it('treats capital and lowercase as distinct', () => {
    expect(findLargestUniqueSetToRemove('aAAbBcDdC', 0)).to.deep.equal(['a', 'b', 'B', 'c', 'D', 'd', 'C', 'A'])
    expect(findLargestUniqueSetToRemove('aAAbBcDdC', 3)).to.deep.equal(['a', 'b', 'B', 'c', 'D', 'd'])
  })

  it('counts spaces as characters', () => {
    expect(findLargestUniqueSetToRemove('    ', 1)).to.deep.equal([])
    expect(findLargestUniqueSetToRemove(' aaaaaa   bbbbbbb   cc', 5)).to.deep.equal(['c', 'a', ' '])
  })

  it('handles strings shorter than minimum length', () => {
    expect(findLargestUniqueSetToRemove('abc', 4)).to.deep.equal([])
    expect(findLargestUniqueSetToRemove('', 1)).to.deep.equal([])
  })

  it('only counts characters if min length can be met', () => {
    expect(findLargestUniqueSetToRemove('aaaaaa', 1)).to.deep.equal([])
    expect(findLargestUniqueSetToRemove('aaaaaaaa', 0)).to.deep.equal(['a'])
    expect(findLargestUniqueSetToRemove('abcde', 5)).to.deep.equal([])
  })

  it('handles the primary case', () => {
    expect(findLargestUniqueSetToRemove(text, 50)).to.deep.equal(
      ['0', '.', 'I', 'v', 'q', 'y', ':', '’', ',', 'k', '5', 'j', 'd', 'b', 'w', 'f', 'm', 'c', 'n', 'p', 'g', 'i', 'u', 'l', 'h', 's', 'r', 'o', 'a', 'e']
    )
  })
})


