import Contact from "@/app/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | YK Room",
  description: "お問い合わせページです。",
  openGraph: {
    title: "お問い合わせ | YK Room",
    description: "お問い合わせページです。",
    url: ``,
    siteName: "SSGブログ",
    images: [
      {
        width: "1200",
        height: "675",
        url: ``,
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
