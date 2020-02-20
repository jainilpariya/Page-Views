import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Error from './Error'
import history from '../../history'
import './log.css'

const validationSchema = Yup.object().shape({
    name: Yup.string().min(1, "Must have a character").max(255, "Must be shorter than 255").required("Must enter the name"),
    email: Yup.string().email("Must be a valid email address").max(255, "Must be shorter than 255").required("Must enter an email")
})

class Login extends React.Component {
    render() {
        return (
            <>
                <div>
                    <h1>Login Page</h1>
                    <hr />
                </div>
                <Formik
                    initialValues={{ name: "", email: "" }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setSubmitting(true)
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2))
                            history.push("/tableIndex")
                        }, 500)
                    }}>
                    {({ values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="form-content">
                                    <div className="form-align">
                                        <div className="form-name">
                                            <div><label className="form_label" htmlFor="name">Name</label></div>
                                            <div><input
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Enter your name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                                className="form_ip"
                                            /></div>
                                            <Error touched={touched.name} message={errors.name} />
                                        </div>
                                        <div className="form-email">
                                            <div><label className="form_label" htmlFor="email">Email</label></div>
                                            <div><input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Enter your email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                className="form_ip"
                                            /></div>
                                            <Error touched={touched.email} message={errors.email} />
                                        </div>
                                        <div className="form-submit">
                                            <button type="submit" disabled={isSubmitting} className="button">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        )}
                </Formik>
            </>
        )
    }
}

export default Login
