import Icon from "../atoms/Icon"

export default function ThemeToggle(){
    return(
        <label className='swap swap-rotate px-5 fixed bottom-0 right-0 p-5 m-5 shadow rounded-full bg-base-100'>
            <input type="checkbox" className="theme-controller" value="winter" />
            <Icon library={"fa"} name={"FaRegSun"} size={28} className="swap-on fill-current h-5 w-5"/>
            <Icon library={"fa"} name={"FaRegMoon"} size={28} className="swap-off fill-current h-5 w-5"/>
        </label>
    )
}