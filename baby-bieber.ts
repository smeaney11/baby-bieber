function hasYeah(lyrics: string[]): boolean {
  return lyrics.some((line) => line.toLowerCase().includes('yeah'));
}

function numYeahs(lyrics: string[]): number {
  return lyrics
    .map((line) => line.toLowerCase().split('yeah').length - 1)
    .reduce((total, count) => total + count, 0);
}

const hasDiv = document.getElementById('result-has');
const numDiv = document.getElementById('result-num');

const result1 = hasYeah(bieberBaby);
const result2 = hasYeah(bieberBaby.slice(0, 4));
const result3 = numYeahs(bieberBaby);
const result4 = numYeahs(bieberBaby.slice(10, 15));

if (hasDiv) {
  hasDiv.innerHTML = `
    <p>hasYeah(full): ${result1}</p>
    <p>hasYeah(slice(0, 4)): ${result2}</p>
  `;
}

if (numDiv) {
  numDiv.innerHTML = `
    <p>numYeahs(full): ${result3}</p>
    <p>numYeahs(slice(10, 15)): ${result4}</p>
  `;
}
