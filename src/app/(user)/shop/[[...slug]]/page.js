"use client";

import { useRouter } from "next/navigation";

function ShopPage() {
  const router = useRouter();
  const handleCLick = () => {
    router.push("/profile");
  };
  
  return (
    <div>
      <h1>ShopPage</h1>
      <button onClick={handleCLick}>place order</button>
    </div>
  );
}

export default ShopPage;
