function lyricify(s) {
    'use strict';
    //Capitalize the first letter of every line
    s = s.split("\n").map(function (line) {
        if (line[0] !== undefined) {
            line = line[0].toUpperCase() + line.substr(1);
        }
        return line.concat("\n");
    }).join("\n");
    //Capitalize "I", "I'm", "I'll"
    s = s.split(" i ").join(" I ");
    s = s.split(" i.").join(" I.");
    s = s.split(" i'm ").join(" I'm ");
    s = s.split(" im ").join(" I'm ");
    s = s.split(" i'll ").join(" I'll ");
    //Replace directional apostrophes and quotes
    s = s.split(" “").join(" \"");
    s = s.split("” ").join("\" ");
    s = s.split(" ‘").join(" \'");
    s = s.split("’ ").join("\' ");
    //TODO parse "xN" multiplicative annotations
    //Remove all remaining annotations in brackets
    s = s.replace(/\s*\[.*?]\s*/g, '\n');
    return s;
}

function parse() {
    'use strict';
    document.getElementById('textarea1').value = lyricify(document.getElementById('textarea1').value);
    $('#textarea1').trigger('autoresize');
    return false;
}