import { notFound } from "next/navigation";

function ReviewDetail({ params }) {
  if (parseInt(params.reviewId) > 100) {
    notFound();
  }
  
  return (
    <div>
      Review {params.reviewId} for product {params.productId}
    </div>
  );
}

export default ReviewDetail;
