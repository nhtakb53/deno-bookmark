import { useSignal } from "@preact/signals";

interface TagProps {
  tags: string[];
}

export default function TagFilter({ tags }: TagProps) {
  const selectedTags = useSignal(tags);
  console.log(selectedTags);
  return (
    <div class="flex flex-wrap mb-1">
      {tags && tags.map((tag, index) => (
      <span 
        key={index}
        class="bg-gray-600 text-white py-1 px-2 rounded-full text-xs mr-1 mb-1 inline-block">
        {tag}
      </span>
      ))}
  </div>
  );
}
