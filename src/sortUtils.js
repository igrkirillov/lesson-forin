export default function orderByProps(object, props) {
  const keys = Object.keys(object).sort((a, b) => {
    if (props && props.includes(a) && props.includes(b)) {
      const aIndex = props.indexOf(a);
      const bIndex = props.indexOf(b);
      return aIndex < bIndex ? -1 : 1;
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