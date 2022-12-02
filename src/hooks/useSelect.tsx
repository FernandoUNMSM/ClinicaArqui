import { useReducer } from 'react'

const ACTIONS = {
  UPDATE_CAMPAIGN_RULE: 'update_campaign_rule',
  UPDATE_LANGUAGE: 'update_language',
  UPDATE_AGENCY: 'update_agency',
  UPDATE_INSURANCE: 'update_insurance',
  UPDATE_PROVIDER: 'update_provider',
  UPDATE_MEDIA: 'update_media',
  UPDATE_DEVICE: 'update_device',
  UPDATE_ROUTING: 'update_routing',
  UPDATE_FORM_TYPE: 'update_formtype',
  UPDATE_BRAND: 'update_brand',
  UPDATE_STATE: 'update_state',
  RESET_FILTERS: 'reset_filters'
}

const ACTIONS_REDUCERS = {
  [ACTIONS.UPDATE_CAMPAIGN_RULE]: (state: any, action: any) => ({
    ...state,
    campaingRule: action.payload
  }),
  [ACTIONS.UPDATE_LANGUAGE]: (state: any, action: any) => ({
    ...state,
    language: action.payload
  }),
  [ACTIONS.UPDATE_AGENCY]: (state: any, action: any) => ({
    ...state,
    agency: action.payload
  }),
  [ACTIONS.UPDATE_INSURANCE]: (state: any, action: any) => ({
    ...state,
    insurance: action.payload
  }),
  [ACTIONS.UPDATE_PROVIDER]: (state: any, action: any) => ({
    ...state,
    provider: action.payload
  }),
  [ACTIONS.UPDATE_MEDIA]: (state: any, action: any) => ({
    ...state,
    media: action.payload
  }),
  [ACTIONS.UPDATE_DEVICE]: (state: any, action: any) => ({
    ...state,
    device: action.payload
  }),
  [ACTIONS.UPDATE_ROUTING]: (state: any, action: any) => ({
    ...state,
    route: action.payload
  }),
  [ACTIONS.UPDATE_FORM_TYPE]: (state: any, action: any) => ({
    ...state,
    formType: action.payload
  }),
  [ACTIONS.UPDATE_BRAND]: (state: any, action: any) => ({
    ...state,
    brand: action.payload
  }),
  [ACTIONS.UPDATE_STATE]: (state: any, action: any) => ({
    ...state,
    stateLocal: action.payload
  }),
  [ACTIONS.RESET_FILTERS]: (state: any, action: any) => ({
    ...state,
    language: action.payload.language
  })
}

const reducer = (state: any, action: any) => {
  const actionReducer = ACTIONS_REDUCERS[action.type]
  return actionReducer ? actionReducer(state, action) : state
}

export default function useSelect() {
  const [state, dispatch]: any = useReducer(reducer, {
    agency: '',
    insurance: '',
    provider: '',
    media: '',
    language: '',
    route: '',
    device: '',
    campaingRule: '',
    formType: '',
    brand: '',
    stateLocal: ''
  })

  const {
    agency,
    insurance,
    provider,
    media,
    language,
    route,
    device,
    campaingRule,
    formType,
    brand,
    stateLocal } = state

  return {
    agency,
    insurance,
    provider,
    media,
    language,
    route,
    device,
    campaingRule,
    formType,
    brand,
    state: stateLocal,
    updateLanguage: (data: any) => dispatch({ type: ACTIONS.UPDATE_LANGUAGE, payload: data }),
    updateInsurance: (data: any) => dispatch({ type: ACTIONS.UPDATE_INSURANCE, payload: data }),
    updateProvider: (data: any) => dispatch({ type: ACTIONS.UPDATE_PROVIDER, payload: data }),
    updateMedia: (data: any) => dispatch({ type: ACTIONS.UPDATE_MEDIA, payload: data }),
    updateRoute: (data: any) => dispatch({ type: ACTIONS.UPDATE_ROUTING, payload: data }),
    updateDevice: (data: any) => dispatch({ type: ACTIONS.UPDATE_DEVICE, payload: data }),
    updateCampaignRule: (data: any) => dispatch({ type: ACTIONS.UPDATE_CAMPAIGN_RULE, payload: data }),
    updateFormType: (data: any) => dispatch({ type: ACTIONS.UPDATE_FORM_TYPE, payload: data }),
    updateBrand: (data: any) => dispatch({ type: ACTIONS.UPDATE_BRAND, payload: data }),
    updateState: (data: any) => dispatch({ type: ACTIONS.UPDATE_STATE, payload: data }),
    updateAgency: (data: any) => dispatch({ type: ACTIONS.UPDATE_AGENCY, payload: data }),
    resetFilters: () => dispatch({ type: ACTIONS.RESET_FILTERS, payload: { rating: 'g', language: 'en' } })
  }
}

