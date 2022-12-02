import { useState, useContext, useEffect } from "react";
import { MdKeyboardArrowDown } from 'react-icons/md'
import ConfigContext from "context/configContext";
import { SelectQuantity } from "./styles";
import SelectModal from "components/modal/selectModal";

export default function QuantityRowsSelector({ }: any) {
  const [openQuantity, setOpenQuantity] = useState(false)
  const { quantityPerPage, setQuantityPerPage, setPage } = useContext(ConfigContext)

  const changeQuantityOfPages = (quantityOfPages: any) => {
    setPage(1)
    setOpenQuantity(false)
    setQuantityPerPage(quantityOfPages)
  }
  useEffect(() => {
    return () => setQuantityPerPage(25)
  }, [])

  return (<>
    <SelectQuantity>
      <SelectModal
        width='100px'
        buttonElement={<>
          <div className="buttonSelect quantity" onClick={() => setOpenQuantity(true)}>
            {quantityPerPage}
            <MdKeyboardArrowDown />
          </div>
        </>
        }
      >
        {[15, 25, 50, 100, 200, 500, 1000].map((quantity: any, index: number) => <div
          className="optionItem"
          key={index}
          onClick={() => changeQuantityOfPages(quantity)}>
          {quantity}
        </div>)}
      </SelectModal>
    </SelectQuantity>
  </>)
}