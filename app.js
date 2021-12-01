
const logger = (a, b, ...params) => {
  console.log(a, b);
  console.log(params);
}

logger(1, 2, 3, 4);

const myObject = ({ name, price, description, ...parmas1 }) => {
  console.log(name);
  console.log(price);
  console.log(description);
  console.log(parmas1);
}
myObject({
  name: 'Javascript',
  price: 300,
  description: `description content`,
  ID: 123,
  Room: `101H3`,
});

