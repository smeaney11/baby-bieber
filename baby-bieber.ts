/**
 * Note: Searching for the word "I" is problematic because it is a single letter that can
 * appear as part of many other words (e.g., "I'm", "like", "in"). Accurately detecting "I" as a
 * standalone word would require handling word boundaries (for example, with regular expressions),
 * which is more complex than a simple case-insensitive substring search.
 */

/**
 * Returns true if any line in the lyrics includes the word "yeah" (case-insensitive).
 * @param lyrics An array of lyric strings.
 */
function hasYeah(lyrics: Lyrics): boolean {
  return lyrics.some((line) => line.toLowerCase().includes('yeah'));
}

/**
 * Counts the total occurrences of the substring "yeah" (case-insensitive) across all lyric lines.
 * For each line, we split on "yeah" and subtract 1 from the resulting array's length to determine
 * the number of times "yeah" appeared in that line.
 * @param lyrics An array of lyric strings.
 */
function numYeahs(lyrics: Lyrics): number {
  return lyrics
    .map((line) => line.toLowerCase().split('yeah').length - 1)
    .reduce((total, count) => total + count, 0);
}

// --- Sample Test Invocations ---
// Assume that `bieberBaby` (or your lyrics array) is defined in your baby-bieber-lyrics.ts file.
console.log(hasYeah(bieberBaby));// Prints true if any line contains "yeah"
console.log(hasYeah(bieberBaby.slice(0, 4)));// Prints false if none of the first 4 lines include "yeah"

console.log(numYeahs(bieberBaby));// Prints the total number of times "yeah" appears
console.log(numYeahs(bieberBaby.slice(10, 15))); // Prints the count for the specified slice
