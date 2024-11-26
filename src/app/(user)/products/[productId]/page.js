export function generateMetadata({ params }) {
  const id = params.productId;

  // const product = await fetch(`https://.../${id}`).then((res) => res.json())

  const title = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`t-shirt ${id}`);
    }, 100);
  });

  return {
    title: title,
    description: "demo desc ...",
  };
}

function ProductDetailPage({ params }) {
  return <div>ProductDetailPage - {params.productId}</div>;
}

export default ProductDetailPage;
