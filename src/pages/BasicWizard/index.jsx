import React from "react";

// material-ui
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import Stepper from "@mui/material/Stepper";
import StepLabel from "@mui/material/StepLabel";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// project imports
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import MainCard from "../ui-components/MainCard";
// import AnimateButton from "../ui-components/AnimateButton";
import SecondaryAction from "../ui-components/CardSecondaryAction";

// step options
const steps = ["Form 1", "Form 2", "Form 3"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

// ==============================|| FORMS WIZARD - BASIC ||============================== //

const BasicWizard = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <MainCard
      title="Codebuddy Multi step Form"
      secondary={
        <SecondaryAction link="https://next.material-ui.com/components/steppers/#main-content" />
      }
    >
      <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <>
        {activeStep === steps.length ? (
          <>
            <Typography variant="h5" gutterBottom>
              Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
              Your order number is #2001539. We have emailed your order confirmation, and will send
              you an update when your order has shipped.
            </Typography>
            <Stack direction="row" justifyContent="flex-end">
              {/* <AnimateButton> */}
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => setActiveStep(0)}
                  sx={{ my: 3, ml: 1 }}
                >
                  Reset
                </Button>
              {/* </AnimateButton> */}
            </Stack>
          </>
        ) : (
          <>
            {getStepContent(activeStep)}
            <Stack direction="row" justifyContent={activeStep !== 0 ? "space-between" : "flex-end"}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ my: 3, ml: 1 }}>
                  Back
                </Button>
              )}
              {/* <AnimateButton> */}
                <Button variant="contained" onClick={handleNext} sx={{ my: 3, ml: 1 }}>
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              {/* </AnimateButton> */}
            </Stack>
          </>
        )}
      </>
    </MainCard>
  );
};

export default BasicWizard;
