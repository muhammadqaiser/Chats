import Conversations from './conversations'
import Logout from './logout'
import SearchInput from './search'
const Sidebar = () => {
    return (
        <div className='border-r border-slate-500 p-4 flex flex-col '>
        <SearchInput />
        <div className='divider px-3'></div>
        <Conversations />
        <Logout />
        </div>
    )
}

export default Sidebar
