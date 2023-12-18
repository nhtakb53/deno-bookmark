import { useSignal } from "@preact/signals";
import Bookmark from "../components/Bookmark.tsx";
import TagFilter from "../islands/TagFilter.tsx";

export default function Home() {
  const titleImage = "ab_title.png";
  const cards = [
    {
      id: 1,
      image: "logo/cube.png",
      title: "Asset Cube",
      url: "https://asset.act-cube.com",
      badge: "PRD",
      badgeColor: "bg-red-500",
      icon: "",
      tags: ["Cube", "Asset Cube"]
    },
    {
      id: 1,
      image: "logo/cube.png",
      title: "Content Cube",
      url: "https://content.act-cube.com",
      badge: "PRD",
      badgeColor: "bg-red-500",
      icon: "",
      tags: ["Cube", "Content Cube"]
    },
    {
      id: 2,
      image: "logo/jira.png",
      title: "Jira",
      url: "https://ion-act.atlassian.net/jira",
      badge: "",
      badgeColor: "",
      icon: "",
      tags: [],
    },
    {
      id: 2,
      image: "logo/confluence.png",
      title: "Confluence",
      url: "https://ion-act.atlassian.net/wiki",
      badge: "",
      badgeColor: "",
      icon: "",
      tags: [],
    },
    {
      id: 3,
      image: "logo/jenkins.png",
      title: "AWS Jenkins",
      url: "http://ec2-15-165-69-80.ap-northeast-2.compute.amazonaws.com:8080",
      badge: "Cloud",
      badgeColor: "bg-blue-700",
      icon: "",
      tags: ["AWS"],
    },
    {
      id: 4,
      image: "logo/gitlab.png",
      title: "GitLab",
      url: "https://gitlab.assetcube.io",
      badge: "",
      badgeColor: "",
      icon: "",
      tags: ["Git", "Collabo", "DevOps"],
    },
    {
      id: 5,
      image: "logo/a9.png",
      title: "Assist9",
      url: "https://assist9.i-on.net",
      badge: "",
      badgeColor: "",
      icon: "",
      tags: ["I-ON"],
    },
    {
      id: 5,
      image: "",
      title: "LibLog",
      url: "https://actdev.i-on.net/liblog",
      badge: "",
      badgeColor: "",
      icon: "",
      tags: ["I-ON"],
    },
    {
      id: 6,
      image: "logo/gitbucket.png",
      title: "GitBucket",
      url: "http://venus.i-on.net:8081",
      badge: "",
      badgeColor: "",
      icon: "",
      tags: ["Git", "Collabo"],
    },
    {
      id: 7,
      image: "logo/jenkins.png",
      title: "ACT Jenkins",
      url: "https://actdev.i-on.net/jenkins",
      badge: "On-Premise",
      badgeColor: "bg-green-700",
      icon: "",
      tags: ["DevOps"],
    },
  ];
  const uniqueTags = Array.from(new Set(cards.flatMap(card => card.tags)));

  const filterByTag = (cards: any[], targetTag: string): any[] => {
    return targetTag ? cards.filter(card => card.tags.includes(targetTag)) : cards;
  };
  const filteredCards = filterByTag(cards, "AWS");

  return (
    <div class="bg-gray-900 text-white min-h-screen px-2 sm:px-5 md:px-10 lg:px-20 xl:px-30 2xl:px-40 pt-10">
      <img src={titleImage} alt="ACT Bookmark" class="mb-6 w-96" />
      <TagFilter tags={uniqueTags} />
      <div class="flex justify-center">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 place-items-center h-auto p-4">
          {cards.map((card) => (
            <Bookmark card={card} />
          ))}
        </div>
      </div>
      <div class="flex justify-center">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 place-items-center h-auto p-4">
          {filteredCards.map((card) => (
            <Bookmark card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
