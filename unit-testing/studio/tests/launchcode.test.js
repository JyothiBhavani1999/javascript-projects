// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("oraganization key should have value as nonprofit",function(){
  expect(launchcode.organization).toBe("nonprofit");
  });

  test("executiveDirector key should have value Jeff",function(){
  expect(launchcode.executiveDirector).toBe("Jeff");
  });
  
  test("percentageCoolEmployees key should have value 100",function(){
  expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("programsOffered array has right values and size",function(){
  expect(launchcode.programsOffered[0]).toBe("Web Development");
  expect(launchcode.programsOffered[1]).toBe("Data Analysis");
  expect(launchcode.programsOffered[2]).toBe("Liftoff");
  let arrLength = launchcode.programsOffered.length;
  expect(arrLength).toBe(3);
  });

  test("When passed a number that is ONLY divisible by 2, launchOutput() returns Launch!",function(){
  expect(launchcode.launchOutput(2)).toBe('Launch!');
  });

  test("When passed a number that is ONLY divisible by 3, launchOutput() returns Code!",function(){
  expect(launchcode.launchOutput(3)).toBe('Code!');
 });

  test("When passed a number that is ONLY divisible by 5, launchOutput() returns Rocks!",function(){
  expect(launchcode.launchOutput(5)).toBe('Rocks!');
  });

 test("When passed a number that is divisible by 2 AND 3, return LaunchCode!",function(){
  expect(launchcode.launchOutput(12)).toBe('LaunchCode!');
  });

  test("When passed a number that is divisible by 3 AND 5, return Code Rocks!",function(){
  expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
  });

  test("When passed a number that is divisible by 2 AND 5, return Launch Rocks!",function(){
  expect(launchcode.launchOutput(10)).toBe('Launch Rocks! (CRASH!!!!)');
  });

  test("When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'",function(){
  expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
  });

  test("When passed a number that is NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.'",function(){
  expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
  });



  
 
  
});