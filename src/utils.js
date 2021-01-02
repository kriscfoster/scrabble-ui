module.exports = {
  isValidLetter: function(letter) {
    return letter.length === 1 && letter.match(/[A-Z]/g);
  }
}
