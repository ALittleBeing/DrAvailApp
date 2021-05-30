import {Hospital} from '../hospital/hospitals';
import {Availability} from '../doctor/availability';

export interface Doctor{
    ID: number;
    // user ID from AspNetUser table.
    OwnerID: string;
     Name: string;
     RegNumber: string;
     RegistredMedicalCouncil: MedicalCouncil,
     Speciality: Speciality;
    Degree: string;
     Age: number;
    DateOfBirth: Date;
    Gender: Gender;
    Practice: Practice;
     Experience: number;
     IsVerified : boolean;
      Summary: string;
      City : string;
     District: District;
     Pincode: number;
    EmailId : string;
     PhoneNumber: string;
     HospitalID : number;
     Hospital: Hospital;
     CommonAvaliabilityID: number;
     CommonAvailability: Availability;
    CurrentAvaliabilityID: number;
    CurrentAvailability: Availability;
    DateCreated : Date;
    LastModified: Date;
}

export enum Gender{
    Male,
    Female
}

export enum Practice{
    Government,
    Private
}

export enum Speciality{
        Siddha,
        Allergist,
        Anesthesiologist,
        Cardiologist,
        Chiropractor,
        Dentist,
        Dermatologist,
        FertilitySpecialist,
        Gynecologist,
        MassageTherapist,
        Naturopath,
        Neurologist,
        Obstetrician,
        OccupationalTherapist,
        Oncologist,
        Ophthalmologist,
        Pediatrician,
        PhysicalTherapist,
        Podiatrist,
        Psychiatrist,
        Radiologist,
        GeneralSurgeons,
        GeneralPhysician
}

export enum MedicalCouncil{
        AndhraPradeshMedicalCouncil,
        ArunachalPradeshMedicalCouncil,
        AssamMedicalCouncil,
        BhopalMedicalCouncil,
        BiharMedicalCouncil,
        BombayMedicalCouncil,
        ChandigarhMedicalCouncil,
        ChattisgarhMedicalCouncil,
        DelhiMedicalCouncil,
        GoaMedicalCouncil,
        GujaratMedicalCouncil,
        HaryanaMedicalCouncil,
        HimachalPradeshMedicalCouncil,
        HyderabadMedicalCouncil,
        JammuKashmirMedicalCouncil,
        JharkhandMedicalCouncil,
        KarnatakaMedicalCouncil,
        MadhyaPradeshMedicalCouncil,
        MadrasMedicalCouncil,
        MahakoshalMedicalCouncil,
        MaharashtraMedicalCouncil,
        ManipurMedicalCouncil,
        MedicalCouncilofIndia,
        MedicalCouncilofTanganyika,
        MizoramMedicalCouncil,
        MysoreMedicalCouncil,
        NagalandMedicalCouncil,
        OrissaCouncilofMedicalRegistration,
        PondicherryMedicalCouncil,
        PunjabMedicalCouncil,
        RajasthanMedicalCouncil,
        SikkimMedicalCouncil,
        TamilNaduMedicalCouncil,
        TelanganaStateMedicalCouncil,
        TravancoreCochinMedicalCouncil, Trivandrum,
        TripuraStateMedicalCouncil,
        UttarPradeshMedicalCouncil,
        UttarakhandMedicalCouncil,
        VidharbaMedicalCouncil,
        WestBengalMedicalCouncil
}

export enum District
    {
        Ariyalur,
        Chengalpattu,
        Chennai,
        Coimbatore,
        Cuddalore,
        Dharmapuri,
        Dindigul,
        Erode,
        Kallakurichi,
        Kanchipuram,
        Kanniyakumari,
        Karur,
        Krishnagiri,
        Madurai,
        Nagapattinam,
        Namakkal,
        Nilgiris,
        Perambalur,
        Pudukkottai,
        Ramanathapuram,
        Ranipet,
        Salem,
        Sivaganga,
        Tenkasi,
        Thanjavur,
        Theni,
        Thiruvallur,
        Thiruvarur,
        Tiruchirappalli,
        Tirunelveli,
        Tirupathur,
        Tiruppur,
        Tiruvannamalai,
        Tuticorin,
        Vellore,
        Viluppuram,
        Virudhunagar
}

export class doctor{
    ID: number;
    Name: string;
    Gender: Gender;
    constructor(id:number, name:string){
      this.ID = id;
      this.Name = name;
      this.Gender = Gender.Male;
    }
  }