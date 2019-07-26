# Glossary

Double click on any text on the current webpage, its meaning will be displayed in a popup. 
History will be maintained in the extension, popup.html for reference.

Setting up the extension:

    Get all the files in a single folder, then : 
        1. Go to chrome://extensions on your browser. 
        2. Turn on the developer mode. 
        3. Click on Load Unpacked and select the file containing all your files. 
        4. Enable the extension and you are all set to go!

What goes behind the black box?
    The extension uses two Oxford Dictionary APIs, Lemmatron and Dictionary Entries. It identifies the verb forms and gives meaning of the     root. It identifies if the word is being selected, passes the information to a background script which looks for the meaning in             database. If found, it is then added on to the search list by communicating to the extension window.

For any bug identified or improvements, mail at y.sonu1010@gmail.com
