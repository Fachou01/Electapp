import * as yup from "yup";

export const validationSchema = yup.object().shape({
    startDate: yup
        .date("Please enter a valid date")
        .required("Start date is a required field"),

    startTime: yup
        .string("Please enter a valid time")
        .required("Start time is a required field"),

    endDate: yup
        .date("Please enter a valid date")
        .required("End date is a required field"),

    endTime: yup
        .string("Please enter a valid time")
        .required("End time is a required field"),

});
