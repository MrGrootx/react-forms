import { useForm } from "react-hook-form";
// import { useState } from "react";
import FormInput from "../Components/Forms/FormInput";
import FormButton from "../Components/buttons/FormButton";
import FormTextArea from "../Components/Forms/FormTextArea";
import FormCheckBox from "../Components/Forms/FormCheckBox";
import FormRadiobtn from "../Components/Forms/FormRadiobtn";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // defaultValues: {
    //   fullname: "Abishek",
    // },
  });

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

          {/* <div className="bg-white">{JSON.stringify(formInputs)}</div> */}
          <div className="border-b border-r border-s border-gray-700 border-dashed w-full">
            <div className="bg-[#FEFBF6] px-2 py-2 rounded shadow shadow-[#EEF0E5] mt-6 mb-5 max-w-[500px] mx-auto ">
              <form action="" onSubmit={handleSubmit(formSubmit)} className="">
                <FormInput
                  register={register("fullname", {
                    required: "Fullname is required",
                  })}
                  name="fullname" // 🔴
                  label="Enter your Fullname"
                  placeholder="Enter your fullname"
                  errors={errors.fullname}
                  required

                  // required
                />

                <FormInput
                  register={register("email")}
                  name="email"
                  label="Enter Your Email"
                  placeholder="Enter your email address"
                  errors={errors.email}
                  required
                />

                {/* service Types */}
                <FormTextArea
                  register={register("description")}
                  name="description"
                  label="Enter Your Description"
                  placeholder="Describe your issue here!"
                />

                {/* Radio */}

                <p className="font-bold text-gray-900 mb-1 block">Gender</p>
                <div className="flex items-center gap-x-2">
                  <FormRadiobtn
                    name="gender"
                    label="Male"
                    value="Male"
                    register={register("gender")}
                  />

                  <FormRadiobtn
                    name="gender"
                    label="Female"
                    value="Female"
                    register={register("gender")}
                  />
                  <FormRadiobtn name="gender" label="Other" value="Other" />
                </div>

                <FormCheckBox
                  register={register("privacycheck")}
                  name="privacycheck"
                  label={"I agree to the Privacy policy."}
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
