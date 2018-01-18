module.exports = {
    timeout: 20000,
    url: "https://www.xxxxx.co.th/customer/account/create/",
    ids: {
        form: "#form-account-create",
        male: "#RegistrationForm_gender_0",
        email: "#RegistrationForm_email",
        name: "#RegistrationForm_first_name",
        password: "#RegistrationForm_password",
        confirmPassword: "#RegistrationForm_password2",
        submit: "#send"
    },
    data: {
        id: 0,
        email: (id) => "youshouldverifyemail" + id + "@gmail.com",
        screenshot: (id) => "youshouldverifyemail" + id,
        name: (id) => "Jack Ma" + id,
        password: "JackMa123"
    }
};
