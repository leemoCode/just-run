const solution = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    [str[i], str[str.length - 1 - i]] = [str[str.length - 1 - i], str[i]];
  }
};

return solution('jdiafj');
