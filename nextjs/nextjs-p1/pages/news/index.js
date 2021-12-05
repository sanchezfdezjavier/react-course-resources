import React from "react";

import Link from "next/link";
import { Fragment } from "react";

export default function News() {
  return (
    <Fragment>
      <ul>
        <Link href="/news/next-is-a-great-framework">
          <li>NextJs is a framework</li>
        </Link>
        <Link href="/news/next-is-not-a-great-framework">
          <li>NextJs is not a framework</li>
        </Link>
      </ul>
    </Fragment>
  );
}
