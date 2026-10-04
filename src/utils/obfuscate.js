/**
 * obfuscate.js
 * Obfuscates sensitive answer passwords in memory & localStorage so plain text strings
 * cannot be read via DevTools, LocalStorage inspection, or DOM inspection.
 */

export function obfuscateString(str) {
  if (!str) return '';
  const trimmed = str.trim().toUpperCase();
  // Reverse + Base64 encode
  const reversed = trimmed.split('').reverse().join('');
  return btoa(encodeURIComponent(reversed));
}

export function deobfuscateString(encoded) {
  if (!encoded) return '';
  try {
    const reversed = decodeURIComponent(atob(encoded));
    return reversed.split('').reverse().join('');
  } catch (_) {
    return encoded;
  }
}
