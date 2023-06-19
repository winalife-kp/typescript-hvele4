interface SomeInterface {
  id: string;
  value: unknown;
}

const variable1 = {
  id: '1',
  value: 2, // value: 'some_string', -> 1. what will happen?
}

//variable1.value = 'some_string'    -> 2. what will happen?


const variable2: SomeInterface = {
  id: '1',
  value: 2, // value: 'some_string', -> 3. what will happen?
};

//variable2.value = 'some_string'    -> 4. what will happen?

const variable3 = {
  id: '1',
  value: 2, // value: 'some_string', -> 5. what will happen?
} as SomeInterface;

//variable3.value = 'some_string'    -> 6. what will happen?


const variable4 = {
  id: '1',
  value: 2, // value: 'some_string', -> 7. what will happen?
} satisfies SomeInterface;

//variable4.value = 'some_string'    -> 8. what will happen?
