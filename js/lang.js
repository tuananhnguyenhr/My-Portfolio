const translations = {
    en: {
        title: "Portfolio",

        userName: "Stephen Jhon",
        userNick: "(Scott)",
        userPosition: "UI/UX & Web Developer",

        navHome: "Home",
        navAbout: "About",
        navEducation: "Education",
        navPortfolio: "Portfolio",
        navContact: "Contact",

        homeHello: "Hello!",
        homeTitle: "I'm Stephen Jhon Scott",
        homeDesc: "A professional UI/UX & full-stack web developer...",
        homeBtn: "About me",

        aboutHeading: "About Me",
        aboutNameLabel: "Name:",
        aboutName: "Nguyen Tuan Anh (Alex Nguyen)",
        aboutAgeLabel: "Age:",
        aboutAge: "3x",
        aboutQualiLabel: "Qualification:",
        aboutQuali: "HRBP / HRM / Full Stack",
        aboutPostLabel: "Position:",
        aboutPost: "Full Stack Web Developer",
        aboutLangLabel: "Language:",
        aboutLang: "Vietnamese, English",
        aboutFollow: "Follow",

        expYears: "6+",
        expText: "Years of Experience",
        expProject: "80+",
        expProjectText: "Projects Completed",
        expClients: "50+",
        expClientsText: "Happy Clients",
        expAwards: "10+",
        expAwardsText: "Awards",

        eduHeading: "My Education",
        edu1Year: "2016",
        edu1Title: "(O) Level",
        edu1Desc: "Completed science field...",

        // ...
        // Thêm tiếp các mục khác
        // ...

        contactHeading: "Contact Me",
        contactTitle: "Contact Info",
        contactEmail: "service@freewebsitecode.com",
        contactPhone1: "+880-12345678901",
        contactPhone2: "+880-12345678902",
        contactAddress: "California, USA - 60598",
        contactBtn: "Send",
    },

    vi: {
        title: "Hồ sơ cá nhân",

        userName: "Nguyễn Tuấn Anh",
        userNick: "(Alex Nguyen)",
        userPosition: "Full Stack Developer",

        navHome: "Trang chủ",
        navAbout: "Giới thiệu",
        navEducation: "Học vấn",
        navPortfolio: "Dự án",
        navContact: "Liên hệ",

        homeHello: "Xin chào!",
        homeTitle: "Tôi là Alex Nguyen",
        homeDesc: "Lập trình viên Full Stack & UI/UX...",
        homeBtn: "Xem thêm",

        // …
        // Các label tiếng Việt
        // …
    }
};

function setLanguage(lang) {
    localStorage.setItem("lang", lang);

    const data = translations[lang];
    Object.keys(data).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = data[id];
    });
}

// load khi mở trang
setLanguage(localStorage.getItem("lang") || "en");
