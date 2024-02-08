import FormInput from "../Components/Forms/FormInput";
import FormButton from "../Components/buttons/FormButton";

const ContactPage = () => {
  return (
    <>
      <main className="bg-[#1F2544] h-screen">
        <section className="container mx-auto p-4">
          <div className="bg-[#EEEDEB] px-2 py-2 rounded shadow shadow-[#EEF0E5]">
            <h4 className="text-2xl font-bold">Contact Us</h4>
          </div>

          <div className="bg-[#FEFBF6] px-2 py-2 rounded shadow shadow-[#EEF0E5] mt-6 mb-5">
            <form className="">
              <FormInput
                name="fullName"
                type="text"
                label="Full Name"
                placeholder="Enter your name"
              />
              <FormInput
                name="email"
                type="email"
                label="Enter Your Email"
                placeholder="Enter your email address"
              />
            </form>
          </div>

          <div>
            <FormButton name="Submit"/>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
