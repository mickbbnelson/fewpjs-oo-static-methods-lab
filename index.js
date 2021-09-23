class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.substring(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    const lowerCased = ['the', 'an', 'a', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const newArray = []
    const array = string.split(" ");
    array.map(word => {
      if (lowerCased.includes(word)){
        newArray.push(word)
      } else {
        newArray.push(word.charAt(0).toUpperCase() + word.substring(1));
      }
    })
    let newArray1 = newArray.join(' ');
    return newArray1.charAt(0).toUpperCase() + newArray1.substring(1);
  }
}