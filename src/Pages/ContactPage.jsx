import { useState } from "react";
import FormInput from "../Components/Forms/FormInput";
import FormButton from "../Components/buttons/FormButton";
import FormTextArea from "../Components/Forms/FormTextArea";

const ContactPage = () => {
  // 🔴
  const [formInputs, setFormInputs] = useState({
    Fullname: "",
    email: "",
    description: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormInputs((oldState) => ({
      ...oldState,
      [name]: value,
    }));
  };

  const submitFormToServer = (e) => {
    e.preventDefault();

    console.log(formInputs);
    alert("Form submitted, successfully!");
  };

  return (
    <>
      <main className="bg-[#1F2544] h-screen">
        <section className="container mx-auto p-4">
          <div className="bg-[#EEEDEB] px-2 py-2 rounded shadow shadow-[#EEF0E5]">
            <h4 className="text-2xl font-bold">Contact Us</h4>
          </div>

          <div className="bg-[#FEFBF6] px-2 py-2 rounded shadow shadow-[#EEF0E5] mt-6 mb-5">
            <form action="" onSubmit={submitFormToServer}>
              <FormInput
                // Forms input Object key name and component name must be same
                name="Fullname" // 🔴
                label="Enter your Fullname"
                placeholder="Enter your fullname"
                value={formInputs.Fullname}
                handleOnChange={handleInputs}
                required
              />

              <FormInput
                name="email"
                label="Enter Your Email"
                placeholder="Enter your email address"
                value={formInputs.email}
                handleOnChange={handleInputs}
                required={true}
              />

              <FormTextArea
                name="description"
                label="Enter Your Description"
                placeholder="Describe your issue here!"
                value={formInputs.description}
                handleOnChange={handleInputs}
                required
              />

              <div>
                <FormButton name="Submit" />
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
