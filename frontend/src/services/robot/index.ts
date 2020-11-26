import request from 'umi-request';

export async function chatWithRobot(msg:string) {
  request('/tuling/openapi/api/v2', {
    method: 'post',
    data: {
      "reqType":0,
      "perception": {
        "inputText": {
          "text": msg
        }
      },
      "userInfo": {
        "apiKey": "c1fd05473b5b4dea86a315e041e9b732",
        "userId": "599310"
      }
    },
  })
    .then(function(response) {
      console.log(response);
      return response;
    })
    .catch(function(error) {
      console.log(error);
    });
};
