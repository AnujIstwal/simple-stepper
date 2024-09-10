import { TextField, Button, Box } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { textFieldStyles } from "../utility/helper";

const PaymentDetails = ({ onNext, onBack, activeStep, steps, setFormData }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onFormSubmit = (data) => {
        setFormData(data);
        onNext();
    };

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
            <Controller
                name="cardNumber"
                control={control}
                defaultValue=""
                rules={{
                    required: "Card number is required",
                    pattern: {
                        value: /^[0-9]{16}$/, // Ensure exactly 16 digits
                        message: "Card number must be 16 digits",
                    },
                }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Card Number"
                        fullWidth
                        error={!!errors.cardNumber}
                        helperText={errors.cardNumber?.message}
                        sx={textFieldStyles()}
                    />
                )}
            />
            <Controller
                name="expiryDate"
                control={control}
                defaultValue=""
                rules={{
                    required: "Expiry date is required",
                    pattern: {
                        value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/, // Match MM/YY format
                        message: "Expiry date must be in MM/YY format",
                    },
                    validate: (value) => {
                        const [month, year] = value.split("/").map(Number);
                        const now = new Date();
                        const currentYear = now.getFullYear() % 100; // Last two digits of the current year
                        const currentMonth = now.getMonth() + 1;

                        // Check if expiry date is in the future
                        if (
                            year < currentYear ||
                            (year === currentYear && month < currentMonth)
                        ) {
                            return "Expiry date must be in the future";
                        }
                        return true;
                    },
                }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Expiry Date"
                        fullWidth
                        error={!!errors.expiryDate}
                        helperText={errors.expiryDate?.message}
                        sx={textFieldStyles()}
                    />
                )}
            />
            <Controller
                name="cvv"
                control={control}
                defaultValue=""
                rules={{
                    required: "CVV is required",
                    pattern: {
                        value: /^[0-9]{3}$/, // Ensure exactly 3 digits
                        message: "CVV must be 3 digits",
                    },
                }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="CVV"
                        fullWidth
                        error={!!errors.cvv}
                        helperText={errors.cvv?.message}
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

export default PaymentDetails;
