const makeChange = (c) => {
    // your name here
      let obj={
          "q":0,
          "d":0,
          "n":0,
          "p":0
      }
      while (c>0)
          {
              if(c>25)
              {
                  obj.q=Math.floor(c/25);
                  c=c%25;
              }
              else if(c>10)
              {
                obj.d=Math.floor(c/10)
                c=c%10;
              }
              else if(c>5)
              {
                obj.n= Math.floor(c/5);
                c=c%5;
              }
              else{
                obj.p=c;
                c=0;
              }
          }
          return obj;
  };

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
