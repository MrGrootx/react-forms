import { useForm } from "react-hook-form";
import { useState } from "react";
import FormInput from "../Components/Forms/FormInput";
import FormButton from "../Components/buttons/FormButton";
import FormTextArea from "../Components/Forms/FormTextArea";
import FormCheckBox from "../Components/Forms/FormCheckBox";

const ContactPage = () => {
  // 🔴
  const [formInputs, setFormInputs] = useState({
    fullname: "",
    email: "",
    description: "",
    privacycheck: false,
  });

  // Handle inputs
  const handleInputs = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormInputs((oldState) => ({
        ...oldState,
        [name]: checked,
      }));
    } else {
      setFormInputs((oldState) => ({
        ...oldState,
        [name]: value,
      }));
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (e) => {
    console.log(e);
    alert("Form Subbmited");
  };

  return (
    <>
      <main className="bg-[#1F2544] h-screen">
        <section className="container mx-auto p-4">
          <div className="bg-[#EEEDEB] px-2 py-2 rounded shadow shadow-[#EEF0E5] ">
            <h4 className="text-2xl font-bold">Contact Us</h4>
          </div>

          <div className="bg-white">{JSON.stringify(formInputs)}</div>
          <div className="border-b border-r border-s border-gray-700 border-dashed w-full">
            <div className="bg-[#FEFBF6] px-2 py-2 rounded shadow shadow-[#EEF0E5] mt-6 mb-5 max-w-[500px] mx-auto ">
              <form action="" onSubmit={handleSubmit(formSubmit)} className="">
                <FormInput
                  // Forms input Object key name and component name must be same
                  register={register}
                  name="fullname" // 🔴
                  label="Enter your Fullname"
                  placeholder="Enter your fullname"
                  value={formInputs.fullname}
                  handleOnChange={handleInputs}
                  errors={errors}

                  // required
                />

                <FormInput
                  register={register}
                  name="email"
                  label="Enter Your Email"
                  placeholder="Enter your email address"
                  value={formInputs.email}
                  handleOnChange={handleInputs}
                  // required={true}
                  errors={errors}
                />

                <FormTextArea
                  name="description"
                  label="Enter Your Description"
                  placeholder="Describe your issue here!"
                  value={formInputs.description}
                  handleOnChange={handleInputs}
                  // required
                />

                <FormCheckBox
                  name="privacycheck"
                  label={"I agree to the Privacy policy."}
                  handleOnChange={handleInputs}
                />

                <div>
                  <FormButton name="Submit" />
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
