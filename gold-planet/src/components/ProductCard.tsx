type ProductCardProps = {
    title: string;
    price: string;
    imageUrl: string;
    buyLink: string;
};

export default function ProductCard({ title, price, imageUrl, buyLink }: ProductCardProps) {
    return (
        <div className="border rounded-md p-4 flex flex-col items-center">
            <img src={imageUrl} alt={title} className="h-40 w-40 object-cover mb-2"/>
            <h2 className="font-semibold text-lg">{title}</h2>
            <p className="text-gray-600">{price}</p>
            <a
                href={buyLink}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Buy Now
            </a>
        </div>
    );
}