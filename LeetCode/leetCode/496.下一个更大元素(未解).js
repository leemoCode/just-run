// https://leetcode-cn.com/problems/next-greater-element-i/submissions/

const solution = (arr1, arr2) => {
  const res = [];

  const caculate = (curIndex) => {
    const curItem = arr1[curIndex];
    console.log('curItem', curItem);
    if (curItem == null || curItem == undefined) {
      return;
    }

    if (curIndex === 0) {
      for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] > curItem) {
          console.log('第一个元素判断结果', arr2[i]);

          res.push(arr2[i]);
          break;
        } else if (i === arr2.length - 1) {
          res.push(-1);
        }
      }
    } else if (curIndex === arr1.length - 1) {
      console.log('最后一个元素判断结果', -1);

      res.push(-1);
    } else {
      const tarArr = arr2.join().split(curItem);

      console.log('分裂后数组', tarArr);

      if (tarArr.length === 1) {
        res.push(-1);
      } else {
        for (const item of tarArr[1]) {
          if (item > curItem) {
            const target = parseInt(item);
            console.log('元素判断结果', target);

            res.push(target);
            break;
          }
        }
      }
    }

    caculate(curIndex + 1);
  };

  caculate(0);
  console.log(res);

  return res;
};

solution([2, 4], [1, 2, 3, 4]);
