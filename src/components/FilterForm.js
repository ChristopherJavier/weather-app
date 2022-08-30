import useField from "../hooks"

const FilterForm = ({ show, setCityName }) => {
    const filter = useField('text')

    if (!show) {
        return null
    }

    const filterSearch = (event) => {
        event.preventDefault()
        setCityName(filter.value)
    }

    return (
        <div className="align-center my-1">
            <form onSubmit={filterSearch} className="">
                <div className="flex flex-col items-center">
                    <label className="">Search your city</label>
                    <div className="flex flex-row justify-around">
                        <input
                            className="w-[60%] h-auto rounded text-center"
                            type={filter.type}
                            value={filter.value}
                            onChange={filter.onChange}
                        />
                        <button type="submit" className="w-[30%] bg-blue-500 p-1 rounded px-2">search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FilterForm