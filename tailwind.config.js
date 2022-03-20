/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {

  content: ['./src/**/*.{vue,js,ts,jsx,tsx,html}', 'index.html'],
  theme: {


    // use `cherangi` to name colors
    colors: {
      white: "#fff",
      black: "#000",
      gray:"#ccc",
      alertRed:"#FF1B1B",
      unpresuming:"#DDE7ED",
      insigniaWhite: "#EBF4FA",
      kulSharifBlue: "#8ED5FD",
      inkBlotch: "#16618A",
      nirvanaNevermind: "#6EC3F2",
      kakitsubataBlue: "#3F5FB1",
      aquarellePurple: "#DAE5F3",
      lynxScreenBlue: "#4CB5EF",
      hazyDaylight:"#DBE7EF",
      errorRed: "#BA2F2F",

    },
    fontFamily: {
      fontAwesome:["Font Awesome 5 Free", "Font Awesome 5 Pro"],
      montserrat: ["Montserrat", "sans-serif"],
      sourceSansPro: ["Source Sans Pro", "sans-serif"],
    },
    extend: {
  
      zIndex:{
        mask:100,
        dialog:1000
      },
        brightness:{
          "80":"80%"
        },
      translate:{
        min:1
      },
      transitionDuration:{
        '3000':'3s',
        '5000':'5s',
      },
      borderRadius:{
        "72":"72px"
      },

      gap:{
        "sm":5.5,
      },

      dropShadow:{

        'r13':'0 4px 13px rgba(0,0,0,0.25)'
      },

      borderWidth: {
        md:10.5,
        lg: "12px"
      },
      padding: {
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "15":60,
        "21": 84,
        "24.5": 98,
        "25": 100,
        "58": "232px"
      },
      margin: {
        "2.5": 10,
        "4.5": "1.125rem",
        "5.25": "1.313rem", // 21px
        "5.5": "1.375rem", // 22px
        "7.25": "1.813rem", // 29px
        "7.5": "1.975rem",
        "10.5": 42,
        "15":60,
        "31": 124,

      },
      fontSize: {

        big: "2em",
        subtitle: "1.375rem",
        title: "1.75rem",  // 28px
        "28": "1.75rem",
        "40":"2.500rem",
         // 22px
      },
      minWidth: {
        "10":40,
        "51": 204,
        sm:241,
        "dialog":414,
        "button-md":176,
      },
      width: {
        "4.5": "1.125rem",
        "13": 52,
        "25": 100,
        "28.5": 114,
        "31.5":126,
        "34.5": 138,
        "55":220,
        "75":300,
        "navbar":274,
        "92": 366,
        dialog: 414,
        "login":461,
        calendar:468,
        "md": 704,
        "text-input":543,
        "dialog-lg":858,
        "long": 818,
        "xl":1046
      },
      maxWidth: {
        "31.5":126,
        "55":220,
        "navbar":274,
        dialog: 414,
        "login":461,
        "text-input":543,
        "dialog-lg":858,
        xl: 1046,
        lg:704,
        sm: 241,
        md: 387,
      },
      minHeight:{
        "8.5":34,
        "10":40,
        "14":56,
        title:80,
        sm:100,
        md:256,
        lg:686,
        xl:1024
      },
      height: {
        "4.5": "1.125rem",
        "dialog-sm": 257,
        calendar:482,
        "dialog-lg":663,
        dialog: 771,
        lg:686,
        xl:850,
        "8.5":34,
        "13": 52,
        "20.25": 81,
        "23": 92,
        "25": 100,
        "78": 312,

      },
      maxHeight: {
        "dialog-sm": 257,
        "dialog-lg":663,
        lg:686,
        xl:850,
        dialog: 771,
      },

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
