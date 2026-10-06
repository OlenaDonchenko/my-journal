function EntryList({ entries, onEntryClick }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...entries].sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0)).map((entry, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-[#d6b56a]/40 bg-[#0f1d2d]/90 shadow-xl"
            onClick={() => onEntryClick(entry)}
          >
            {entry.image && (
              <img
                src={entry.image}
                alt={entry.title}
                className="w-full h-56 object-cover"
              />
            )}
            <div className="p-6">
              <h3 className="font-['Cormorant_Garamond'] text-3xl font-medium text-[#f0d58a]">
                {entry.title}
              </h3>

              <p className="mt-2 text-sm text-[#8fa1b5]">
                {entry.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EntryList;