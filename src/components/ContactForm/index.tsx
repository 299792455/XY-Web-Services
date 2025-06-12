// components/Contact.tsx

export default function ContactForm() {
  return (
    <section id="contact" className="py-32 px-4 min-h-[400px]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-4xl font-bold uppercase relative">
          Contact
        </h2>
        <span className="block w-12 h-2 mt-4 mx-auto bg-gradient-to-r from-indigo-900/90 to-purple-900/90"></span>
        <p className="text-center  mt-4 mb-12">Une question, un projet ou simple curiosité..n'hésitez pas à nous contacter</p>

        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Nom"
            name="name"
            required
            className="w-full p-3 bg-gray-100 text-gray-800 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="w-full p-3 bg-gray-100 text-gray-800 rounded"
          />
          <input
            type="number"
            placeholder="Telephone"
            name="number"
            required
            className="w-full p-3 bg-gray-100 text-gray-800 rounded"
          />
          <textarea
            placeholder="Votre message"
            name="message"
            required
            className="w-full p-3 h-40 bg-gray-100 text-gray-800 rounded resize-none"
          ></textarea>
          <input
            type="submit"
            value="Envoyer"
            className="w-fit px-8 py-3 bg-gradient-to-r from-indigo-900/90 to-purple-900/90 text-white font-semibold uppercase rounded hover:opacity-80 cursor-pointer"
          />
        </form>
      </div>
    </section>
  );
}
