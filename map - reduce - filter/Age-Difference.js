const input = [
    {
      name: 'John',
      age: 13,
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    }
  ];
const ages  = input.map( obj => obj.age);
const result = [Math.min(...ages), Math.max(...ages), Math.max(...ages)-Math.min(...ages)];
console.log(result);
