import { Form, Field, Formik } from "formik";
import { IPostInmueble } from "@/services/interfaces";
import { Inmuebles } from "@/services/inmueble";
import { alertInvalidInfo, alertActionSuccess } from "@/utilities/alerts";
import { useRouter } from "next/router";

export default function FormCreateInmueble({ method = 'POST',
  person = {
    id: '',
    bloque: '',
    numero: '',
    tipo: 'APARTAMENTO',
    activo: true
  },
  onSubmitForm = () => { } }) {

  const router = useRouter()

  const validateForm = (values: IPostInmueble) => {
    if (values.bloque === '') {
      alertInvalidInfo('por favor ingresa un bloque')
      return false
    }
    if (values.numero === '') {
      alertInvalidInfo('por favor ingresa un numero')
      return false
    }
    return true
  }

  const handleSubmitForm = (values, actions) => {
    if (!validateForm(values)) {
      return
    }

    const activo = values.activo === 'activo'
    const data = { ...values, activo }

    const action = method === 'POST'
      ?
      Inmuebles.createInmueble(data)
      :
      Inmuebles.updateInmueble(person.id, data)
    action.then(status => {
      if (status === 'OK') {
        actions.resetForm()
        onSubmitForm()
        router.push('/inmueble')
      }
      else {
        alertInvalidInfo('algo salio mal')
      }
    })

  }

  const handleClickPersona = (e) => {
    e.preventDefault()
  }

  const initialValuesForm = {
    bloque: person.bloque,
    numero: person.numero,
    tipo: person.tipo,
    activo: person.activo ? 'activo' : 'inactivo',
  }

  return (
    <>
      <Formik initialValues={initialValuesForm} onSubmit={handleSubmitForm}>
        <Form className="form-create-inmueble">
          <label htmlFor="bloque">bloque</label>
          <Field name="bloque" type="text" />
          <label htmlFor="numero">numero</label>
          <Field name="numero" type="text" />
          <label htmlFor="tipo">tipo de inmueble</label>
          <Field name="tipo" as='select' >
            <option value="APARTAMENTO">apartamento</option>
            <option value="CASA">casa</option>
          </Field>
          <label htmlFor="activo">estado</label>
          <Field name="activo" as='select' >
            <option value="activo">activo</option>
            <option value="inactivo">inactivo</option>
          </Field>
          <button onClick={handleClickPersona}>Crear persona</button>
          <button type="submit" >guardar</button>
        </Form>
      </Formik>
    </>
  )
}