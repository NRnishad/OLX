import React, { createContext, useState } from "react";
export const RecommendationsContext = createContext();
export const RecommendationsProvider = ({ children }) => {
  const [recommendations, setRecommendations] = useState([
    {
      id: 1,
      price: "₹2,95,000",
      title: "Hyundai EON D Lite - 2018, Petrol",
      location: "AS-CHENIKAL, BELGAUM",
      daysAgo: "6 days ago",
      image:
        "https://apollo.olx.in/v1/files/2fknrywrxtpf3-IN/image;s=300x600;q=60",
    },
    {
      id: 2,
      price: "₹4,50,000",
      title: "Tata Xenon Yodha Double Cabin Crew",
      location: "RUDRAPUR, CHHATISGARH",
      daysAgo: "Aug 17",
      image:
        "https://apollo.olx.in/v1/files/3qtqgc1mtq4y-IN/image;s=300x600;q=60",
    },
    {
      id: 3,
      price: "₹1,000",
      title: "We have new latest collection smartwatches",
      location: "SAINIKPUR, MAHARASHTRA",
      daysAgo: "2 days ago",
      image:
        "https://apollo.olx.in/v1/files/tkqicighgzvn-IN/image;s=300x600;q=60",
    },
    {
      id: 4,
      price: "₹19,000",
      title: "Available iPhone 13 in 256gb",
      location: "SAINIKPUR, MAHARASHTRA",
      daysAgo: "2 days ago",
      image:
        "https://apollo.olx.in/v1/files/0vh0lh7wlvev2-IN/image;s=300x600;q=60",
    },
    {
      id: 5,
      price: "₹5,75,000",
      title: "Maruti Suzuki Baleno 2018 July Model",
      location: "SAINIKPUR, MAHARASHTRA",
      daysAgo: "Oct 30",
      image:
        "https://apollo.olx.in/v1/files/vcujvrydtjmk-IN/image;s=300x600;q=60",
    },
    {
      id: 6,
      price: "₹499",
      title: "Smart Watch For Men's Small Prices",
      location: "SAINIKPUR, MAHARASHTRA",
      daysAgo: "3 days ago",
      image:
        "https://apollo.olx.in/v1/files/tc6sd6zfy1rh2-IN/image;s=300x600;q=60",
    },
    {
      id: 7,
      price: "₹30,900",
      title: "Canon EOS 9000D 55-250mm lens",
      location: "SAINIKPUR, MAHARASHTRA",
      daysAgo: "Yesterday",
      image:
        "https://apollo.olx.in/v1/files/vu345qdh8aj31-IN/image;s=300x600;q=60",
    },
    {
      id: 8,
      price: "₹2,000",
      title: "We have new latest collection smartwatches",
      location: "SAINIKPUR, MAHARASHTRA",
      daysAgo: "2 days ago",
      image:
        "https://apollo.olx.in/v1/files/kg1gmr0vsitu-IN/image;s=300x600;q=60",
    },
    {
      id: 9,
      price: "₹ 7,60,000",
      title: "honda city (2017)",
      location: "SAINIKPUR, MAHARASHTRA",
      daysAgo: "2 days ago",
      image:
        "https://apollo.olx.in/v1/files/2u41w0tujewd2-IN/image;s=780x0;q=60",
    },
    {
      id: 10,
      price: "₹3,05,000",
      title: "maruti suzuki swift dzire (2014)",
      location: "SAINIKPUR, MAHARASHTRA",
      daysAgo: "Oct 30",
      image:
        "https://apollo.olx.in/v1/files/lbmc18dlr1052-IN/image;s=300x600;q=60",
    },
  ]);

  return (
    <RecommendationsContext.Provider
      value={{ recommendations, setRecommendations }}
    >
      {children}
    </RecommendationsContext.Provider>
  );
};
