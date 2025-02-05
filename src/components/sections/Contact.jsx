import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { Avatar, Button } from "@mui/joy";

const Contact = () => {
  const [alert, setAlert] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [showConfetti, setShowConfetti] = useState(false);

  const { width, height } = useWindowSize();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendMessage = async (event) => {
    event.preventDefault();

    const web3formsUrl = "https://api.web3forms.com/submit";
    const accessKey = "c8999cf9-e7fa-4190-8cad-f149b8805b00";

    if (!formData.email || !formData.subject || !formData.message) {
      setAlert("Please fill in all fields.");
      setTimeout(() => setAlert(""), 3000);
      return;
    }

    const payload = {
      access_key: accessKey,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await fetch(web3formsUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setAlert("Message sent successfully!");
        setShowConfetti(true);
        setFormData({ email: "", subject: "", message: "" });
        setTimeout(() => setShowConfetti(false), 3000);
      } else {
        setAlert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      setAlert("An error occurred. Please try again.");
    }

    setTimeout(() => setAlert(""), 3000);
  };

  return (
    <section className="relative py-8 px-8 text-white bg-gray-900" id="contact">
      {showConfetti && <Confetti width={width} height={height} />}

      <div className="max-w-4xl mx-auto mt-16">
        <SectionHeader title={"Contact."} subtitle={"Let’s Connect: Reach Out and Start the Conversation"} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 ">
          {/* Left Side: Contact Info */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 flex flex-col justify-center items-center text-center shadow-lg border border-white/20 gap-y-6">
            <Avatar
              color="primary"
              size="lg"
              sx={{
                width: { xs: 70, sm: 100 },
                height: { xs: 70, sm: 100 },
                border: "4px solid #1976d2",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FiMail size={40} />
            </Avatar>

            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Get in Touch
            </h2>
            <p className="text-base md:text-lg text-white max-w-md">
              Feel free to reach out if you have any questions or opportunities. I am open
              to collaborations and discussions.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-6">
              <Button
                component="a"
                href="mailto:abhiram.bj@gmail.com"
                variant="soft"
                startDecorator={<FiMail />}
                sx={{
                  paddingY: "0.8rem",
                  paddingX: "1.5rem",
                  fontSize: "1rem",
                  textTransform: "capitalize",
                  minWidth: "140px",
                  color: "white",
                  background: "linear-gradient(135deg, rgba(255, 85, 85, 0.5), rgba(255, 129, 129, 0.5))",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "12px",
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(255, 85, 85, 0.4)",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    background: "linear-gradient(135deg, rgba(255, 85, 85, 0.7), rgba(255, 129, 129, 0.7))",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(255, 85, 85, 0.5)",
                    transform: "scale(1.08)",
                  },
                  "&:active": {
                    transform: "scale(0.96)",
                  },
                }}
              >
                Email
              </Button>
              <Button
                component="a"
                href="tel:+13128778160"
                variant="soft"
                startDecorator={<FiPhone />}
                sx={{
                  paddingY: "0.8rem",
                  paddingX: "1.5rem",
                  fontSize: "1rem",
                  textTransform: "capitalize",
                  minWidth: "140px",
                  color: "white",
                  background: "linear-gradient(135deg, rgba(0, 200, 200, 0.4), rgba(0, 255, 180, 0.4))",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "12px",
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(0, 255, 180, 0.3)",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    background: "linear-gradient(135deg, rgba(0, 200, 200, 0.6), rgba(0, 255, 180, 0.6))",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 255, 180, 0.4)",
                    transform: "scale(1.08)",
                  },
                  "&:active": {
                    transform: "scale(0.96)",
                  },
                }}
              >
                Phone
              </Button>
              <Button
                component="a"
                href="https://linkedin.com/in/abhirambj"
                target="_blank"
                variant="soft"
                startDecorator={<FaLinkedin />}
                sx={{
                  paddingY: "0.8rem",
                  paddingX: "1.5rem",
                  fontSize: "1rem",
                  textTransform: "capitalize",
                  minWidth: "140px",
                  color: "white",
                  background: "linear-gradient(135deg, rgba(0, 123, 255, 0.4), rgba(63, 81, 181, 0.4))",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "12px",
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(0, 123, 255, 0.3)",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    background: "linear-gradient(135deg, rgba(0, 123, 255, 0.6), rgba(63, 81, 181, 0.6))",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 123, 255, 0.4)",
                    transform: "scale(1.08)",
                  },
                  "&:active": {
                    transform: "scale(0.96)",
                  },
                }}
              >
                LinkedIn
              </Button>
              <Button
                component="a"
                href="https://github.com/abhirambj"
                target="_blank"
                variant="soft"
                startDecorator={<FaGithub />}
                sx={{
                  paddingY: "0.8rem",
                  paddingX: "1.5rem",
                  fontSize: "1rem",
                  textTransform: "capitalize",
                  minWidth: "140px",
                  color: "white",
                  background: "linear-gradient(135deg, rgba(50, 50, 50, 0.5), rgba(100, 100, 100, 0.3))",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(6px)",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(50, 50, 50, 0.3)",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    background: "linear-gradient(135deg, rgba(50, 50, 50, 0.7), rgba(100, 100, 100, 0.5))",
                    boxShadow: "0 8px 12px rgba(0, 0, 0, 0.4), 0 4px 10px rgba(50, 50, 50, 0.4)",
                    transform: "scale(1.05)",
                  },
                  "&:active": {
                    transform: "scale(0.98)",
                  },
                }}
              >
                GitHub
              </Button>
            </div>
          </div>

          <form
            onSubmit={handleSendMessage}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg space-y-6 border border-white/20"
          >
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 rounded bg-gray-900 text-white focus:ring-2 focus:ring-white/20"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full p-3 rounded bg-gray-900 text-white focus:ring-2 focus:ring-white/20"
                placeholder="Enter your subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full p-3 rounded bg-gray-900 text-white focus:ring-2 focus:ring-white/20"
                placeholder="Type your message here"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(6px)",
                boxShadow: "0 0 8px rgba(0, 123, 255, 0.4), 0 0 12px rgba(138, 43, 226, 0.3)",
              }}
            >
              Send Message
            </button>
            {alert && (
              <div className="mt-4 text-center text-lg text-green-400">{alert}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
