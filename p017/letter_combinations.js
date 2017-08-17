var p1 = new Promise((resolve, reject) => { 
    setTimeout(resolve, 1000, 1); 
  }); 
  var p2 = new Promise((resolve, reject) => { 
    setTimeout(resolve, 2000, 'two'); 
  });
  var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 3);
  });
  var p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'four');
  });
  /*
  var p5 = new Promise((resolve, reject) => {
    reject('reject');
  });
  */
  Promise.all([p1, p2, p3, p4]).then(values => { 
    console.log(values);
  }, reason => {
    console.log(reason)
  });
