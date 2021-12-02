import React from "react";

import { useRouter } from "next/router";

export default function SomethingImportant() {
  const router = useRouter();

  const newsId = router.query.newsId;
  // after, we could send a request to the API
  // to fetch the news item

  return (
    <div>
      <h1>Something Important</h1>
    </div>
  );
}
