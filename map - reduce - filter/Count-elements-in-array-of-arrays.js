const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
  ];

const result = input.flat().reduce((acc,curr)=>{
    if(acc[curr]){
        acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});

console.log(result);
