import { SubmitHandler, useForm } from "react-hook-form";

import Input from "components/form/input";
import Swal from "sweetalert2";
import { ContentTabProfile } from "./styles";
import { useFetch } from "hooks/useFetching";
import { ButtonGrayLight, ButtonsContainer, ButtonSolid } from "styles/globals/globalButtons";
import SpinLoader from "components/loader/spinLoader";

export default function FormPassword({ closeProfile }: any) {
  const { Fetch, isLoading } = useFetch()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const new_pass_value = watch("new");
  const old_pass_value = watch("password");
  const passwordRexeg = /[!@#$%ˆ&*]/;

  const onSubmit: SubmitHandler<any> = (data) => {
    Fetch({ method: 'PATCH', url: '/heimdall/my-profile/password', data })
      .then(res => {
        closeProfile()
        if (res.success) {
          Swal.fire({
            text: "Password changed!!!",
            icon: "success",
            confirmButtonColor: "#646e9c",
            confirmButtonText: "Ok",
          });
        } else{
          Swal.fire({
            text: "Error ocurred!!!",
            icon: "error",
            confirmButtonColor: "#646e9c",
            confirmButtonText: "Ok",
          });
        }
      })
  };

  return (
    <ContentTabProfile>
      <form id='passwordForm'
        onSubmit={handleSubmit(onSubmit)}>
        <Input
          title='Current Password' type="password"
          named='password'
          required={true}
          register={{
            registro: register,
            params: {
              required: "Please enter your current password",
              minLength: {
                value: 6,
                message: "Enter at least 6 characters",
              },
              // pattern: {
              //   value: passwordRexeg,
              //   message:
              //     "Please enter at least one special character. (!@#$%ˆ&*)",
              // },
            }
          }}
          errors={errors} />
        <Input
          title='New Password' type="password"
          named='new'
          required={true}
          register={{
            registro: register,
            params: {
              required: "Please enter your new password",
              minLength: {
                value: 6,
                message: "Enter at least 6 characters",
              },
              // pattern: {
              //   value: passwordRexeg,
              //   message:
              //     "Please enter at least one special character. (!@#$%ˆ&*)",
              // },
            }
          }}
          disabled={(old_pass_value === '' || old_pass_value === undefined)}
          errors={errors} />
        <Input
          title='Re-type New Password' type="password"
          named='newRe'
          required={true}
          register={{
            registro: register,
            params: {
              required: "Please enter your new password",
              minLength: {
                value: 6,
                message: "Enter at least 6 characters",
              },
              validate: (value: any) =>
                value === new_pass_value ||
                "The password does not match",
            }
          }}
          disabled={(old_pass_value === '' || old_pass_value === undefined)}
          errors={errors} />
      </form>
      <ButtonsContainer align='start'>
        <ButtonSolid type="submit" form="passwordForm" size='medium'>
          <span>Change Password</span>
          {isLoading && <SpinLoader width='15px' />}
        </ButtonSolid>
        <ButtonGrayLight onClick={closeProfile} size='medium'>
          Cancel
        </ButtonGrayLight>
      </ButtonsContainer>
    </ContentTabProfile>
  )
}