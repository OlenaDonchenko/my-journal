import EntryList from "./components/EntryList";
import ViewEntryModal from "./components/ViewEntry";
import {useState, useEffect} from "react";
import Header from "./components/Header";
import EmptyState from "./components/EmptyState";
import AddEntryModal from "./components/AddEntryModal";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [entries, setEntries] = useState(() => {
    const storedEntries = localStorage.getItem("entries");
    return storedEntries ? JSON.parse(storedEntries) : [];
  });
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [showHome, setShowHome] = useState(false);

  const handleSaveEntry = (newEntry) => {
    const dublicateDate = entries.some(entry => entry.date === newEntry.date);
    if (dublicateDate) {
      alert("An entry with this date already exists. Please choose a different date.");
      return;
    }

    setEntries((currentEntries) => [...currentEntries, newEntry]);
    setOpenModal(false);
    setShowHome(false);
  };

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/journal-bg.png')" }}
    >
      <div className="min-h-screen bg-[#07111f]/65">
        <Header onAddEntry={() => setOpenModal(true)} 
          onHome={() => {setSelectedEntry(null);
            setShowHome(true);
          }} />

        <main>
          {showHome || entries.length === 0 ? (
            <EmptyState onAddEntry={() => setOpenModal(true)} onViewEntries={() => setShowHome(false)}
            hasEntries={entries.length > 0} />
          ) : (
            <EntryList entries={entries} 
            onEntryClick={(entry) => {setSelectedEntry(entry)}} />
          )}
        </main>
        {openModal && <AddEntryModal onClose={() => setOpenModal(false)} onSave={handleSaveEntry} />}

        {selectedEntry && (
          <ViewEntryModal entry={selectedEntry} onClose={() => setSelectedEntry(null)} 
          />
        )}
      </div>
    </div>
  );
}

export default App;