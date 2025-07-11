export default function ProjectSection() {
  return (
    <section id="portfolio" className="py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border p-4 rounded shadow">Project 1</div>
          <div className="border p-4 rounded shadow">Project 2</div>
          <div className="border p-4 rounded shadow">Project 3</div>
        </div>
      </div>
    </section>
  );
}