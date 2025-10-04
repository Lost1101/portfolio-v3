import Text from "../atoms/Text"

export default function SkillBadge({name, skill}){
    return(
        <div className="p-5 w-fit text-center">
            <div>
                <i className={`devicon-${skill} text-5xl block text-primary`}></i>
                <Text className="mt-2 text-base block">{name}</Text>
            </div>
        </div>
    )
}