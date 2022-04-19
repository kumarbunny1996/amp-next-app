const getNews = () => {
  let news = [
    {
      title:
        "The Latest: Britain hits most daily virus deaths in 4 months - mySanAntonio.com",
      link: "https://www.mysanantonio.com/business/article/The-Latest-Fauci-Academy-wants-kids-wearing-16326136.php",
      published_date: "2021-07-20T16:05:59+00:00",
      description:
        "SEOUL, South Korea — South Korea has reported a new daily high for coronavirus cases,...",
      thumbnail:
        "https://s.hdnux.com/photos/01/21/06/17/21259240/3/rawImage.jpg",
    },
    {
      title: "Eid al-Adha celebrated - The Tribune India",
      link: "https://www.tribuneindia.com/news/ludhiana/eid-al-adha-celebrated-286601",
      published_date: "2021-07-22T02:05:00+00:00",
      description:
        "Ahmedgarh/Raikot, July 21 Eid al-Adha was celebrated with traditional fervour and gaiety by all sections of the Muslim community in the region. While preparations for the festival began many days ago,",
      thumbnail:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/7/Desk/2021_7$largeimg_2119694093.jpeg",
    },
    {
      title:
        "Israeli lawmaker sees possible export review of NSO spyware - Jakarta Post",
      link: "http://www.thejakartapost.com/news/2021/07/22/israeli-lawmaker-sees-possible-export-review-of-nso-spyware.html",
      published_date: "2021-07-22T07:16:03+00:00",
      description:
        "We certainly have to look anew at this whole subject of licenses granted by DECA, Ram Ben-Barak, head of the Knesset Foreign Affairs and Defence Committee, told Israels Army Radio, referring to the government-run Defence Export Controls Agency.",
      thumbnail:
        "https://img.jakpost.net/c/2021/07/21/2021_07_21_115640_1626861033._large.jpg",
    },
    {
      title:
        "The Latest: WHO: 3.4M global virus cases last week, up 12% - Bryan-College Station Eagle",
      link: "https://theeagle.com/news/national/govt-and-politics/the-latest-who-3-4m-global-virus-cases-last-week-up-12/article_7f4fa46b-6693-5b93-ad0d-ac753ac53d59.html",
      published_date: "2021-07-21T16:09:50+00:00",
      descriptio:
        "SEOUL, South Korea — South Korea is reporting 1,842 newly confirmed coronavirus cases for the previous 24 hours — setting a new pandemic single-day record for the second straight day.",
      thumbnail:
        "https://bloximages.chicago2.vip.townnews.com/theeagle.com/content/tncms/assets/v3/editorial/8/f9/8f9909c5-4355-5497-91e3-2d500cbad2eb/60ed4c8803b3c.image.jpg?crop=1763%2C992%2C0%2C92&resize=1120%2C630&order=crop%2Cresize",
    },
    {
      title:
        "The Latest: Britain hits most daily virus deaths in 4 months - mySanAntonio.com",
      link: "https://www.mysanantonio.com/business/article/The-Latest-Fauci-Academy-wants-kids-wearing-16326136.php",
      published_date: "2021-07-20T16:05:59+00:00",
      description:
        "SEOUL, South Korea — South Korea has reported a new daily high for coronavirus cases,...",
      thumbnail:
        "https://s.hdnux.com/photos/01/21/06/17/21259240/3/rawImage.jpg",
    },
    {
      title: "Eid al-Adha celebrated - The Tribune India",
      link: "https://www.tribuneindia.com/news/ludhiana/eid-al-adha-celebrated-286601",
      published_date: "2021-07-22T02:05:00+00:00",
      description:
        "Ahmedgarh/Raikot, July 21 Eid al-Adha was celebrated with traditional fervour and gaiety by all sections of the Muslim community in the region. While preparations for the festival began many days ago,",
      thumbnail:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/7/Desk/2021_7$largeimg_2119694093.jpeg",
    },
    {
      title:
        "Israeli lawmaker sees possible export review of NSO spyware - Jakarta Post",
      link: "http://www.thejakartapost.com/news/2021/07/22/israeli-lawmaker-sees-possible-export-review-of-nso-spyware.html",
      published_date: "2021-07-22T07:16:03+00:00",
      description:
        "We certainly have to look anew at this whole subject of licenses granted by DECA, Ram Ben-Barak, head of the Knesset Foreign Affairs and Defence Committee, told Israels Army Radio, referring to the government-run Defence Export Controls Agency.",
      thumbnail:
        "https://img.jakpost.net/c/2021/07/21/2021_07_21_115640_1626861033._large.jpg",
    },
    {
      title:
        "The Latest: WHO: 3.4M global virus cases last week, up 12% - Bryan-College Station Eagle",
      link: "https://theeagle.com/news/national/govt-and-politics/the-latest-who-3-4m-global-virus-cases-last-week-up-12/article_7f4fa46b-6693-5b93-ad0d-ac753ac53d59.html",
      published_date: "2021-07-21T16:09:50+00:00",
      descriptio:
        "SEOUL, South Korea — South Korea is reporting 1,842 newly confirmed coronavirus cases for the previous 24 hours — setting a new pandemic single-day record for the second straight day.",
      thumbnail:
        "https://bloximages.chicago2.vip.townnews.com/theeagle.com/content/tncms/assets/v3/editorial/8/f9/8f9909c5-4355-5497-91e3-2d500cbad2eb/60ed4c8803b3c.image.jpg?crop=1763%2C992%2C0%2C92&resize=1120%2C630&order=crop%2Cresize",
    },
    {
      title:
        "The Latest: Britain hits most daily virus deaths in 4 months - mySanAntonio.com",
      link: "https://www.mysanantonio.com/business/article/The-Latest-Fauci-Academy-wants-kids-wearing-16326136.php",
      published_date: "2021-07-20T16:05:59+00:00",
      description:
        "SEOUL, South Korea — South Korea has reported a new daily high for coronavirus cases,...",
      thumbnail:
        "https://s.hdnux.com/photos/01/21/06/17/21259240/3/rawImage.jpg",
    },
    {
      title: "Eid al-Adha celebrated - The Tribune India",
      link: "https://www.tribuneindia.com/news/ludhiana/eid-al-adha-celebrated-286601",
      published_date: "2021-07-22T02:05:00+00:00",
      description:
        "Ahmedgarh/Raikot, July 21 Eid al-Adha was celebrated with traditional fervour and gaiety by all sections of the Muslim community in the region. While preparations for the festival began many days ago,",
      thumbnail:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/7/Desk/2021_7$largeimg_2119694093.jpeg",
    },
    {
      title:
        "Israeli lawmaker sees possible export review of NSO spyware - Jakarta Post",
      link: "http://www.thejakartapost.com/news/2021/07/22/israeli-lawmaker-sees-possible-export-review-of-nso-spyware.html",
      published_date: "2021-07-22T07:16:03+00:00",
      description:
        "We certainly have to look anew at this whole subject of licenses granted by DECA, Ram Ben-Barak, head of the Knesset Foreign Affairs and Defence Committee, told Israels Army Radio, referring to the government-run Defence Export Controls Agency.",
      thumbnail:
        "https://img.jakpost.net/c/2021/07/21/2021_07_21_115640_1626861033._large.jpg",
    },
    {
      title:
        "The Latest: WHO: 3.4M global virus cases last week, up 12% - Bryan-College Station Eagle",
      link: "https://theeagle.com/news/national/govt-and-politics/the-latest-who-3-4m-global-virus-cases-last-week-up-12/article_7f4fa46b-6693-5b93-ad0d-ac753ac53d59.html",
      published_date: "2021-07-21T16:09:50+00:00",
      descriptio:
        "SEOUL, South Korea — South Korea is reporting 1,842 newly confirmed coronavirus cases for the previous 24 hours — setting a new pandemic single-day record for the second straight day.",
      thumbnail:
        "https://bloximages.chicago2.vip.townnews.com/theeagle.com/content/tncms/assets/v3/editorial/8/f9/8f9909c5-4355-5497-91e3-2d500cbad2eb/60ed4c8803b3c.image.jpg?crop=1763%2C992%2C0%2C92&resize=1120%2C630&order=crop%2Cresize",
    },
  ];
  return news;
};

export default getNews;
