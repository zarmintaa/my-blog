import ContactForm from "../components/contact/contact-form";
import { Fragment } from "react";
import Head from "next/head";

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="Send me your messages" />
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default ContactPage;
