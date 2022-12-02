import React, { useEffect } from 'react'
import { FaExchangeAlt } from 'react-icons/fa'
import { Multiselect as MultiselectContainer } from './styles';
import { useMultiselectValues } from "hooks/useMultiselectValues";
import SpinLoader from 'components/loader/spinLoader';
import { InputSimple } from '../input';
import { LabelError } from '../input/styles';

function Multiselect({
  all,
  actual,
  setValues,
  key_to_compare,
  key_to_show,
  title = 'values',
  required = false,
  error = false
}: any) {

  const {
    actualItems,
    allItems,
    addToActualItems,
    addToAllItems,
    searchOnAllItems,
    searchOnActualItems
  } = useMultiselectValues({ all, actual, key: key_to_compare, keyToSearch: key_to_show })

  useEffect(() => {
    setValues(actualItems)
  }, [actualItems])

return (<>
    <MultiselectContainer>
      <div className="assignSelectContainer">
        <InputSimple
          title={`Search in all ${title}`}
          onChange={(e: any) => searchOnAllItems(e.target.value)}
          required={required}
          error={error}
        />
        <div className="select selectable" style={{ borderColor: error ? 'red' : 'rgb(228,230,239)' }}>
          {all ? allItems.map((allItem: any, index: any) =>
            <p className='select-option'
              key={index}
              onClick={() => addToActualItems(allItem)}
            >{allItem[key_to_show]}</p>)
            : <div className="containerLoader">
              <SpinLoader />
            </div>
          }
        </div>
      </div>
      <div className="changeIcon">
        <FaExchangeAlt />
      </div>
      <div className="assignSelectContainer">
        <InputSimple
          title={`Search in added ${title}`}
          onChange={(e: any) => searchOnActualItems(e.target.value)}
          required={required}
          error={error}
        />
        <div className="select selected" style={{ borderColor: error ? 'red' : 'rgb(228,230,239)' }}>
          {(actual && actualItems) ? actualItems?.map((actualItem: any, index: any) =>
            <p className='select-option'
              key={index}
              onClick={() => addToAllItems(actualItem)}
            >{actualItem[key_to_show]}</p>)
            : <div className="containerLoader">
              <SpinLoader />
            </div>
          }
        </div>
      </div>
    </MultiselectContainer>
    {error &&
      <LabelError>
        {error.message}
      </LabelError>
    }
  </>)
}
export default React.memo(Multiselect)