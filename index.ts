interface SomeInterface {
  id: string;
  value: unknown;
}

const variable1 = {
  id: '1',
  value: 2,
};
//variable1.value = 'some_string'
/*
  1. What is the type of variable1?
  2. What will happen after we uncomment line 11? 
*/

const variable2: SomeInterface = {
  id: '1',
  value: 2,
};
// variable2.value = 'some_string'
/*
  3. What is the type of variable2?
  4. What will happen after we uncomment line 22? 
*/

const variable3: SomeInterface = {
  id: '1',
  // value: 'some_string',
};
/*
  5. What will happen after we uncomment line 31?
*/

const variable4 = {
  id: '1',
  value: 2,
} as SomeInterface;
//variable4.value = 'some_string'
/*
  6. What is the type of variable4?
  7. What will happen after we uncomment line 42? 
*/

const variable5 = {
  id: '1',
  // value: 'some_string',
} as SomeInterface;
/*
  8. What will happen after we uncomment line 51? 
*/

// const variable6 = {
//   id: '1',
//   value: 2,
// } satisfies SomeInterface;
// variable6.value = 'some_string'
/*
  9. What is the type of variable6?
  10. What will happen after we uncomment line 62? 
*/
