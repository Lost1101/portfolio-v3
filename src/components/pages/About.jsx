import Text from "../atoms/Text"
import Image from "../atoms/Image"
import Img1 from '../../assets/scratch.jpg'
import Img2 from '../../assets/rpgmaker.jpg'
import Img3 from '../../assets/coding.jpg'

export default function About(){
    return(
        <div className="h-full mx-20 my-20 grid auto-rows-auto gap-5">
            <div>
                <div>
                    <Text type="h4" className="text-3xl font-bold text-center my-5 text-primary">My Learning Journey</Text>
                </div>
                <div>
                    <Text type="p" className="text-lg">I've always been fascinated by how digital experiences come to life. From designing simple visuals to experimenting with interactive elements, I enjoy exploring how ideas transform into working applications. This curiosity has guided my journey as a developer, helping me grow both creatively and technically over the years.</Text>
                </div>
            </div>
            <div className="grid auto-rows-auto gap-5 mt-10">
                <div>
                    <Text type="h4" className="text-lg font-bold text-center">Early Curiosity (Elementary School)</Text>
                    <div className="grid grid-cols-2 w-4/5 mx-auto my-5 shadow-lg rounded-xl bg-base-200 p-5">
                        <div className="align-middle my-auto">
                            <Image draggable={false} onContextMenu={e => e.preventDefault()} src={Img1} alt="Scratch" className="h-auto w-96 rounded-xl"></Image>
                        </div>
                        <div className="align-middle my-auto px-10">
                            <Text className="text-lg">Started experimenting with Scratch in my sister's PC, enjoying the colorful and visual approach to programming while learning basic logic and sequences.</Text>
                        </div>
                    </div>
                </div>
                <div>
                    <Text type="h4" className="text-lg font-bold text-center">Middle School Fun</Text>
                    <div className="grid grid-cols-2 w-4/5 mx-auto my-5 shadow-lg rounded-xl bg-base-200 p-5">
                        <div className="align-middle my-auto px-10">
                            <Text className="text-lg">Tried RPG Maker projects, learning event handling and asynchronus logic behind the scenes. While initially motivated by curiosity to understand games like Mad Father, the experience strengthened my programming fundamentals and problem-solving skills in general.</Text>
                        </div>
                        <div className="align-middle my-auto">
                            <Image draggable={false} onContextMenu={e => e.preventDefault()} src={Img2} alt="Rpg maker" className="h-auto w-96 rounded-xl"></Image>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <Text type="h4" className="text-lg font-bold text-center">Hands-on Practice (College and Independent Freelance)</Text>
                    </div>
                    <div className="grid grid-cols-2 w-4/5 mx-auto my-5 shadow-lg rounded-xl bg-base-200 p-5">
                        <div className="align-middle my-auto">
                            <Image draggable={false} onContextMenu={e => e.preventDefault()} src={Img3} alt="Real programming" className="h-auto w-96 rounded-xl"></Image>
                        </div>
                        <div className="align-middle my-auto px-10">
                            <Text className="text-lg">Although I somnetimes struggled with syntax differences and various programming languages during college, I frequently explored projects on my own. This led me to take on small freelance tasks, such as coding assignments for peers and developing custom projects like wedding invitations. Through these experiences, I gained practical skills in client communication, problem-solving, and applying code in real-world scenarios.</Text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}