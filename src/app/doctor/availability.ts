import {Hospital} from '../hospital/hospitals';

export interface Availability{
    ID: number;
        AvailabilityType: string;
        Status: string;
        CommonDays: Timings;
        IsAvailableOnWeekend: boolean;
        WeekendSameAsCommon: boolean;
        Weekends: Timings ;

        //for current availability
        IsCurrentAvailabilityAdded: boolean;
        CurrentStartDateTime : Date | null;
        CurrentEndDateTime : Date | null;
        ContactPreference: ContactPreference;
        HospitalID: number | null;
        Hospital: Hospital;
}

enum ContactPreference
{
        Always,
        EmergencyOnly,
        Never
}

export interface Timings
{
    //Morning start
    MorningStartHour: string;
    MorningStartMinute: string;
    MorningStartTime: Date;

    //Morning End
    MorningEndHour: string;
    MorningEndMinute: string;
    MorningEndTime: Date;

    //Evening start
    EveningStartHour: string;
    EveningStartMinute: string;
    EveningStartTime: Date;

    //Evening End
    EveningEndHour: string;
    EveningEndMinute: string;
    EveningEndTime: Date;
}