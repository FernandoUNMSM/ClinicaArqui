import { useFetch } from 'hooks/useFetching'
import { createContext, useReducer } from 'react'
import { capitalize } from 'utilities/formatStrings'
import Swal from 'sweetalert2'

interface Batch {
  localAgencies?: any
  addAgencie?: any
  localInsurances?: any
  addInsurance?: any
  localProviders?: any
  addProvider?: any
  localMedias?: any
  addMedia?: any
  localLanguages?: any
  addLanguage?: any
  localRoutes?: any
  addRoute?: any
  localDevices?: any
  addDevice?: any
  resetBatch?: any
  optionalFields?: any
  domains?: any
  addDomain?: any
  titles?: any
  addTitle?: any
  landings?: any
  addLanding?: any
  codeadmins?: any
  addCodeAdmin?: any
  urls?: any
  addUrl?: any
  descriptions?: any
  previewData?: any
  addDescription?: any
  updateOptionalFields?: any
  optionalFieldsValues?: any
  preview?: any
  sendMediacode?: any
}

const ACTIONS = {
  ADD_AGENCIE: 'add_agencie',
  ADD_INSURANCE: 'add_insurance',
  ADD_PROVIDER: 'add_provider',
  ADD_MEDIA: 'add_media',
  ADD_LANGUAGE: 'add_language',
  ADD_ROUTE: 'add_route',
  ADD_DEVICE: 'add_device',
  ADD_DOMAIN: 'add_domain',
  ADD_TITLE: 'add_title',
  ADD_LANDING: 'add_landing',
  ADD_CODEADMIN: 'add_codeadmin',
  ADD_URL: 'add_url',
  ADD_DESCRIPTION: 'add_description',
  ADD_PREVIEW: 'add_preview',
  RESET_BATCH: 'reset_batch',
  UPDATE_OPTIONALFIELDS: 'update_optional_fields'
}

const ACTIONS_REDUCERS = {
  [ACTIONS.ADD_AGENCIE]: (state: any, action: any) => ({
    ...state,
    localAgencies: action.payload
  }),
  [ACTIONS.ADD_INSURANCE]: (state: any, action: any) => ({
    ...state,
    localInsurances: action.payload
  }),
  [ACTIONS.ADD_PROVIDER]: (state: any, action: any) => ({
    ...state,
    localProviders: action.payload
  }),
  [ACTIONS.ADD_MEDIA]: (state: any, action: any) => ({
    ...state,
    localMedias: action.payload
  }),
  [ACTIONS.ADD_LANGUAGE]: (state: any, action: any) => ({
    ...state,
    localLanguages: action.payload
  }),
  [ACTIONS.ADD_DEVICE]: (state: any, action: any) => ({
    ...state,
    localDevices: action.payload
  }),
  [ACTIONS.ADD_ROUTE]: (state: any, action: any) => ({
    ...state,
    localRoutes: action.payload
  }),
  [ACTIONS.ADD_DOMAIN]: (state: any, action: any) => ({
    ...state,
    domains: action.payload
  }),
  [ACTIONS.ADD_TITLE]: (state: any, action: any) => ({
    ...state,
    titles: action.payload
  }),
  [ACTIONS.ADD_LANDING]: (state: any, action: any) => ({
    ...state,
    landings: action.payload
  }),
  [ACTIONS.ADD_CODEADMIN]: (state: any, action: any) => ({
    ...state,
    codeadmins: action.payload
  }),
  [ACTIONS.ADD_URL]: (state: any, action: any) => ({
    ...state,
    urls: action.payload
  }),
  [ACTIONS.ADD_DESCRIPTION]: (state: any, action: any) => ({
    ...state,
    descriptions: action.payload
  }),
  [ACTIONS.UPDATE_OPTIONALFIELDS]: (state: any, action: any) => ({
    ...state,
    optionalFields: action.payload.newOptionalFields,
    optionalFieldsValues: action.payload.values
  }),
  [ACTIONS.RESET_BATCH]: (state: any) => ({
    ...state,
    localAgencies: { quantity: 1, data: [] },
    localInsurances: { quantity: 1, data: [] },
    localProviders: { quantity: 1, data: [] },
    localMedias: { quantity: 1, data: [] },
    localLanguages: { quantity: 1, data: [] },
    localRoutes: { quantity: 1, data: [] },
    localDevices: { quantity: 1, data: [] },
    domains: { quantity: 1, data: [] },
    titles: { quantity: 1, data: [] },
    landings: { quantity: 1, data: [] },
    codeadmins: { quantity: 1, data: [] },
    urls: { quantity: 1, data: [] },
    descriptions: { quantity: 1, data: [] },
    previewData: { status: 'info', data: [] }
  }),
  [ACTIONS.ADD_PREVIEW]: (state: any, action: any) => ({
    ...state,
    previewData: action.payload,
  }),
}

