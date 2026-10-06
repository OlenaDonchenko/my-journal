function ViewEntryModal({ entry, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6">
      <div className="w-full max-w-2xl rounded-xl border border-[#d6b56a]/40 bg-[#07111f] p-8 shadow-2xl">

        <button
          onClick={onClose}
          className="mb-6 text-sm text-[#c1cad6] transition hover:text-[#f0d58a]"
        >
          ← Back
        </button>

        <h2 className="font-['Cormorant_Garamond'] text-4xl text-[#f0d58a]">
          {entry.title}
        </h2>

        <p className="mt-2 text-sm text-[#8fa1b5]">
          {entry.date}
        </p>

        {entry.image && (
          <img
            src={entry.image}
            alt={entry.title}
            className="mt-6 max-h-96 w-full rounded-lg object-cover"
          />
        )}

        <p className="mt-6 leading-7 text-[#f5f1e8]">
          {entry.text}
        </p>

      </div>
    </div>
  );
}

export default ViewEntryModal;