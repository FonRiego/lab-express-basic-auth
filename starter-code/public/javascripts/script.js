document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
  },
  false
);

$(document).ready(function($) {
  $("#password").strength({
    strengthClass: "strength",
    strengthMeterClass: "strength_meter",
    strengthButtonClass: "button_strength",
    strengthButtonText: "Show Password",
    strengthButtonTextToggle: "Hide Password"
  });

});
