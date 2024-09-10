import { TextField, Button, Box } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { textFieldStyles } from "../utility/helper";

const PersonalDetails = ({
    onNext,
    onBack,
    activeStep,
    steps,
    setFormData,
    formData,
}) => {
    const { firstName, lastName } = ({} = formData);

    const {
        control,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();

    function onSubmit(data) {
        setFormData(data);
        if (Object.keys(errors).length === 0) {
            onNext();
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Controller
                name="firstName"
                control={control}
                rules={{ required: "First name is required" }}
                defaultValue={firstName || ""}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="First Name"
                        fullWidth
                        error={!!errors.firstName}
                        helperText={errors.firstName?.message}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "gray", // Default border color
                                },
                                "&:hover fieldset": {
                                    borderColor: "#7c3aed", // Hover color
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#7c3aed", // Focused border color
                                },
                            },

                            "& .MuiInputLabel-root": {
                                color: "gray", // Default label color
                                "&.Mui-focused": {
                                    color: "#7c3aed", // Label color when focused
                                },
                            },
                        }}
                    />
                )}
            />
            <Controller
                name="lastName"
                control={control}
                rules={{ required: "Last name is required" }}
                defaultValue={lastName || ""}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Last Name"
                        fullWidth
                        error={!!errors.lastName}
                        helperText={errors.lastName?.message}
                        variant="outlined"
                        sx={textFieldStyles()}
                    />
                )}
            />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    pt: 2,
                }}
            >
                <button
                    className="border border-violet-600 text-violet-600 px-4 py-1 text-lg rounded-md"
                    disabled={activeStep === 0}
                    onClick={onBack}
                >
                    Back
                </button>
                <Box sx={{ flex: "1 1 auto" }} />
                <button
                    type="submit"
                    className="bg-violet-600 text-violet-50 rounded-md px-4 py-1 text-lg hover:bg-violet-700"
                >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </button>
            </Box>
        </form>
    );
};

export default PersonalDetails;
