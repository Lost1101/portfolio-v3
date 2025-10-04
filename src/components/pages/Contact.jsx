import Text from "../atoms/Text"
import FormField from "../molecules/FormField"
import Form from "../organisms/Form"

export default function Contact(){
    return(
        <div className="h-screen grid place-items-center mx-16 md:mx-20 mt-0">
            <div className="w-3/4 md:w-1/2">
                <Text type="h4" className={"text-center text-xl font-bold my-5"}>More in connect with me</Text>
                <Form action={'https://getform.io/f/bolzkyxa'} method={'POST'}>
                    <FormField id={'name'} typeform={'text'} placeholder={'Your name...'} label={'Name'} required/>
                    <FormField id={'email'} typeform={'email'} placeholder={'your@email.com...'} label={'Email'} required/>
                    <div>
                        <textarea className="block input my-5 w-full h-28" name="content" id="content" required></textarea>
                    </div>
                </Form>
            </div>
        </div>
    )
}