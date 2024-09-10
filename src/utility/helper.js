// Define the reusable sx styles
export const textFieldStyles = () => ({
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "gray",
            borderRadius: "0.3rem",
        },
        "&:hover fieldset": {
            borderColor: "#7c3aed",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#7c3aed",
        },
    },
    "& .MuiInputLabel-root": {
        color: "gray",
        "&.Mui-focused": {
            color: "#7c3aed",
        },
    },
});

export const stepperStyle = () => ({
    fontSize: "2rem", // Icon size
    color: "#ddd6fe",
    "&.Mui-active": {
        color: "#7c3aed", // Icon color when active
    },
    "&.Mui-completed": {
        color: "#fff", // Icon color when completed
        padding: "0.2rem",
    },
    // The root should be targeted directly, not with "&.MuiStepIcon-root"
    backgroundColor: "#7c3aed", // Background color
    borderRadius: "50%", // Make the background circular
});

export const maskCardNumber = (cardNumber) => {
    if (!cardNumber || cardNumber.length < 4) return cardNumber;

    // Mask all but the last four digits
    const maskedPart = "*".repeat(cardNumber.length - 4);
    const lastFour = cardNumber.slice(-4);

    return `${maskedPart}${lastFour}`;
};
