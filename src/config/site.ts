export interface OrderConfig {
  instagramDmUrl: string;
  instagramProfileUrl: string;
  instagramHandle: string;
  whatsappUrl?: string;
  businessEmail?: string;
  paymentUrl?: string;
  defaultOrderLabel: string;
  customOrderLabel: string;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  subline: string;
  bio: string;
  order: OrderConfig;
}

export const siteConfig: SiteConfig = {
  brandName: "AALEKHYA",
  tagline: "Music you can wear.",
  subline:
    "Hand-painted ties inspired by music, emotion, visual art and storytelling.",
  bio: "Every tie tells a different story. Each piece is an original hand-painted artwork turning songs, psyche, and sonic culture into wearable art.",
  order: {
    instagramDmUrl:
      "https://www.instagram.com/direct/t/18130565791552515/?hl=en",
    instagramProfileUrl: "https://www.instagram.com/aalekhy_aa/?hl=en",
    instagramHandle: "@aalekhy_aa",
    whatsappUrl: "", // Extensible for future WhatsApp Business integration
    businessEmail: "", // Extensible for future direct email enquiries
    paymentUrl: "", // Extensible for future checkout / gateway
    defaultOrderLabel: "ORDER VIA INSTAGRAM ↗",
    customOrderLabel: "TALK TO AALEKHYA ↗",
  },
};

/**
 * Returns the active order link for a product or custom request.
 * Allows instant redirection routing without altering individual components.
 */
export function getOrderDestination(productName?: string): string {
  if (siteConfig.order.paymentUrl) {
    return siteConfig.order.paymentUrl;
  }
  if (siteConfig.order.whatsappUrl && !siteConfig.order.instagramDmUrl) {
    const encoded = productName
      ? encodeURIComponent(`Hi Aalekhya! I would like to order the "${productName}" hand-painted tie.`)
      : encodeURIComponent(`Hi Aalekhya! I would like to enquire about a custom hand-painted tie.`);
    return `${siteConfig.order.whatsappUrl}?text=${encoded}`;
  }
  return siteConfig.order.instagramDmUrl;
}
