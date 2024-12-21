import quests from "../app/jaeger/page"

export default function questComponent({quests}) {
    <ul>
        {quests.map((quest) => (
          <li
            key={quest.key}
            className='quest'
            style={{
              textDecoration: completedQuests.includes(quest.key) ? 'line-through' : 'none', // Check if quest key is in completedQuests
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <input
              type="checkbox"
              checked={completedQuests.includes(quest.key)} // Check if quest is completed
              onChange={() => toggleQuestCompletion(quest.key)} // Pass quest key to toggle completion
              style={{ marginRight: '10px' }}
            />
            <a href={quest.wikiLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              {quest.name}
            </a>
          </li>
        ))}
      </ul>
}