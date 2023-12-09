export default function orderByProps(object, props) {
  let keys = Object.keys(object).sort((a, b) => {
    if (props && props.includes(a) && props.includes(b)) {
      return compareInt(props.indexOf(a), props.indexOf(b));
    } else if (props && props.includes(a)) {
      return -1;
    } else if (props && props.includes(b)) {
      return 1;
    } else {
      return a.localeCompare(b);
    }
  });
  const result = [];
  for (const key of keys) {
    result.push({
      key,
      value: object[key]
    });
  }
  return result;
}

function compareInt(a, b) {
  if (a === b) {
    return 0;
  } else if (a < b) {
    return -1;
  } else {
    return 1;
  }
}