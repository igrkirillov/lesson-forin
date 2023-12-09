import orderByProps from '../sortUtils';

describe('sort utils module', () => {
  test ('default case 1', () => {
    const person = {
      name: "Igor",
      surname: "Kirillov",
      nickname: "laba",
      age: 37,
      gender: "male"
    }
    expect(orderByProps(person, ["name", "age"])).toEqual([
      { key: "name", value: "Igor" },
      { key: "age", value: 37 },
      { key: "gender", value: "male" },
      { key: "nickname", value: "laba" },
      { key: "surname", value: "Kirillov" }
    ]);
  });
  test ('default case 2', () => {
    const person = {
      name: "Igor",
      surname: "Kirillov",
      nickname: "laba",
      age: 37,
      gender: "male"
    }
    expect(orderByProps(person, ["age", "name"])).toEqual([
      { key: "age", value: 37 },
      { key: "name", value: "Igor" },
      { key: "gender", value: "male" },
      { key: "nickname", value: "laba" },
      { key: "surname", value: "Kirillov" }
    ]);
  });
  test ('without props', () => {
    const person = {
      name: "Igor",
      surname: "Kirillov",
      nickname: "laba",
      age: 37,
      gender: "male"
    }
    expect(orderByProps(person)).toEqual([
      { key: "age", value: 37 },
      { key: "gender", value: "male" },
      { key: "name", value: "Igor" },
      { key: "nickname", value: "laba" },
      { key: "surname", value: "Kirillov" }
    ]);
  })
})