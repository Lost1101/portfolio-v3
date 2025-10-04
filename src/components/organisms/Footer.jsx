import Image from "../atoms/Image"
import SigIcon from "../../assets/icon.png"

export default function Footer(){
    return(
        <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
            <aside>
                <Image draggable={false} onContextMenu={e => e.preventDefault()} src={SigIcon} alt="Icon" className="h-20 w-20 mx-auto bg-primary rounded-full"/>
                <p className="font-bold">
                Made with ❤️ by Camii
                </p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
        </footer>
    )
}