import {Doctor, District} from '../doctor/doctors';

export interface Hospital
{
    ID: number;
    OwnerID: string;
    Name : string;
    Type : HospitalType;
    Address : string;
    City : string;
    District: District;
    Pincode: number;
    EmailId : string;
    PhoneNo : string;
    IsVerified: boolean;
    Doctors: Doctor[]
}

enum HospitalType
{
    General,
    Specialty,
    Clinic,
    Psychiatric,
    Teaching
}