const functs = {
  stringLength(string) {
    if (string.length < 1 || string.length > 10) {
      throw new Error('Your string can not be less than 1 or bigger than 10 chars');
    }
    else {
      return string.length;
    }
  }
}

export default functs;