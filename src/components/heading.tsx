import { Space_Grotesk } from 'next/font/google'
import { ReactNode } from 'react';
const space = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500' , '600' , '700' ] });

const Heading = ({ children }: {children: ReactNode}) => {
    return <div className={` ${space.className} `}>
           {children}
        </div>
}
export default Heading;