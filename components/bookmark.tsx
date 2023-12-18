interface BookmarkProps {
  card: {
    id: number;
    image: string;
    title: string;
    url: string;
    badge?: string | null;
    badgeColor?: string | null;
    icon?: string;
    tags?: string[];
  };
}

export default function Bookmark({ card }: BookmarkProps) {
  return (
    <div
      key={card.id}
      class="relative w-full h-full bg-gray-800 text-white rounded-lg border border-gray-600 shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col"
    >
      {card.badge && (
        <div
          class={`absolute top-1 left-1 z-10 ${card.badgeColor} text-white py-1 px-2 rounded-tr-full rounded-bl-full text-xs`}
        >
          {card.badge}
        </div>
      )}
      <div
        class="relative overflow-hidden rounded-t-lg"
        style={{ height: "150px" }}
      >
        <div class="relative group flex items-center justify-center h-full">
            <img
              src={card.image}
              alt={card.title}
              class="w-full h-full object-cover transition duration-300 filter group-hover:blur-sm"
            />
            <div class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <a href={card.url} target="_blank" rel="noopener noreferrer">
                <button class="bg-blue-500 text-white py-2 px-4 rounded-full text-sm">
                  바로가기
                </button>
              </a>
            </div>
        </div>
      </div>
      <div class="flex-grow p-3 overflow-y-auto">
        <h3 class="text-l font-semibold mb-1 truncate">{card.title}</h3>
        {card.tags && (
          <div class="flex flex-wrap mb-1">
            {card.tags.map((tag, index) => (
              <span
                key={index}
                class="bg-gray-600 text-white py-1 px-2 rounded-full text-xs mr-1 mb-1 inline-block"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
