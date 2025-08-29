export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-700 p-4 mt-8">
            <div className="container mx-auto text-center">
                © {new Date().getFullYear()} Gold Planet. All rights reserved.
            </div>
        </footer>
    );
}