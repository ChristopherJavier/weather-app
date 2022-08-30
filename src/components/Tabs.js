import { HomeIcon, ClockIcon, AdjustmentsIcon } from '@heroicons/react/solid'
const Tabs = ({ setPages }) => {

    return (
        <div className="w-full flex flex-row fixed left-0 bottom-0 justify-center bg-neutral-100 pb-1 rounded-t-3xl">
            <div className="flex w-full text-center my-2 justify-around">
                <button onClick={() => setPages("displayWeather")}>
                    <HomeIcon className='w-8 h-8' />
                </button>
                <button onClick={() => setPages("dailyWeather")}>
                    <ClockIcon className='w-8 h-8' />
                </button>
                <button onClick={() => setPages("configuration")}>
                    <AdjustmentsIcon className='w-8 h-8' />
                </button>
            </div>
        </div>
    )
}
export default Tabs