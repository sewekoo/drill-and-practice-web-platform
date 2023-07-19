import { bcrypt } from "../../deps.js";
import * as userService from "../../services/userService.js";
import { validasaur } from "../../deps.js";

const registarationValidationRules = {
    email: [validasaur.required, validasaur.isEmail],
    password: [validasaur.required, validasaur.minLength(4)],
};

const showRegistarationForm = ({ render }) => {
    render("registaration.eta");
};

const registerUser = async ({ request, response, render }) => {
    const body = request.body({ type: "form" });
    const params = await body.value;

    const registerData = {
        email: params.get("email"),
        password: params.get("password")
    };

    const [passes, errors] = await validasaur.validate(
        registerData,
        registarationValidationRules
    );

    if (passes) {
        await userService.addUser(
            registerData.email,
            await bcrypt.hash(registerData.password)
        );
        response.redirect("/auth/login");
    } else {
        console.log(errors);
        registerData.validationErrors = errors;
        render("registaration.eta", registerData);
    }
}

export { showRegistarationForm, registerUser };