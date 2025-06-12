import { Suspense } from "react";
import Results from "./components/results";

export default async function Home() {
  return (
    <div>
      <Suspense>
        <Results />
      </Suspense>
    </div>
  );
}
