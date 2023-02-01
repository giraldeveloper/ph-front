import { useState } from "react";
import { Form, Field, Formik } from "formik";
import { IPostInmueble } from "@1/services/interfaces";
import { Inmuebles } from "@1/services/inmueble";
import { alertInvalidInfo, alertActionSuccess } from "@1/utilities/alerts";
import { useRouter } from "next/router";
import SaveFormAlert from "@1/components/alerts/SaveFormAlert";

export default function Example() {

  const initialValuesForm = {
    bloque: '',
    numero: '',
    tipo: 'APARTAMENTO',
    activo: 'activo',
  }

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

  const [alert, setAlert] = useState()

  const onSubmitForm = (values, actions) => {
    if (!validateForm(values)) {
      return
    }

    const activo = values.activo === 'activo'
    const data = { ...values, activo }

    Inmuebles.createInmueble(data)
      .then(status => {
        if (status === 'OK') {
          alertActionSuccess()
          actions.resetForm()
          router.push('/inmueble')
        }
        else {
          alertInvalidInfo('algo salio mal')
        }
      })
  }

  return (
    <div className="overflow-hidden bg-gray py-16 px-6 lg:px-8 lg:py-10">
      <div className="relative mx-auto max-w-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Crear Inmueble</h2>
        </div>
        <div className="mt-12">
          <Formik initialValues={initialValuesForm} onSubmit={onSubmitForm}>
            <Form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  Bloque
                </label>
                <div className="mt-1">
                  <Field
                    type="text"
                    name="bloque"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Numero
                </label>
                <div className="mt-1">
                  <Field
                    type="text"
                    name="numero"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Tipo
                </label>
                <div className="mt-1">
                  <Field name="tipo" as='select' className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    <option value="APARTAMENTO">apartamento</option>
                    <option value="CASA">casa</option>
                  </Field>
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Estado
                </label>
                <div className="mt-1">
                  <Field name="activo" as='select' className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    <option value="activo">activo</option>
                    <option value="inactivo">inactivo</option>
                  </Field>
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Guardar
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

// export default function FormCreateInmueble({
//   method = 'POST',
//   person = {
//     id: '',
//     bloque: '',
//     numero: '',
//     tipo: 'APARTAMENTO',
//     activo: true
//   },
//   onSubmitForm = () => { }
// }) {

//   const router = useRouter()

//   const validateForm = (values: IPostInmueble) => {
//     if (values.bloque === '') {
//       alertInvalidInfo('por favor ingresa un bloque')
//       return false
//     }
//     if (values.numero === '') {
//       alertInvalidInfo('por favor ingresa un numero')
//       return false
//     }
//     return true
//   }

//   const handleSubmitForm = (values, actions) => {
//     if (!validateForm(values)) {
//       return
//     }

//     const activo = values.activo === 'activo'
//     const data = { ...values, activo }

//     const action = method === 'POST'
//       ?
//       Inmuebles.createInmueble(data)
//       :
//       Inmuebles.updateInmueble(person.id, data)
//     action.then(status => {
//       if (status === 'OK') {
//         alertActionSuccess()
//         actions.resetForm()
//         onSubmitForm()
//         router.push('/inmueble')
//       }
//       else {
//         alertInvalidInfo('algo salio mal')
//       }
//     })

//   }

//   const initialValuesForm = {
//     bloque: person.bloque,
//     numero: person.numero,
//     tipo: person.tipo,
//     activo: person.activo ? 'activo' : 'inactivo',
//   }

//   return (
//     <>
//       <Formik initialValues={initialValuesForm} onSubmit={handleSubmitForm}>
//         <Form className="form-create-inmueble">
//           <label htmlFor="bloque">bloque</label>
//           <Field name="bloque" type="text" />
//           <label htmlFor="numero">numero</label>
//           <Field name="numero" type="text" />
//           <label htmlFor="tipo">tipo de inmueble</label>
//           <Field name="tipo" as='select' >
//             <option value="APARTAMENTO">apartamento</option>
//             <option value="CASA">casa</option>
//           </Field>
//           <label htmlFor="activo">estado</label>
//           <Field name="activo" as='select' >
//             <option value="activo">activo</option>
//             <option value="inactivo">inactivo</option>
//           </Field>
//           <button type="submit" >guardar</button>
//         </Form>
//       </Formik>
//     </>
//   )
// }