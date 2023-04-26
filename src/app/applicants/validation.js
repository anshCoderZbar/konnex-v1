export const applyFormState = {
  applicationAs: "",
  userName: "",
  birthDate: "",
  houseNo: "",
  zip: "",
  place: "",
  mobileNO: "",
  email: "",
  profession: "",
  document: "",
  drivingLicence: "",
  forkliftLicense: "",
  messages: "",
};

export const applyFormValidation = (formData) => {
  let errors = {};
  if (formData.applicationAs === "") {
    errors.applicationAs = "Bitte füllen Sie dieses Pflichtfeld aus!";
  }
  if (formData.userName === "") {
    errors.userName = "Bitte füllen Sie dieses Pflichtfeld aus!";
  }
  if (formData.houseNo === "") {
    errors.houseNo = "Bitte füllen Sie dieses Pflichtfeld aus!";
  }
  if (formData.zip === "") {
    errors.zip = "Bitte füllen Sie dieses Pflichtfeld aus!";
  }
  if (formData.place === "") {
    errors.place = "Bitte füllen Sie dieses Pflichtfeld aus!";
  }
  if (formData.email === "") {
    errors.email = "Bitte füllen Sie dieses Pflichtfeld aus!";
  }
  return errors;
};
