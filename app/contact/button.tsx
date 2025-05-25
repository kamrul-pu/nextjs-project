"use client";

export default function ButtonComponent() {
  return (
    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={() => alert("Button clicked!")}>
      Click Me
    </button>
  );
}