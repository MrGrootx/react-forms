import { useForm } from "react-hook-form";
// import { useState } from "react";
import FormInput from "../Components/Forms/FormInput";
import FormButton from "../Components/buttons/FormButton";
import FormTextArea from "../Components/Forms/FormTextArea";
import FormCheckBox from "../Components/Forms/FormCheckBox";
import FormRadiobtn from "../Components/Forms/FormRadiobtn";

import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

const validationData = z.object({
  fullname: z
    .string()
    .min(3, "Fullname must be at least 3 characters")
    .max(15, { message: "fullname is to long" }),
  email: z
    .string()
    .email({ message: "Enter a valid email address", required_error: "yes" })
    .trim()
    .toLowerCase(),
  description: z
    .string()
    .min(10, { message: "Description must be at least 20 characters" })
    .max(120),
  privacycheck: z.boolean().refine((v) => v === true, { // For CheckBox
    message: "Please accept our privacy policy",
  }),
});

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationData),
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
                  register={register("fullname")}
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

                <FormTextArea
                  register={register("description")}
                  name="description"
                  label="Enter Your Description"
                  placeholder="Describe your issue here!"
                  errors={errors.description}
                  required
                />

                {/* Radio */}

                <div className="flex">
                  <p className="font-bold text-gray-900 mb-1 block">Gender</p>
                  <span className="ml-1 text-red-500">*</span>
                </div>

                <div className="flex items-center gap-x-2">
                  <FormRadiobtn
                    register={register("gender")}
                    name="gender"
                    label="Male"
                    value="Male"
                    errors={errors.gender}
                  />

                  <FormRadiobtn
                    name="gender"
                    label="Female"
                    value="Female"
                    register={register("gender")}
                    errors={errors.gender}
                    required={true}
                  />
                  <FormRadiobtn name="gender" label="Other" value="Other" />
                </div>

                <FormCheckBox
                  register={register("privacycheck")}
                  name="privacycheck"
                  label={"I agree to the Privacy policy."}
                  errors={errors.privacycheck}
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
