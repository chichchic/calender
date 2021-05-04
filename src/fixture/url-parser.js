const urlParser = function () {
  const { hash } = window.location;
  return hash
    .split(/[?|&]/)
    .slice(1)
    .reduce((acc, cur) => {
      const param = cur.split("=");
      acc[param[0]] = param[1];
      return acc;
    }, {});
};
export { urlParser };
