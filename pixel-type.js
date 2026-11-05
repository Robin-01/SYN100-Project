// Dot-matrix glyphs adapted from the supplied Westward Trail reference.
// Keep the original text available to assistive technology.
(() => {
const G={},U={};
`A 14 17 17 31 17 17 17
B 30 17 17 30 17 17 30
C 14 17 16 16 16 17 14
D 30 17 17 17 17 17 30
E 31 16 16 30 16 16 31
F 31 16 16 30 16 16 16
G 14 17 16 23 17 17 15
H 17 17 17 31 17 17 17
I 14 4 4 4 4 4 14
J 7 2 2 2 2 18 12
K 17 18 20 24 20 18 17
L 16 16 16 16 16 16 31
M 17 27 21 21 17 17 17
N 17 25 21 19 17 17 17
O 14 17 17 17 17 17 14
P 30 17 17 30 16 16 16
Q 14 17 17 17 21 18 13
R 30 17 17 30 20 18 17
S 15 16 16 14 1 1 30
T 31 4 4 4 4 4 4
U 17 17 17 17 17 17 14
V 17 17 17 17 17 10 4
W 17 17 17 21 21 27 17
X 17 17 10 4 10 17 17
Y 17 17 10 4 4 4 4
Z 31 1 2 4 8 16 31
0 14 17 19 21 25 17 14
1 4 12 4 4 4 4 14
2 14 17 1 2 4 8 31
3 31 2 4 2 1 17 14
4 2 6 10 18 31 2 2
5 31 16 30 1 1 17 14
6 6 8 16 30 17 17 14
7 31 1 2 4 8 8 8
8 14 17 17 14 17 17 14
9 14 17 17 15 1 2 12
. 0 0 0 0 0 12 12
, 0 0 0 0 12 4 8
: 0 12 12 0 12 12 0
; 0 12 12 0 12 4 8
! 4 4 4 4 4 0 4
? 14 17 1 2 4 0 4
' 12 4 8 0 0 0 0
" 10 10 10 0 0 0 0
- 0 0 0 31 0 0 0
( 2 4 8 8 8 4 2
) 8 4 2 2 2 4 8
[ 14 8 8 8 8 8 14
] 14 2 2 2 2 2 14
= 0 0 31 0 31 0 0
+ 0 4 4 31 4 4 0
/ 1 1 2 4 8 16 16
> 8 4 2 1 2 4 8
< 2 4 8 16 8 4 2
% 24 25 2 4 8 19 3
* 0 4 21 14 21 4 0
_ 0 0 0 0 0 0 31
@ 14 17 1 13 21 21 14
· 0 0 0 4 0 0 0`.split("\n").forEach(l=>{G[l[0]]=l.slice(2).split(" ").map(Number)});
G["’"]=G["'"];G["“"]=G["”"]=G['"'];
function url(c){if(c in U)return U[c];const r=G[c];if(!r)return U[c]="";let s="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 6 8'>";r.forEach((v,y)=>{for(let x=0;x<5;x++)if((v>>(4-x))&1)s+="<rect x='"+x+"' y='"+y+"' width='.86' height='.86'/>"});return U[c]='url("data:image/svg+xml,'+encodeURIComponent(s+"</svg>")+'")'}

const aliases = { '→': '>', '←': '<', '↗': '>', '↻': '@', '✦': '*', '◆': '*', '♥': '*', '♪': '*', '–': '-', '—': '-' };
function paint(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.nodeValue.trim() && !node.parentElement.closest('.bitmap, script, style, svg')) nodes.push(node);
  }
  for (const node of nodes) {
    const wrapper = document.createElement('span');
    wrapper.className = 'bitmap';
    const readable = document.createElement('span');
    readable.className = 'visually-hidden';
    readable.textContent = node.nodeValue;
    const visual = document.createElement('span');
    visual.setAttribute('aria-hidden', 'true');
    for (const token of node.nodeValue.split(/(\s+)/)) {
      if (!token) continue;
      if (/^\s+$/.test(token)) { visual.append(document.createTextNode(' ')); continue; }
      const word = document.createElement('span');
      word.className = 'pixel-word';
      for (const character of token.toUpperCase()) {
        const glyph = document.createElement('span');
        glyph.className = 'pixel-glyph';
        const mask = url(aliases[character] || character);
        if (mask) { glyph.style.maskImage = mask; glyph.style.webkitMaskImage = mask; }
        else { glyph.classList.add('pixel-fallback'); glyph.textContent = character; }
        word.append(glyph);
      }
      visual.append(word);
    }
    wrapper.append(readable, visual);
    node.replaceWith(wrapper);
  }
}
const root = document.querySelector('.game-shell');
const observer = new MutationObserver(() => {
  observer.disconnect();
  paint(root);
  observer.observe(root, { childList: true, subtree: true });
});
paint(root);
observer.observe(root, { childList: true, subtree: true });
})();
