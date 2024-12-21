'use client';
import Image from 'next/image';
import peacekeeper from '../../imgs/Peacekeeper.png';
import { useQuestContext } from '../../context/QuestContext';
import quests from '../peacekeeper/quests';

export default function PeacekeeperPage() {
  const { completedQuests, toggleQuestCompletion } = useQuestContext();

  return (
    <>
      <div className="page-container">
      <Image src={peacekeeper} alt="peacekeeper-image" className="trader-image" />
      <div className="quest-list">
        {Array.from({ length: Math.ceil(quests.length / 25) }).map((_, columnIndex) => (
          <ul key={columnIndex}>
            {quests
              .slice(columnIndex * 25, columnIndex * 25 + 25)
              .map((quest) => (
                <li
                  key={quest.key}
                  className="quest"
                  style={{
                    textDecoration: completedQuests.includes(quest.key) ? 'line-through' : 'none',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={completedQuests.includes(quest.key)}
                    onChange={() => toggleQuestCompletion(quest.key)}
                    style={{ marginRight: '10px' }}
                  />
                  <a href={quest.wikiLink} target="_blank" rel="noopener noreferrer">
                    {quest.name}
                  </a>
                </li>
              ))}
          </ul>
        ))}
      </div>
    </div>
    </>
  );
}