import { useState } from "react";
import FormInput from "../Components/Forms/FormInput";
import FormButton from "../Components/buttons/FormButton";

const ContactPage = () => {
  // 🔴
  const [formInputs, setFormInputs] = useState({ Fullname: "", email: "" });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setFormInputs((oldState) => ({
      ...oldState,
      [name]: value,
    }));
  };

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
                // Forms input Object key name and component must be same
                name="Fullname" // 🔴
                type="text"
                label="Enter your Fullname"
                placeholder="Enter your fullname"
                value={formInputs.Fullname}
                handleOnChange={handleInputs}
              />

              <FormInput
                name="email"
                type="email"
                label="Enter Your Email"
                placeholder="Enter your email address"
                value={formInputs.email}
                handleOnChange={handleInputs}
              />
            </form>
          </div>

          <div>
            <FormButton name="Submit" />
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
