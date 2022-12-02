import { useState, useEffect } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import Swal from "sweetalert2";

import { useFetch, useFetching } from "hooks/useFetching";
import { useFormatArray } from "hooks/useFormatArray";

import PageModal from "components/modal/pageModal";
import SelectModal from "components/modal/selectModal";
import SpinLoader from "components/loader/spinLoader";

import { ButtonGrayLight, ButtonSolid, ButtonsContainer, ButtonRedSolid } from "styles/globals/globalButtons";
import { MediacodesSelectModalContainer } from "./styles";

export default function MediacodesSelectModal({ mediacodes, user: userData, isOpen, closeModal }: any) {
  const { user, mutate } = userData

  const { data: mediacodesUser } = useFetching(`/heimdall/users/mediacodes/${user.id}/list`)
  const [isOpenSelect, setIsOpenSelect] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [selectedValues, setSelectedValues]: any = useState(mediacodesUser)
  const [selectableValues, setSelectableValues] = useState(mediacodes)
  const [checkedValues, setCheckedValues] = useState([])
  const { deleteItemsFromArray } = useFormatArray()
  const [isEditMode, setIsEditMode] = useState(false)

  const { Fetch, isLoading } = useFetch()

  useEffect(() => {
    if (!mediacodesUser) return
    setSelectedValues(mediacodesUser)
  }, [mediacodesUser])

  useEffect(() => {
    if (!mediacodes) return
    setSelectableValues(mediacodes.filter((dat: any) => dat.media_code.includes(searchValue.toUpperCase())))
  }, [searchValue])


  const selectValue = (mediacode: any) => {
    if (!selectedValues.find((se: any) => se.media_code === mediacode.media_code)) {
      setSelectedValues((prev: any) => prev.concat(mediacode))
    }
    setIsOpenSelect(false)
  }

  const addCheckedValues = (mediacode: any, event: any) => {
    const checked = event.target.checked
    if (checked) {
      setCheckedValues(prev => prev.concat(mediacode))
    } else {
      setCheckedValues(checkedValues.filter((value: any) => value.media_code !== mediacode.media_code))
    }
  }

  const addAllToCheckedValues = (event: any) => {
    const checked = event.target.checked
    const checkboxArray: any = document.querySelectorAll('.checkboxMediacodeItem')
    checkboxArray.forEach((checkoxItem: any) => checkoxItem.checked = checked)
    setCheckedValues((checked) ? selectedValues : [])
  }

  const deleteCheckedValues = () => {
    const finalArray = deleteItemsFromArray(selectedValues, checkedValues, 'media_code')
    setSelectedValues(finalArray)
  }

  useEffect(() => {
    if (selectedValues?.length === 0) setIsEditMode(false)
  }, [selectedValues])


  const updateMediacodes = () => {
    Fetch({ url: `/heimdall/users/mediacodes/${user.id}/update`, data: {data: selectedValues} })
      .then(res => {
        mutate()
        if (res.success) {
          closeModal()
          Swal.fire({
            text: "Group Created!",
            icon: "success",
            confirmButtonText: 'Ok',
            confirmButtonColor: '#a5dc86',
          })
        }
      })
  }

  return (<>
    <PageModal
      width='500px'
      height="auto"
      title='Edit Mediacodes User'
      closeModal={closeModal}
      isOpen={isOpen}
    >
      <MediacodesSelectModalContainer status={isOpenSelect}>
        <SelectModal
          width='100%'
          buttonWidth='100%'
          buttonElement={
            <div className="buttonSelectWithInput" onClick={() => setIsOpenSelect(true)}>
              <input placeholder="Select Mediacodes" onChange={(e) => setSearchValue(e.target.value)} />
              <IoMdArrowDropdown />
            </div>
          }
        >
          {selectableValues.map((mediacode: any, index: any) => <div className="optionItem" onClick={() => selectValue(mediacode)} key={index}>
            {mediacode.media_code}
          </div>)
          }
        </SelectModal>
        <div className="selectedValuesContainer">
          <div className="selectedValue">
            {
              isEditMode &&
              <div className="checkboxMediacode">
                <input type="checkbox" name="" className="checkboxMediacodeItem" onClick={addAllToCheckedValues} />
              </div>
            }
            <p>MEDIACODES</p>
          </div>
          {
            (mediacodesUser)
              ? <>
                {selectedValues?.map((mediacode: any, index: any) => <div className="selectedValue" key={index}>
                  {
                    isEditMode &&
                    <div className="checkboxMediacode">
                      <input type="checkbox" name="" className='checkboxMediacodeItem' onClick={(e) => addCheckedValues(mediacode, e)} />
                    </div>
                  }
                  <p>{mediacode.media_code}</p>
                </div>)
                }
              </>
              : <div className="loaderContainer">
                <SpinLoader />
              </div>
          }
        </div>
        <div className="buttonsContainer">
          <ButtonsContainer align='start'>
            {(selectedValues?.length > 0) && <>
              <ButtonGrayLight size='medium' onClick={() => setIsEditMode(!isEditMode)}>EDIT</ButtonGrayLight>
              {(isEditMode) && <ButtonRedSolid size='medium' onClick={deleteCheckedValues}>DELETE</ButtonRedSolid>}
            </>}
          </ButtonsContainer>
          <ButtonsContainer>
            <ButtonGrayLight size='medium' onClick={closeModal} disabled={isEditMode}>Close</ButtonGrayLight>
            <ButtonSolid size='medium' type='submit' onClick={updateMediacodes} disabled={isEditMode}>
              <span>Submit</span>
              {isLoading && <SpinLoader />}
            </ButtonSolid>
          </ButtonsContainer>
        </div>
      </MediacodesSelectModalContainer>
    </PageModal>
  </>)
}