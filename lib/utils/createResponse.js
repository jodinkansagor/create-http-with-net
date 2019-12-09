const createResponse = (obj) => {  
  return `
HTTP/1.1 ${obj.status}
Accept-Ranges: bytes
Content-Length: ${obj.body.length}
Content-Type: ${obj.contentType}

${obj.body}`.trim();
};

module.exports = createResponse;
