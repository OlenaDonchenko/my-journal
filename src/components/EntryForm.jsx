import { useState } from 'react';
function EntryForm({ onSave }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const newEntry = { title, date, image, text, createedAt: Date.now() };
    onSave(newEntry);
  };

  return (
    <form onSubmit={handleSubmit}>
        <label className=" mb-2 block text-sm font-medium text-[#f5f1e8]">
            Title:
        </label>
        <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
            className="w-full rounded-md border border-[#d6b56a]/50 bg-[#0f1d2d] px-4 py-3 text-[#f5f1e8] outline-none transition focus:border-[#f0d58a]"
        />
        <label className="mb-2 block text-sm font-medium text-[#f5f1e8]">
            Date:
        </label>
        <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
            style={{ colorScheme: 'dark' }}
            className="w-full rounded-md border border-[#d6b56a]/50 bg-[#0f1d2d] px-4 py-3 text-[#f5f1e8] outline-none transition focus:border-[#f0d58a]"
        />
        <div className="mb-5">
        <label className="mb-2 block text-sm font-medium text-[#f5f1e8]">
            Image:
        </label>
        <input
            type="url"
            value={image}
            placeholder="Enter image URL"
            onChange={(event) => setImage(event.target.value)}
            className="w-full rounded-md border border-[#d6b56a]/50 bg-[#0f1d2d] px-4 py-3 text-[#f5f1e8] outline-none transition focus:border-[#f0d58a]"
        />
        </div>
        <div className="mb-5">
        <label className="mb-2 block text-sm font-medium text-[#f5f1e8]">
            Text:
        </label>
        <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
            required
            placeholder="Write your journal entry here..."
            rows={6}
            className="w-full rounded-md border border-[#d6b56a]/50 bg-[#0f1d2d] px-4 py-3 text-[#f5f1e8] outline-none transition focus:border-[#f0d58a]"
        />
        </div>
        <button
            type="submit"
            className=" mt-6 w-full rounded-md bg-gradient-to-r from-[#d6b56a] to-[#f0d58a] px-6 py-3 text-sm font-semibold text-[#07111f] shadow-lg shadow-[#d6b56a]/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#d6b56a]/25"
        >
            Save Entry
        </button>
    </form>
    );
}

export default EntryForm;