


const parseRequest = (rawRequest) => {
  const splitObject = rawRequest.split(' ');

  const pattern = /({.*})/g;
  

  if(rawRequest.match(pattern)) {
    return {
      method: splitObject[0],
      path: splitObject[1],
      body: rawRequest.match(pattern)[0]
    };
  } else {
    return {
      method: splitObject[0],
      path: splitObject[1],
    };
  }
};

module.exports = parseRequest;


