import * as yup from "yup";

const linkRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;

const imgLinkRegex = (value) => {
    if (value.length === 0) {
        return true;
    }
    return linkRegex.test(value);
}
const createProductSchema = yup.object().shape({
    title: yup.string().required("Title is a required field"),
    description: yup.string().required("Description is a required field"),
    price: yup.number().positive().required(),
    imgLink: yup.string().trim().test("img-link-test", "The input must be a valid link or none", imgLinkRegex),
    stock: yup.number().positive().integer().required()
});

export default createProductSchema;