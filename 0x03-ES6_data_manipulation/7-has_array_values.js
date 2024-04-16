export default function (set, array) {
  for (const idx of array) {
    if (!set.has(idx)) {
      return false;
    }
  }
  return true;
}
