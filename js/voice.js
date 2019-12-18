let speechRec;
let lang = navigator.language || "en-IE";   // use language set by users browser

function listen() {
    speechRec = new p5.SpeechRec(lang, gotSpeech);
    speechRec.start();
}

function gotSpeech() {
    search(speechRec.resultString);     // search() is in main.js
}

$( "#voiceSearch" ).click(function() {
    listen();
});