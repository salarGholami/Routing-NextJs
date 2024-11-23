function ReviewDetail({ params }) {
  return (
    <div>
      Review {params.reviewId} for product {params.productId}
    </div>
  );
}

export default ReviewDetail;
