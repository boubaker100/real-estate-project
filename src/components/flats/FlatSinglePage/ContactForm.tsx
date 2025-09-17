export default function ContactForm() {
  return (
    <div className="w-screen flex flex-col items-center justify-center my-14">
      <p className="font-medium text-3xl text-center mb-6">
        Interested? Contact us below!
      </p>
      <form action="#">
        <div className="bg-[#FBFBFB] p-8 sm:p-7 w-96 customBoxShadow rounded-full sm:-translate-x-24 translate-y-8 sm:translate-y-10 relative">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="bg-[#E3E3E3] p-2 rounded-md w-full"
          />
        </div>
        <div className="bg-[#FBFBFB] p-10 pb-2 customBoxShadow rounded-[40%] sm:rounded-full sm:translate-x-18 translate-y-4 flex flex-col items-center">
          <textarea
            className="bg-[#E3E3E3] p-2 rounded-md w-5/6"
            name="message"
            rows={8}
            placeholder="Your message"
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="hover:pointer bg-[#008EF4] text-white px-7 py-3 rounded-3xl mt-4"
          />
        </div>
      </form>
    </div>
  );
}
