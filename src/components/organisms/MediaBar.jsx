import Icon from "../atoms/Icon"
import Text from "../atoms/Text"

export default function MediaBar(){
    return(
        <div className="fixed top-1/3 w-16 bg-base-300 rounded-r-xl py-2">
                <div className="justify-items-center text-center">
                <a href="https://github.com/Lost1101" className="hover:text-primary hover:duration-300">
                    <Icon className="mx-auto" library={'fa'} name={'FaGithub'} size={28}></Icon>
                    <Text type="span" className="text-xs">Github</Text>
                </a>
                <a href="https://www.linkedin.com/in/kamilah-insani-1917a1256/" className="hover:text-primary hover:duration-300">
                    <Icon className="mx-auto" library={'fa'} name={'FaLinkedin'} size={28}></Icon>
                    <Text type="span" className="text-xs">Linkedin</Text>
                </a>
                <a href="https://instagram.com/kamii_2187/" className="hover:text-primary hover:duration-300">
                    <Icon className="mx-auto" library={'fa'} name={'FaInstagram'} size={28}></Icon>
                    <Text type="span" className="text-xs">Instagram</Text>
                </a>
            </div>
        </div>
    )
}