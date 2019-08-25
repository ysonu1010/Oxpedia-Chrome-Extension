function makeRequest(word) {

  link = "https://od-api.oxforddictionaries.com:443/api/v1/entries/en/"+word;
  var rqst = new XMLHttpRequest();
  rqst.onreadystatechange = iChanged;
  rqst.open('GET',link,true);
  rqst.setRequestHeader("Accept", "application/json");
  rqst.setRequestHeader("app_id", "92b2de92");
  rqst.setRequestHeader("app_key", "d9b54e314f4ce7e1feeb22f4c5d08d52");
  rqst.send();

  function iChanged()
  {
    if(rqst.readyState == 4)
    {
        if(rqst.status == 200)
        {
          var responseBody = JSON.parse(rqst.responseText);
          console.log(responseBody);
          alert(responseBody.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]);

          chrome.extension.onConnect.addListener(function(port) {
              port.onMessage.addListener(function(msg) {
              port.postMessage("<b style='color:#191970;'>" + word + 
                        "</b> :<br> " + 
                    responseBody.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]);
            });
          });

        }
        else
        {
          var requrl = "https://od-api.oxforddictionaries.com:443/api/v1/inflections/en/" + word;
          var req = new XMLHttpRequest();
          req.onreadystatechange = ohhYEAH;
          req.open('GET',requrl,true);
          req.setRequestHeader("Accept", "application/json");
          req.setRequestHeader("app_id", "92b2de92");
          req.setRequestHeader("app_key", "d9b54e314f4ce7e1feeb22f4c5d08d52");
          req.send();

          function ohhYEAH()
          {
            if(req.readyState == 4)
            {
                if(req.status == 200)
                {
                  var responseBody = JSON.parse(req.responseText);
                  console.log(responseBody);
                  var key = responseBody.results[0].lexicalEntries[0].inflectionOf[0].text;
                  link = "https://od-api.oxforddictionaries.com:443/api/v1/entries/en/"+key;
                  var rst = new XMLHttpRequest();
                  rst.onreadystatechange = iChangeIN;
                  rst.open('GET',link,true);
                  rst.setRequestHeader("Accept", "application/json");
                  rst.setRequestHeader("app_id", "92b2de92");
                  rst.setRequestHeader("app_key", "d9b54e314f4ce7e1feeb22f4c5d08d52");
                  rst.send();

                  function iChangeIN()
                  {
                    if(rst.readyState == 4)
                    {
                      if(rst.status == 200)
                      {
                        var responseBody = JSON.parse(rst.responseText);
                        console.log(responseBody);
                        alert(responseBody.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]);

                        chrome.extension.onConnect.addListener(function(port) {
                            port.onMessage.addListener(function(msg) {
                            port.postMessage("<b style='color:#191970;'>" + key + "</b> : <br>" + 
                              responseBody.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]);
                          });
                        });

                      }
                      else{
                        alert("Word  Not  found!");
                      }
                    }
                  }
                }
                else
                {
                  alert("Word Not Found!");
                }
            }
          }
        }
    }
  }
}

chrome.runtime.onMessage.addListener(function(word,message,sendResponse){
makeRequest(word);

});
