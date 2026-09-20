const Subcription = () => {
  return (
    <div className="flex flex-col justify-around gap-8 md:flex-row md:gap-10">
      <div className="w-full md:w-80">
        <h2 className="text-2xl font-semibold capitalize">
          Interested in working together?
        </h2>

        <p className="mt-2">
          Leave your details and I will get back to you about opportunities,
          collaborations, or project work.
        </p>
      </div>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="w-full md:max-w-xl"
      >
        <input
          type="hidden"
          name="access_key"
          value="8682f14b-96d9-47dd-9ebb-5fae1133fa46"
        />

        <input
          type="hidden"
          name="subject"
          value="New portfolio contact"
        />

        <input
          type="hidden"
          name="from_name"
          value="Portfolio website"
        />

        <div className="grid gap-3 md:grid-cols-2">
          <label className="flex flex-col gap-1 text-sm">
            Name
            <input
              type="text"
              name="name"
              required
              autoComplete="name"
              placeholder="Your name"
              className="rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm">
            Email
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
        </div>

        <label className="mt-3 flex flex-col gap-1 text-sm">
          Message
          <textarea
            name="message"
            required
            rows="4"
            placeholder="How can we work together?"
            className="resize-y rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>

        <label className="mt-3 flex items-start gap-2 text-sm">
          <input
            type="checkbox"
            name="consent"
            value="accepted"
            required
            className="mt-1 cursor-pointer"
          />

          <span>I agree to be contacted about this message.</span>
        </label>

        <button
          type="submit"
          className="mt-4 border px-10 py-2 font-medium capitalize tracking-wider bg-black text-white dark:bg-white dark:text-black"
        >
          send message
        </button>
      </form>
    </div>
  );
};

export default Subcription;