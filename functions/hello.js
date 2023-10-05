// domain/.netlify/functions/hello --> load the body. NIce for an API
//

const items = [
  { id: 1, name: "JC" },
  { id: 2, name: "Martin" },
  { id: 3, name: "Elizabeth" },
];
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
