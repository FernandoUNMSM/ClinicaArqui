import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import FaceIcon from '@material-ui/icons/Face';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import AssignmentIcon from '@material-ui/icons/Assignment';
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import FormTabs from 'components/FormTabs'
import Context from '../../context/languageContext';
import { useContext } from 'react';
const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    backgroundColor: 'transparent'
  },
  active: {
    color: "#784af4"
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor"
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18
  }
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient(to right, #61d5ff 0%, #00d9e2 40%, #00ecd8 100%)"
    }
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient(to right, #61d5ff 0%, #00d9e2 40%, #00ecd8 100%)"
    }
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1
  }
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  active: {
    backgroundImage:
      "linear-gradient(to right, #61d5ff 0%, #00d9e2 40%, #00ecd8 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
  },
  completed: {
    backgroundImage:
      "linear-gradient(to right, #61d5ff 0%, #00d9e2 40%, #00ecd8 100%)"
  }
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <AssignmentIcon />,
    2: <FaceIcon />,
    3: <DoneAllIcon />
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    overflow: "hidden",
    backgroundColor: 'transparent'
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  buttonC: {
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

function getSteps(texts, language) {
  return [texts[language].Ingresa, texts[language].Selecciona, texts[language].Confirma];
}

export default function CustomizedSteppers() {
  const { language, setLanguage, texts } = useContext(Context)
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps(texts, language);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const changeStep = () => {
    switch (activeStep) {
      case 0: return "one";
      case 1: return "two";
      case 2: return "three";
      default: return "gura";
    }
  }

  // const enviarForm = (evt) => {
  //   console.log(evt.target.textContent)
  // }

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
        style={{ backgroundColor: 'transparent' }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <FormTabs
        tabState={changeStep()}
        handleBack={handleBack}
        handleNext={handleNext}
        steps={steps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
      {/* <div className={classes.buttonC}>
        <div>
          <div>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.button}
            >
              {texts[language].Atras}
            </Button>
            <Button
              disabled={activeStep === 2}
              variant="contained"
              color="primary"
              onClick={handleNext}
              className={classes.button}
            // onClick={(activeStep === 2) ? enviarForm : handleNext}
            >
              {activeStep === steps.length - 1 ? texts[language].Finalizar : texts[language].Siguiente}
            </Button>
          </div>
        </div>
      </div> */}
    </div>
  );
}
