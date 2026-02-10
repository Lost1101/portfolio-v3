import Text from "../atoms/Text"
import Card from "../organisms/Card"
import Image from "../atoms/Image"
import Tag from "../molecules/Tag"
import Button from "../atoms/Button"
import Alert from "../molecules/Alert"
import projectimg1 from '../../assets/project1.png'
import projectimg2 from '../../assets/project2.png'
import projectimg3 from '../../assets/project3.png'
import projectimg4 from '../../assets/project4.png'
import projectimg5 from '../../assets/project5.png'
import projectimg6 from '../../assets/project6.png'
import projectimg7 from '../../assets/project7.png'
import projectimg8 from '../../assets/project8.png'
import projectimg9 from '../../assets/project9.png'
import projectimg10 from '../../assets/project10.png'
import projectimg11 from '../../assets/project11.png'
import projectimg12 from '../../assets/project12.png'

export default function Project(){
    return(
        <div className="mx-16 md:mx-20">
            <div className="align-middle pt-20">
                <ul className="list-disc">
                    <li className="my-10"><Text type="h1" className="text-xl md:text-3xl font-bold">Work Project</Text></li>
                    <div className="md:flex md:gap-10 grid gap-10">
                        <Card title={'PEMANIS'} className="md:w-1/4 py-2 h-fit">
                            <div>
                                <Image raggable={false} onContextMenu={e => e.preventDefault()} src={projectimg11} alt="Icon"></Image>
                            </div>
                            <div className="p-5">
                                <div className="flex flex-wrap justify-center gap-2 mt-2">
                                    <Tag text="HTML"/>
                                    <Tag text="CSS"/>
                                    <Tag text="Bootstrap"/>
                                    <Tag text="PHP"/>
                                    <Tag text="JavaScript"/>
                                    <Tag text="CI3"/>
                                    <Tag text="Google Auth"/>
                                    <Tag text="Fullstack"/>
                                    <Tag text="MySQL"/>
                                    <Tag text="Python"/>
                                    <Tag text="Data Cleaning"/>
                                    <Tag text="Legacy Code"/>
                                </div>
                                <div className="text-right mt-5">
                                    <a href="https://pemanis-lapi.com/" className="text-center text-accent"><Button>Web</Button></a>
                                </div>
                            </div>
                        </Card>
                        <Card title={'Monev KUR/NPL'} className="md:w-1/4 py-2 h-fit">
                            <div>
                                <Image raggable={false} onContextMenu={e => e.preventDefault()} src={projectimg12} alt="Icon"></Image>
                            </div>
                            <div className="p-5">
                                <div className="flex flex-wrap justify-center gap-2 mt-2">
                                    <Tag text="Finance/Banking"/>
                                    <Tag text="PHP"/>
                                    <Tag text="Laravel"/>
                                    <Tag text="ReactJS"/>
                                    <Tag text="System Analysis"/>
                                    <Tag text="Backend Infrastructure"/>
                                    <Tag text="GIS"/>
                                    <Tag text="RESTful"/>
                                    <Tag text="Fullstack"/>
                                    <Tag text="MySQL"/>
                                    <Tag text="Python"/>
                                    <Tag text="Data Generate"/>
                                </div>
                                <div className="text-right mt-5">
                                    <a href="" className="text-center text-accent"><Button>On Progress</Button></a>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <li className="my-10"><Text type="h1" className="text-xl md:text-3xl font-bold">Freelance Projects</Text></li>
                    <div className="md:flex md:gap-10 grid gap-10">
                        <Card title={'Wedding RSVP 1'} className="md:w-1/4 py-2 h-fit">
                            <div>
                                <Image raggable={false} onContextMenu={e => e.preventDefault()} src={projectimg1} alt="Icon"></Image>
                            </div>
                            <div className="p-5">
                                <div className="flex flex-wrap justify-center gap-2 mt-2">
                                    <Tag text="HTML"/>
                                    <Tag text="CSS"/>
                                    <Tag text="Tailwind"/>
                                    <Tag text="JavaScript"/>
                                    <Tag text="Front-End"/>
                                </div>
                                <div className="text-right mt-5">
                                    <a href="https://github.com/Lost1101/undangan_w-k.git" className="text-center text-accent"><Button>Source Code</Button></a>
                                </div>
                            </div>
                        </Card>
                        <Card title={'Wedding RSVP 2'} className="md:w-1/4 py-2 h-fit">
                            <div>
                                <Image raggable={false} onContextMenu={e => e.preventDefault()} src={projectimg2} alt="Icon"></Image>
                            </div>
                            <div className="p-5">
                                <div className="flex flex-wrap justify-center gap-2 mt-2">
                                    <Tag text="HTML"/>
                                    <Tag text="CSS"/>
                                    <Tag text="Tailwind"/>
                                    <Tag text="JavaScript"/>
                                    <Tag text="ReactJS"/>
                                    <Tag text="NodeJS"/>
                                    <Tag text="Front-End"/>
                                </div>
                                <div className="text-right mt-5">
                                    <a href="https://github.com/Lost1101/undangan-tr.git" className="text-center  text-accent"><Button>Source Code</Button></a>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <li className="my-10"><Text type="h1" className="text-3xl font-bold">College Project</Text></li>
                    <Alert className="my-5 text-xs md:text-sm" library={'fa'} name={'FaInfoCircle'} text={'Many projects didnt uploaded due to past hardware issues, but they contributed significantly to my learning and skill development'} />
                    <div className="md:flex md:gap-10 grid gap-10">
                        <Card title={'VoteIt'} className="md:w-1/4 py-2 h-fit">
                            <div>
                                <Image raggable={false} onContextMenu={e => e.preventDefault()} src={projectimg3} alt="Icon"></Image>
                            </div>
                            <div className="p-5">
                                <div className="flex flex-wrap justify-center gap-2 mt-2">
                                    <Tag text="HTML"/>
                                    <Tag text="CSS"/>
                                    <Tag text="PHP"/>
                                    <Tag text="MySQL"/>
                                    <Tag text="Software-Engineering"/>
                                </div>
                                <div className="text-right mt-5">
                                    <a href="https://github.com/Lost1101/E-voting-v.0.2.git" className="text-center  text-accent"><Button>Source Code</Button></a>
                                </div>
                            </div>
                        </Card>
                        <Card title={'My Zakat'} className="md:w-1/4 py-2 h-fit">
                            <div>
                                <Image raggable={false} onContextMenu={e => e.preventDefault()} src={projectimg4} alt="Icon"></Image>
                            </div>
                            <div className="p-5">
                                <div className="flex flex-wrap justify-center gap-2 mt-2">
                                    <Tag text="HTML"/>
                                    <Tag text="CSS"/>
                                    <Tag text="MySQL"/>
                                    <Tag text="PHP"/>
                                    <Tag text="MySQL"/>
                                    <Tag text="Software-Engineering"/>
                                </div>
                                <div className="text-right mt-5">
                                    <a href="https://github.com/Lost1101/zakat-v.01.git" className="text-center  text-accent"><Button>Source Code</Button></a>
                                </div>
                            </div>
                        </Card>
                        <Card title={'Image Encryption'} className="md:w-1/4 py-2 h-fit">
                            <div>
                                <Image raggable={false} onContextMenu={e => e.preventDefault()} src={projectimg5} alt="Icon"></Image>
                            </div>
                            <div className="p-5">
                                <div className="flex flex-wrap justify-center gap-2 mt-2">
                                    <Tag text="Python"/>
                                    <Tag text="Cyber-Security"/>
                                    <Tag text="Software-Engineering"/>
                                </div>
                                <div className="text-right mt-5">
                                    <a href="https://github.com/Lost1101/Image-Encryption-v.01.git" className="text-center  text-accent"><Button>Source Code</Button></a>
                                </div>
                            </div>
                        </Card>
                        <Card title={'AI Retail Scanner (Thesis)'} className="md:w-1/4 py-2 h-fit">
                            <div>
                                <Image raggable={false} onContextMenu={e => e.preventDefault()} src={projectimg6} alt="Icon"></Image>
                            </div>
                            <div className="p-5">
                                <div className="flex flex-wrap justify-center gap-2 mt-2">
                                    <Tag text="HTML"/>
                                    <Tag text="NodeJS"/>
                                    <Tag text="ExpressJS"/>
                                    <Tag text="Python"/>
                                    <Tag text="Machine-Learning"/>
                                </div>
                                <div className="text-right mt-5">
                                    <a href="https://github.com/Lost1101/yolov11-inference.git" className="text-center  text-accent"><Button>Source Code</Button></a>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <li className="my-10"><Text type="h1" className="text-3xl font-bold">Personal/Misc Project</Text></li>
                    <Alert className="my-5" library={'fa'} name={'FaInfoCircle'} text={'Many projects didnt uploaded due to past hardware issues, but they contributed significantly to my learning and skill development'}/>
                    <div className="md:flex md:gap-10 grid gap-10">
                        <Card title={'Kurban Game (2023)'} className="md:w-1/4 py-2 h-fit">
                            <div>
                                <Image raggable={false} onContextMenu={e => e.preventDefault()} src={projectimg7} alt="Icon"></Image>
                            </div>
                            <div className="p-5">
                                <div className="flex flex-wrap justify-center gap-2 mt-2">
                                    <Tag text="HTML"/>
                                    <Tag text="JavaScript"/>
                                    <Tag text="Game-Development"/>
                                </div>
                                <div className="text-right mt-5">
                                    <a href="https://github.com/Lost1101/kurban-gamelol-v1.git" className="text-center  text-accent"><Button>Source Code</Button></a>
                                </div>
                            </div>
                        </Card>
                        <Card title={'Isekai Resto (FE + BE)'} className="md:w-1/4 py-2 h-fit">
                            <div>
                                <Image raggable={false} onContextMenu={e => e.preventDefault()} src={projectimg8} alt="Icon"></Image>
                            </div>
                            <div className="p-5">
                                <div className="flex flex-wrap justify-center gap-2 mt-2">
                                    <Tag text="HTML"/>
                                    <Tag text="JavaScript"/>
                                    <Tag text="Tailwind"/>
                                    <Tag text="NodeJS"/>
                                    <Tag text="ReactJS"/>
                                    <Tag text="ExpressJS"/>
                                    <Tag text="MySQL"/>
                                    <Tag text="Software-Engineering"/>
                                </div>
                                <div className="text-right mt-5">
                                    <a href="https://github.com/Lost1101/fe-isekai-resto.git" className="text-center  text-accent"><Button>Source Code</Button></a>
                                </div>
                            </div>
                        </Card>
                        <Card title={'Number Scanner KAN'} className="md:w-1/4 py-2 h-fit">
                            <div>
                                <Image raggable={false} onContextMenu={e => e.preventDefault()} src={projectimg9} alt="Icon"></Image>
                            </div>
                            <div className="p-5">
                                <div className="flex flex-wrap justify-center gap-2 mt-2">
                                    <Tag text="Python"/>
                                    <Tag text="Machine-Learning"/>
                                </div>
                                <div className="text-right mt-5">
                                    <a href="https://github.com/Lost1101/KAN-digit-MNIST.git" className="text-center  text-accent"><Button>Source Code</Button></a>
                                </div>
                            </div>
                        </Card>
                        <Card title={'Capstone Project RevoU'} className="md:w-1/4 py-2 h-fit">
                            <div>
                                <Image raggable={false} onContextMenu={e => e.preventDefault()} src={projectimg10} alt="Icon"></Image>
                            </div>
                            <div className="p-5">
                                <div className="flex flex-wrap justify-center gap-2 mt-2">
                                    <Tag text="HTML"/>
                                    <Tag text="CSS"/>
                                    <Tag text="JavaScript"/>
                                    <Tag text="Software-Engineering"/>
                                </div>
                                <div className="text-right mt-5">
                                    <a href="https://github.com/Kampus-Merdeka-Software-Engineering/km-feb24-semarang-22.git" className="text-center  text-accent"><Button>Source Code</Button></a>
                                </div>
                            </div>
                        </Card>
                    </div>
                </ul>
            </div>
        </div>
    )
}
