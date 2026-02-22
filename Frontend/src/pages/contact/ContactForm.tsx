import { useState } from 'react';
import style from './ContactForm.module.scss';
import { Title } from '../../Components/Title/Title';

interface FormData {
  fullName: string;

  email: string;
  comment: string;
  preferredContact: "email";
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    comment: "",
    preferredContact: "email",
  });

  const [sentMessage, setSentMessage] = useState<string>(""); // besked ved send

  // håndter inputændringer
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;


    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // send formular
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSentMessage("Formularen er sendt! ✅");
    console.log("Form Data:", formData);
  };

  return (

    <div className={style.formContainer}>
      <form className={style.contactForm} onSubmit={handleSubmit}>
        <Title text={'Kontakt os'} />
        <label className={style.label}>
          Dit navn:<span>*</span>
          <input
            className={style.input}
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>

        <label className={style.label}>
          Email: <span>*</span>
          <input
            className={style.input}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label className={style.label}>
          Din Besked:<span>*</span>
          <textarea
            className={style.textarea}
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows={4}
          />
        </label>

        <div className={style.buttons}>
          <button type="submit" className={style.button}>Send</button>
        </div>

        {sentMessage && <p className={style.sentMessage}>{sentMessage}</p>}
      </form>
    </div>
  );
}
