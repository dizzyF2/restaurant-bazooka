

function ContactUs() {

    return (
        <div className="min-h-screen bg-inherit flex items-center justify-center text-white mt-10">
            <div className="w-full max-w-xl bg-[#1a1a1a] p-8 rounded-xl shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-primary">Contact Us</h2>
                <form className="flex flex-col gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="px-4 py-2 rounded bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="px-4 py-2 rounded bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="px-4 py-2 rounded bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    className="px-4 py-2 rounded bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                />
                <button
                    type="submit"
                    className="mt-4 bg-primary hover:bg-orange-500 text-white py-2 rounded font-semibold transition-colors duration-300"
                >
                    Send
                </button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;