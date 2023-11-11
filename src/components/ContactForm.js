import {Formik} from "formik"
import * as Yup from 'yup';
import { ContactsForm, ContactsField } from "./ContactForm.styled";

const contactSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/g, 'Invalid phone number')
    .required('Required')
})

export const ContactForm = ({onAdd}) => {
    return(
        <Formik initialValues={{
            name: '',
            number: ''
        }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
            onAdd(values);
            actions.resetForm();
        }}>
            <ContactsForm>
                <label>
                    Name
                    <ContactsField type="text" name="name" required />
                </label>
                <label>
                    Number
                    <ContactsField type="tel" name="number" required />
                </label>

                <button type="submit">Add contact</button>
            </ContactsForm>
        </Formik>
    )
}