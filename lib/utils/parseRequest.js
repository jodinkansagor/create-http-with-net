


const parseRequest = (rawRequest) => {
  const splitObject = rawRequest.split(' ');

  const pattern = /({.*})/g;
  const bodyValueString = splitObject[4].match(pattern);

  if (splitObject[0] !== 'GET') {
    return {
      method: splitObject[0],
      path: splitObject[1],
      body: bodyValueString[0]
    };
  } else {
    return {
      method: splitObject[0],
      path: splitObject[1],
    };
  }
};

module.exports = parseRequest;


