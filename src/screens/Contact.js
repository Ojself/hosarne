import "./contact.css";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import emailjs from "emailjs-com";
import * as yup from "yup";

const CustomErrorMessage = ({ show, msg }) => {
  const visibility = show ? "visible" : "invisible";
  const errorMessage = msg || "-"; // Prevents form to jump up when error message is empty
  return <p className={`text-kb_warning ${visibility}`}>{errorMessage}</p>;
};

const fieldStyle = { border: "1px solid #C4C4C4" };

const validationSchema = yup.object({
  "Ditt navn": yup.string().required("Navn er påkrevd!").max(55),
  "E-post": yup
    .string()
    .email("Gyldig e-post er påkrevd")
    .required("E-post er påkrevd!")
    .max(128),
  Emne: yup.string().max(55, "Emne er for lang!"),
  Melding: yup
    .string()
    .max(2048, "Meldingen er for lang!")
    .required("Melding er påkrevd!")
    .min(3, "Meldingen er for kort"),
});

const Contact = () => {
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);
  const feedbackColor = feedbackSuccess ? "text-kb_success" : "text-kb_warning";

  const handleFeedback = (msg, success) => {
    setFeedbackMessage(msg);
    setFeedbackSuccess(success);
    setTimeout(() => {
      setFeedbackMessage("");
      setFeedbackSuccess(false);
    }, 5000);
  };

  const sendEmail = async (data, actions) => {
    try {
      emailjs.send(
        "service_luys9ic",
        "template_8nx9i5s",
        {
          Emne: data.Emne,
          Melding: data.Melding,
          navn: data["Ditt navn"],
          Epost: data["E-post"],
        },
        "user_0PNADA1F5aiEMIhbuYNcW"
      );
      actions.resetForm();
      handleFeedback("Takk for din henvendelse!", true);
    } catch (e) {
      console.error("Error sending email:\n", e);
      handleFeedback("Noe gikk galt, prøv igjen senere!", false);
    }
  };

  return (
    <main className='flex flex-col items-center min-h-screen '>
      <section className='contact-main-banner flex justify-around'></section>
      <section className='h-2/3 w-4/5 lg:w-1/3'>
        <h1 className='text-kb_blue text-3xl font-bold my-8'>Kontakt oss</h1>

        <Formik
          initialValues={{
            "Ditt navn": "",
            "E-post": "",
            Emne: "",
            Melding: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(data, actions) => sendEmail(data, actions)}
        >
          {({ errors, touched, isSubmitting }) => {
            return (
              <Form className='flex flex-col'>
                <label className='text-kb_gray font-bold ' htmlFor='Ditt navn'>
                  Ditt navn:
                </label>
                <Field
                  id='Ditt navn'
                  name='Ditt navn'
                  type='input'
                  style={fieldStyle}
                  className='h-10 mb-2 pl-2'
                />
                <CustomErrorMessage
                  show={errors["Ditt navn"] && touched["Ditt navn"]}
                  msg={errors["Ditt navn"]}
                />
                {/* <ErrorMessage name="Ditt navn" className="invalid-feedback" /> */}
                <label className='text-kb_gray font-bold' htmlFor='E-post'>
                  E-post:
                </label>
                <Field
                  id='E-post'
                  name='E-post'
                  style={fieldStyle}
                  className='h-10 mb-2 pl-2'
                  type='email'
                />
                <CustomErrorMessage
                  show={errors["E-post"] && touched["E-post"]}
                  msg={errors["E-post"]}
                />
                {/* <ErrorMessage name="E-post" className="invalid-feedback" /> */}
                <label className='text-kb_gray font-bold' htmlFor='Emne'>
                  Emne:
                </label>
                <Field
                  id='Emne'
                  name='Emne'
                  style={fieldStyle}
                  className='h-10 mb-2 pl-2'
                  type='text'
                />
                <CustomErrorMessage
                  show={errors["emne"] && touched["emne"]}
                  msg={errors["emne"]}
                />
                {/* <ErrorMessage name="emne" className="invalid-feedback" /> */}
                <label className='text-kb_gray font-bold' htmlFor='Melding'>
                  Melding:
                </label>
                <Field
                  as='textarea'
                  id='Melding'
                  name='Melding'
                  style={fieldStyle}
                  className='h-40 mb-2 pl-2 pt-2'
                  type='text'
                />
                <CustomErrorMessage
                  show={errors["Melding"] && touched["Melding"]}
                  msg={errors["Melding"]}
                />
                {/* <ErrorMessage name="Melding" className="invalid-feedback" /> */}
                <button
                  aria-label='Send'
                  disabled={isSubmitting}
                  type='submit'
                  className='rounded bg-kb_blue w-full lg:w-1/3 m-auto py-2 text-kb_white'
                >
                  Send
                </button>
                <p className={`text-center h-1 ${feedbackColor}`}>
                  {!!feedbackMessage && feedbackMessage}
                </p>
              </Form>
            );
          }}
        </Formik>
      </section>
      <section className='flex flex-col justify-between my-12 text-center w-2/3 lg:w-1/3'>
        <h1 className='text-xl lg:text-2xl font-bold mb-2'>Informasjon</h1>
        <address className='not-italic text-kb_gray text-sm font-light'>
          Knut Bjerke AS <br />
          Granittveien 10 <br />
          <br />
          Moss og Våler næringspark <br />
          1592 Våler i Viken <br />
          <br />
          Tlf: 69289933/mobil 90519095 <br />
          <br />
          Fakturaadresse:
          <br /> frimapost@Knutbjerke.no
          <br />
          <br />
          org.nr 910 611 879
        </address>
      </section>
    </main>
  );
};

export default Contact;
