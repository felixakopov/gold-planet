import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Gold Planet</h1>
                <div className="space-x-4">
                    <Link href="/" className="hover:text-blue-500">Home</Link>
                    <Link href="/products" className="hover:text-blue-500">Products</Link>
                    <Link href="/about" className="hover:text-blue-500">About</Link>
                    <Link href="/contact" className="hover:text-blue-500">Contact</Link>
                </div>
            </div>
        </nav>
    );
}