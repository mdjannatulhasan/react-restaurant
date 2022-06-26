module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        container: {
            center: true,
            padding: {
                lg: "4rem",
                sm: "2rem",
            },
        },
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#a991f7",
                    secondary: "#f6d860",
                    accent: "#37cdbe",
                    neutral: "#3d4451",
                    "base-100": "#ffffff",
                },
                night: {
                    ...require("daisyui/src/colors/themes")["[data-theme=night]"],
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
