// let begin           = document.querySelector("#begin").value;
// let end             = document.querySelector("#end").value;
// let searchString    =  "/\\" + begin + "\\w*\\" + end + "?/gims";




let song            = document.querySelector("#song");
let addDummy        = document.querySelector("#add-dummy");
let dummyLyrics     = document.querySelector("#dummy-lyrics");
let removeChords    = document.querySelector("#remove-chords");


removeChords.onclick = function() {
    song.value = song.value.replace(/\[\w*\]?/gims, '');
    console.log(song.value);
}

addDummy.onclick = function() {
    song.value = dummyLyrics.innerText;
}














// let searchString    =  /\[\w*\]?/gims;
