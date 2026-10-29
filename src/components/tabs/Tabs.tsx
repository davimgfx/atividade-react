import { useId, useRef, useState, type ReactNode } from 'react';
import './Tabs.css';

export interface TabItem {
  id: string;
  title: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
}

export default function Tabs({ tabs }: TabsProps) {
  const tabsId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id ?? '');

  if (tabs.length === 0) {
    return null;
  }

  const activeTab = tabs.find((tab) => tab.id === activeTabId) ?? tabs[0];
  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab.id);

  return (
    <div className="tabs">
      <div className="tabs__list" role="tablist" aria-label="Abas">
        {tabs.map((tab, index) => {
          const isActive = tab.id === activeTab.id;

          return (
            <button
              key={tab.id}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              className={`tabs__button${
                isActive ? ' tabs__button--active' : ''
              }`}
              type="button"
              role="tab"
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTabId(tab.id)}>
              {tab.title}
            </button>
          );
        })}
      </div>
      <div
        className="tabs__panel"
        id={`${tabsId}-panel-${activeIndex}`}
        role="tabpanel"
        tabIndex={0}>
        {activeTab.content}
      </div>
    </div>
  );
}
