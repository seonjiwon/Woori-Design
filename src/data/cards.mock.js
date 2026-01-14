export const mockCards = [
    {
        cardId: "card-001",
        cardName: "K-패스 우리카드",
        company: "우리카드",
        cardType: "CREDIT",

        imageUrl: "/woori-card-kpass.png",
        themeColor: "#1A4FFF",

        maskedCardNumber: "**** **** **** 1234",

        linkedAccount: {
            bankName: "신한",
            maskedAccountNumber: "110-***-**233",
        },

        badges: ["payon", "master"],
    },
    {
        cardId: "card-002",
        cardName: "KREAM Platinum 우리카드",
        company: "우리카드",
        cardType: "CREDIT",

        imageUrl: "/woori-card-kream-platinum.png",
        themeColor: "#2B2B2B",

        maskedCardNumber: "**** **** **** 5678",

        linkedAccount: {
            bankName: "국민",
            maskedAccountNumber: "012-***-**435",
        },
        badges: ["payon", "visa"],
    },
    {
        cardId: "card-003",
        cardName: "카드의정석 오하CHECK",
        company: "우리카드",
        cardType: "CHECK",

        imageUrl: "/woori-card-standard.png",
        themeColor: "#2B2B2B",

        maskedCardNumber: "**** **** **** 2456",

        linkedAccount: {
            bankName: "우리",
            maskedAccountNumber: "1002-***-**314",
        },
        badges: ["payon", "visa"],
    },
];
