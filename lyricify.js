function lyricify(s) {
    'use strict';
    //Capitalize the first letter of every line
    s = s.split("\n").map(function (line) {
        if (line[0] !== undefined) {
            line = line[0].toUpperCase() + line.substr(1);
        }
        return line;
    }).join("\n");
    //Capitalize "I", "I'm", "I'll"
    s = s.split(" i ").join(" I ");
    s = s.split(" i'm ").join(" I'm ");
    s = s.split(" im ").join(" I'm ");
    s = s.split(" i'll ").join(" I'll ");
    //TODO replace directional apostrophes and quotes
    //TODO parse "xN" multiplicative annotations
    //Remove all remaining annotations in brackets
    s = s.replace(/ *\[[^]*\] */g, "");
    //Clean up duplicate blank lines
    s = s.replace(/\n\n\n/g, "\n\n");
    return s;
}

function parse() {
    'use strict';
    document.getElementById('textarea1').value = lyricify(document.getElementById('textarea1').value);
    $('#textarea1').trigger('autoresize');
    return false;
}
