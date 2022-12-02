import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

import { MdKeyboardArrowDown } from 'react-icons/md'
import { FiEdit } from 'react-icons/fi'
import { AiOutlineKey } from 'react-icons/ai'
import { MdDeleteOutline } from 'react-icons/md'

import { useModal } from "hooks/useModal";
import { useFetch } from "hooks/useFetching";

import SelectModal from "components/modal/selectModal";
import { formatSnakeToNormal } from "utilities/formatStrings";

export default function SelectActions({ item, editOption = true, editComponent, deleteComponent, deleteOption = true, viewOption = false, viewComponent, toUp, children }: any) {
  const { key, mutate } = item

  const [isOpenEdit, openEdit, closeEdit] = useModal()
  const [isOpenDelete, openDelete, closeDelete] = useModal()
  const [isOpenView, openView, closeView] = useModal()

  const { Fetch } = useFetch()

  const { pathname } = useLocation()

  const showDeleteModal = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Once deleted, you will not be able to recover this item!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f1416c',
      cancelButtonColor: '#cccc',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Fetch({ method: 'DELETE', url: `/${pathname.split('/')[2]}/${key.path || key}/${item[key.label || key].id}` })
          .then((res: any) => {
            mutate()
            if (res.success) {
              Swal.fire({
                title: 'Deleted!',
                text: `The ${formatSnakeToNormal(key.label || key)} has been deleted.`,
                icon: 'success',
                confirmButtonColor: '#a5dc86',
              })
            }
          })
      }
    })
  }

  return (<>
    {isOpenView && React.cloneElement(viewComponent || editComponent, { type: 'View', item: item, isOpen: isOpenView, closeModal: closeView })}
    {isOpenEdit && React.cloneElement(editComponent, { item: item, isOpen: isOpenEdit, closeModal: closeEdit })}
    {(isOpenDelete && deleteComponent) && React.cloneElement(deleteComponent, { item: item, isOpen: isOpenDelete, closeModal: closeDelete })}
    <SelectModal
      width='150px' toUp={toUp}
      buttonElement={<>
        <div className="buttonSelectOnTable">
          Actions
          <MdKeyboardArrowDown />
        </div>
      </>}
    >
      {
        viewOption &&
        <div className="optionItem" onClick={() => {
          openView()
        }}>
          <AiOutlineKey />
          View
        </div>
      }
      {
        editOption &&
        <div className="optionItem" onClick={() => {
          openEdit()
        }}>
          <FiEdit />
          Edit
        </div>
      }
      {children}
      {
        deleteOption &&
        <div className="optionItem delete" onClick={() => {
          (deleteComponent) ? openDelete() : showDeleteModal();
        }}>
          <MdDeleteOutline />
          Delete
        </div>
      }
    </SelectModal>
  </>)
}