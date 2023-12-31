const boleto = "regular";
// let codigoDeAcceso;

// if (boleto === 'vip') {
// 	codigoDeAcceso = 'VIP-123-456';
// } else {
// 	codigoDeAcceso = 'REGULAR-456-789';
// }

const codigoDeAcceso = boleto === "vip" ? "VIP-123-456" : "REGULAR-456-789";

boleto === "vip"
  ? console.log("tu boleto es tipo vip VIP-123-456")
  : console.log("tu boleto es tipo regular REGULAR-456-789");

console.log(codigoDeAcceso);
