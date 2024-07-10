function calculateDeliveryTime(packageType) {
    switch (packageType.toLowerCase()) {
      case "standard":
        console.log("Estimated delivery time: 3-5 days");
        break;
      case "express":
        console.log("Estimated delivery time: 1-2 days");
        break;
      case "overnight":
        console.log("Estimated delivery time: Next day");
        break;
      default:
        console.log("Invalid package type");
    }
  }
  
  calculateDeliveryTime("Standard");
  calculateDeliveryTime("Overnight");