import { UMKMCard } from "@/type/type";
import Image from "next/image";
import React from "react";

function DisplayCards(props: { cards: UMKMCard[] }) {
  const groups: { type: "single" | "double"; cards: UMKMCard[] }[] = [];
  const cards = props.cards.slice(0, 10);
  let i = 0;
  console.log("cards: ", cards);
  while (i < cards.length) {
    if (i == 8) {
      break;
    }
    console.log("i: ", i);
    if (i % 7 != 0) {
      let doubleCards: any = [];
      while (i < cards.length && i % 7 != 0) {
        doubleCards.push(cards[i]);
        i++;
      }
      groups.push({ type: "double", cards: doubleCards });
    } else {
      groups.push({ type: "single", cards: [cards[i]] });
      i++;
    }
  }

  return (
    <div >
      {groups.map((group, groupIndex) => {
        if (group.type === "single") {
          const card = group.cards[0];
          return (
            <div key={`single-${groupIndex}`} className="grid grid-cols-1 mt-2">
              <a
                href={`/umkm/${card.title}`}
                className="relative h-[168px] md:h-[360px] lg:h-[480px] flex-shrink-0 cursor-pointer
                group hover:scale-[98%] active:scale-[98%] rounded-lg transition-all duration-400 
                ease-in-out overflow-hidden"
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="rounded-lg object-cover group-hover:scale-110 group-active:scale-110
                   transform ease-in-out duration-400 transition-transform"
                />
                <h3 className="!text-white absolute bottom-2 left-2 font-bold italic">
                  {card.title}
                </h3>
              </a>
            </div>
          );
        } else if (group.type === "double") {
          return (
            <div
              key={`double-${groupIndex}`}
              className="grid grid-cols-2 gap-1 md:grid-cols-3 mt-2"
            >
              {group.cards.map((card, idx) => (
                <a
                  key={idx}
                  href={`/umkm/${card.title}`}
                  className="relative h-[168px] md:h-[360px] lg:h-[480px] flex-shrink-0 cursor-pointer
                 group hover:scale-[98%] active:scale-[98%] rounded-lg transition-all duration-400 ease-in-out overflow-hidden "
                >
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="rounded-lg object-cover group-hover:scale-110 group-active:scale-110 transform ease-in-out duration-400 transition-transform"
                  />
                  <h3 className="!text-white absolute bottom-2 left-2 font-bold italic">
                    {card.title}
                  </h3>
                </a>
              ))}
            </div>
          );
        }
      })}
    </div>
  );
}

export default DisplayCards;
