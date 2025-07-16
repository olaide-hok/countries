import {ModeToggle} from './ModeToggle';

const Header = () => {
    return (
        <header className="header-banner flex items-center justify-between bg-(--primary) lg:py-(--space-300) lg:px-(--space-1000)  max-w-[90rem] h-[5rem]">
            <h1 className="text-(length:--fs-24) font-extrabold leading-(--lh-1375) ">
                Where in the world?
            </h1>
            <ModeToggle />
        </header>
    );
};

export default Header;
