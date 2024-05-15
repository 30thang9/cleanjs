// Sử dụng async/await để tránh callback hell và làm code dễ đọc

getData(function(a) {
  parseData(a, function(b) {
    processData(b, function(c) {
      displayData(c, function(d) {
        console.log('Done');
      });
    });
  });
});



// code
async function getDataAsync() {
  return new Promise((resolve) => {
    getData(function(a) {
      resolve(a);
    });
  });
}

async function parseDataAsync(a) {
  return new Promise((resolve) => {
    parseData(a, function(b) {
      resolve(b);
    });
  });
}

async function processDataAsync(b) {
  return new Promise((resolve) => {
    processData(b, function(c) {
      resolve(c);
    });
  });
}

async function displayDataAsync(c) {
  return new Promise((resolve) => {
    displayData(c, function(d) {
      resolve(d);
    });
  });
}

async function myAsyncFunction() {
  try {
    const a = await getDataAsync();
    const b = await parseDataAsync(a);
    const c = await processDataAsync(b);
    await displayDataAsync(c);
    console.log('Done');
  } catch (error) {
    console.error(error);
  }
}

myAsyncFunction();