import Contact from "@/app/components/Contact";
import { Metadata } from "next";
import { headers } from "next/headers";

const host = (await headers()).get("host");

export const metadata: Metadata = {
  title: "お問い合わせ | YK Room",
  description: "お問い合わせページです。",
  openGraph: {
    title: "お問い合わせ | YK Room",
    description: "お問い合わせページです。",
    url: `https://${host}/contact/`,
    siteName: "SSGブログ",
    images: [
      {
        width: "1200",
        height: "675",
        url: `https://${host}/ogp-contact.png`,
      },
    ],
    locale: "jp",
    type: "article",
  },
};

const ContactPage = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default ContactPage;
