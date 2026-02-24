import { FieldConfig } from "mfeUi";


export const userFields: FieldConfig[] = [
    {

        type: "section",
        label: "Basic Info"
    },

    {
        name: "firstName",
        label: "First Name",
        type: "text",
        span: { lg: 6 }
    },

    {
        name: "role",
        label: "Role",
        type: "select",
        options: [
            { label: "User", value: "USER" },
            { label: "Admin", value: "ADMIN" }
        ],
        span: { lg: 6 }
    },
    {
        name: "gender",
        type: "radio",
        label: "Gender",
        options: [
            { label: "Male", value: "M" },
            { label: "Female", value: "F" }
        ],
        span: { lg: 6 }
    },
    {
        name: "permissions",
        label: "Permissions",
        type: "text",
        showIf: (values: any) => values.role?.value === "ADMIN",
        span: { lg: 6 }
    },
    {
        type: "section",
        label: "Location"
    },

    {
        name: "country",
        label: "Country",
        type: "select",
        options: [],
        span: { lg: 6 }
    },

    {
        name: "state",
        label: "State",
        type: "select",
        options: [],
        span: { lg: 6 }
    },

    {
        name: "city",
        label: "City",
        type: "select",
        options: [],
        span: { lg: 6 }
    }
];