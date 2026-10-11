export interface OrderConfig {
  instagramDmUrl: string;
  instagramProfileUrl: string;
  instagramHandle: string;
  whatsappNumber?: string;
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
    whatsappNumber: "+91 82951 35585",
    whatsappUrl:
      "https://wa.me/918295135585?text=Hi%20%2C%20I%20came%20across%20your%20crazy%20good%20products%20%21",
    businessEmail: "", // Extensible for future direct email enquiries
    paymentUrl: "", // Extensible for future checkout / gateway
    defaultOrderLabel: "ORDER VIA INSTAGRAM ↗",
    customOrderLabel: "TALK TO AALEKHYA ↗",
  },
};

/**
 * Returns the exact WhatsApp order/enquiry link.
 */
export function getWhatsAppUrl(): string {
  return (
    siteConfig.order.whatsappUrl ||
    "https://wa.me/918295135585?text=Hi%20%2C%20I%20came%20across%20your%20crazy%20good%20products%20%21"
  );
}

/**
 * Returns the active order link for a product or custom request.
 * Allows instant redirection routing without altering individual components.
 */
export function getOrderDestination(productName?: string): string {
  if (siteConfig.order.paymentUrl) {
    return siteConfig.order.paymentUrl;
  }
  return siteConfig.order.instagramDmUrl;
}
