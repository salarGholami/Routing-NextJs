import Link from "next/link";

export const metadata = {
  title: "Products page ...",
  description: "products page description",
};

const products = [
  {
    id: 1,
    slug: "/t-shirt",
    title: "T-Shirt",
  },
  {
    id: 2,
    slug: "/mobile",
    title: "Mobile",
  },
  {
    id: 3,
    slug: "/loptop",
    title: "Loptop",
  },
];

function Page() {
  return (
    <div>
      <h1>products Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.slug}`}>{product.title}</Link>
          </li>
        ))}
        <Link href={`/products/folan`} replace>
          Folan product
        </Link>
      </ul>
    </div>
  );
}
export default Page;
