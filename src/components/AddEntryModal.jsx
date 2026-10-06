import EntryForm from "./EntryForm";

function AddEntryModal({ onClose, onSave }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6">
      <div className="w-full max-w-lg rounded-xl border border-[#d6b56a]/40 bg-[#07111f] p-8 shadow-2xl">

        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-['Cormorant_Garamond'] text-4xl text-[#f0d58a]">
            Add New Entry
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-[#c1cad6] transition hover:text-[#f0d58a]"
          >
            ×
          </button>
        </div>

        <p className="mb-6 text-sm text-[#c1cad6]">
          Create a new journal entry.
        </p>

        <EntryForm onSave={onSave} />

      </div>
    </div>
  );
}

export default AddEntryModal;