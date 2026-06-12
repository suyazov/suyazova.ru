export function webpUrl(src: string | undefined): string | undefined {
  if (!src) return src;
  return src.replace(/\.(jpe?g|png)$/i, '.webp');
}
