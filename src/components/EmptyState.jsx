function EmptyState({onAddEntry, onViewEntries, hasEntries}) {
  return (
    <section className="flex min-h-[calc(100vh-81px)] flex-col items-center justify-center px-6 py-20 text-center">
      
      <div className="mb-4 text-3xl text-[#d6b56a]">
        ✦
      </div>

      <h1 className="font-['Cormorant_Garamond'] text-7xl font-medium tracking-[0.08em] text-[#f0d58a] md:text-8xl">
        MY JOURNAL
      </h1>

      <p className="mt-5 text-xs font-medium uppercase leading-7 tracking-[0.4em] text-[#f5f1e8]">
        YOUR PERSONAL SPACE
        <br />
        FOR EVERYDAY MOMENTS
      </p>

      <div className="mb-3 text-3xl text-[#d6b56a]">
        ✧
      </div>

      <button onClick={hasEntries ? onViewEntries : onAddEntry} className="mt-8 flex items-center gap-3 rounded-md border border-[#d6b56a] bg-gradient-to-r from-[#d6b56a] to-[#f0d58a] px-7 py-4 text-sm font-semibold text-[#07111f] shadow-lg shadow-[#d6b56a]/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#d6b56a]/25">
        {hasEntries ? "View Entries" : "Add Entry"}
      </button>

    </section>
  );
}

export default EmptyState;