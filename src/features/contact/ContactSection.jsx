export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border p-3 rounded" />
          <input type="email" placeholder="Your Email" className="w-full border p-3 rounded" />
          <textarea placeholder="Your Message" className="w-full border p-3 rounded h-32"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">Send Message</button>
        </form>
      </div>
    </section>
  );
}