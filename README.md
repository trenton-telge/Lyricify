# Lyricify
Lyrics formatting javascript library and standalone page for SongMeanings.com

### Lyrics are formatted using the following rules:
* The first letter of each line is capitalized
* "I-" contractions are properly capitalized
* Replaces unicode directional apostrophes and quotes
* Removes bracketed annotations
* Only one spacer line allowed between verses

### Usage
1. Include the following line in your head tag

   ```html
   <script type="text/javascript" src="https://darkforce100.github.io/Lyricify/lyricify.js"></script>
   ```

2. Lyricify text in Javascript using
   ```javascript
   lyricify({lyrics});
   ```