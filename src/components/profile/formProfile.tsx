import { useContext, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UserContext from "context/userContext";

import { useFetch } from "hooks/useFetching";
import Input from "components/form/input";
import SpinLoader from "components/loader/spinLoader";

import { ButtonGrayLight, ButtonsContainer, ButtonSolid } from "styles/globals/globalButtons";
import { ContentTabProfile } from "./styles";

export default function FormProfile({ closeProfile }: any) {
  const { userInfo } = useContext(UserContext)
  const { about, first_name, last_name, occupation } = userInfo.profile
  const { Fetch, isLoading } = useFetch()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const closeProfileModal = () => {
    closeProfile(false)
  }

  useEffect(() => {
    setValue("first_name", first_name || "");
    setValue("last_name", last_name || "");
    setValue("about", about || "");
    setValue("occupation", occupation || "");
  }, []);//eslint-disable-line

  const onSubmit: SubmitHandler<any> = (data) => {
    Swal.fire({
      text: "Are you sure you want to save the changes?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#646e9c",
      cancelButtonColor: "#646e9c",
      confirmButtonText: "Yes!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Fetch({ url: '/heimdall/my-profile/update', data: data })
          .then(res => {
            closeProfile()
            if (res.success) {
              Swal.fire({
                text: "Password changed!!!",
                icon: "success",
                confirmButtonColor: "#646e9c",
                confirmButtonText: "Ok",
              });
            } else {
              Swal.fire({
                text: "Error ocurred!!!",
                icon: "error",
                confirmButtonColor: "#646e9c",
                confirmButtonText: "Ok",
              });
            }
          })
        closeProfileModal()
      }
    });
  };

  return (
    <ContentTabProfile>
      <form id='profileForm'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="inputContainer">
          <Input
            title='First Name'
            named='first_name'
            required={true}
            register={{
              registro: register,
              params: {
                required: "Please enter your First Name",
              }
            }}
            errors={errors} />
          <Input
            title='Last Name'
            named='last_name'
            required={true}
            register={{
              registro: register,
              params: {
                required: "Please enter your Last Name",
              }
            }}
            errors={errors} />
          <Input
            title='Occupation'
            named='occupation'
            register={{
              registro: register,
              params: {}
            }}
            errors={errors} />
          <Input
            title='About'
            named='about'
            register={{
              registro: register,
              params: {}
            }}
            errors={errors} />
        </div>
      </form>
      <ButtonsContainer align='start'>
        <ButtonSolid type="submit" form="profileForm" size='medium'>
          <span>Save Changes</span>
          {isLoading && <SpinLoader />}
        </ButtonSolid>
        <ButtonGrayLight onClick={closeProfile} size='medium'>Cancel</ButtonGrayLight>
      </ButtonsContainer>
    </ContentTabProfile>
  )
}