import SigIcon from "../../assets/icon.png"
import Text from "../atoms/Text"
import Typewriter from "../atoms/Typewriter"
import ThemeToggle from "../molecules/ThemeToggle"
import Button from "../atoms/Button"
import Image from "../atoms/Image"

export default function Home(){
    return(
        <div className="h-screen grid place-items-center mx-20">
            <div className="grid grid-cols-2 justify-center">
                <div className="align-middle my-auto">
                    <Image draggable={false} onContextMenu={e => e.preventDefault()} src={SigIcon} alt="Icon" className="h-60 w-60 mx-auto bg-primary rounded-full"/>
                </div>
                <div className="text-left grid auto-rows-auto gap-5">
                    <div>
                        <Text type="h1" className="text-6xl font-bold">Hi!</Text>
                        <Text type="h2" className="text-5xl font-bold">My name is</Text>
                        <Text type="h1" className="text-6xl font-bold text-primary">Kamilah Insani</Text>
                    </div>
                    <div>
                        <div className="flex">
                            <Typewriter className="font-bold text-xl" texts={["I'm a Front End Developer.", "I'm a Back End Developer.", "I'm a Fullstack Developer." ]} period={1000} />
                            <span>|</span>
                        </div>
                        <div className="">
                            <Text type="p" className="text-base">I build web applications and software with a focus on scalable, maintainable, and user-friendly solutions. I enjoy building application that are not only functional but also provide a positive experience for users putting care and attention into every project I develop.</Text>                 
                        </div>
                        <Button className={'mt-5'}>Resume &#62;</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}