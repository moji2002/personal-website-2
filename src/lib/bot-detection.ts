export function isCrawler(userAgent: string | null): boolean {
  if (!userAgent) return false;
  return /Googlebot|Google-InspectionTool|AdsBot-Google|Mediapartners-Google|Googlebot-Image|Googlebot-News|Googlebot-Video|Chrome-Lighthouse|Lighthouse/i.test(
    userAgent,
  );
}
