// interface clientDetails {
//     companyName: string;
//     firstName: string;
//     lastName: string;
//     emailAddress: string;
//     phoneNumber: number;
// }
var clientList = [];
var putToClientList = function (companyName, firstName, lastName, emailAddress, phoneNumber) {
    var clientDetails = {
        companyName: document.getElementById("companyName").value,
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        emailAddress: document.getElementById("emailAddress").value,
        phoneNumber: document.getElementById("phoneNumber").value,
    };
    console.log(clientDetails);
    clientList.push(clientDetails);
    console.log(clientList);
    var myContainer = document.getElementById('companyName1');
    myContainer.value = clientDetails.companyName;
};
clientList.forEach(function (companyName) {
    console.log(companyName);
});
