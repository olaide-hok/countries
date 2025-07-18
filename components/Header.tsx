import {ModeToggle} from './ModeToggle';

const Header = () => {
    return (
        <header className="header-banner container mx-auto flex items-center justify-between bg-(--primary) px-(--space-200) py-[1.875rem] md:px-(--space-500) lg:py-(--space-300) lg:px-(--space-800) h-[5rem]">
            <h1 className="text-(length:--fs-14) lg:text-(length:--fs-24) font-extrabold leading-[1.25rem] lg:leading-(--lh-1375)">
                Where in the world?
            </h1>
            <ModeToggle />
        </header>
    );
};

export default Header;
