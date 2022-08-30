const Configurations = ({ show, setUnits, setLang }) => {

    if (!show) {
        return null
    }

    return (
        <div className="flex flex-col bg-blue-100/75 w-[100%] relative top-[30%] rounded-xl py-10">
            <div className="grid grid-cols-2 gap-0 mx-10 my-2">
                <span className="text-md font-normal">Units</span>
                <select defaultValue={'standard'} onChange={(e) => setUnits(e.target.value)} className="bg-neutral-100">
                    <option value={'standard'}>Standard</option>
                    <option value={'imperial'}>Imperial</option>
                    <option value={'metric'}>Metric</option>
                </select>
            </div>
            <div className="grid grid-cols-2 mx-10 my-2">
                <span className="text-md font-normal">Language</span>
                <select defaultValue={'en'} onChange={(e) => setLang(e.target.value)} className="bg-neutral-100">
                    <option value={'en'}>English</option>
                    <option value={'es'}>Español</option>
                </select>
            </div>
        </div>
    )
}

export default Configurations