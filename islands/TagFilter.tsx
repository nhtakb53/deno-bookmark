import { Signal } from "@preact/signals";

interface TagProps {
  selectedTags: Signal<string[]>;
  tag: string;
}

export default function TagFilter({ tag, selectedTags }: TagProps) {
  function addTags(tag: string) {
    if (!selectedTags.value.includes(tag)) {
      selectedTags.value = [...selectedTags.value, tag];
    }
  }
  return (
      <button onClick={() => addTags(tag)} class="bg-gray-600 text-white py-1 px-2 rounded-full text-xs mr-1 mb-1 inline-block">
        {tag}
      </button>
  );
}
