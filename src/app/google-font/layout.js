// 1. import Google Font
// 2. set config for Google Font
// 3. wrap font with parent 


import {Public_Sans} from 'next/font/google'

const publicSans = Public_Sans({
    subsets: ['latin'],
    display: 'swap',
})
const GoogleFontLayout = () => {
    return (
        <div className={publicSans.className}>GoogleFontLayout</div>
    )
}

export default GoogleFontLayout