import { useState } from "react";

import {
    Box,
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography,
} from "@mui/material";

import PersonalDetails from "./PersonalDetails";
import PaymentDetails from "./PaymentDetails";
import AddressDetails from "./AddressDetails";
import DisplayCard from "./DisplayCard";
import { stepperStyle } from "../utility/helper";

const steps = ["Personal Details", "Address Details", "Payment Details"];

const Steps = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    });

    // console.log(formData);

    function handleFormData(data) {
        setFormData((prv) => ({ ...prv, ...data }));
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box className="pt-10 py-6 w-full sm:w-3/5 mx-auto">
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => {
                    const stepProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel StepIconProps={{ sx: stepperStyle() }}>
                                {label}
                            </StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <>
                    <DisplayCard formData={formData} />
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        <Box sx={{ flex: "1 1 auto" }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </>
            ) : (
                <>
                    <div className="w-96 mx-auto pt-12">
                        {activeStep === 0 && (
                            <PersonalDetails
                                onNext={handleNext}
                                onBack={handleBack}
                                steps={steps}
                                activeStep={activeStep}
                                setFormData={handleFormData}
                                formData={formData}
                            />
                        )}
                        {activeStep === 1 && (
                            <AddressDetails
                                onNext={handleNext}
                                onBack={handleBack}
                                steps={steps}
                                activeStep={activeStep}
                                setFormData={handleFormData}
                                formData={formData}
                            />
                        )}
                        {activeStep === 2 && (
                            <PaymentDetails
                                onNext={handleNext}
                                onBack={handleBack}
                                steps={steps}
                                activeStep={activeStep}
                                setFormData={handleFormData}
                            />
                        )}
                    </div>
                </>
            )}
        </Box>
    );
};

export default Steps;
