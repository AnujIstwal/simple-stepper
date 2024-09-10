import { TextField, Button, Box } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { textFieldStyles } from "../utility/helper";

const AddressDetails = ({
    onNext,
    onBack,
    activeStep,
    steps,
    setFormData,
    formData,
}) => {
    const { address, city, postalCode } = ({} = formData);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        setFormData(data);
        onNext();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Controller
                name="address"
                control={control}
                rules={{ required: "Address is required" }}
                defaultValue={address || ""}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Address"
                        fullWidth
                        error={!!errors.address}
                        helperText={errors.address?.message}
                        sx={textFieldStyles()}
                    />
                )}
            />
            <Controller
                name="city"
                control={control}
                rules={{ required: "City is required" }}
                defaultValue={city || ""}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="City"
                        fullWidth
                        error={!!errors.city}
                        helperText={errors.city?.message}
                        sx={textFieldStyles()}
                    />
                )}
            />
            <Controller
                name="postalCode"
                control={control}
                defaultValue={postalCode || ""}
                rules={{
                    required: "Postal code is required",
                    pattern: {
                        value: /^[0-9]{6}$/, // Ensure exactly 6 digits
                        message: "Postal code must be of 6 digit",
                    },
                }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Postal Code"
                        fullWidth
                        error={!!errors.postalCode}
                        helperText={errors.postalCode?.message}
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
                    disabled={activeStep === 0}
                    onClick={onBack}
                    className="border border-violet-600 text-violet-600 px-4 py-1 text-lg rounded-md"
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

export default AddressDetails;
