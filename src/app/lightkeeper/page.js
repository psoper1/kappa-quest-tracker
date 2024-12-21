'use client';
import Image from 'next/image';
import lightkeeper from '../../imgs/Lightkeeper.png';
import { useQuestContext } from '../../context/QuestContext';
import quests from '../lightkeeper/quests';

export default function LightkeeperPage() {
  const { completedQuests, toggleQuestCompletion } = useQuestContext();

  return (
    <>
      <div className="page-container">
        <div className='lightkeeper-message'>This page is for tracking completion to unlock Network Provider - Part 1 (Mechanic), the questline to unlock the Lightkeeper on Lighthouse.</div>
      <Image src={lightkeeper} alt="lightkeeper-image" className="trader-image lightkeeper-image" />
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
                    {quest.name} - {quest.trader}
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