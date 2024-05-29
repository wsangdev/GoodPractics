// FormularioRegister.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { User, useAuthStore } from '../../../Store/store';
import InputLabelStyle from '../../../Styles/design/inputsForms/InputLabelStyle';

const FormularioRegister: React.FC = () => {
  const { register, handleSubmit } = useForm<User>();
  const setUser = useAuthStore(state => state.setUser);

  const submit = (values: User) => {
    console.log('esto es lo que almaceNA este formulario', values)
    setUser(values);
  };

  return (
    <form className="max-w-md mx-auto bg-slate-600 bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg" onSubmit={handleSubmit(submit)} >
      <InputLabelStyle type='text' {...register("username")} label='Username' placeholder='' />
      <InputLabelStyle type="password" {...register("password")} label="Password" placeholder='' />
      <InputLabelStyle type="email" {...register("email")} label="Email" placeholder='' />
      <InputLabelStyle type="text" {...register("role")} label="Role" placeholder='' />
      <div className='flex justify-center mt-4'>
        <button type="submit" className="tlw-btn bg-orange-500"> Register </button>
      </div>
    </form>
  );
};

export default FormularioRegister;
