import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Formulario from "pages/Formulario";
import ChooseDoctor from "components/ChooseDoctor";
import useForm from "../../hooks/useForm";
import Comfirm from "components/comfirmForm";
import Context from '../../context/languageContext';
import { ButtonContainer } from './styles'
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
      style={{ height: "100%" }}
    >
      {value === index && (
        <Box p={3} style={{ height: "100%" }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};


export default function TabsWrappedLabel({ tabState, handleBack, handleNext, steps, activeStep, setActiveStep }) {
  const validation = {
    0: () => (especialidad.length !== 0 && turno.length !== 0) ? true : false,
    1: () => (doctor.length !== 0) ? true : false
  }
  const { language, setLanguage, texts } = useContext(Context)
  const {
    especialidad,
    horario,
    turno,
    doctor,
    extra,
    updateEspecialidad,
    updateHHorario,
    updateTurno,
    updateDoctor,
    updateExtra,
    resetFilters } = useForm()

  const handleNextPrev = () => {
    (validation[activeStep]())
      ? handleNext()
      : null
  }
  return (<>
    <div style={{ overflow: (tabState === 'one') ? 'unset' : 'auto' }}>
      <TabPanel value={tabState} index="one">
        <Formulario
          especialidad={especialidad}
          updateEspecialidad={updateEspecialidad}
          horario={horario}
          updateHHorario={updateHHorario}
          turno={turno}
          updateTurno={updateTurno}
          updateExtra={updateExtra}
        />
      </TabPanel>
      <TabPanel value={tabState} index="two">
        <ChooseDoctor
          updateDoctor={updateDoctor}
          especialidad={especialidad}
          turno={turno}
        />
      </TabPanel>
      <TabPanel value={tabState} index="three">
        <Comfirm
          especialidad={especialidad.value}
          horario={horario}
          turno={turno.value}
          doctor={doctor}
        />
      </TabPanel>
    </div>
    <ButtonContainer>
      <div>
        <button
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          {texts[language].Atras}
        </button>
        <button
          disabled={activeStep === 2}
          variant="contained"
          color="primary"
          onClick={handleNextPrev}
        // onClick={(activeStep === 2) ? enviarForm : handleNext}
        >
          {activeStep === steps.length - 1 ? texts[language].Finalizar : texts[language].Siguiente}
        </button>
      </div>
    </ButtonContainer>
  </>);
}
