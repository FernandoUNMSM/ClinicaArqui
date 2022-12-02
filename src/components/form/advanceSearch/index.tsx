import SelectTagInput from "../selectTagInput";
import { AdvanceSearchContainer } from "./styles";
import { useContext, useState, useEffect } from "react";
import SelectWithInput from "../selectWithInput";
import ConfigContext from "context/configContext";

const selectValues = [
  {
    name: 'AGENCIES'
  },
  {
    name: 'INSURANCES'
  },
  {
    name: 'PROVIDERS'
  },
  {
    name: 'MEDIA'
  },
  {
    name: 'LANGUAGES'
  },
  {
    name: 'ROUTES'
  },
  {
    name: 'FORM TYPES'
  },
  {
    name: 'DEVICES'
  },
  {
    name: 'BRANDS'
  },
  {
    name: 'STATES'
  },
]

export default function AdvanceSearch({ data }: any) {
  const [filterItems, setFilterItems]: any = useState([])
  const [names, setNames]: any = useState([])
  const { advanceSearch } = useContext(ConfigContext)

  useEffect(()=>{
    setNames(filterItems.map((item: any) => item.name))
  }, [filterItems])

  return (<>
    <AdvanceSearchContainer>
      <SelectTagInput
        title='SEARCH MEDIACODE BY'
        actualValues={filterItems}
        totalValues={selectValues}
        setValue={setFilterItems}
        keyword='name'
      />
      {
        filterItems.length !== 0 &&
        <div className="selectFilterContainer">
          {
            names.includes('AGENCIES') &&
            <SelectWithInput
              values={data.agencies}
              setSelectedValue={advanceSearch.updateAgency}
              title='Agencie'
              keyword='code'
            />
          }
          {
            names.includes('INSURANCES') &&
            <SelectWithInput
              values={data.insurances}
              setSelectedValue={advanceSearch.updateInsurance}
              title='Insurance'
              keyword='name'
            />
          }
          {
            names.includes('PROVIDERS') &&
            <SelectWithInput
              values={data.providers}
              setSelectedValue={advanceSearch.updateProvider}
              title='Provider'
              keyword='code'
            />
          }
          {names.includes('MEDIA') &&

            <SelectWithInput
              values={data.media}
              setSelectedValue={advanceSearch.updateMedia}
              title='Media'
              keyword='code'
            />
          }
          {
            names.includes('LANGUAGES') &&
            <SelectWithInput
              values={data.languages}
              setSelectedValue={advanceSearch.updateLanguage}
              title='Language'
              keyword='name'
            />
          }
          {
            names.includes('ROUTES') &&
            <SelectWithInput
              values={data.routes}
              setSelectedValue={advanceSearch.updateRoute}
              title='Route'
              keyword='name'
            />
          }
          {
            names.includes('FORM TYPES') &&
            <SelectWithInput
              values={data.formtypes}
              setSelectedValue={advanceSearch.updateFormType}
              title='Form Type'
              keyword='name'
            />
          }
          {
            names.includes('DEVICES') &&
            <SelectWithInput
              values={data.devices}
              setSelectedValue={advanceSearch.updateDevice}
              title='Device'
              keyword='device'
            />
          }
          {
            names.includes('BRANDS') &&
            <SelectWithInput
              values={data.brands}
              setSelectedValue={advanceSearch.updateBrand}
              title='Brand'
              keyword='name'
            />
          }
          {
            names.includes('STATES') &&
            <SelectWithInput
              values={data.states}
              setSelectedValue={advanceSearch.updateState}
              title='State'
              keyword='state'
            />
          }
        </div>
      }
    </AdvanceSearchContainer>
  </>)
}