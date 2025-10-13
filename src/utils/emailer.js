import emailjs from "emailjs-com";

// Your EmailJS credentials (replace with your actual IDs)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


const emailer = {
  /**
   * Send contact form email using EmailJS
   */
  async send({ name, surname, email, phone, message }) {
    const templateParams = {
      from_name: `${name} ${surname}`,
      from_email: email,
      phone,
      message,
    };

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      console.log("✅ Email sent:", response);
      return response;
    } catch (error) {
      console.error("❌ Email failed:", error);
      throw error;
    }
  },
};

export default emailer;
