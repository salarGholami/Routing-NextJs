import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

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
      <h1 className="text-3xl font-bold mb-4">products list : </h1>
      <div>dummy section ...</div>
      <Suspense fallback={<Loading />}>
        <Products />
      </Suspense>
    </div>
  );
}
export default Page;

async function Products() {
  await new Promise((res, rej) => {
    setTimeout(() => {
      res("Hi...");
    }, 3000);
  });
  return (
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
  );
}
