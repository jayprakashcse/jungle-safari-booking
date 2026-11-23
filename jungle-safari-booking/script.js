// Scroll to booking section
function scrollToBooking() {
  document.getElementById("booking").scrollIntoView();
}

// Get form and summary elements
const safariForm = document.getElementById("safariForm");

const park = document.getElementById("park");
const zone = document.getElementById("zone");
const vehicle = document.getElementById("vehicle");
const shift = document.getElementById("shift");
const fullName = document.getElementById("fullName");
const idType = document.getElementById("idType");
const idNumber = document.getElementById("idNumber");
const visitDate = document.getElementById("visitDate");
const visitors = document.getElementById("visitors");
const cameraFee = document.getElementById("cameraFee");

const summaryPark = document.getElementById("summaryPark");
const summaryZone = document.getElementById("summaryZone");
const summaryVehicle = document.getElementById("summaryVehicle");
const summaryShift = document.getElementById("summaryShift");
const summaryName = document.getElementById("summaryName");
const summaryId = document.getElementById("summaryId");
const summaryDate = document.getElementById("summaryDate");
const summaryVisitors = document.getElementById("summaryVisitors");
const summaryCamera = document.getElementById("summaryCamera");
const summaryTotal = document.getElementById("summaryTotal");

// Generate permit when form is submitted
safariForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get selected values
  const selectedPark = park.value;
  const selectedZone = zone.value;
  const selectedVehicle = vehicle.value;
  const selectedShift = shift.value;
  const selectedName = fullName.value.trim();
  const selectedIdType = idType.value;
  const selectedIdNumber = idNumber.value.trim();
  const selectedDate = visitDate.value;
  const visitorCount = Number(visitors.value);
  const isCameraAdded = cameraFee.checked;

  // Validate Government ID number
  if (selectedIdNumber.length < 12) {
    alert("Please enter a valid Government ID number.");
    return;
  }

  // Vehicle price
  let vehiclePrice = 0;

  if (selectedVehicle === "Open 4x4 Gypsy") {
    vehiclePrice = 1000;
  } else if (selectedVehicle === "20-Seater Open Bus Canter") {
    vehiclePrice = 700;
  }

  // Zone price
  let zonePrice = 0;

  if (selectedZone === "Core Zone") {
    zonePrice = 500;
  }
  else {zonePrice=300;

  }

  // Shift price
  let shiftPrice = 0;

  if (selectedShift.includes("Morning")) {
    shiftPrice = 300;
  }

  // Visitor entry fee
  const visitorFee = visitorCount * 200;

  // Camera fee
  const cameraAmount = isCameraAdded ? 300 : 0;

  // Total permit amount
  const totalAmount =
    vehiclePrice + zonePrice + shiftPrice + visitorFee + cameraAmount;

  // Display permit summary
  summaryPark.textContent = selectedPark;
  summaryZone.textContent = selectedZone;
  summaryVehicle.textContent = selectedVehicle;
  summaryShift.textContent = selectedShift;
  summaryName.textContent = selectedName;
  summaryId.textContent = selectedIdType + " - " + selectedIdNumber;
  summaryDate.textContent = selectedDate;
  summaryVisitors.textContent = visitorCount;
  summaryCamera.textContent = isCameraAdded ? "Yes" : "No";
  summaryTotal.textContent = totalAmount;

  alert("Safari permit generated successfully!");
});