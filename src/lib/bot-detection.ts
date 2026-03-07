export function isCrawler(userAgent: string | null): boolean {
  if (!userAgent) return false;
  return /Googlebot|Google-InspectionTool|AdsBot-Google|Mediapartners-Google|Googlebot-Image|Googlebot-News|Googlebot-Video/i.test(
    userAgent,
  );
}
