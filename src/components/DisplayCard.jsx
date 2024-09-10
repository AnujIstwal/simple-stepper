import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { maskCardNumber } from "../utility/helper";

const DisplayCard = ({ formData }) => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-sm shadow-lg rounded-xl bg-white py-4 px-2">
                <div className="px-2 sm:px-10 ">
                    <h2 className="font-bold text-xl text-center mb-4 text-violet-600">
                        User Information
                    </h2>
                    <div className="mb-4">
                        <h3 className="text-gray-700 font-semibold text-base">
                            Name:
                        </h3>
                        <Typography variant="body1">
                            {formData.firstName} {formData.lastName}
                        </Typography>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-gray-700 font-semibold text-base">
                            Address:
                        </h3>
                        <Typography variant="body1">
                            {formData.address}, {formData.city},{" "}
                            {formData.postalCode}
                        </Typography>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-gray-700 font-semibold text-base">
                            Card Number:
                        </h3>
                        <Typography variant="body1">
                            {maskCardNumber(formData.cardNumber)}
                        </Typography>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-gray-700 font-semibold text-base">
                            Expiry Date:
                        </h3>
                        <Typography variant="body1">
                            {formData.expiryDate}
                        </Typography>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-gray-700 font-semibold text-base">
                            CVV:
                        </h3>
                        <Typography variant="body1">{formData.cvv}</Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayCard;
