# Oxpedia
```
Double click on any text on the current webpage, its meaning will be displayed in a popup. 
History will be maintained in the extension, popup.html for reference.
```
## Setting up the extension:
```
    Get all the files in a single folder, then : 
        1. Go to chrome://extensions on your browser. 
        2. Turn on the developer mode. 
        3. Click on Load Unpacked and select the file containing all your files. 
        4. Enable the extension and you are all set to go!
```
## What goes behind the black box?
```The extension uses two Oxford Dictionary APIs, Lemmatron and Dictionary Entries. What the Application does?
When you select a word whose meaning you want to find out on the loaded page the word encoded as an url link is sent to api via XMLHttpRequest along with the headers containing api_id and api_key. The received response is stored as a JSON object and from  this object synonym of that word is extracted and prompted and stored in user history.
```
### For any bug identified or improvements, mail at y.sonu1010@gmail.com