const reducer = (state: any, action: any) => {
  const actionReducer = ACTIONS_REDUCERS[action.type]
  return actionReducer ? actionReducer(state, action) : state
}

const BatchContext = createContext<Batch>({})

export function BatchContextProvider({ children }: any) {
  const { Fetch: FetchPreview, isLoading: isLoadingPreview } = useFetch()
  const { Fetch: FetchCreateBatch, isLoading: isLoadingCreateBatch } = useFetch()
  const [state, dispatch]: any = useReducer(reducer, {
    localAgencies: { quantity: 1, data: [] },
    localInsurances: { quantity: 1, data: [] },
    localProviders: { quantity: 1, data: [] },
    localMedias: { quantity: 1, data: [] },
    localLanguages: { quantity: 1, data: [] },
    localRoutes: { quantity: 1, data: [] },
    localDevices: { quantity: 1, data: [] },
    domains: { quantity: 1, data: [] },
    titles: { quantity: 1, data: [] },
    landings: { quantity: 1, data: [] },
    codeadmins: { quantity: 1, data: [] },
    urls: { quantity: 1, data: [] },
    descriptions: { quantity: 1, data: [] },
    optionalFields: {
      domain: false,
      title: false,
      landing: false,
      codeAdmin: false,
      url: false,
      description: false
    },
    optionalFieldsValues: [],
    previewData: { status: 'info', data: [] }
  })

  const getQuantityTotal = (arr: any) => {
    if (arr.length === 0) return 0
    const quantity = arr.reduce((prev: any, current: any) => prev + current)
    return quantity
  }

  const formatData = (value: any) => {
    const batchToSend: any = {
      data: {
        agencies: state.localAgencies.data.map((agencie: any, index: number) => ({ key: index, index: index, count: agencie.quantity, id: agencie.selected.id })),
        insurances: state.localInsurances.data.map((insurance: any, index: number) => ({ key: index, index: index, count: insurance.quantity, id: insurance.selected.id })),
        providers: state.localProviders.data.map((provider: any, index: number) => ({ key: index, index: index, count: provider.quantity, id: provider.selected.id })),
        medias: state.localMedias.data.map((media: any, index: number) => ({ key: index, index: index, count: media.quantity, id: media.selected.id })),
        languages: state.localLanguages.data.map((language: any, index: number) => ({ key: index, index: index, count: language.quantity, id: language.selected.id })),
        devices: state.localDevices.data.map((device: any, index: number) => ({ key: index, index: index, count: device.quantity, id: device.selected.id })),
        routes: state.localRoutes.data.map((route: any, index: number) => ({ key: index, index: index, count: route.quantity, id: route.selected.id })),
      },
      cant: value
    }
    if (state.optionalFields.domain) batchToSend.data.domains = state.domains.data.map((domain: any, index: number) => ({ key: index, index: index, count: domain.quantity, id: domain.selected }))
    if (state.optionalFields.title) batchToSend.data.titles = state.titles.data.map((title: any, index: number) => ({ key: index, index: index, count: title.quantity, id: title.selected }))
    if (state.optionalFields.landing) batchToSend.data.landings = state.landings.data.map((landing: any, index: number) => ({ key: index, index: index, count: landing.quantity, id: landing.selected }))
    if (state.optionalFields.codeAdmin) batchToSend.data.codes = state.codeadmins.data.map((code: any, index: number) => ({ key: index, index: index, count: code.quantity, id: code.selected }))
    if (state.optionalFields.url) batchToSend.data.urls = state.urls.data.map((url: any, index: number) => ({ key: index, index: index, count: url.quantity, id: url.selected }))
    if (state.optionalFields.description) batchToSend.data.descriptions = state.descriptions.data.map((description: any, index: number) => ({ key: index, index: index, count: description.quantity, id: description.selected }))
    return batchToSend
  }

  const validateErrorAndGetMaxValue = () => {
    const cleanState = { ...state }
    delete cleanState.previewData
    delete cleanState.optionalFieldsValues
    delete cleanState.optionalFields

    if (!state.optionalFields.domain) delete cleanState.domains
    if (!state.optionalFields.title) delete cleanState.titles
    if (!state.optionalFields.landing) delete cleanState.landings
    if (!state.optionalFields.codeAdmin) delete cleanState.codeadmins
    if (!state.optionalFields.url) delete cleanState.urls
    if (!state.optionalFields.description) delete cleanState.descriptions

    const batchValues = Object.entries(cleanState)
    const batchValuesFormatted = batchValues.map((item: any) => [item[0], getQuantityTotal(item[1].data.map((item: any) => item.quantity))])

    const valuesQuantity = batchValuesFormatted.map((item: any) => item[1])
    const allEqual = batchValuesFormatted.every(val => val[1] === batchValuesFormatted[0][1])

    const maxValue = valuesQuantity.reduce((prev: any, current: any) => prev > current ? prev : current)

    if (!allEqual) {
      const fieldsWithError = batchValuesFormatted.filter((field: any) => field[1] !== maxValue)
      dispatch({ type: ACTIONS.ADD_PREVIEW, payload: { status: 'error', data: fieldsWithError.map((field: any) => `${capitalize(field[0].replace('local', ''))} contiene ${field[1]} y deberia tener ${maxValue}`) } })
      return { status: false }
    }
    if (allEqual && batchValuesFormatted[0][1] === 0) {
      dispatch({ type: ACTIONS.ADD_PREVIEW, payload: { status: 'error', data: ['Los elementos estan vacios'] } })
      return { status: false }
    }
    dispatch({ type: ACTIONS.ADD_PREVIEW, payload: { status: 'info', data: [] } })
    return { status: true, cant: maxValue }
  }

  const preview = () => {
    const { status, cant } = validateErrorAndGetMaxValue()
    if(!status) return
    const batchToSend: any = formatData(cant)

    FetchPreview({ url: '/magneto/mediacodes/batch/preview', data: batchToSend })
      .then(res => dispatch({ type: ACTIONS.ADD_PREVIEW, payload: { status: 'preview', data: res.data } }))
  }

  const sendMediacode = () => {
    const { status, cant } = validateErrorAndGetMaxValue()
    if (status) {
      const batchToSend: any = formatData(cant)

      FetchCreateBatch({ url: '/magneto/mediacodes/batch', data: batchToSend })
        .then(res => {
          dispatch({ type: ACTIONS.ADD_PREVIEW, payload: { status: 'created', data: res.data } })
          if (res.success) {
            Swal.fire({
              title: 'Created!',
              text: 'Se crearon los mediacodes',
              icon: 'success',
              confirmButtonColor: '#a5dc86',
            })
          }
        })
    }
  }

  return <BatchContext.Provider value={{
    localAgencies: state.localAgencies,
    localInsurances: state.localInsurances,
    localProviders: state.localProviders,
    localMedias: state.localMedias,
    localLanguages: state.localLanguages,
    localRoutes: state.localRoutes,
    localDevices: state.localDevices,
    domains: state.domains,
    titles: state.titles,
    landings: state.landings,
    codeadmins: state.codeadmins,
    urls: state.urls,
    descriptions: state.descriptions,
    optionalFields: state.optionalFields,
    previewData: state.previewData,
    optionalFieldsValues: state.optionalFieldsValues,
    addAgencie: (data: any) => dispatch({ type: ACTIONS.ADD_AGENCIE, payload: data }),
    addInsurance: (data: any) => dispatch({ type: ACTIONS.ADD_INSURANCE, payload: data }),
    addProvider: (data: any) => dispatch({ type: ACTIONS.ADD_PROVIDER, payload: data }),
    addMedia: (data: any) => dispatch({ type: ACTIONS.ADD_MEDIA, payload: data }),
    addLanguage: (data: any) => dispatch({ type: ACTIONS.ADD_LANGUAGE, payload: data }),
    addRoute: (data: any) => dispatch({ type: ACTIONS.ADD_ROUTE, payload: data }),
    addDevice: (data: any) => dispatch({ type: ACTIONS.ADD_DEVICE, payload: data }),
    addDomain: (data: any) => dispatch({ type: ACTIONS.ADD_DOMAIN, payload: data }),
    addTitle: (data: any) => dispatch({ type: ACTIONS.ADD_TITLE, payload: data }),
    addLanding: (data: any) => dispatch({ type: ACTIONS.ADD_LANDING, payload: data }),
    addCodeAdmin: (data: any) => dispatch({ type: ACTIONS.ADD_CODEADMIN, payload: data }),
    addUrl: (data: any) => dispatch({ type: ACTIONS.ADD_URL, payload: data }),
    addDescription: (data: any) => dispatch({ type: ACTIONS.ADD_DESCRIPTION, payload: data }),
    resetBatch: () => dispatch({ type: ACTIONS.RESET_BATCH }),
    updateOptionalFields: (data: any) => {
      const newOptionalFields: any = {
        domain: false,
        title: false,
        landing: false,
        codeAdmin: false,
        url: false,
        description: false
      }
      data.forEach((item: any) => newOptionalFields[item.value] = true)
      dispatch({ type: ACTIONS.UPDATE_OPTIONALFIELDS, payload: { newOptionalFields, values: data } })
    },
    preview,
    sendMediacode
  }}>
    {children}
  </BatchContext.Provider>
}
export default BatchContext