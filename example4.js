// Sử dụng function để đóng gói logic và giảm lặp code

console.log('Starting process...');
if (process.env.NODE_ENV === 'development') {
  console.log('development mode');
  // Development-specific logic
}
if (process.env.NODE_ENV === 'production') {
  console.log('production mode');
  // Production-specific logic
}

console.log('Process started.');



function startProcess() {
  console.log('Starting process...');
  
  if (process.env.NODE_ENV === 'development') {
    console.log('development mode');
    developmentLogic();
  }
  
  if (process.env.NODE_ENV === 'production') {
    console.log('production mode');
    productionLogic();
  }
  
  console.log('Process started.');
}

function developmentLogic() {
}

function productionLogic() {
}

startProcess();