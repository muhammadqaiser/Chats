import Conversations from './conversations'
import Settings from './settings'
import SearchInput from './search'
const Sidebar = () => {
    return (
        <div className='border-r border-slate-500 p-4 flex flex-col '>
        <SearchInput />
        <div className='divider px-3'></div>
        <Conversations />
        <Settings />
        </div>
    )
}

export default Sidebar
