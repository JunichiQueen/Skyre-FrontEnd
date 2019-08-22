import React, { Component } from 'react';

export default function CaseIndividual (props){
    const {
            citizenId,
            forenames,
            surname,
            address,
            dateOfBirth,
            placeOfBirth,
            sex,
            bankAccountId,
            accountNumber,
            bank,
            phoneNumber,
            network,
            registrationId,
            driverlicenseId,
            vehicleRegistrationNo,
            registrationDate,
            make,
            model,
            colour,
    } = props
    return(
        <div>
            <p>{forenames + " " + surname}</p>
            <h6>Biography: </h6><p>{"Address=" + address + ", Date Of Birth=" + dateOfBirth + ", Place Of Birth=" + placeOfBirth + ", Sex=" + sex}</p>
            <h6>Bank Details: </h6><p>{"Bank=" + bank}</p>
            <h6>Mobile Details: </h6><p>{"PhoneNumber=" + phoneNumber + ", Network=" + network}</p>
            <h6>ANPR: </h6><p>{"DriversLicenseId=" + driverlicenseId + ", VehicleRegistrationNo=" + vehicleRegistrationNo + ", RegistrationDate=" + registrationDate + ", Make=" + make + ", Model=" + model + ", Colour=" + colour}</p>
        </div>
    )
}