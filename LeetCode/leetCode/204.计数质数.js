// https://leetcode-cn.com/problems/count-primes/

const solution = (n) => {
  let res = 0;

  const isPrime = (n) => {
    if (n === 2) {
      return true;
    }

    if (n < 2 || n % 2 === 0) {
      return false;
    }

    const sqrt = Math.sqrt(n);

    for (let i = 3; i <= sqrt; i += 2) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  };

  for (let i = 0; i < n; i++) {
    res += isPrime(i) ? 1 : 0;
  }

  return res;
};

// console.log(solution(1));

// 3 5 7 11 13 17

// console.log(new Uint8Array(10));

const solution2 = (n) => {
  let res = 0;
  // const sqrt = Math.sqrt(n);
  const arr = new Uint8Array(n);

  for (let i = 2; i < n; i++) {
    if (!arr[i]) {
      res++;

      for (let j = i * i; j < n; j += i) {
        arr[j] = 1;
      }
    }
  }

  return res;
};

console.log(solution2(10));
