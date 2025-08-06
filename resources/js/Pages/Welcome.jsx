import HeaderNav from './Components/Navigation/HeaderNav';
import Footer from './Components/Navigation/Footer';
import ContentsLayout from './Components/MainContents/ContentsLayout'

export default function Welcome({ auth }) {

    return (
        <>
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full px-6">
                        <HeaderNav auth={auth} />

                        <ContentsLayout />

                        <Footer />                        
                    </div>
                </div>
            </div>
        </>
    );
}
