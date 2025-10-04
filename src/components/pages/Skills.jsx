import Card from "../organisms/Card"
import SkillBadge from "../molecules/SkillBadge"
import Text from "../atoms/Text"

export default function Skills(){
    return(
        <div className="md:h-screen mx-16 md:mx-20">
            <div className="align-middle pt-24">
                <div>
                  <Text type="h4" className="text-sm md:text-lg text-center mb-10">
                    Here's a list of my technical skills and tools I frequently use.
                    </Text>
                </div>
                <div className="md:flex md:justify-center gap-10 ">
                    <Card title={'Front-End'} className="mb-10 md:w-1/4">
                        <div className="justify-items-center grid grid-cols-3">
                            <SkillBadge skill="html5-plain" name={'HTML'}/>
                            <SkillBadge skill="css3-plain" name={'CSS'}/>
                            <SkillBadge skill="javascript-plain" name={'JavaScript'}/>
                            <SkillBadge skill="react-plain" name={'ReactJS'}/>
                            <SkillBadge skill="tailwindcss-original" name={'TailwindCSS'}/>
                            <SkillBadge skill="bootstrap-plain" name={'Bootstrap'}/>
                        </div>
                        <div className="p-4">
                            <Text type="p" className="text-xs md:text-sm text-justify">In software development, front-end refers to the part of a website or application that users interact with directly. <sup><a className="text-accent" href="https://en.wikipedia.org/wiki/Front_end_and_back_end">[1]</a></sup></Text>
                        </div>
                    </Card>
                    <Card title={'Back-End'} className="mb-10 md:w-1/4">
                        <div className="justify-items-center grid grid-cols-3">
                            <SkillBadge skill="nodejs-plain" name={'NodeJS'}/>
                            <SkillBadge skill="php-plain" name={'PHP'}/>
                            <SkillBadge skill="laravel-original" name={'Laravel'}/>
                            <SkillBadge skill="express-original" name={'ExpressJS'}/>
                            <SkillBadge skill="mysql-plain-wordmark" name={'MySQL'}/>
                        </div>
                        <div className="p-4">
                            <Text type="p" className="text-xs md:text-sm  text-justify">In software development, back-end refers to the data management and processing behind the scenes. <sup><a className="text-accent" href="https://en.wikipedia.org/wiki/Front_end_and_back_end">[1]</a></sup></Text>
                        </div>
                    </Card>
                    <Card title={'Misc'} className="mb-10 md:w-1/4">
                        <div className="justify-items-center grid grid-cols-3">
                            <SkillBadge skill="python-plain" name={'Python'}/>
                            <SkillBadge skill="postman-plain" name={'Postman'}/>
                            <SkillBadge skill="canva-original" name={'Canva'}/>
                            <SkillBadge skill="figma-plain" name={'Figma'}/>
                            <SkillBadge skill="git-plain" name={'Git'}/>
                        </div>
                        <div className="p-4">
                            <Text type="p" className="text-xs md:text-sm text-justify">Supportive tools to help my workflow and enhance productivity.</Text>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}