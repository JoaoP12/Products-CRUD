import * as yup from "yup";

const linkRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;
const priceRegex = /^\d{1,4}(?:[.,]\d{2})$/;
const intRegex = /^\d{1,4}$/;

const testStock = (value) => {
    if (value.length === 0) {
        return true;
    }
    return intRegex.test(value);
}

const testImgLink = (value) => {
    if (value.length === 0) {
        return true;
    }
    return linkRegex.test(value);
}

const testPrice = (value) => {
    if (value.length === 0) {
        return true;
    }
    return priceRegex.test(value);
}

const createProductSchema = yup.object().shape({
    title: yup.string().required("Title is a required field"),
    description: yup.string().required("Description is a required field"),
    price: yup.string().required().test("price-test", "The input must be a valid price.(e.g: 25,00 or 25.00)", testPrice),
    imgLink: yup.string().trim().test("img-link-test", "The input must be a valid link or none", testImgLink),
    stock: yup.string().trim().test("stock-int-test", "Stock must be a valid positive integer", testStock)
});

const editProductSchema = yup.object().shape({
    title: yup.string().trim(),
    description: yup.string().trim(),
    imgLink: yup.string().trim().test("edit-link-test", "You must fill up with a valid link", testImgLink),
    price: yup.string().test("price-test", "The input must be a valid price.(e.g: 25,00 or 25.00)", testPrice),
    stock: yup.string().trim().test("stock-int-test", "Stock must be a valid positive integer", testStock)
});

export { createProductSchema, editProductSchema}