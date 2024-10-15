// interface clientDetails {
//     companyName: string;
//     firstName: string;
//     lastName: string;
//     emailAddress: string;
//     phoneNumber: number;
// }

const clientList: object[] = [];

let putToClientList = function (companyName, firstName, lastName, emailAddress, phoneNumber) {
    let clientDetails = {
    companyName: (<HTMLInputElement>document.getElementById("companyName")).value,
    firstName: (<HTMLInputElement>document.getElementById("firstName")).value,
    lastName: (<HTMLInputElement>document.getElementById("lastName")).value,
    emailAddress: (<HTMLInputElement>document.getElementById("emailAddress")).value,
    phoneNumber: (<HTMLInputElement>document.getElementById("phoneNumber")).value,
}
    console.log(clientDetails);
    clientList.push(clientDetails);
    console.log(clientList);

    let myContainer = document.getElementById('companyName1') as HTMLInputElement;
    myContainer.value = clientDetails.companyName;
}



