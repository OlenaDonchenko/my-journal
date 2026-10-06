function Header({ onAddEntry, onHome }) {
  return (
    <header className="border-b border-[#d6b56a]/30 bg-[#07111f]/30 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <button onClick={onHome} className="flex items-center gap-3">
          <span className="text-2xl text-[#d6b56a]">✦</span>

          <span className="font-['Cormorant_Garamond'] text-2xl font-medium tracking-[0.15em] text-[#f0d58a]">
            MY JOURNAL
          </span>
        </button>

        <button onClick={onAddEntry} className="rounded-md border border-[#d6b56a] px-5 py-2 text-sm font-medium text-[#f0d58a] transition hover:bg-[#d6b56a] hover:text-[#07111f]">
          + Add Entry
        </button>

      </div>
    </header>
  );
}

export default Header;