//require('jasmine-ajax');

describe("Tests for closestToZero", function() {
/*
problem: given an input array of integers:
- return exception if array is empty or null
- return the value closest to 0
- if there are two values that are equally close to 0, return the (+) (example +2 and -2)
*/
  it("should throws an exception if input is null or undefined.",function(){
    expect(function(){
      closestToZero();
    }).toThrowError("Input is null or undefined");
    expect(function(){
      closestToZero(null);
    }).toThrowError("Input is null or undefined");
  });

  it("should throws an exception if input is not an array.",function(){
    expect(function(){
      closestToZero(2);
    }).toThrowError("Input is not an Array");
    expect(function(){
      closestToZero({});
    }).toThrowError("Input is not an Array");
    expect(function(){
      closestToZero("test");
    }).toThrowError("Input is not an Array");
    expect(function(){
      closestToZero('a');
    }).toThrowError("Input is not an Array");
  });

  it("should throws an exception if array is empty",function(){
    expect(function(){
      closestToZero([]);
    }).toThrowError("Input array is empty");
  });

  it("Returns the value closest to 0 from within the array.",function(){
    expect(closestToZero([1])).toBe(1);
    expect(closestToZero([1,2,3,4,5])).toBe(1);
    expect(closestToZero([5,4,3,2,1])).toBe(1);
    expect(closestToZero([0,4,3,2,1])).toBe(0);
    expect(closestToZero([2,5,9,10])).toBe(2);
    expect(closestToZero([-1,2,3,4,5,6])).toBe(-1);
    expect(closestToZero([-2,5,6,7,8,-9])).toBe(-2);
    expect(closestToZero([-2,5,6,7,8,-9,0])).toBe(0);
    expect(closestToZero([-2,5,5,6,7,8,-9])).toBe(-2);
    expect(closestToZero([-2,0,5,6,7,8,-9,0])).toBe(0);
  });

  it("should returns the positive one if there are 2 values that are as close to 0.",function(){
    expect(closestToZero([-1,1])).toBe(1);
    expect(closestToZero([-5,-4,-2,2,6,8])).toBe(2);
    expect(closestToZero([-2,5,-2,6,7,8,-9])).toBe(-2);
  });

})

describe("Tests for Checkout", function() {
//https://volaresystems.com/blog/post/2014/12/10/Mocking-calls-with-Jasmine

  it("should return total when called", function(){
    var myCheckout = new Checkout();
    spyOn(myCheckout,"toBeReplaced").and.callFake(function(){
      //i can do whatever i want here
      return "This is the fake function being called";
    });

    spyOn(myCheckout,"divergePath").and.returnValue("the orange king");

    // spyOn(myCheckout,"toBeReplaced").and.callFake(function(){
    //   return "This is the fake function being called";
    // });

    var fakeValue = myCheckout.toBeReplaced();

    expect(fakeValue).toEqual("This is the fake function being called");
    expect(myCheckout.pathExample()).toEqual("the orange king");

  });


})