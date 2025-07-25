import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404</h1>
                <p className="text-xl  mb-4">Oops! Page not found</p>
                <Link href="/" className="  underline">
                    Return to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
