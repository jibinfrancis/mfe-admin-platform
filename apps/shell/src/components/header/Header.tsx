import { useLocation } from 'react-router-dom';
import { NAVIGATION } from '../../config/navigation.config';

const Header = () => {
    const { pathname } = useLocation();

    const title =
        NAVIGATION.find(item =>
            item.exact
                ? pathname === item.path
                : pathname.startsWith(item.path)
        )?.label ?? "Dashboard";

    return (
        <div className='h-14 p-2 font-semibold border-b-border border-b flex items-center'>
            <div>{title}</div>
            <div className='flex flex-1 justify-end'>
                <div className='w-11 h-11 bg-linear-120 rounded-full flex justify-center items-center text-white from-primary to-primary-soft'>A</div>
            </div>
        </div>
    )
}

export default Header