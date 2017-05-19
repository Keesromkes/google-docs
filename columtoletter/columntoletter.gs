function ImportJSONWithToken(url, query, parseOptions, token) {
   var fetchOptions = {
      "headers" : {
        "Authorization" : token
      },
      muteHttpExceptions: true
   };

  return ImportJSONAdvanced(url, fetchOptions, query, parseOptions, includeXPath_, defaultTransform_);
}

function ImportJSONWithBearerToken(url, query, parseOptions, token) {
   var fetchOptions = {
      "headers" : {
        "Authorization" : "Bearer " + token
      },
      muteHttpExceptions: true
   };

  return ImportJSONAdvanced(url, fetchOptions, query, parseOptions, includeXPath_, defaultTransform_);
}
