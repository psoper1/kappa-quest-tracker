'use client';
import { createContext, useContext, useState, useEffect } from 'react';

// Create Context
const QuestContext = createContext();

// Create a custom hook to use the QuestContext
export const useQuestContext = () => {
  return useContext(QuestContext);
};

// Provide the context to the app
export const QuestProvider = ({ children }) => {
  const [completedQuests, setCompletedQuests] = useState(() => {
    // Check localStorage for saved quests on initial load
    const storedQuests = localStorage.getItem('completedQuests');
    return storedQuests ? JSON.parse(storedQuests) : [];
  });

  const toggleQuestCompletion = (questKey) => {
    const updatedCompletedQuests = [...completedQuests];
    const questIndex = updatedCompletedQuests.indexOf(questKey); // Search for the quest by its key

    if (questIndex >= 0) {
      // Quest is already completed, so remove it
      updatedCompletedQuests.splice(questIndex, 1);
    } else {
      // Quest is not completed, so add it
      updatedCompletedQuests.push(questKey);
    }

    // Update state and localStorage
    setCompletedQuests(updatedCompletedQuests);
    localStorage.setItem('completedQuests', JSON.stringify(updatedCompletedQuests));
  };

  // Sync completedQuests state with localStorage when it changes
  useEffect(() => {
    localStorage.setItem('completedQuests', JSON.stringify(completedQuests));
  }, [completedQuests]);

  return (
    <QuestContext.Provider value={{ completedQuests, toggleQuestCompletion }}>
      {children}
    </QuestContext.Provider>
  );
};