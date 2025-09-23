import { useState } from "react";

const ArticleTabs = () => {
  const [activeTab, setActiveTab] = useState("recent");

  const tabs = [
    { id: "recent", label: "Mais Recentes" },
    { id: "popular", label: "Mais Populares" }
  ];

  return (
    <div className="flex space-x-1 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            activeTab === tab.id
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ArticleTabs;
