import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { SiSsrn } from "react-icons/si";
import Alert from "./Alert";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [isLoading, setisLoading] = useState(false);
  const [showAlert, setshowAlert] = useState(false);
  const [alertType, setalertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const showAlertMessage = (type, message) => {
    setalertType(type);
    setshowAlert(true);
    setAlertMessage(message);
    setTimeout(() => setshowAlert(false), 2000); // Hide after 2 sec
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);

    try {
      await emailjs.send(
        "service_rn7hnfb",
        "template_k01jtoq",
        {
          from_name: formData.name,
          to_name: "Indiphile",
          from_email: formData.email,
          to_email: "Indiemenziwa@gmail.com",
          message: formData.message,
        },
        "VgdRZnoGFo8BXmqxc"
      );

      setisLoading(false);
      setFormData({ name: "", email: "", message: "" });

      showAlertMessage("success", "! Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      showAlertMessage("danger", "! . Please try again later.");
      setisLoading(false);
    }
  };
  return (
    <section className="relative flex items-center c-space section-spacing">
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading mb-4">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            I'm interested in hearing from you!
          </p>
        </div>
        {/* service_rn7hnfb */}
        {/* template_k01jtoq */}
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              placeholder="Indiphile Menziwa"
              className="field-input field-input-focus"
              required
            />
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Indiemenziwa@gmail.com"
              className="field-input field-input-focus"
              required
            />
            <label htmlFor="email" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="what do you want to say?.."
              className="field-input field-input-focus"
              autoComplete="message"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
