let DnaTranscriber = function () {};

DnaTranscriber.prototype.toRna = function (dna) {
  // G -> C
  // C -> G
  // T -> A
  // A -> U
  let rna = '';
  let dnaArray = dna.split('')
  dnaArray.forEach((item) => {
    if (item === 'G') {
      rna += 'C'
    } else if (item === 'C') {
      rna += 'G'
    } else if (item === 'T') {
      rna += 'A'
    } else if (item === 'A') {
      rna += 'U'
    } else {
      throw new Error('Invalid input')
    }
  })
  return rna
};

module.exports = DnaTranscriber;
