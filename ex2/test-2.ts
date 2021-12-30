interface Circle {
    radius: number;
  }
   
  interface Square {
    sideLength: number;
  }
   
  type Shape = Circle | Square;
  
  function getArea(shape: Shape): number {
      return Math.PI * shape.radius ** 2;
  }
  
  let result =  getArea({radius: 1, kind: 'square'})
  
  console.log('result: '+ result);