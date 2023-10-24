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
  2. What will happen after we uncomment line 10? 
*/

const variable2: SomeInterface = {
  id: '1',
  value: 2,
};
// variable2.value = 'some_string'
/*
  3. What is the type of variable2?
  4. What will happen after we uncomment line 20? 
*/

const variable3: SomeInterface = {
  id: '1',
  // value: 'some_string',
};
/*
  5. What will happen after we uncomment line 28?
*/

const variable4 = {
  id: '1',
  value: 2,
} as SomeInterface;
//variable4.value = 'some_string'
/*
  6. What is the type of variable4?
  7. What will happen after we uncomment line 38? 
*/

// const variable5 = {
//   id: '1',
//   value: 2,
// } satisfies SomeInterface;
// variable5.value = 'some_string'
/*
  8. What is the type of variable5?
  9. What will happen after we uncomment line 48? 
*/
