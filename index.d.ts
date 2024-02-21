declare module 'classease' {
  // function classEase(...args: any[]): string;
  // export = classEase;

  // Define the function signature for classEase
  function classEase(
    ...args: (
      | string
      | object
      | boolean
      | (string | object)[]
      | null
      | undefined
      | number
    )[]
  ): string;

  // Export the function as default
  export default classEase;

  // Export the function as named export
  export { classEase };
}
