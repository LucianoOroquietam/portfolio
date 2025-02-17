import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [popup, setPopup] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_s9tshsp",
        "template_e4xyzv7",
        formData,
        "ELH78UW8hdQwdFfDx"
      )
      .then(
        (response) => {
          console.log("Correo enviado con éxito", response);
          setIsSending(false);
          setPopup("success");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Error al enviar el correo", error);
          setIsSending(false);
          setPopup("error");
        }
      );
  };

  const closePopup = () => {
    setPopup("");
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          name="name"
          placeholder="ej. Luciano"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="ej. example@gmail.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Notas adicionales</label>
        <input
          type="text"
          name="message"
          placeholder="Describe tu proyecto o necesidades"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="send" disabled={isSending}>
          {isSending ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {popup && (
        <div className={`popup ${popup}`}>
          <div className="popup-content">
            <p>{popup === "success" ? "¡Mensaje enviado con éxito! 🎉" : "Hubo un error al enviar el mensaje. ❌"}</p>
            <button onClick={closePopup}>Cerrar</button>
          </div>
        </div>
      )}

      <div className="sidebar">
        <div className="info">
          <button className="info-btn">Información de contacto</button>
          <p>oroquietaluciano@gmail.com</p>
          <p>+54 2281-534974</p>
        </div>
        <div className="social">
          <button className="social-btn">Social</button>
          <p>
            <a
              href="https://www.linkedin.com/in/luciano-oroquieta/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <a
              href="https://github.com/LucianoOroquietam"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
