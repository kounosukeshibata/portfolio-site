import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YK Room",
  description: "個人開発で作成したブログサイトです。",
  openGraph: {
    title: "YK Room",
    description: "個人開発で作成したブログサイトです。",
    url: "<http://localhost:3000/>",
    siteName: "SSGブログ",
    images: [
      {
        width: "1200",
        height: "675",
        url: "<http://localhost:3000/>/ogp-home.png",
      },
    ],
    locale: "jp",
    type: "website",
  },
};

const Home = () => {
  return <div className="text-[50px]">YK Room</div>;
};

export default Home;
