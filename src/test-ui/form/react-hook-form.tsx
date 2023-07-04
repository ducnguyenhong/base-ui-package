import { Button } from 'antd';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Input } from '../../input';

const ReactHookForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    setTimeout(
      () =>
        reset({
          FirstName: '',
          LastName: '',
          Email: ''
        }),
      1000
    );
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group">
        <label className="label">Firstname</label>
        <Controller
          render={({ field }) => <Input {...field} />}
          name="FirstName"
          control={control}
          defaultValue=""
          rules={{ required: true }}
        />
        {errors.FirstName && <span className="error">This field is required</span>}
      </div>
      <div className="input-group">
        <label className="label">LastName</label>
        <Controller
          name="LastName"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => <Input {...field} />}
        />
        {errors.LastName && <span className="error">This field is required</span>}
      </div>
      <div className="input-group">
        <label className="label">Email</label>
        <Controller
          render={({ field }) => <Input {...field} />}
          name="Email"
          control={control}
          defaultValue=""
          rules={{
            pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            required: true
          }}
        />
        {errors.Email && <span className="error">Please add a valid email</span>}
      </div>

      <Button type="primary" htmlType="submit">
        Register
      </Button>
    </form>
  );
};

export default ReactHookForm;
