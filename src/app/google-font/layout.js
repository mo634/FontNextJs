//import local font

import localFont from "next/font/local"

// config local font 

const myFont = localFont({
    src:"../../../public/fonts/Rubik-Italic-VariableFont_wght.ttf",
    display: "swap",
})
export default function GoogleFontLayout({ children }) {
    return (
        <div className={myFont.className}>

            {children}

        </div>
    )
}