import ProductCard from '@components/ProductCard';

export default function ProductsPage() {
    const products = [
        { title: 'Product 1', price: '$19.99', imageUrl: '/product1.jpg', buyLink: '#' },
        { title: 'Product 2', price: '$29.99', imageUrl: '/product2.jpg', buyLink: '#' },
        { title: 'Product 3', price: '$39.99', imageUrl: '/product3.jpg', buyLink: '#' },
    ];

    return (
        <section>
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((p) => (
                    <ProductCard key={p.title} {...p} />
                ))}
            </div>
        </section>
    );
}