// Proper code for brackets:   /\[[a-zA-Z0-9# ]*\]/g

let song            = document.querySelector("#song");
let addDummy        = document.querySelector("#add-dummy");
let dummyLyrics     = document.querySelector("#dummy-lyrics");
let removeChords    = document.querySelector("#remove-chords");


removeChords.onclick = function() {
    let begin = '\\' + (document.querySelector("#begin").value);
    let end = '\\' + document.querySelector("#end").value;
    let searchString = new RegExp(`${begin}[a-zA-Z0-9#_:&() ]*${end}`, "g");    console.log(song.value.match(searchString));
    song.value = song.value.replace(searchString, '');
}

addDummy.onclick = function() {
    song.value = dummyLyrics.innerText;
}




// This probably works too: /\[.*?\]\s*/g









// let searchString    =  /\[\w*\]?/gims;
