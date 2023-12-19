import { useSignal } from "@preact/signals";
import Grid from "../islands/Grid.tsx";

export default function Home() {
  const titleImage = "ab_title.png";
  return (
    <div class="bg-gray-900 text-white min-h-screen px-2 sm:px-5 md:px-10 lg:px-20 xl:px-30 2xl:px-40 pt-10">
      <img src={titleImage} alt="ACT Bookmark" class="mb-6 w-96" />
      <Grid />
    </div>
  );
}