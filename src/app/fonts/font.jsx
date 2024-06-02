// import needed fonts 
import { Public_Sans } from 'next/font/google'
import { Roboto } from 'next/font/google'

// config fonts 

export const public_sans = Public_Sans({ 
    subsets: ["latin"], 
    display: "swap",
})


// needed to define weight as it not in the google variable font
export const roboto = Roboto({ 
    subsets: ["latin"], // it mean only get the latin letters 

    weight: ["300", "400", "500", "700"],


    display: "swap",
})
