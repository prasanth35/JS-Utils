/**
 * Throttle is a function that limits the rate at which a given function can be executed.
 * It ensures that the function is not called more frequently than a specified delay.
 *
 * @param {Function} func - The function to be throttled.
 * @param {number} delay - The delay (in milliseconds) between function calls.
 * @returns {Function} - A throttled function.
 */
export const throttle = (func, delay) => {
    let lastExecTime = 0;
    let timeoutId;
  
    return function () {
      const context = this;
      const args = arguments;
      const currentTime = Date.now();
  
      // Check if enough time has elapsed since the last execution
      if (currentTime - lastExecTime >= delay) {
        if (timeoutId) {
          // Clear any previously scheduled function execution
          clearTimeout(timeoutId);
        }
  
        // Execute the function and update the last execution time
        func.apply(context, args);
        lastExecTime = currentTime;
      } else {
        if (!timeoutId) {
          // Schedule the function to run after the remaining delay time
          timeoutId = setTimeout(() => {
            func.apply(context, args);
            lastExecTime = Date.now();
            timeoutId = null;
          }, delay - (currentTime - lastExecTime));
        }
      }
    };
  }
  
  
  // Example usage:
  
  function myFunction(arg1) {
    console.log(`Function called with arguments: ${arg1}`);
  }
  
  const throttledFunction = throttle(myFunction, 100);
  for (let i=0 ; i<100000000 ; i++){
  throttledFunction(i);
  }
  