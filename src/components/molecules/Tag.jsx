import Text from "../atoms/Text"

export default function Tag({text}){
    return(
        <Text className="border rounded-lg text-xs p-1">
            {text}
        </Text>
    )
}