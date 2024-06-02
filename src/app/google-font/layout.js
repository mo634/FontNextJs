// import needed fonts
import { public_sans } from "../fonts/font"
import { roboto } from "../fonts/font"



export default function GoogleFontLayout({ children }) {
    return (
        <div className={roboto.className}>

            {children}

        </div>
    )
}