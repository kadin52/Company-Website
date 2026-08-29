"use client";
import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const data = new FormData(e.currentTarget);

    const formData = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      message: String(data.get("message") ?? ""),
      _honey: String(data.get("_honey") ?? ""),
      _subject: "Contact Form Submission",
    };

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/90d0d8fc830e7e9d0a503ae1d359cda2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        setStatus("success");
        setSuccess(true);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <FormInput name="name" type="text" placeholder="Your Name" />
          <FormInput
            name="email"
            type="email"
            placeholder="Your Email Address"
            required={true}
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          />
          <FormInput name="phone" type="tel" placeholder="Phone Number" />
          <p className="mt-2 ml-4 text-xs text-gray-500">
            Phone number & email only used to respond to this inquiry.
          </p>
          <div className="mt-2 group">
            <div className="flex rounded-md pl-3   outline-1 -outline-offset-2 outline-gray-400 ">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-gray-600 placeholder:text-gray-500 focus:outline-none sm:text-sm/6 items-start field-sizing h-50"
              />
            </div>
          </div>
          <input type="text" name="_honey" style={{ display: "none" }}></input>
          <div className="mt-6">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="rounded-none bg-orange-600 text-white p-4"
            >
              {status === "submitting" ? "Sending..." : "Send Email"}
            </button>
            {success && (
              <p className="mt-4 text-green-700">
                Your message was submitted successfully. We will get back to you
                as soon as possible!
              </p>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
function FormInput({
  name,
  type,
  placeholder,
  required = false,
  pattern,
}: {
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  pattern?: string;
}) {
  return (
    <div className="mt-2 group">
      <div className="flex items-center rounded-md pl-3   outline-1 -outline-offset-2 outline-gray-400">
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          pattern={pattern}
          className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-gray-600 placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
        />
      </div>

      <p className="mt-1 hidden text-sm text-red-500 group-has-user-invalid:block">
        Please enter a valid {name}.
      </p>
    </div>
  );
}
