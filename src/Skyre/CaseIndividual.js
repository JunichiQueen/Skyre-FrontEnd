import React from 'react';

export default function CaseIndividual (props){
    const {
            citizenId,
            forenames,
            surname,
            homeAddress,
            dateOfBirth,
            placeOfBirth,
            sex,
            bankAccountId,
            accountNumber,
            bank,
            phoneNumber,
            network,
            registrationId,
            driverLicenceId,
            vehicleRegistrationNo,
            registrationDate,
            make,
            model,
            colour,
    } = props
    return(
        <div>
            <p>{forenames + " " + surname}</p>
            <h6>Biography: </h6><p>{"Address=" + homeAddress + ", Date Of Birth=" + dateOfBirth + ", Place Of Birth=" + placeOfBirth + ", Sex=" + sex}</p>
            <h6>Bank Details: </h6><p>{"Bank=" + bank + ", AccountNumber=" + accountNumber}</p>
            <h6>Mobile Details: </h6><p>{"PhoneNumber=" + phoneNumber + ", Network=" + network}</p>
            <h6>ANPR: </h6><p>{"DriverLicenceId=" + driverLicenceId + ", VehicleRegistrationNo=" + vehicleRegistrationNo + ", RegistrationDate=" + registrationDate + ", Make=" + make + ", Model=" + model + ", Colour=" + colour}</p>
        </div>
    )
}