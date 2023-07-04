import { Field, FieldProps, Form, Formik } from 'formik';
import React from 'react';
import { Input } from '../../input';

interface MyFormValues {
  firstName: string;
}

const FormikTest: React.FC<{}> = () => {
  const initialValues: MyFormValues = { firstName: '' };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName">
            {(fieldProps: FieldProps) => {
              const {
                field, // { name, value, onChange, onBlur }
                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                meta
              } = fieldProps;
              return (
                <div>
                  <Input {...field} />
                  {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                </div>
              );
            }}
          </Field>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikTest;
