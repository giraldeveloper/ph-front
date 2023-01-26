import styles from "./styles";
import Head from "next/head";
import { Formik, Form, Field } from "formik";

export default function Create(): JSX.Element {

  const initialValuesForm = {
    name: ""
  }

  const handleSubmitForm = () => {

  }

  return (
    <>
      <Head>
        <title>admin - create inmueble</title>
        <meta name="description" content="form to create a property" />
      </Head>
      <main>
        <div className="page-content">
          <Formik initialValues={initialValuesForm} onSubmit={handleSubmitForm}>
            <Form>
              <Field name="name" type="text" placeholder="nombre" />
            </Form>
          </Formik>
        </div>
      </main>
      <style jsx>{styles}</style>
    </>
  )
}