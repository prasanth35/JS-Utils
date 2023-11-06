/**
 * Debounce is a function that ensures a given function is only executed
 * after a specified delay has passed since the last time it was called.
 *
 * @param {Function} func - The function to be debounced.
 * @param {number} delay - The delay (in milliseconds) before the function is executed.
 * @returns {Function} - A debounced function.
 */
export const debounce = (func, delay) => {
    let timeoutId;
  
    /**
     * The debounced function, which delays the execution of the original function.
     *
     * @inner
     * @param {arguments} arguments - The arguments passed to the debounced function.
     */
    return function () {
      const context = this;
      const args = arguments;
  
      // Clear any previously scheduled function execution
      clearTimeout(timeoutId);
  
      // Schedule the function to run after the specified delay
      timeoutId = setTimeout(() => {
        // Call the original function with the captured context and arguments
        func.apply(context, args);
      }, delay);
    };
  }
  