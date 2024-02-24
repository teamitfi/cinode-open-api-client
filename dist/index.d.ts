type ApiRequestOptions = {
    readonly method: 'GET' | 'PUT' | 'POST' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'PATCH';
    readonly url: string;
    readonly path?: Record<string, any>;
    readonly cookies?: Record<string, any>;
    readonly headers?: Record<string, any>;
    readonly query?: Record<string, any>;
    readonly formData?: Record<string, any>;
    readonly body?: any;
    readonly mediaType?: string;
    readonly responseHeader?: string;
    readonly errors?: Record<number, string>;
};
export class CancelError extends Error {
    constructor(message: string);
    get isCancelled(): boolean;
}
interface OnCancel {
    readonly isResolved: boolean;
    readonly isRejected: boolean;
    readonly isCancelled: boolean;
    (cancelHandler: () => void): void;
}
export class CancelablePromise<T> implements Promise<T> {
    #private;
    constructor(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void, onCancel: OnCancel) => void);
    get [Symbol.toStringTag](): string;
    then<TResult1 = T, TResult2 = never>(onFulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null, onRejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): Promise<TResult1 | TResult2>;
    catch<TResult = never>(onRejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null): Promise<T | TResult>;
    finally(onFinally?: (() => void) | null): Promise<T>;
    cancel(): void;
    get isCancelled(): boolean;
}
type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
type Headers = Record<string, string>;
export type OpenAPIConfig = {
    BASE: string;
    VERSION: string;
    WITH_CREDENTIALS: boolean;
    CREDENTIALS: 'include' | 'omit' | 'same-origin';
    TOKEN?: string | Resolver<string> | undefined;
    USERNAME?: string | Resolver<string> | undefined;
    PASSWORD?: string | Resolver<string> | undefined;
    HEADERS?: Headers | Resolver<Headers> | undefined;
    ENCODE_PATH?: ((path: string) => string) | undefined;
};
export const OpenAPI: OpenAPIConfig;
export abstract class BaseHttpRequest {
    readonly config: OpenAPIConfig;
    constructor(config: OpenAPIConfig);
    abstract request<T>(options: ApiRequestOptions): CancelablePromise<T>;
}
type ApiResult = {
    readonly url: string;
    readonly ok: boolean;
    readonly status: number;
    readonly statusText: string;
    readonly body: any;
};
export class ApiError extends Error {
    readonly url: string;
    readonly status: number;
    readonly statusText: string;
    readonly body: any;
    readonly request: ApiRequestOptions;
    constructor(request: ApiRequestOptions, response: ApiResult, message: string);
}
export type AbsenceAddEditModel = {
    start: string;
    end?: string | null;
    extentPercentage: number;
    absenceTypeId: number;
};
export type CalendarDayModel = {
    date?: string;
    year?: number;
    month?: number;
    day?: number;
    weekday?: number;
    week?: number;
    quarter?: number;
    dayOfYear?: number;
};
export type AbscencePeriodDayModel = {
    calendarDay?: CalendarDayModel | null;
};
export type AbsencePeriodModel = {
    companyId?: number;
    companyUserId?: number;
    absenceTypeId?: number;
    absenceTypeName?: string | null;
    id?: number;
    days?: Array<AbscencePeriodDayModel> | null;
    extentPercentage?: number;
};
export class AbsenceService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get absence period by id
     * @param companyId Your company id
     * @param companyUserId The id of the actual user
     * @param id The id for the requested absence period
     * @returns AbsencePeriodModel All went well
     * @throws ApiError
     */
    absence(companyId: number, companyUserId: number, id: number): CancelablePromise<AbsencePeriodModel>;
    /**
     * Update Absence Item for User
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Absence Id
     * @param requestBody CompanyUserProfileCommitmentAddEditModel
     * @returns AbsencePeriodModel All went well
     * @throws ApiError
     */
    updateAbsence(companyId: number, companyUserId: number, id: number, requestBody?: AbsenceAddEditModel): CancelablePromise<AbsencePeriodModel>;
    /**
     * Delete absence
     * @param companyId Company Id
     * @param companyUserId Customer Id
     * @param id Customer Id
     * @returns any All went well
     * @throws ApiError
     */
    deleteAbsence(companyId: number, companyUserId: number, id: number): CancelablePromise<any>;
    /**
     * Create Absence Item for User
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileCommitmentAddEditModel
     * @returns any All went well
     * @returns AbsencePeriodModel Created
     * @throws ApiError
     */
    newAbsence(companyId: number, companyUserId: number, requestBody?: AbsenceAddEditModel): CancelablePromise<any | AbsencePeriodModel>;
}
export type AbsenceTypeDto = {
    id?: number;
    name?: string | null;
};
export type Link = {
    href?: string | null;
    rel?: string | null;
    methods?: Array<string> | null;
};
export type AbsencePeriodDtoModel = {
    id?: number;
    absenceType?: AbsenceTypeDto | null;
    startDate?: string;
    endDate?: string;
    extentPercentage?: number;
    companyUserId?: number;
    companyUserSeoId?: string | null;
    companyId?: number;
    companySeoId?: string | null;
    links?: Array<Link> | null;
};
export class AbsencesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get absence period by company user id
     * @param companyId Your Cinode Company id
     * @param companyUserId The id of the actual User
     * @returns AbsencePeriodDtoModel All went well
     * @throws ApiError
     */
    absences(companyId: number, companyUserId: number): CancelablePromise<Array<AbsencePeriodDtoModel>>;
}
export type AbsenceTypeModel = {
    id?: number;
    name?: string | null;
};
export class AbsenceTypeService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get absence types for company
     * @param companyId
     * @returns AbsenceTypeModel All went well
     * @throws ApiError
     */
    absenceTypes(companyId: number): CancelablePromise<Array<AbsenceTypeModel>>;
}
export type AvailabilityFilterModel = {
    companyUserId?: number | null;
    startDate: string;
    endDate: string;
};
export type AvailabilityModel = {
    companyUserId?: number;
    availability?: number;
    startDate?: string;
    endDate?: string;
};
export class AvailabilityService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get availability for company users. Omitting companyUserId gets availability for all company users in company.
     * @param companyId Your Cinode Company id
     * @param requestBody Filter options
     * @returns AvailabilityModel All went well
     * @throws ApiError
     */
    searchAvailability(companyId: number, requestBody?: AvailabilityFilterModel): CancelablePromise<Array<AvailabilityModel>>;
}
/**
 *
 *
 * Övrig = 0
 *
 * Besöksadress = 1
 *
 * Faktureringsadress = 2
 *
 * Placeringsort = 3
 */
export enum AddressType {
    Undefined = 0,
    StreetAddress = 1,
    InvoiceAddress = 2,
    LocationAddress = 3
}
export type CompanyAddressModel = {
    companyId?: number | null;
    id?: number | null;
    street1?: string | null;
    street2?: string | null;
    zipCode?: string | null;
    city?: string | null;
    country?: string | null;
    email?: string | null;
    /**
     * Undefined = 0,
     * StreetAddress = 1 (VisitingAddress)
     * InvoiceAddress = 2,
     * LocationAddress = 3 (Used to connect an Employee to an office registered in Cinode)
     */
    addressType?: AddressType;
    comments?: string | null;
    links?: Array<Link> | null;
};
export type CompanyTagBaseModel = {
    companyId?: number | null;
    id?: number | null;
    seoId?: string | null;
    name?: string | null;
};
export type CurrencyModel = {
    id?: number;
    currencyCode?: string | null;
    description?: string | null;
};
export type CompanyModel = {
    /**
     * External identifier
     */
    corporateIdentityNumber?: string | null;
    vatNumber?: string | null;
    registrationYear?: number | null;
    isTaxRegistered?: boolean | null;
    addresses?: Array<CompanyAddressModel> | null;
    tags?: Array<CompanyTagBaseModel> | null;
    countryId?: number | null;
    defaultCurrency?: CurrencyModel | null;
    currencies?: Array<CurrencyModel> | null;
    id?: number | null;
    name?: string | null;
    seoId?: string | null;
    description?: string | null;
    links?: Array<Link> | null;
};
export class CompanyService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get company by id
     * @param companyId CompanyId
     * @returns CompanyModel All went well
     * @throws ApiError
     */
    company(companyId: number): CancelablePromise<CompanyModel>;
}
export type CompanyUserImageModel = {
    imageId?: number;
    companyId?: number;
    url?: string | null;
    largeImageUrl?: string | null;
    uploadedWhen?: string;
    links?: Array<Link> | null;
};
/**
 *
 *
 * Frånkopplad = 0
 *
 * Kommande = 2
 *
 * Aktiv = 3
 */
export enum CompanyUserStatus {
    Disconnected = 0,
    PreActive = 2,
    Active = 3
}
/**
 *
 *
 * Medarbetare = 0
 *
 * Kandidat = 10
 *
 * Underkonsult = 20
 *
 * Api = 30
 *
 * Bot = 40
 */
export enum CompanyUserType {
    Employee = 0,
    Candidate = 10,
    Subcontractor = 20,
    Api = 30,
    Bot = 40
}
export type LocationModel = {
    locationId?: number;
    name?: string | null;
    street?: string | null;
    streetNumber?: string | null;
    zipCode?: string | null;
    city?: string | null;
    country?: string | null;
    countryCode?: string | null;
    formattedAddress?: string | null;
    phoneNumber?: string | null;
    latitude?: string | null;
    longitude?: string | null;
    webSiteUrl?: string | null;
    displayName?: string | null;
};
export type CompanyUserExtendedModel = {
    /**
     * Disconnected = 0,
     * PreActive = 2,
     * Active = 3,
     */
    status?: CompanyUserStatus | null;
    title?: string | null;
    companyUserEmail?: string | null;
    createdDateTime?: string | null;
    updatedDateTime?: string | null;
    employmentNumber?: string | null;
    companyAddress?: CompanyAddressModel | null;
    homeAddress?: LocationModel | null;
    image?: CompanyUserImageModel | null;
    desiredAssignment?: string | null;
    internalIdentifier?: string | null;
    twitter?: string | null;
    linkedIn?: string | null;
    homepage?: string | null;
    blog?: string | null;
    gitHub?: string | null;
    companyUserId?: number | null;
    companyId?: number | null;
    seoId?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    /**
     * Employee = 0,
     * Candidate = 10,
     * Subcontractor = 20
     */
    companyUserType?: CompanyUserType | null;
    /**
     * @deprecated
     */
    id?: number | null;
    links?: Array<Link> | null;
};
export class CompanyAddressUsersService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get company users list for an address
     * @param companyId Company Id
     * @param id Address Id
     * @returns CompanyUserExtendedModel All went well
     * @throws ApiError
     */
    companyAddressUsers(companyId: number, id: number): CancelablePromise<Array<CompanyUserExtendedModel>>;
}
export type CompanyCandidateAddInviteModel = {
    email?: string | null;
    message?: string | null;
};
/**
 *
 *
 * Öppen = 0
 *
 * Vunnen = 10
 *
 * Pausad = 20
 *
 * Avböjd av kandidat = 30
 *
 * Avböjd av oss = 40
 */
export enum CompanyCandidateState {
    Open = 0,
    Won = 10,
    Paused = 20,
    Lost = 30,
    Rejected = 40
}
/**
 *
 *
 * Ej angiven = 0
 *
 * Man = 1
 *
 * Kvinna = 2
 */
export enum UserGender {
    Other = 0,
    Male = 1,
    Female = 2
}
export type CompanyCandidateAddModel = {
    firstName: string;
    lastName: string;
    gender?: UserGender;
    birthYear?: number | null;
    title?: string | null;
    description?: string | null;
    email?: string | null;
    phone?: string | null;
    linkedInUrl?: string | null;
    rating?: number | null;
    state: CompanyCandidateState;
    availableFromDate?: string | null;
    periodOfNoticeDays?: number | null;
    salaryRequirement?: number | null;
    isMobile?: boolean;
    recruitmentManagerId?: number | null;
    pipelineId?: number | null;
    pipelineStageId?: number | null;
    teamId?: number | null;
    companyAddressId?: number | null;
    recruitmentSourceId?: number | null;
    currentEmployer?: string | null;
    campaignCode?: string | null;
    currencyId?: number | null;
    offeredSalary?: number | null;
    notifyRecruitmentManager?: boolean;
};
/**
 *
 *
 * File = 0
 *
 * Uri = 1
 */
export enum AttachmentType {
    File = 0,
    Uri = 1
}
export type CompanyCandidateAttachmentModel = {
    id?: string;
    attachmentType?: AttachmentType;
    companyId?: number;
    companyCandidateId?: number;
    title?: string | null;
    description?: string | null;
    links?: Array<Link> | null;
};
export type CompanyUserBaseModel = {
    companyUserId?: number | null;
    companyId?: number | null;
    seoId?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    /**
     * Employee = 0,
     * Candidate = 10,
     * Subcontractor = 20
     */
    companyUserType?: CompanyUserType | null;
    /**
     * @deprecated
     */
    id?: number | null;
    links?: Array<Link> | null;
};
export type CompanyCandidateExtendedModel = {
    rating?: number | null;
    availableFromDate?: string | null;
    periodOfNoticeDays?: number | null;
    salaryRequirement?: number | null;
    offeredSalary?: number | null;
    state?: CompanyCandidateState | null;
    currencyId?: number | null;
    isMobile?: boolean;
    pipelineId?: number | null;
    pipelineStageId?: number | null;
    recruitmentManagerId?: number | null;
    campaignCode?: string | null;
    /**
     * Other = 0,
     * Male = 1,
     * Female = 2
     */
    gender?: UserGender;
    birthYear?: number | null;
    title?: string | null;
    description?: string | null;
    email?: string | null;
    linkedInUrl?: string | null;
    phone?: string | null;
    attachments?: Array<CompanyCandidateAttachmentModel> | null;
    recruitmentManager?: CompanyUserBaseModel | null;
    currentEmployer?: string | null;
    id?: number;
    companyId?: number;
    seoId?: string | null;
    /**
     * @deprecated
     */
    readonly firstname?: string | null;
    firstName?: string | null;
    /**
     * @deprecated
     */
    readonly lastname?: string | null;
    lastName?: string | null;
    createdDateTime?: string;
    lastTouchDateTime?: string | null;
    updatedDateTime?: string | null;
    links?: Array<Link> | null;
};
export type Operation = {
    op?: string;
    value?: Record<string, any> | null;
    path?: string;
};
/**
 * Array of patch operations to perform
 */
export type JsonPatchDocument = Array<Operation>;
export class CompanyCandidateService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get Candidate by Id
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param id Candidate Id
     * @returns CompanyCandidateExtendedModel All went well
     * @throws ApiError
     */
    candidate(companyId: number, id: number): CancelablePromise<CompanyCandidateExtendedModel>;
    /**
     * Patch company candidate
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param id Candidate Id
     * @param requestBody Only certain properties on the user are patchable. See the generated example for a list of available properties, using the `op: "replace"` as example. See the generated schema for `ICompanyCandidatePatchDocument` for full type information per property
     * @returns CompanyCandidateExtendedModel All went well
     * @throws ApiError
     */
    patchCompanyCandidate(companyId: number, id: number, requestBody?: JsonPatchDocument): CancelablePromise<CompanyCandidateExtendedModel>;
    /**
     * Delete candidate from the system
     * This action is irreversible, use with caution
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param id Candidate Id
     * @returns any All went well
     * @throws ApiError
     */
    deleteCompanyCandidate(companyId: number, id: number): CancelablePromise<any>;
    /**
     * Create Candidate
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param requestBody CompanyCandidateAddModel
     * @returns any All went well
     * @returns CompanyCandidateExtendedModel Created
     * @throws ApiError
     */
    addCompanyCandidate(companyId: number, requestBody?: CompanyCandidateAddModel): CancelablePromise<any | CompanyCandidateExtendedModel>;
    /**
     * Invite the CompanyCandidate to create their own Cinode account
     * A email is sent with your message and details for how to login
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param id Candidate Id
     * @param requestBody Model with data about the candidate needed for the invitation
     * @returns any All went well
     * @throws ApiError
     */
    inviteCandidate(companyId: number, id: number, requestBody?: CompanyCandidateAddInviteModel): CancelablePromise<any>;
}
export type EventCommentModel = {
    id?: number | null;
    eventId?: string | null;
    text?: string | null;
    companyUserId?: number;
    companyUserName?: string | null;
    created?: string;
};
/**
 *
 *
 * Möte = 0
 *
 * Notering = 1
 *
 * Uppgift = 2
 *
 * Samtal = 3
 */
export enum EventType {
    Meeting = 0,
    Note = 1,
    Task = 2,
    Call = 3
}
/**
 *
 *
 * Publik = 0
 *
 * Privat = 1
 */
export enum EventVisibility {
    Public = 0,
    Private = 1
}
export type CompanyCandidateEventModel = {
    companyCandidateId?: number;
    createdByCompanyUserId?: number;
    updatedByCompanyUserId?: number | null;
    created?: string;
    updated?: string | null;
    visibility?: EventVisibility;
    comments?: Array<EventCommentModel> | null;
    /**
     * Meeting = 0
     * Note = 1
     * Task = 2
     */
    type?: EventType;
    id?: string | null;
    companyId?: number | null;
    title?: string | null;
    description?: string | null;
    descriptionHtml?: string | null;
    descriptionDelta?: string | null;
    eventDate?: string;
    links?: Array<Link> | null;
};
export class CompanyCandidateEventService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get company candidates event by id
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @returns CompanyCandidateEventModel All went well
     * @throws ApiError
     */
    companyCandidateEvent(companyId: number, candidateId: number, id: string): CancelablePromise<CompanyCandidateEventModel>;
}
/**
 *
 *
 * Inte påbörjad = 0
 *
 * Påbörjad = 1
 *
 * Färdig = 2
 *
 * Uppskjuten = 3
 *
 * Väntar = 4
 */
export enum EventStatusValue {
    NotStarted = 0,
    InProgress = 1,
    Completed = 2,
    Deferred = 3,
    WaitingForSomeoneElse = 4
}
export type CompanyCandidateEventMeetingModel = {
    companyCandidateId?: number;
    startDateTime?: string;
    endDateTime?: string;
    location?: string | null;
    assignedToCompanyUserId?: number | null;
    status?: EventStatusValue;
    createdByCompanyUserId?: number;
    updatedByCompanyUserId?: number | null;
    created?: string;
    updated?: string | null;
    visibility?: EventVisibility;
    comments?: Array<EventCommentModel> | null;
    /**
     * Meeting = 0
     * Note = 1
     * Task = 2
     */
    type?: EventType;
    id?: string | null;
    companyId?: number | null;
    title?: string | null;
    description?: string | null;
    descriptionHtml?: string | null;
    descriptionDelta?: string | null;
    eventDate?: string;
    links?: Array<Link> | null;
};
export type EventMeetingAddEditModel = {
    startDateTime?: string;
    endDateTime?: string;
    /**
     * The desired timezone to be used for StartDateTime and EndDateTime properties. Valid timezone ids can be found at https://nodatime.org/TimeZones
     * If empty, the timezone of the executing user (API account) will be used.
     */
    timezoneId?: string | null;
    assignedToCompanyUserId?: number | null;
    status?: EventStatusValue;
    type?: EventType;
    title: string;
    description?: string | null;
    visibility?: EventVisibility;
};
export class CompanyCandidateEventMeetingService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get company candidates meeting event with specified id
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @returns CompanyCandidateEventMeetingModel All went well
     * @throws ApiError
     */
    companyCandidateEventMeeting(companyId: number, candidateId: number, id: string): CancelablePromise<CompanyCandidateEventMeetingModel>;
    /**
     * Update meeting event for company candidate
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @param requestBody Meeting Event details
     * @returns CompanyCandidateEventMeetingModel All went well
     * @throws ApiError
     */
    updateCompanyCandidateEventMeeting(companyId: number, candidateId: number, id: string, requestBody?: EventMeetingAddEditModel): CancelablePromise<CompanyCandidateEventMeetingModel>;
    /**
     * Delete company candidate meeting event
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @returns any All went well
     * @throws ApiError
     */
    deleteCompanyCandidateEventMeeting(companyId: number, candidateId: number, id: string): CancelablePromise<any>;
    /**
     * Add new meeting event for company candidate
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param requestBody Meeting Event details
     * @returns any All went well
     * @returns CompanyCandidateEventMeetingModel Created
     * @throws ApiError
     */
    newCompanyCandidateEventMeeting(companyId: number, candidateId: number, requestBody?: EventMeetingAddEditModel): CancelablePromise<any | CompanyCandidateEventMeetingModel>;
}
export type CompanyCandidateEventBaseModel = {
    companyCandidateId?: number;
    /**
     * Meeting = 0
     * Note = 1
     * Task = 2
     */
    type?: EventType;
    id?: string | null;
    companyId?: number | null;
    title?: string | null;
    description?: string | null;
    descriptionHtml?: string | null;
    descriptionDelta?: string | null;
    eventDate?: string;
    links?: Array<Link> | null;
};
export class CompanyCandidateEventMeetingsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get company candidates events meetings list
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @returns CompanyCandidateEventBaseModel All went well
     * @throws ApiError
     */
    companyCandidateMeetingEventList(companyId: number, candidateId: number): CancelablePromise<Array<CompanyCandidateEventBaseModel>>;
}
/**
 *
 *
 * Ej angiven = 0
 *
 * Telefonsamtal = 1
 *
 * E-mail = 2
 */
export enum EventNoteType {
    NotSpecified = 0,
    Phone = 1,
    Email = 2
}
export type CompanyCandidateEventNoteModel = {
    companyCandidateId?: number;
    noteType?: EventNoteType | null;
    noteDate?: string | null;
    assignedToCompanyUserId?: number | null;
    createdByCompanyUserId?: number;
    updatedByCompanyUserId?: number | null;
    created?: string;
    updated?: string | null;
    visibility?: EventVisibility;
    comments?: Array<EventCommentModel> | null;
    /**
     * Meeting = 0
     * Note = 1
     * Task = 2
     */
    type?: EventType;
    id?: string | null;
    companyId?: number | null;
    title?: string | null;
    description?: string | null;
    descriptionHtml?: string | null;
    descriptionDelta?: string | null;
    eventDate?: string;
    links?: Array<Link> | null;
};
export type EventNoteAddEditModel = {
    noteType?: EventNoteType | null;
    noteDate?: string | null;
    /**
     * The desired timezone to be used for NoteDate property. Valid timezone ids can be found at https://nodatime.org/TimeZones
     * If empty, the timezone of the executing user (API account) will be used.
     */
    timezoneId?: string | null;
    assignedToCompanyUserId?: number | null;
    type?: EventType;
    title: string;
    description?: string | null;
    visibility?: EventVisibility;
};
export class CompanyCandidateEventNoteService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get company candidates note event with specified id
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @returns CompanyCandidateEventNoteModel All went well
     * @throws ApiError
     */
    companyCandidateEventNote(companyId: number, candidateId: number, id: string): CancelablePromise<CompanyCandidateEventNoteModel>;
    /**
     * Update note event for company candidate
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @param requestBody Note Event details
     * @returns CompanyCandidateEventNoteModel All went well
     * @throws ApiError
     */
    updateCompanyCandidateEventNote(companyId: number, candidateId: number, id: string, requestBody?: EventNoteAddEditModel): CancelablePromise<CompanyCandidateEventNoteModel>;
    /**
     * Delete company candidate note event
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @returns any All went well
     * @throws ApiError
     */
    deleteCompanyCandidateEventNote(companyId: number, candidateId: number, id: string): CancelablePromise<any>;
    /**
     * Add new note event for company candidate
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param requestBody Note Event details
     * @returns any All went well
     * @returns CompanyCandidateEventNoteModel Created
     * @throws ApiError
     */
    newCompanyCandidateEventNote(companyId: number, candidateId: number, requestBody?: EventNoteAddEditModel): CancelablePromise<any | CompanyCandidateEventNoteModel>;
}
export class CompanyCandidateEventNotesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get company candidates events notes list
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @returns CompanyCandidateEventBaseModel All went well
     * @throws ApiError
     */
    companyCandidateNoteEventList(companyId: number, candidateId: number): CancelablePromise<Array<CompanyCandidateEventBaseModel>>;
}
export class CompanyCandidateEventsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get company candidates events list
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @returns CompanyCandidateEventBaseModel All went well
     * @throws ApiError
     */
    companyCandidateEvents(companyId: number, candidateId: number): CancelablePromise<Array<CompanyCandidateEventBaseModel>>;
}
/**
 *
 *
 * Ej angiven = 0
 *
 * Telefonsamtal = 1
 *
 * E-mail = 2
 */
export enum EventTaskType {
    NotSpecified = 0,
    Phone = 1,
    Email = 2
}
export type CompanyCandidateEventTaskModel = {
    companyCandidateId?: number;
    /**
     * NotSpecified = 0
     * Phone = 1
     * Email = 2
     */
    taskType?: EventTaskType | null;
    hasTime?: boolean | null;
    dueDateTime?: string | null;
    assignedToCompanyUserId?: number | null;
    status?: EventStatusValue;
    createdByCompanyUserId?: number;
    updatedByCompanyUserId?: number | null;
    created?: string;
    updated?: string | null;
    visibility?: EventVisibility;
    comments?: Array<EventCommentModel> | null;
    /**
     * Meeting = 0
     * Note = 1
     * Task = 2
     */
    type?: EventType;
    id?: string | null;
    companyId?: number | null;
    title?: string | null;
    description?: string | null;
    descriptionHtml?: string | null;
    descriptionDelta?: string | null;
    eventDate?: string;
    links?: Array<Link> | null;
};
export type EventTaskAddEditModel = {
    taskType?: EventTaskType | null;
    hasTime?: boolean | null;
    dueDateTime?: string | null;
    /**
     * The desired timezone to be used for DueDateTime property. Valid timezone ids can be found at https://nodatime.org/TimeZones
     * If empty, the timezone of the executing user (API account) will be used.
     */
    timezoneId?: string | null;
    assignedToCompanyUserId?: number | null;
    status?: EventStatusValue;
    type?: EventType;
    title: string;
    description?: string | null;
    visibility?: EventVisibility;
};
export class CompanyCandidateEventTaskService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get company candidates task event with specified id
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @returns CompanyCandidateEventTaskModel All went well
     * @throws ApiError
     */
    companyCandidateEventTask(companyId: number, candidateId: number, id: string): CancelablePromise<CompanyCandidateEventTaskModel>;
    /**
     * Update task event for company candidate
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @param requestBody Task Event details
     * @returns CompanyCandidateEventTaskModel All went well
     * @throws ApiError
     */
    updateCompanyCandidateEventTask(companyId: number, candidateId: number, id: string, requestBody?: EventTaskAddEditModel): CancelablePromise<CompanyCandidateEventTaskModel>;
    /**
     * Delete company candidate task event
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Event Id
     * @returns any All went well
     * @throws ApiError
     */
    deleteCompanyCandidateEventTask(companyId: number, candidateId: number, id: string): CancelablePromise<any>;
    /**
     * Add new task event for company candidate
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param requestBody Task Event details
     * @returns any All went well
     * @returns CompanyCandidateEventTaskModel Created
     * @throws ApiError
     */
    newCompanyCandidateEventTask(companyId: number, candidateId: number, requestBody?: EventTaskAddEditModel): CancelablePromise<any | CompanyCandidateEventTaskModel>;
}
export class CompanyCandidateEventTasksService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get company candidates events tasks list
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @returns CompanyCandidateEventBaseModel All went well
     * @throws ApiError
     */
    companyCandidateTaskEventList(companyId: number, candidateId: number): CancelablePromise<Array<CompanyCandidateEventBaseModel>>;
}
export class CompanyCandidateFileAttachmentService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get Candidate File Attachment by Id
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param id
     * @param companyId
     * @param attachmentId
     * @returns string All went well
     * @throws ApiError
     */
    getCandidateAttachment(id: number, companyId: number, attachmentId: string): CancelablePromise<string>;
}
export type CompanyCandidateFileAttachmentModel = {
    fileName?: string | null;
    extension?: string | null;
    id?: string;
    attachmentType?: AttachmentType;
    companyId?: number;
    companyCandidateId?: number;
    title?: string | null;
    description?: string | null;
    links?: Array<Link> | null;
};
export type CompanyCandidateFileAttachmentListModel = {
    companyCandidateId?: number;
    companyId?: number;
    attachments?: Array<CompanyCandidateFileAttachmentModel> | null;
    links?: Array<Link> | null;
};
export class CompanyCandidateFileAttachmentsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Upload Candidate File Attachment
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param id Candidate Id
     * @param companyId Company Id
     * @param formData
     * @returns CompanyCandidateFileAttachmentListModel Created
     * @throws ApiError
     */
    candidateAttachment(id: number, companyId: number, formData?: {
        Files: Array<Blob>;
        Title: string;
        Description?: string;
    }): CancelablePromise<CompanyCandidateFileAttachmentListModel>;
}
export type CompanyCandidatePipelineStageModel = {
    id?: number;
    title?: string | null;
    description?: string | null;
    order?: number;
    probability?: number | null;
};
export type CompanyCandidatePipelineModel = {
    id?: number;
    title?: string | null;
    description?: string | null;
    stages?: Array<CompanyCandidatePipelineStageModel> | null;
};
export class CompanyCandidatePipelinesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get candidate pipelines
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @returns CompanyCandidatePipelineModel All went well
     * @throws ApiError
     */
    candidatePipelines(companyId: number): CancelablePromise<Array<CompanyCandidatePipelineModel>>;
}
export type CompanyCandidateBaseModel = {
    id?: number;
    companyId?: number;
    seoId?: string | null;
    /**
     * @deprecated
     */
    readonly firstname?: string | null;
    firstName?: string | null;
    /**
     * @deprecated
     */
    readonly lastname?: string | null;
    lastName?: string | null;
    createdDateTime?: string;
    lastTouchDateTime?: string | null;
    updatedDateTime?: string | null;
    links?: Array<Link> | null;
};
export class CompanyCandidatesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get Candidates
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @returns CompanyCandidateBaseModel All went well
     * @throws ApiError
     */
    candidates(companyId: number): CancelablePromise<Array<CompanyCandidateBaseModel>>;
}
export type CompanyCandidateSkillAddModel = {
    name?: string | null;
    companyCandidateId?: number;
    keywordSynonymId?: number | null;
    languageId?: number | null;
};
/**
 *
 *
 * Okategoriserad = 0
 *
 * Branscher = 1
 *
 * Roller = 2
 *
 * Verktyg = 3
 *
 * Tekniker = 4
 *
 * Metoder och processer = 5
 *
 * Plattformar = 6
 *
 * Produkter och tjänster = 7
 *
 * Certifieringar = 10
 *
 * Material = 11
 *
 * Specifikationer och förordningar = 12
 *
 * Hårdvara = 13
 *
 * Verksamhet och funktion = 14
 *
 * Byggnationer = 15
 *
 * Rapporter och utredningar = 16
 *
 * Specialiteter - Medicin = 17
 *
 * Standarder och regelverk = 18
 *
 * Behörigheter = 19
 *
 * Mjuka färdigheter = 20
 *
 * CustomName = 100
 */
export enum KeywordType {
    Uncategorized = 0,
    Industries = 1,
    Roles = 2,
    Tools = 3,
    Techniques = 4,
    MethodsProcesses = 5,
    Platforms = 6,
    Products = 7,
    Certifications = 10,
    Materials = 11,
    SpecificationsRegulations = 12,
    Hardware = 13,
    OperationalAreaAndFunction = 14,
    Construction = 15,
    ReportsInvestigations = 16,
    SpecialitiesMedicine = 17,
    StandardsRegulations = 18,
    Accreditation = 19,
    SoftSkills = 20,
    CustomName = 100
}
export type KeywordModel = {
    id?: number | null;
    /**
     * Uncategorized = 0,
     * Industries = 1
     * Roles = 2
     * Tools = 3
     * Techniques = 4
     * MethodsProcesses = 5
     * Platforms = 6
     * Products = 7
     * Certifications = 10
     * Materials = 11
     * SpecificationsRegulations = 12
     * Hardware = 13
     * OperationalAreaAndFunction = 14
     * Construction = 15
     * ReportsInvestigations = 16
     * SpecialitiesMedicine = 17
     * StandardsRegulations = 18
     * Accreditation = 19
     */
    type?: KeywordType;
    masterSynonymId?: number | null;
    masterSynonym?: string | null;
    synonyms?: Array<string> | null;
    universal?: boolean;
    verified?: boolean;
};
export type KeywordSynonymModel = {
    keywordId?: number | null;
    id?: number | null;
    keyword?: KeywordModel | null;
    name?: string | null;
    seoId?: string | null;
    description?: string | null;
    languageId?: number | null;
};
export type CompanyCandidateSkillModel = {
    companyCandidateId?: number;
    keywordId?: number;
    keyword?: KeywordModel | null;
    keywordSynonymId?: number;
    keywordSynonym?: KeywordSynonymModel | null;
};
export class CompanyCandidateSkillsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Add a Skill to company candidate
     * Sample request:
     *
     * POST /v0.1/companies/1/candidates/19870/skills
     * {
         * "name": "SQL",
         * "companyCandidateId": 19870,
         * "keywordSynonymId": 577,
         * "languageId":1
         * }
         * @param companyId Company Id
         * @param candidateId CandidateId Id
         * @param requestBody CompanyCandidateSkillAddEditModel
         * @returns CompanyCandidateSkillModel All went well
         * @throws ApiError
         */
    newCompanyCandidateSkill(companyId: number, candidateId: number, requestBody?: CompanyCandidateSkillAddModel): CancelablePromise<CompanyCandidateSkillModel>;
    /**
     * Delete Candidate Skill
     * Sample request:
     *
     * DELETE /v0.1/companies/1/candidates/19870/skills/577
     * @param companyId Company Id
     * @param candidateId CandidateId Id
     * @param id Skill Keyword Id
     * @returns any All went well
     * @throws ApiError
     */
    deleteCompanyCandidateSkill(companyId: number, candidateId: number, id: number): CancelablePromise<any>;
}
export type CompanyCandidateUriAttachmentAddModel = {
    uri?: string | null;
    title?: string | null;
    description?: string | null;
};
export type CompanyCandidateUriAttachmentModel = {
    uri?: string | null;
    id?: string;
    attachmentType?: AttachmentType;
    companyId?: number;
    companyCandidateId?: number;
    title?: string | null;
    description?: string | null;
    links?: Array<Link> | null;
};
export class CompanyCandidateUriAttachmentService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Add Candidate Uri (Link)
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param id Candidate Id
     * @param companyId Company Id
     * @param requestBody
     * @returns CompanyCandidateUriAttachmentModel Created
     * @throws ApiError
     */
    candidateUriAttachment(id: number, companyId: number, requestBody?: CompanyCandidateUriAttachmentAddModel): CancelablePromise<CompanyCandidateUriAttachmentModel>;
    /**
     * Delete Candidate Uri (Link)
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param id Candidate Id
     * @param companyId Company Id
     * @param attachmentId
     * @returns any Success
     * @throws ApiError
     */
    deleteCandidateUriAttachment(id: number, companyId: number, attachmentId: string): CancelablePromise<any>;
}
export class CompanyCandidateUriAttachmentsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get Candidate Uri Attachment by Id
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param id
     * @param companyId
     * @param attachmentId
     * @returns CompanyCandidateUriAttachmentModel All went well
     * @throws ApiError
     */
    getCandidateUriAttachment(id: number, companyId: number, attachmentId: string): CancelablePromise<CompanyCandidateUriAttachmentModel>;
}
export type CompanyCandidateAddCandidateUserModel = {
    createProfile?: boolean | null;
    languageId?: number | null;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
};
/**
 *
 *
 * Frånkopplad = 0
 *
 * Aktiv = 1
 */
export enum CompanyUserCandidateStatus {
    Disconnected = 0,
    Active = 1
}
export type CompanyResumeTemplateBaseModel = {
    id?: number;
    title?: string | null;
};
export type CompanyResumeTemplateLanguageModel = {
    languageId?: number;
    name?: string | null;
    culture?: string | null;
    lang?: string | null;
    country?: string | null;
};
export type CreatedModel = {
    companyUserId?: number | null;
    firstName?: string | null;
    lastName?: string | null;
    time?: string | null;
};
export type UpdatedModel = {
    companyUserId?: number | null;
    firstName?: string | null;
    lastName?: string | null;
    time?: string | null;
};
export type CompanyUserResumeBaseModel = {
    id?: number | null;
    companyUserId?: number | null;
    companyId?: number | null;
    created?: CreatedModel | null;
    updated?: UpdatedModel | null;
    title?: string | null;
    description?: string | null;
    slug?: string | null;
    language?: CompanyResumeTemplateLanguageModel | null;
    template?: CompanyResumeTemplateBaseModel | null;
    isPublic?: boolean;
    links?: Array<Link> | null;
};
export type CompanyUserCandidateModel = {
    resumes?: Array<CompanyUserResumeBaseModel> | null;
    defaultCurrency?: CurrencyModel | null;
    createdDateTime?: string;
    phone?: string | null;
    tags?: Array<CompanyTagBaseModel> | null;
    status?: CompanyUserCandidateStatus | null;
    email?: string | null;
    companyAddress?: CompanyAddressModel | null;
    homeAddress?: LocationModel | null;
    image?: CompanyUserImageModel | null;
    desiredAssignment?: string | null;
    internalIdentifier?: string | null;
    twitter?: string | null;
    linkedIn?: string | null;
    homepage?: string | null;
    blog?: string | null;
    gitHub?: string | null;
    companyUserId?: number | null;
    companyId?: number | null;
    seoId?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    /**
     * Employee = 0,
     * Candidate = 10,
     * Subcontractor = 20
     */
    companyUserType?: CompanyUserType | null;
    /**
     * @deprecated
     */
    id?: number | null;
    links?: Array<Link> | null;
};
export class CompanyCandidateUserService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Create an account for a candidate.
     * No email is sent to the candidate, you will have to communicate login details to the candidate yourself.
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @param id Candidate Id
     * @param requestBody Basic account information
     * @returns CompanyUserCandidateModel All went well
     * @throws ApiError
     */
    addCandidateUserFromCandidate(companyId: number, id: number, requestBody?: CompanyCandidateAddCandidateUserModel): CancelablePromise<CompanyUserCandidateModel>;
}
/**
 *
 *
 * CompanyUserResume = 1
 *
 * Customers = 2
 *
 * Assignments = 3
 *
 * Partners = 4
 *
 * Offers = 5
 *
 * Reports = 6
 *
 * Recruitment = 8
 *
 * Absence = 9
 *
 * Api = 10
 *
 * ReferenceText = 11
 *
 * ProfileCompleteness = 12
 *
 * CalendarSync = 13
 *
 * AllowWidgetModification = 14
 *
 * ConfiguredFilters = 19
 *
 * SkillSets = 20
 *
 * ProfileUpdateReminders = 21
 *
 * OverdueProjectReminders = 22
 *
 * EmailSync = 23
 *
 * ApplicationRegistration = 30
 *
 * ApplicationDirectory = 31
 *
 * NextGenResume = 40
 *
 * HideLinkToMvcProfilePageInSidebarAndRemoveEditAndCopyCVInoldViewAndTheBetaChips = 41
 *
 * ImportCv = 42
 *
 * AI = 43
 *
 * AITextGeneration = 44
 *
 * ProjectPlanning = 48
 *
 * ExternalAccounts = 50
 *
 * ConvertAccount = 51
 *
 * UserProvisioning = 52
 *
 * Webhooks = 60
 *
 * GrowthPlan = 70
 *
 * GUIShowcase = 80
 *
 * Appmixer = 90
 *
 * Intercom = 600
 */
export enum ModuleType {
    CompanyUserResume = 1,
    Customers = 2,
    Assignments = 3,
    Partners = 4,
    Offers = 5,
    Reports = 6,
    Recruitment = 8,
    Absence = 9,
    Api = 10,
    ReferenceText = 11,
    ProfileCompleteness = 12,
    CalendarSync = 13,
    AllowWidgetModification = 14,
    ConfiguredFilters = 19,
    SkillSets = 20,
    ProfileUpdateReminders = 21,
    OverdueProjectReminders = 22,
    EmailSync = 23,
    ApplicationRegistration = 30,
    ApplicationDirectory = 31,
    NextGenResume = 40,
    HideLinkToMvcProfilePageInSidebarAndRemoveEditAndCopyCVInoldViewAndTheBetaChips = 41,
    ImportCv = 42,
    AI = 43,
    AITextGeneration = 44,
    ProjectPlanning = 48,
    ExternalAccounts = 50,
    ConvertAccount = 51,
    UserProvisioning = 52,
    Webhooks = 60,
    GrowthPlan = 70,
    GUIShowcase = 80,
    Appmixer = 90,
    Intercom = 600
}
export type CompanyEnabledModuleModel = {
    moduleId?: ModuleType;
};
export type CompanyCapabilitiesModel = {
    enabledModules?: Array<CompanyEnabledModuleModel> | null;
};
export class CompanyCapabilitiesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get company capabilities
     * @param companyId CompanyId
     * @returns CompanyCapabilitiesModel All went well
     * @throws ApiError
     */
    companyCapabilities(companyId: number): CancelablePromise<CompanyCapabilitiesModel>;
}
export class CompanyCurrenciesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get company currencies
     * @param companyId Company Id
     * @returns CurrencyModel All went well
     * @throws ApiError
     */
    companyCurrencies(companyId: number): CancelablePromise<Array<CurrencyModel>>;
}
/**
 *
 *
 * Egenföretagare = 0
 *
 * 2-10 = 1
 *
 * 11-50 = 2
 *
 * 51-200 = 3
 *
 * 201-500 = 4
 *
 * 501-1 000 = 5
 *
 * 1 001-5 000 = 6
 *
 * 5 001-10 000 = 7
 *
 * 10 001+ = 8
 */
export enum CompanySize {
    A = 0,
    B = 1,
    C = 2,
    D = 3,
    E = 4,
    F = 5,
    G = 6,
    H = 7,
    I = 8
}
export type CompanyCustomerAddModel = {
    /**
     * @deprecated
     */
    readonly status?: boolean;
    name: string;
    description?: string | null;
    corporateIdentityNumber?: string | null;
    vatNumber?: string | null;
    identification?: string | null;
    email?: string | null;
    homepage?: string | null;
    phone?: string | null;
    fax?: string | null;
    intermediator?: boolean;
    size?: CompanySize | null;
    countryId?: number | null;
    turnOver?: number | null;
    turnOverCurrencyId?: number | null;
};
export type CompanyCustomerDeleteModel = {
    customerVerificationName?: string | null;
};
export type CompanyCustomerEditModel = {
    /**
     * @deprecated
     */
    readonly status?: boolean;
    name: string;
    description?: string | null;
    corporateIdentityNumber?: string | null;
    vatNumber?: string | null;
    identification?: string | null;
    email?: string | null;
    homepage?: string | null;
    phone?: string | null;
    fax?: string | null;
    intermediator?: boolean;
    size?: CompanySize | null;
};
export type CompanyCustomerAddressModel = {
    companyCustomerId?: number | null;
    companyId?: number | null;
    id?: number | null;
    street1?: string | null;
    street2?: string | null;
    zipCode?: string | null;
    city?: string | null;
    country?: string | null;
    email?: string | null;
    /**
     * Undefined = 0,
     * StreetAddress = 1 (VisitingAddress)
     * InvoiceAddress = 2,
     * LocationAddress = 3 (Used to connect an Employee to an office registered in Cinode)
     */
    addressType?: AddressType;
    comments?: string | null;
    links?: Array<Link> | null;
};
export type CompanyCustomerAttachmentModel = {
    customerId?: number;
    attachmentType?: AttachmentType;
    companyId?: number | null;
    id?: string | null;
    title?: string | null;
    description?: string | null;
    links?: Array<Link> | null;
};
export type CompanyCustomerContactBaseModel = {
    id?: number;
    companyId?: number;
    customerId?: number;
    slug?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    links?: Array<Link> | null;
};
/**
 *
 *
 * Inaktiv = 0
 *
 * Aktiv = 1
 */
export enum Status {
    Inactive = 0,
    Active = 1
}
export type CompanyCustomerBaseModel = {
    id?: number;
    companyId?: number;
    name?: string | null;
    description?: string | null;
    identification?: string | null;
    seoId?: string | null;
    /**
     * @deprecated
     */
    status?: Status;
    links?: Array<Link> | null;
};
export type CompanyCustomerManagerModel = {
    companyCustomerManagerId?: number | null;
    customerId?: number | null;
    customer?: CompanyCustomerBaseModel | null;
    /**
     * @deprecated
     */
    id?: number | null;
    companyUserId?: number | null;
    companyId?: number | null;
    seoId?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    /**
     * Employee = 0,
     * Candidate = 10,
     * Subcontractor = 20
     */
    companyUserType?: CompanyUserType | null;
    links?: Array<Link> | null;
};
export type CountryModel = {
    countryId?: number;
    code?: string | null;
    name?: string | null;
};
export type ProjectBaseModel = {
    companyId?: number;
    customerId?: number;
    id?: number;
    title?: string | null;
    description?: string | null;
    identifier?: string | null;
    customerIdentifier?: string | null;
    links?: Array<Link> | null;
};
export type CompanyCustomerModel = {
    phone?: string | null;
    fax?: string | null;
    homepage?: string | null;
    corporateIdentityNumber?: string | null;
    vatNumber?: string | null;
    contacts?: Array<CompanyCustomerContactBaseModel> | null;
    addresses?: Array<CompanyCustomerAddressModel> | null;
    projects?: Array<ProjectBaseModel> | null;
    intermediator?: boolean | null;
    attachments?: Array<CompanyCustomerAttachmentModel> | null;
    size?: CompanySize | null;
    countryId?: number | null;
    country?: CountryModel | null;
    turnOver?: number | null;
    turnOverCurrencyId?: number | null;
    turnOverCurrency?: CurrencyModel | null;
    email?: string | null;
    tags?: Array<CompanyTagBaseModel> | null;
    managers?: Array<CompanyCustomerManagerModel> | null;
    id?: number;
    companyId?: number;
    name?: string | null;
    description?: string | null;
    identification?: string | null;
    seoId?: string | null;
    /**
     * @deprecated
     */
    status?: Status;
    links?: Array<Link> | null;
};
export class CompanyCustomerService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get company customer by id
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId
     * @param id
     * @returns CompanyCustomerModel All went well
     * @throws ApiError
     */
    getCompanyCustomer(companyId: number, id: number): CancelablePromise<CompanyCustomerModel>;
    /**
     * Update company customer
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param id
     * @param companyId
     * @param requestBody CompanyCustomerAddEditModel
     * @returns CompanyCustomerModel All went well
     * @throws ApiError
     */
    updateCompanyCustomer(id: number, companyId: number, requestBody?: CompanyCustomerEditModel): CancelablePromise<CompanyCustomerModel>;
    /**
     * Patch company customer
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param id Customer Id
     * @param companyId Company Id
     * @param requestBody Patch of CompanyCustomerPatchModel
     * @returns CompanyCustomerModel All went well
     * @throws ApiError
     */
    patchCompanyCustomer(id: number, companyId: number, requestBody?: JsonPatchDocument): CancelablePromise<CompanyCustomerModel>;
    /**
     * Delete customer
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param id Customer Id
     * @param companyId Company Id
     * @param requestBody CompanyCustomerDeleteModel
     * @returns any All went well
     * @throws ApiError
     */
    deleteCompanyCustomer(id: number, companyId: number, requestBody?: CompanyCustomerDeleteModel): CancelablePromise<any>;
    /**
     * Add company customer
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param requestBody CompanyCustomerAddModel
     * @returns CompanyCustomerModel All went well
     * @throws ApiError
     */
    newCompanyCustomer(companyId: number, requestBody?: CompanyCustomerAddModel): CancelablePromise<CompanyCustomerModel>;
}
export type CompanyCustomerAddressAddEditModel = {
    street1?: string | null;
    street2?: string | null;
    zipCode?: string | null;
    city?: string | null;
    email?: string | null;
    comments?: string | null;
    country?: string | null;
    addressType?: AddressType;
};
export class CompanyCustomerAddressService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get customer address by id
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Address Id
     * @returns CompanyCustomerAddressModel All went well
     * @throws ApiError
     */
    customerAddress(companyId: number, customerId: number, id: number): CancelablePromise<CompanyCustomerAddressModel>;
    /**
     * Update customer address
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Customer Address Id
     * @param requestBody CompanyCustomerAddressAddEditModel
     * @returns CompanyCustomerAddressModel All went well
     * @throws ApiError
     */
    editCompanyCustomerAddress(companyId: number, customerId: number, id: number, requestBody?: CompanyCustomerAddressAddEditModel): CancelablePromise<CompanyCustomerAddressModel>;
    /**
     * Delete customer address
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Address Id
     * @returns any All went well
     * @throws ApiError
     */
    deleteCompanyCustomerAddress(companyId: number, customerId: number, id: number): CancelablePromise<any>;
    /**
     * Add customer address
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param requestBody CompanyCustomerAddressAddEditModel
     * @returns CompanyCustomerAddressModel All went well
     * @throws ApiError
     */
    newCompanyCustomerAddress(companyId: number, customerId: number, requestBody?: CompanyCustomerAddressAddEditModel): CancelablePromise<CompanyCustomerAddressModel>;
}
export type CompanyCustomerContactAddEditModel = {
    firstName: string;
    lastName: string;
    email?: string | null;
    phone1?: string | null;
    phone2?: string | null;
    title?: string | null;
    comments?: string | null;
};
export type CompanyTagTypeModel = {
    id?: number | null;
    name?: string | null;
};
export type CompanyTagModel = {
    tagType?: CompanyTagTypeModel | null;
    companyId?: number | null;
    id?: number | null;
    seoId?: string | null;
    name?: string | null;
};
export type CompanyCustomerContactModel = {
    title?: string | null;
    phone1?: string | null;
    phone2?: string | null;
    comments?: string | null;
    createdDateTime?: string;
    tags?: Array<CompanyTagModel> | null;
    id?: number;
    companyId?: number;
    customerId?: number;
    slug?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    links?: Array<Link> | null;
};
export class CompanyCustomerContactService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get customer contact by id
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Contact Id
     * @returns CompanyCustomerContactModel All went well
     * @throws ApiError
     */
    contact(companyId: number, customerId: number, id: number): CancelablePromise<CompanyCustomerContactModel>;
    /**
     * Update customer contact
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Contact Id
     * @param requestBody CompanyCustomerContactAddEditModel
     * @returns CompanyCustomerContactModel All went well
     * @throws ApiError
     */
    editCompanyCustomerContact(companyId: number, customerId: number, id: number, requestBody?: CompanyCustomerContactAddEditModel): CancelablePromise<CompanyCustomerContactModel>;
    /**
     * Delete customer contact
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Contact Id
     * @returns any All went well
     * @throws ApiError
     */
    deleteCompanyCustomerContact(companyId: number, customerId: number, id: number): CancelablePromise<any>;
    /**
     * Add customer contact
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param requestBody CompanyCustomerContactAddEditModel
     * @returns CompanyCustomerContactModel All went well
     * @throws ApiError
     */
    newCompanyCustomerContact(companyId: number, customerId: number, requestBody?: CompanyCustomerContactAddEditModel): CancelablePromise<CompanyCustomerContactModel>;
}
export class CompanyCustomerContactsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get customer contact list
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @returns CompanyCustomerContactModel All went well
     * @throws ApiError
     */
    contacts(companyId: number, customerId: number): CancelablePromise<Array<CompanyCustomerContactModel>>;
}
export class CompanyCustomerContactTagsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Edit Tags for CustomerContact
     * Note:
     *
     * Posted tags will replace any existing tags for the contact.
     * A new tag will be created if the Id for a tag is not provided.
     *
     * Sample request:
     *
     * POST /v0.1/companies/1/customers/19870/contacts/5360/tags
     * [
         * {
             * "name": "tag-name",
             * "id": 2
             * },
             * {
                 * "name": "tag-test",
                 * "id": 1
                 * },
                 * ]
                 * @param companyId Company Id
                 * @param customerId Customer Id
                 * @param contactId CustomerContact Id
                 * @param requestBody CompanyTagModel
                 * @returns CompanyTagModel All went well
                 * @throws ApiError
                 */
    editCustomerContactTags(companyId: number, customerId: number, contactId: number, requestBody?: Array<CompanyTagModel>): CancelablePromise<Array<CompanyTagModel>>;
}
export type CustomerEventModel = {
    customerId?: number | null;
    createdByCompanyUserId?: number;
    updatedByCompanyUserId?: number | null;
    created?: string;
    updated?: string | null;
    visibility?: EventVisibility;
    comments?: Array<EventCommentModel> | null;
    /**
     * Meeting = 0
     * Note = 1
     * Task = 2
     */
    type?: EventType;
    id?: string | null;
    companyId?: number | null;
    title?: string | null;
    description?: string | null;
    descriptionHtml?: string | null;
    descriptionDelta?: string | null;
    eventDate?: string;
    links?: Array<Link> | null;
};
export class CompanyCustomerEventService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get customer event by id
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @returns CustomerEventModel All went well
     * @throws ApiError
     */
    companyCustomerEvent(companyId: number, customerId: number, id: string): CancelablePromise<CustomerEventModel>;
}
export type CustomerEventBaseModel = {
    customerId?: number | null;
    /**
     * Meeting = 0
     * Note = 1
     * Task = 2
     */
    type?: EventType;
    id?: string | null;
    companyId?: number | null;
    title?: string | null;
    description?: string | null;
    descriptionHtml?: string | null;
    descriptionDelta?: string | null;
    eventDate?: string;
    links?: Array<Link> | null;
};
export class CompanyCustomerEventsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get customer events list
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @returns CustomerEventBaseModel All went well
     * @throws ApiError
     */
    companyCustomerEvents(companyId: number, customerId: number): CancelablePromise<Array<CustomerEventBaseModel>>;
}
export type CustomerEventMeetingAddEditModel = {
    customerContactId?: number | null;
    startDateTime?: string;
    endDateTime?: string;
    /**
     * The desired timezone to be used for StartDateTime and EndDateTime properties. Valid timezone ids can be found at https://nodatime.org/TimeZones
     * If empty, the timezone of the executing user (API account) will be used.
     */
    timezoneId?: string | null;
    assignedToCompanyUserId?: number | null;
    status?: EventStatusValue;
    type?: EventType;
    title: string;
    description?: string | null;
    visibility?: EventVisibility;
};
export type CustomerEventMeetingModel = {
    customerContactId?: number | null;
    customerId?: number | null;
    startDateTime?: string;
    endDateTime?: string;
    location?: string | null;
    assignedToCompanyUserId?: number | null;
    status?: EventStatusValue;
    createdByCompanyUserId?: number;
    updatedByCompanyUserId?: number | null;
    created?: string;
    updated?: string | null;
    visibility?: EventVisibility;
    comments?: Array<EventCommentModel> | null;
    /**
     * Meeting = 0
     * Note = 1
     * Task = 2
     */
    type?: EventType;
    id?: string | null;
    companyId?: number | null;
    title?: string | null;
    description?: string | null;
    descriptionHtml?: string | null;
    descriptionDelta?: string | null;
    eventDate?: string;
    links?: Array<Link> | null;
};
export class CompanyCustomerEventsMeetingService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get customer event meeting by id
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @returns CustomerEventMeetingModel All went well
     * @throws ApiError
     */
    companyCustomerEventMeeting(companyId: number, customerId: number, id: string): CancelablePromise<CustomerEventMeetingModel>;
    /**
     * Update customer event meeting
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @param requestBody CustomerEventMeetingAddEditModel
     * @returns CustomerEventMeetingModel All went well
     * @throws ApiError
     */
    updateMeeting(companyId: number, customerId: number, id: string, requestBody?: CustomerEventMeetingAddEditModel): CancelablePromise<CustomerEventMeetingModel>;
    /**
     * Delete customer event meeting
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @returns any All went well
     * @throws ApiError
     */
    deleteMeeting(companyId: number, customerId: number, id: string): CancelablePromise<any>;
    /**
     * Add customer event meeting
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param requestBody CustomerEventMeetingAddEditModel
     * @returns CustomerEventMeetingModel All went well
     * @throws ApiError
     */
    newMeeting(companyId: number, customerId: number, requestBody?: CustomerEventMeetingAddEditModel): CancelablePromise<CustomerEventMeetingModel>;
}
export class CompanyCustomerEventsMeetingsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get customer event meetings list
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @returns CustomerEventBaseModel All went well
     * @throws ApiError
     */
    companyCustomerEventMeetings(companyId: number, customerId: number): CancelablePromise<Array<CustomerEventBaseModel>>;
}
export type CustomerEventNoteAddEditModel = {
    customerContactId?: number | null;
    noteType?: EventNoteType | null;
    noteDate?: string | null;
    /**
     * The desired timezone to be used for NoteDate property. Valid timezone ids can be found at https://nodatime.org/TimeZones
     * If empty, the timezone of the executing user (API account) will be used.
     */
    timezoneId?: string | null;
    assignedToCompanyUserId?: number | null;
    type?: EventType;
    title: string;
    description?: string | null;
    visibility?: EventVisibility;
};
export type CustomerEventNoteModel = {
    customerContactId?: number | null;
    customerId?: number | null;
    noteType?: EventNoteType | null;
    noteDate?: string | null;
    assignedToCompanyUserId?: number | null;
    createdByCompanyUserId?: number;
    updatedByCompanyUserId?: number | null;
    created?: string;
    updated?: string | null;
    visibility?: EventVisibility;
    comments?: Array<EventCommentModel> | null;
    /**
     * Meeting = 0
     * Note = 1
     * Task = 2
     */
    type?: EventType;
    id?: string | null;
    companyId?: number | null;
    title?: string | null;
    description?: string | null;
    descriptionHtml?: string | null;
    descriptionDelta?: string | null;
    eventDate?: string;
    links?: Array<Link> | null;
};
export class CompanyCustomerEventsNoteService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get customer event note by id
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @returns CustomerEventNoteModel All went well
     * @throws ApiError
     */
    companyCustomerEventNote(companyId: number, customerId: number, id: string): CancelablePromise<CustomerEventNoteModel>;
    /**
     * Update customer event note
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @param requestBody CustomerEventMeetingAddEditModel
     * @returns CustomerEventNoteModel All went well
     * @throws ApiError
     */
    updateNote(companyId: number, customerId: number, id: string, requestBody?: CustomerEventNoteAddEditModel): CancelablePromise<CustomerEventNoteModel>;
    /**
     * Delete customer event note
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @returns any All went well
     * @throws ApiError
     */
    deleteNote(companyId: number, customerId: number, id: string): CancelablePromise<any>;
    /**
     * Add customer event note
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param requestBody CustomerEventNoteAddEditModel
     * @returns CustomerEventNoteModel All went well
     * @throws ApiError
     */
    newNote(companyId: number, customerId: number, requestBody?: CustomerEventNoteAddEditModel): CancelablePromise<CustomerEventNoteModel>;
}
export class CompanyCustomerEventsNotesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get customer event notes list
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @returns CustomerEventBaseModel All went well
     * @throws ApiError
     */
    companyCustomerEventNotes(companyId: number, customerId: number): CancelablePromise<Array<CustomerEventBaseModel>>;
}
export type CustomerEventTaskAddEditModel = {
    customerContactId?: number | null;
    taskType?: EventTaskType | null;
    hasTime?: boolean | null;
    dueDateTime?: string | null;
    /**
     * The desired timezone to be used for DueDateTime property. Valid timezone ids can be found at https://nodatime.org/TimeZones
     * If empty, the timezone of the executing user (API account) will be used.
     */
    timezoneId?: string | null;
    assignedToCompanyUserId?: number | null;
    status?: EventStatusValue;
    type?: EventType;
    title: string;
    description?: string | null;
    visibility?: EventVisibility;
};
export type CustomerEventTaskModel = {
    customerContactId?: number | null;
    customerId?: number | null;
    /**
     * NotSpecified = 0
     * Phone = 1
     * Email = 2
     */
    taskType?: EventTaskType | null;
    hasTime?: boolean | null;
    dueDateTime?: string | null;
    assignedToCompanyUserId?: number | null;
    status?: EventStatusValue;
    createdByCompanyUserId?: number;
    updatedByCompanyUserId?: number | null;
    created?: string;
    updated?: string | null;
    visibility?: EventVisibility;
    comments?: Array<EventCommentModel> | null;
    /**
     * Meeting = 0
     * Note = 1
     * Task = 2
     */
    type?: EventType;
    id?: string | null;
    companyId?: number | null;
    title?: string | null;
    description?: string | null;
    descriptionHtml?: string | null;
    descriptionDelta?: string | null;
    eventDate?: string;
    links?: Array<Link> | null;
};
export class CompanyCustomerEventsTaskService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get customer event task by id
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @returns CustomerEventTaskModel All went well
     * @throws ApiError
     */
    companyCustomerEventTask(companyId: number, customerId: number, id: string): CancelablePromise<CustomerEventTaskModel>;
    /**
     * Update customer event task
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @param requestBody CustomerEventTaskAddEditModel
     * @returns CustomerEventTaskModel All went well
     * @throws ApiError
     */
    updateTask(companyId: number, customerId: number, id: string, requestBody?: CustomerEventTaskAddEditModel): CancelablePromise<CustomerEventTaskModel>;
    /**
     * Delete customer event task
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id Event Id
     * @returns any All went well
     * @throws ApiError
     */
    deleteTask(companyId: number, customerId: number, id: string): CancelablePromise<any>;
    /**
     * Add customer event task
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param requestBody CustomerEventTaskAddEditModel
     * @returns CustomerEventTaskModel All went well
     * @throws ApiError
     */
    newTask(companyId: number, customerId: number, requestBody?: CustomerEventTaskAddEditModel): CancelablePromise<CustomerEventTaskModel>;
}
export class CompanyCustomerEventsTasksService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get customer event tasks list
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @returns CustomerEventBaseModel All went well
     * @throws ApiError
     */
    companyCustomerEventTasks(companyId: number, customerId: number): CancelablePromise<Array<CustomerEventBaseModel>>;
}
export class CompanyCustomerFileAttachmentService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get customer file attachment by Id
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param id
     * @param companyId
     * @param attachmentId
     * @returns string All went well
     * @throws ApiError
     */
    getCustomerAttachment(id: number, companyId: number, attachmentId: string): CancelablePromise<string>;
}
export type CompanyCustomerManagersAddEditModel = {
    companyUserIds?: Array<number> | null;
};
export class CompanyCustomerManagersService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get customer managers
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param customerId Customer Id
     * @returns CompanyCustomerManagerModel All went well
     * @throws ApiError
     */
    companyCustomerManagers(companyId: number, customerId: number): CancelablePromise<Array<CompanyCustomerManagerModel>>;
    /**
     * Add customer responsible
     * Sample request:
     *
     * POST /v0.1/companies/1/customers/22228/managers
     * {
         * [
             * 51096
             * ]
             * }
             * @param companyId Company Id
             * @param customerId Customer Id
             * @param requestBody CompanyCustomerManagersAddEditModel
             * @returns CompanyCustomerManagerModel All went well
             * @throws ApiError
             */
    addCompanyCustomerResponsible(companyId: number, customerId: number, requestBody?: CompanyCustomerManagersAddEditModel): CancelablePromise<Array<CompanyCustomerManagerModel>>;
    /**
     * Remove customer responsible
     * Sample request:
     *
     * DELETE /v0.1/companies/1/customers/22228/managers/54632
     * @param companyId Company Id
     * @param customerId Customer Id
     * @param id User Id
     * @returns any All went well
     * @throws ApiError
     */
    removeCustomerManager(companyId: number, customerId: number, id: number): CancelablePromise<any>;
}
export class CompanyCustomersService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get company customers list
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @returns CompanyCustomerBaseModel All went well
     * @throws ApiError
     */
    companyCustomers(companyId: number): CancelablePromise<Array<CompanyCustomerBaseModel>>;
}
export type CompanyCustomerExtendedModel = {
    email?: string | null;
    tags?: Array<CompanyTagBaseModel> | null;
    managers?: Array<CompanyCustomerManagerModel> | null;
    id?: number;
    companyId?: number;
    name?: string | null;
    description?: string | null;
    identification?: string | null;
    seoId?: string | null;
    /**
     * @deprecated
     */
    status?: Status;
    links?: Array<Link> | null;
};
export class CompanyCustomersExtendedService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get extended company customers list
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @returns CompanyCustomerExtendedModel All went well
     * @throws ApiError
     */
    customersExtended(companyId: number): CancelablePromise<Array<CompanyCustomerExtendedModel>>;
}
export class CompanyCustomerTagsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Edit Tags for Customer
     * Note:
     *
     * Posted tags will replace any existing tags for the customer.
     * A new tag will be created if the Id for a tag is not provided.
     *
     * Sample request:
     *
     * POST /v0.1/companies/1/customers/19870/tags
     * [
         * {
             * "name": "tag-name",
             * "id": 2
             * },
             * {
                 * "name": "tag-test",
                 * "id": 1
                 * },
                 * ]
                 * @param companyId Company Id
                 * @param customerId Customer Id
                 * @param requestBody CompanyTagModel
                 * @returns CompanyCustomerModel All went well
                 * @throws ApiError
                 */
    editCustomerTags(companyId: number, customerId: number, requestBody?: Array<CompanyTagModel>): CancelablePromise<CompanyCustomerModel>;
}
export type CompanyImageModel = {
    id?: number;
    imageFileName?: string;
    extension?: string | null;
    companyId?: number;
    created?: string;
    assignedToCompanyUser?: CompanyUserBaseModel | null;
    uploadedByCompanyUser?: CompanyUserBaseModel | null;
    links?: Array<Link> | null;
};
export class CompanyImageService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get Company Image by Id
     * @param companyId Company Id
     * @param id Image id
     * @returns CompanyImageModel All went well
     * @throws ApiError
     */
    companyImage(companyId: number, id: number): CancelablePromise<CompanyImageModel>;
    /**
     * Download Company Image
     * @param companyId Company Id
     * @param id Image id
     * @param imageFileName Image File Name
     * @returns string All went well
     * @throws ApiError
     */
    companyImageDownload(companyId: number, id: number, imageFileName: string): CancelablePromise<string>;
}
export class CompanyImagesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get Company Images Assigned to User
     * @param companyId Company Id
     * @param id CompanyUser Id
     * @returns CompanyImageModel All went well
     * @throws ApiError
     */
    companyImages(companyId: number, id: number): CancelablePromise<Array<CompanyImageModel>>;
    /**
     * Add Image to User
     * @param companyId Company Id
     * @param id CompanyUser Id
     * @param formData
     * @returns CompanyImageModel All went well
     * @throws ApiError
     */
    addCompanyImage(companyId: number, id: number, formData?: {
        File: Blob;
        SetAsPrimary?: boolean;
    }): CancelablePromise<CompanyImageModel>;
}
export class CompanyManagersService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get company managers
     * Sample request:
     *
     * GET /v0.1/companies/1/managers
     * @param companyId Company Id
     * @returns CompanyUserBaseModel All went well
     * @throws ApiError
     */
    companyManagers(companyId: number): CancelablePromise<Array<CompanyUserBaseModel>>;
}
/**
 * 0 - Id (Default),
 * 1 - CompanyUserId,
 * 2 - CreatedDateTime,
 * 3 - UpdatedDateTime
 */
export enum CompanyProfileSort {
    Id = 0,
    CompanyUserId = 1,
    CreatedWhen = 2,
    UpdatedWhen = 3
}
/**
 * 0 - Ascending,
 * 1 - Descending
 */
export enum SortOrder {
    Ascending = 0,
    Descending = 1
}
export type CompanyProfileSortPageAndSortByModel = {
    /**
     * 0 - Id (Default),
     * 1 - CompanyUserId,
     * 2 - CreatedDateTime,
     * 3 - UpdatedDateTime
     */
    sortBy?: CompanyProfileSort;
    /**
     * Ascending = 0 (Default)
     * Descending = 1
     */
    sortOrder?: SortOrder;
    page?: number;
    itemsPerPage?: number;
};
export type CompanyProfileFilterModel = {
    /**
     * If set to true, the results will include only Profiles created within the last X days
     */
    createdOffsetDays?: number | null;
    /**
     * If set to true, the results will include only Profiles updated within the last X days
     */
    updatedOffsetDays?: number | null;
    pageAndSortBy?: CompanyProfileSortPageAndSortByModel | null;
};
export type ProfileLanguageModel = {
    languageId?: number | null;
    name?: string | null;
    culture?: string | null;
    lang?: string | null;
    country?: string | null;
};
export type CompanyUserProfileLanguageBranchModel = {
    id?: number | null;
    languageId?: number | null;
    language?: ProfileLanguageModel | null;
    enabled?: boolean;
};
export type CompanyUserProfileTranslationModel = {
    profileTranslationId?: number | null;
    profileId?: number | null;
    languageBranchId?: number | null;
    languageBranch?: CompanyUserProfileLanguageBranchModel | null;
};
export type CompanyUserProfilePresentationTranslationModel = {
    title?: string | null;
    description?: string | null;
    personalDescription?: string | null;
    profileId?: number | null;
    profileTranslationId?: number | null;
    profileTranslation?: CompanyUserProfileTranslationModel | null;
};
export type CompanyUserProfilePresentationModel = {
    translations?: Array<CompanyUserProfilePresentationTranslationModel> | null;
    companyId?: number | null;
    companyUserId?: number | null;
    id?: number | null;
    url?: string | null;
    links?: Array<Link> | null;
};
export type CompanyUserProfileBaseModel = {
    id?: number | null;
    companyId?: number | null;
    companyUserId?: number | null;
    createdWhen?: string | null;
    updatedWhen?: string | null;
    publishedWhen?: string | null;
    presentation?: CompanyUserProfilePresentationModel | null;
    profileTranslationId?: number;
    profileTranslation?: CompanyUserProfileTranslationModel | null;
    translations?: Array<CompanyUserProfileTranslationModel> | null;
    links?: Array<Link> | null;
};
export type CompanyProfilesModel = {
    totalItems?: number;
    profiles?: Array<CompanyUserProfileBaseModel> | null;
};
export class CompanyProfilesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get profiles list
     * Sample request:
     *
     * POST /v0.1/companies/1/profiles
     * {
         * "createdOffsetDays": 90,
         * "updatedOffsetDays": 30,
         * "pageAndSortBy": {
             * "page": 1,
             * "itemsPerPage": 15,
             * "order": 0,
             * "sortBy": 1
             * }
             * }
             * @param companyId Company Id
             * @param requestBody Company Profile Filter
             * @returns CompanyProfilesModel All went well
             * @throws ApiError
             */
    companyProfiles(companyId: number, requestBody?: CompanyProfileFilterModel): CancelablePromise<CompanyProfilesModel>;
}
export class CompanyProjectFileAttachmentService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get Project file attachment by Id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param id
     * @param companyId
     * @param attachmentId
     * @returns string All went well
     * @throws ApiError
     */
    getProjectAttachment(id: number, companyId: number, attachmentId: string): CancelablePromise<string>;
}
export type CompanyRecruitmentManagerModel = {
    companyUserId?: number | null;
    companyId?: number | null;
    seoId?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    /**
     * Employee = 0,
     * Candidate = 10,
     * Subcontractor = 20
     */
    companyUserType?: CompanyUserType | null;
    /**
     * @deprecated
     */
    id?: number | null;
    links?: Array<Link> | null;
};
export class CompanyRecruitmentManagersService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get recruitment managers
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @returns CompanyRecruitmentManagerModel All went well
     * @throws ApiError
     */
    recruitmentManagers(companyId: number): CancelablePromise<Array<CompanyRecruitmentManagerModel>>;
}
export class CompanyResumesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get resumes list
     * Requires module: CompanyUserResume.
     * @param companyId Company Id
     * @returns CompanyUserResumeBaseModel All went well
     * @throws ApiError
     */
    companyResumes(companyId: number): CancelablePromise<Array<CompanyUserResumeBaseModel>>;
}
export type CompanySubcontractorGroupModel = {
    companyUserManager?: CompanyUserBaseModel | null;
    members?: Array<CompanyUserBaseModel> | null;
    id?: number;
    companyId?: number;
    name?: string | null;
    description?: string | null;
    links?: Array<Link> | null;
};
export class CompanySubcontractorGroupService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get Subcontractor Group by Id
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param subcontractorGroupId Subcontractor Group Id
     * @returns CompanySubcontractorGroupModel All went well
     * @throws ApiError
     */
    getCompanySubcontractorGroup(companyId: number, subcontractorGroupId: number): CancelablePromise<CompanySubcontractorGroupModel>;
}
export type AddCompanySubcontractorGroupMemberModel = {
    companyUserSubcontractorId: number;
};
export class CompanySubcontractorGroupMembersService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Add subcontractor group member
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param subcontractorGroupId Subcontractor Group Id
     * @param requestBody AddCompanySubcontractorGroupMemberModel
     * @returns void
     * @throws ApiError
     */
    addCompanySubcontractorGroupMember(companyId: number, subcontractorGroupId: number, requestBody?: AddCompanySubcontractorGroupMemberModel): CancelablePromise<void>;
    /**
     * Delete subcontractor group member
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param subcontractorGroupId Subcontractor Group Id
     * @param id Subcontractor Id
     * @returns void
     * @throws ApiError
     */
    deleteCompanySubcontractorGroupMember(companyId: number, subcontractorGroupId: number, id: number): CancelablePromise<void>;
}
export class CompanySubcontractorGroupsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get Subcontractor Groups by Company Id
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @returns CompanySubcontractorGroupModel All went well
     * @throws ApiError
     */
    getCompanySubcontractorGroups(companyId: number): CancelablePromise<Array<CompanySubcontractorGroupModel>>;
}
export class CompanyTagService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get company tag by Id
     * Sample request:
     *
     * GET /v0.1/companies/1/tags/1
     * @param companyId Company Id
     * @param id Tag Id
     * @returns CompanyTagModel Success
     * @returns any All went well
     * @throws ApiError
     */
    companyTag(companyId: number, id: number): CancelablePromise<CompanyTagModel | any>;
}
export class CompanyTagsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get company tags
     * Sample request:
     *
     * GET /v0.1/companies/1/tags
     * @param companyId Company Id
     * @returns CompanyTagBaseModel All went well
     * @throws ApiError
     */
    companyTags(companyId: number): CancelablePromise<Array<CompanyTagBaseModel>>;
}
export type TeamAddEditModel = {
    name?: string | null;
    description?: string | null;
    internalIdentification?: string | null;
    corporateIdentityNumber?: string | null;
    costCenter?: string | null;
    parentTeamId?: number | null;
    locationId?: number | null;
};
export type TeamModel = {
    internalIdentification?: string | null;
    corporateIdentityNumber?: string | null;
    costCenter?: string | null;
    location?: string | null;
    parentTeamId?: number | null;
    created?: string | null;
    updated?: string | null;
    locationId?: number | null;
    id?: number;
    companyId?: number | null;
    name?: string | null;
    description?: string | null;
    links?: Array<Link> | null;
};
export class CompanyTeamService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get team by id
     * @param companyId Company Id
     * @param id Event Id
     * @returns TeamModel All went well
     * @throws ApiError
     */
    team(companyId: number, id: number): CancelablePromise<TeamModel>;
    /**
     * Update team
     * Requires access level: CompanyAdmin.
     * @param id Team Id
     * @param companyId Company Id
     * @param requestBody TeamAddEditModel
     * @returns TeamModel All went well
     * @throws ApiError
     */
    updateTeam(id: number, companyId: number, requestBody?: TeamAddEditModel): CancelablePromise<TeamModel>;
    /**
     * Add team
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param requestBody TeamAddEditModel
     * @returns TeamModel All went well
     * @throws ApiError
     */
    newTeam(companyId: number, requestBody?: TeamAddEditModel): CancelablePromise<TeamModel>;
}
export type TeamManagerEditModel = {
    teamId?: number;
    companyUserId?: number;
};
export type TeamBaseModel = {
    id?: number;
    companyId?: number | null;
    name?: string | null;
    description?: string | null;
    links?: Array<Link> | null;
};
export type TeamManagerModel = {
    teamId?: number | null;
    companyUserId?: number | null;
    companyUser?: CompanyUserBaseModel | null;
    team?: TeamBaseModel | null;
};
export class CompanyTeamManagersService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get team managers
     * @param companyId Company Id
     * @param teamId Team Id
     * @returns CompanyUserExtendedModel All went well
     * @throws ApiError
     */
    teamManagers(companyId: number, teamId: number): CancelablePromise<Array<CompanyUserExtendedModel>>;
    /**
     * Add team manager
     * Sample request:
     *
     * POST /v0.1/companies/1/teams/1234/managers
     * {
         * "teamId" : 1234,
         * "companyUserId" : 54632
         * }
         * @param companyId Company Id
         * @param teamId
         * @param requestBody TeamMemberEditModel
         * @returns TeamManagerModel All went well
         * @throws ApiError
         */
    addTeamManager(companyId: number, teamId: string, requestBody?: TeamManagerEditModel): CancelablePromise<Array<TeamManagerModel>>;
    /**
     * Remove team manager
     * Sample request:
     *
     * DELETE /v0.1/companies/1/teams/1234/managers/54632
     * @param companyId Company Id
     * @param teamId Team Id
     * @param id User Id
     * @returns any All went well
     * @throws ApiError
     */
    removeTeamManager(companyId: number, teamId: number, id: number): CancelablePromise<any>;
}
export type TeamMemberAddModel = {
    companyUserId?: number;
    availabilityPercent?: number | null;
};
export type TeamMemberEditModel = {
    availabilityPercent?: number | null;
};
export type TeamMemberModel = {
    teamId?: number | null;
    companyUserId?: number | null;
    companyUser?: CompanyUserBaseModel | null;
    team?: TeamBaseModel | null;
    availabilityPercent?: number | null;
    links?: Array<Link> | null;
};
export type TeamMemberMoveModel = {
    toTeamId: number;
};
export class CompanyTeamMemberService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get team member
     * @param companyId Company Id
     * @param teamId Team Id
     * @param id User id
     * @returns TeamMemberModel All went well
     * @throws ApiError
     */
    getTeamMember(companyId: number, teamId: number, id: number): CancelablePromise<TeamMemberModel>;
    /**
     * Update team member
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param teamId Team Id
     * @param id User id
     * @param requestBody TeamMemberEditModel
     * @returns TeamMemberModel All went well
     * @throws ApiError
     */
    updateTeamMember(companyId: number, teamId: number, id: number, requestBody?: TeamMemberEditModel): CancelablePromise<TeamMemberModel>;
    /**
     * Remove team member
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param teamId Team Id
     * @param id User Id
     * @returns any All went well
     * @throws ApiError
     */
    removeTeamMember(companyId: number, teamId: number, id: number): CancelablePromise<any>;
    /**
     * Add team member
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param teamId Team Id
     * @param requestBody TeamMemberAddModel
     * @returns TeamMemberModel All went well
     * @throws ApiError
     */
    addTeamMember(companyId: number, teamId: number, requestBody?: TeamMemberAddModel): CancelablePromise<TeamMemberModel>;
    /**
     * Move team member and associated bookings to another team
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param teamId Team Id
     * @param id User id
     * @param requestBody TeamMemberMoveModel
     * @returns any All went well
     * @throws ApiError
     */
    moveTeamMember(companyId: number, teamId: number, id: number, requestBody?: TeamMemberMoveModel): CancelablePromise<any>;
}
export class CompanyTeamMembersService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get team members
     * @param companyId Company Id
     * @param teamId Team Id
     * @returns TeamMemberModel All went well
     * @throws ApiError
     */
    getTeamMembers(companyId: number, teamId: number): CancelablePromise<Array<TeamMemberModel>>;
}
export class CompanyTeamsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get teams list
     * @param companyId Company Id
     * @returns TeamBaseModel All went well
     * @throws ApiError
     */
    companyTeams(companyId: number): CancelablePromise<Array<TeamBaseModel>>;
}
export class CompanyTeamUsersService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @deprecated
     * Get team members
     * @param companyId Company Id
     * @param teamId Team Id
     * @returns CompanyUserExtendedModel All went well
     * @throws ApiError
     */
    getTeamUsers(companyId: number, teamId: number): CancelablePromise<Array<CompanyUserExtendedModel>>;
    /**
     * @deprecated
     * Add team member
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param teamId Team Id
     * @param requestBody TeamMemberAddModel
     * @returns TeamMemberModel All went well
     * @throws ApiError
     */
    addTeamUser(companyId: number, teamId: number, requestBody?: TeamMemberAddModel): CancelablePromise<Array<TeamMemberModel>>;
    /**
     * @deprecated
     * Remove team member
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param teamId Team Id
     * @param id User Id
     * @returns CompanyUserExtendedModel All went well
     * @throws ApiError
     */
    removeTeamUser(companyId: number, teamId: number, id: number): CancelablePromise<Array<CompanyUserExtendedModel>>;
}
export type CompanyUserAddModel = {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
    gender: UserGender;
    status?: CompanyUserStatus;
    teamId?: number | null;
    title?: string | null;
    languageId?: number | null;
    employmentNumber?: string | null;
    employmentStartDate?: string | null;
    addProfile?: boolean;
    locationId?: number | null;
    defaultCurrencyId?: number | null;
    displayCurrencyId?: number | null;
    mustChangePassword?: boolean;
};
export type CompanyUserEditModel = {
    status?: CompanyUserStatus;
    employmentStartDate?: string | null;
    employmentEndDate?: string | null;
    employmentNumber?: string | null;
    invoicingGoal?: number | null;
    mobility?: number | null;
    availabilityPercent?: number | null;
    availableFromDate?: string | null;
    title?: string | null;
    email?: string | null;
    taxTable?: string | null;
    baseSalary?: number | null;
    provision?: number | null;
    hourlyTargetRate?: number | null;
    selfCost?: number | null;
    locationId?: number | null;
    defaultCurrencyId?: number | null;
    displayCurrencyId?: number | null;
    firstName?: string | null;
    lastName?: string | null;
    dateOfBirth?: string | null;
    gender?: UserGender;
    companyCalendarId?: number | null;
    timezoneId?: string | null;
    phone?: string | null;
};
/**
 *
 *
 * NoAccess = 0
 *
 * Anonymous = 50
 *
 * Read = 100
 *
 * Subcontractor = 110
 *
 * Candidate = 115
 *
 * RestrictedCompanyUser = 150
 *
 * CompanyApiUser = 180
 *
 * CompanyUser = 200
 *
 * PartnerManager = 240
 *
 * CompanyRecruiter = 250
 *
 * TeamManager = 270
 *
 * CompanyManager = 300
 *
 * CompanyAdmin = 400
 *
 * Owner = 500
 */
export enum AccessLevel {
    NoAccess = 0,
    Anonymous = 50,
    Read = 100,
    Subcontractor = 110,
    Candidate = 115,
    RestrictedCompanyUser = 150,
    CompanyApiUser = 180,
    CompanyUser = 200,
    PartnerManager = 240,
    CompanyRecruiter = 250,
    TeamManager = 270,
    CompanyManager = 300,
    CompanyAdmin = 400,
    Owner = 500
}
export type RoleModel = {
    id?: number | null;
    name?: string | null;
    description?: string | null;
    level?: AccessLevel | null;
};
export type CompanyUserFullModel = {
    invoicingGoal?: number | null;
    taxTable?: string | null;
    baseSalary?: number | null;
    provision?: number | null;
    hourlyTargetRate?: number | null;
    selfCost?: number | null;
    employmentStartDate?: string | null;
    employmentEndDate?: string | null;
    availabilityPercent?: number | null;
    availableFromDate?: string | null;
    mobility?: number | null;
    locationName?: string | null;
    resumes?: Array<CompanyUserResumeBaseModel> | null;
    roles?: Array<RoleModel> | null;
    teamManagers?: Array<TeamManagerModel> | null;
    teamMembers?: Array<TeamMemberModel> | null;
    customerManagers?: Array<CompanyCustomerManagerModel> | null;
    periods?: Array<AbsencePeriodModel> | null;
    defaultCurrency?: CurrencyModel | null;
    phone?: string | null;
    dateOfBirth?: string | null;
    tags?: Array<CompanyTagModel> | null;
    /**
     * Disconnected = 0,
     * PreActive = 2,
     * Active = 3,
     */
    status?: CompanyUserStatus | null;
    title?: string | null;
    companyUserEmail?: string | null;
    createdDateTime?: string | null;
    updatedDateTime?: string | null;
    employmentNumber?: string | null;
    companyAddress?: CompanyAddressModel | null;
    homeAddress?: LocationModel | null;
    image?: CompanyUserImageModel | null;
    desiredAssignment?: string | null;
    internalIdentifier?: string | null;
    twitter?: string | null;
    linkedIn?: string | null;
    homepage?: string | null;
    blog?: string | null;
    gitHub?: string | null;
    companyUserId?: number | null;
    companyId?: number | null;
    seoId?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    /**
     * Employee = 0,
     * Candidate = 10,
     * Subcontractor = 20
     */
    companyUserType?: CompanyUserType | null;
    /**
     * @deprecated
     */
    id?: number | null;
    links?: Array<Link> | null;
};
export type CompanyUserModel = {
    employmentStartDate?: string | null;
    employmentEndDate?: string | null;
    availabilityPercent?: number | null;
    availableFromDate?: string | null;
    mobility?: number | null;
    locationName?: string | null;
    resumes?: Array<CompanyUserResumeBaseModel> | null;
    roles?: Array<RoleModel> | null;
    teamManagers?: Array<TeamManagerModel> | null;
    teamMembers?: Array<TeamMemberModel> | null;
    customerManagers?: Array<CompanyCustomerManagerModel> | null;
    periods?: Array<AbsencePeriodModel> | null;
    defaultCurrency?: CurrencyModel | null;
    phone?: string | null;
    dateOfBirth?: string | null;
    tags?: Array<CompanyTagModel> | null;
    /**
     * Disconnected = 0,
     * PreActive = 2,
     * Active = 3,
     */
    status?: CompanyUserStatus | null;
    title?: string | null;
    companyUserEmail?: string | null;
    createdDateTime?: string | null;
    updatedDateTime?: string | null;
    employmentNumber?: string | null;
    companyAddress?: CompanyAddressModel | null;
    homeAddress?: LocationModel | null;
    image?: CompanyUserImageModel | null;
    desiredAssignment?: string | null;
    internalIdentifier?: string | null;
    twitter?: string | null;
    linkedIn?: string | null;
    homepage?: string | null;
    blog?: string | null;
    gitHub?: string | null;
    companyUserId?: number | null;
    companyId?: number | null;
    seoId?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    /**
     * Employee = 0,
     * Candidate = 10,
     * Subcontractor = 20
     */
    companyUserType?: CompanyUserType | null;
    /**
     * @deprecated
     */
    id?: number | null;
    links?: Array<Link> | null;
};
export class CompanyUserService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get company user by id
     * @param companyId Company Id
     * @param id CompanyUser Id
     * @returns CompanyUserModel All went well
     * @throws ApiError
     */
    user(companyId: number, id: number): CancelablePromise<CompanyUserModel>;
    /**
     * Update company user
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param id CompanyUser Id
     * @param requestBody CompanyUserEditModel
     * @returns CompanyUserFullModel All went well
     * @throws ApiError
     */
    updateCompanyUser(companyId: number, id: number, requestBody?: CompanyUserEditModel): CancelablePromise<CompanyUserFullModel>;
    /**
     * Patch company user
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param id CompanyUser Id
     * @param requestBody Only certain properties on the user are patchable. See the generated example for a list of available properties, using the `op: "replace"` as example. See the generated schema for `ICompanyUserEmployeePatchDocument` for full type information per property
     * @returns CompanyUserFullModel All went well
     * @throws ApiError
     */
    patchCompanyUser(companyId: number, id: number, requestBody?: JsonPatchDocument): CancelablePromise<CompanyUserFullModel>;
    /**
     * Delete user from the system
     * Firstly, the user has to be disconnected, which can be done through a PATCH or PUT
     * This action is irreversible, use with caution
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param id CompanyUser Id
     * @param firstName CompanyUser FirstName
     * @param lastName CompanyUser LastName
     * @returns any All went well
     * @throws ApiError
     */
    deleteCompanyUser(companyId: number, id: number, firstName?: string, lastName?: string): CancelablePromise<any>;
    /**
     * Add company user employee
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param requestBody CompanyUserAddModel
     * @returns CompanyUserFullModel All went well
     * @throws ApiError
     */
    addCompanyUser(companyId: number, requestBody?: CompanyUserAddModel): CancelablePromise<CompanyUserFullModel>;
}
export type ConvertCompanyUserToAadAccountModel = {
    objectIdentifier: string;
};
export class CompanyUserConvertService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Convert company user employee to an AAD account
     * Requires access level: CompanyAdmin.
     * @param companyUserId Company User Id
     * @param companyId
     * @param requestBody ConvertCompanyUserToAadAccountModel
     * @returns any All went well
     * @throws ApiError
     */
    convertUserToAadAccount(companyUserId: number, companyId: string, requestBody?: ConvertCompanyUserToAadAccountModel): CancelablePromise<any>;
}
export type CompanyUserEventModel = {
    companyUserId?: number | null;
    createdByCompanyUserId?: number;
    updatedByCompanyUserId?: number | null;
    created?: string;
    updated?: string | null;
    visibility?: EventVisibility;
    comments?: Array<EventCommentModel> | null;
    /**
     * Meeting = 0
     * Note = 1
     * Task = 2
     */
    type?: EventType;
    id?: string | null;
    companyId?: number | null;
    title?: string | null;
    description?: string | null;
    descriptionHtml?: string | null;
    descriptionDelta?: string | null;
    eventDate?: string;
    links?: Array<Link> | null;
};
export class CompanyUserEmployeeEventService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get employee event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event Id
     * @returns CompanyUserEventModel All went well
     * @throws ApiError
     */
    companyUserEmployeeEvent(companyId: number, companyUserId: number, id: string): CancelablePromise<CompanyUserEventModel>;
}
export type CompanyUserEventMeetingAddEditModel = {
    companyUserId?: number;
    startDateTime?: string;
    endDateTime?: string;
    /**
     * The desired timezone to be used for StartDateTime and EndDateTime properties. Valid timezone ids can be found at https://nodatime.org/TimeZones
     * If empty, the timezone of the executing user (API account) will be used.
     */
    timezoneId?: string | null;
    assignedToCompanyUserId?: number | null;
    status?: EventStatusValue;
    type?: EventType;
    title: string;
    description?: string | null;
    visibility?: EventVisibility;
};
export type CompanyUserEventMeetingModel = {
    companyUserId?: number | null;
    startDateTime?: string;
    endDateTime?: string;
    location?: string | null;
    assignedToCompanyUserId?: number | null;
    status?: EventStatusValue;
    createdByCompanyUserId?: number;
    updatedByCompanyUserId?: number | null;
    created?: string;
    updated?: string | null;
    visibility?: EventVisibility;
    comments?: Array<EventCommentModel> | null;
    /**
     * Meeting = 0
     * Note = 1
     * Task = 2
     */
    type?: EventType;
    id?: string | null;
    companyId?: number | null;
    title?: string | null;
    description?: string | null;
    descriptionHtml?: string | null;
    descriptionDelta?: string | null;
    eventDate?: string;
    links?: Array<Link> | null;
};
export class CompanyUserEmployeeEventMeetingService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get employee meeting event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event Id
     * @returns CompanyUserEventMeetingModel All went well
     * @throws ApiError
     */
    companyUserEmployeeEventMeeting(companyId: number, companyUserId: number, id: string): CancelablePromise<CompanyUserEventMeetingModel>;
    /**
     * Updates employee meeting event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @param requestBody Meeting event details
     * @returns CompanyUserEventMeetingModel All went well
     * @throws ApiError
     */
    updateCompanyUserEmployeeEventMeeting(companyId: number, companyUserId: number, id: string, requestBody?: CompanyUserEventMeetingAddEditModel): CancelablePromise<CompanyUserEventMeetingModel>;
    /**
     * Deletes meeting event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @returns any All went well
     * @throws ApiError
     */
    deleteCompanyUserEmployeeEventMeeting(companyId: number, companyUserId: number, id: string): CancelablePromise<any>;
    /**
     * Creates new employee meeting event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody Meeting event details
     * @returns any All went well
     * @returns CompanyUserEventMeetingModel Created
     * @throws ApiError
     */
    newCompanyUserEmployeeEventMeeting(companyId: number, companyUserId: number, requestBody?: CompanyUserEventMeetingAddEditModel): CancelablePromise<any | CompanyUserEventMeetingModel>;
}
export type CompanyUserEventNoteAddEditModel = {
    companyUserId?: number;
    noteType?: EventNoteType | null;
    noteDate?: string | null;
    /**
     * The desired timezone to be used for NoteDate property. Valid timezone ids can be found at https://nodatime.org/TimeZones
     * If empty, the timezone of the executing user (API account) will be used.
     */
    timezoneId?: string | null;
    assignedToCompanyUserId?: number | null;
    type?: EventType;
    title: string;
    description?: string | null;
    visibility?: EventVisibility;
};
export type CompanyUserEventNoteModel = {
    companyUserId?: number | null;
    noteType?: EventNoteType | null;
    noteDate?: string | null;
    assignedToCompanyUserId?: number | null;
    createdByCompanyUserId?: number;
    updatedByCompanyUserId?: number | null;
    created?: string;
    updated?: string | null;
    visibility?: EventVisibility;
    comments?: Array<EventCommentModel> | null;
    /**
     * Meeting = 0
     * Note = 1
     * Task = 2
     */
    type?: EventType;
    id?: string | null;
    companyId?: number | null;
    title?: string | null;
    description?: string | null;
    descriptionHtml?: string | null;
    descriptionDelta?: string | null;
    eventDate?: string;
    links?: Array<Link> | null;
};
export class CompanyUserEmployeeEventNoteService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get employee note event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event Id
     * @returns CompanyUserEventNoteModel All went well
     * @throws ApiError
     */
    companyUserEmployeeEventNote(companyId: number, companyUserId: number, id: string): CancelablePromise<CompanyUserEventNoteModel>;
    /**
     * Updates employee note event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @param requestBody Note event details
     * @returns CompanyUserEventNoteModel All went well
     * @throws ApiError
     */
    updateCompanyUserEmployeeEventNote(companyId: number, companyUserId: number, id: string, requestBody?: CompanyUserEventNoteAddEditModel): CancelablePromise<CompanyUserEventNoteModel>;
    /**
     * Deletes meeting event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @returns any All went well
     * @throws ApiError
     */
    deleteCompanyUserEmployeeEventNote(companyId: number, companyUserId: number, id: string): CancelablePromise<any>;
    /**
     * Creates new employee note event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody Note event details
     * @returns any All went well
     * @returns CompanyUserEventNoteModel Created
     * @throws ApiError
     */
    newCompanyUserEmployeeEventNote(companyId: number, companyUserId: number, requestBody?: CompanyUserEventNoteAddEditModel): CancelablePromise<any | CompanyUserEventNoteModel>;
}
export type CompanyUserEventBaseModel = {
    companyUserId?: number | null;
    /**
     * Meeting = 0
     * Note = 1
     * Task = 2
     */
    type?: EventType;
    id?: string | null;
    companyId?: number | null;
    title?: string | null;
    description?: string | null;
    descriptionHtml?: string | null;
    descriptionDelta?: string | null;
    eventDate?: string;
    links?: Array<Link> | null;
};
export class CompanyUserEmployeeEventsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get employee events list
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserEventBaseModel All went well
     * @throws ApiError
     */
    companyUserEmployeeEvents(companyId: number, companyUserId: number): CancelablePromise<Array<CompanyUserEventBaseModel>>;
}
export class CompanyUserEmployeeEventsMeetingsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get employee meetings events list
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserEventBaseModel All went well
     * @throws ApiError
     */
    companyUserEmployeeEventMeetingList(companyId: number, companyUserId: number): CancelablePromise<Array<CompanyUserEventBaseModel>>;
}
export class CompanyUserEmployeeEventsNotesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get employee notes events list
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserEventBaseModel All went well
     * @throws ApiError
     */
    companyUserEmployeeEventNoteList(companyId: number, companyUserId: number): CancelablePromise<Array<CompanyUserEventBaseModel>>;
}
export class CompanyUserEmployeeEventsTasksService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get employee tasks events list
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserEventBaseModel All went well
     * @throws ApiError
     */
    companyUserEmployeeEventTaskList(companyId: number, companyUserId: number): CancelablePromise<Array<CompanyUserEventBaseModel>>;
}
export type CompanyUserEventTaskAddEditModel = {
    companyUserId?: number;
    taskType?: EventTaskType | null;
    hasTime?: boolean | null;
    dueDateTime?: string | null;
    /**
     * The desired timezone to be used for DueDateTime property. Valid timezone ids can be found at https://nodatime.org/TimeZones
     * If empty, the timezone of the executing user (API account) will be used.
     */
    timezoneId?: string | null;
    assignedToCompanyUserId?: number | null;
    status?: EventStatusValue;
    type?: EventType;
    title: string;
    description?: string | null;
    visibility?: EventVisibility;
};
export type CompanyUserEventTaskModel = {
    companyUserId?: number | null;
    /**
     * NotSpecified = 0
     * Phone = 1
     * Email = 2
     */
    taskType?: EventTaskType | null;
    hasTime?: boolean | null;
    dueDateTime?: string | null;
    assignedToCompanyUserId?: number | null;
    status?: EventStatusValue;
    createdByCompanyUserId?: number;
    updatedByCompanyUserId?: number | null;
    created?: string;
    updated?: string | null;
    visibility?: EventVisibility;
    comments?: Array<EventCommentModel> | null;
    /**
     * Meeting = 0
     * Note = 1
     * Task = 2
     */
    type?: EventType;
    id?: string | null;
    companyId?: number | null;
    title?: string | null;
    description?: string | null;
    descriptionHtml?: string | null;
    descriptionDelta?: string | null;
    eventDate?: string;
    links?: Array<Link> | null;
};
export class CompanyUserEmployeeEventTaskService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Creates new employee task event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody Task event details
     * @returns any All went well
     * @returns CompanyUserEventTaskModel Created
     * @throws ApiError
     */
    newCompanyUserEmployeeEventTask(companyId: number, companyUserId: number, requestBody?: CompanyUserEventTaskAddEditModel): CancelablePromise<any | CompanyUserEventTaskModel>;
    /**
     * Get employee task event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event Id
     * @returns CompanyUserEventTaskModel All went well
     * @throws ApiError
     */
    companyUserEmployeeEventTask(companyId: number, companyUserId: number, id: string): CancelablePromise<CompanyUserEventTaskModel>;
    /**
     * Updates employee's task event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @param requestBody Task event details
     * @returns CompanyUserEventTaskModel All went well
     * @throws ApiError
     */
    updateCompanyUserEmployeeEventTask(companyId: number, companyUserId: number, id: string, requestBody?: CompanyUserEventTaskAddEditModel): CancelablePromise<CompanyUserEventTaskModel>;
    /**
     * Deletes meeting event
     * Requires access level: CompanyManager.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @returns any All went well
     * @throws ApiError
     */
    deleteCompanyUserEmployeeEventTask(companyId: number, companyUserId: number, id: string): CancelablePromise<any>;
}
export class CompanyUserFullService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get company user, including financial fields, by id
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param id CompanyUser Id
     * @returns CompanyUserFullModel All went well
     * @throws ApiError
     */
    userFull(companyId: number, id: number): CancelablePromise<CompanyUserFullModel>;
}
export type CompanyUserPermissionsEditModel = {
    permissions?: Array<AccessLevel> | null;
};
export class CompanyUserPermissionsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Update Permissions for Company User
     * Requires access level: CompanyAdmin.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserPermissionsEditModel
     * @returns RoleModel All went well
     * @throws ApiError
     */
    updatePermissions(companyId: number, companyUserId: number, requestBody?: CompanyUserPermissionsEditModel): CancelablePromise<Array<RoleModel>>;
}
export type CompanyUserProfileAddEditModel = {
    languageId?: number | null;
};
export type CompanyUserProfileCommitmentTranslationModel = {
    profileCommitmentId?: number | null;
    title?: string | null;
    profileId?: number | null;
    profileTranslationId?: number | null;
    profileTranslation?: CompanyUserProfileTranslationModel | null;
};
export type CompanyUserProfileCommitmentModel = {
    profileId?: number | null;
    startDate?: string | null;
    endDate?: string | null;
    translations?: Array<CompanyUserProfileCommitmentTranslationModel> | null;
    companyId?: number | null;
    companyUserId?: number | null;
    id?: number | null;
    url?: string | null;
    links?: Array<Link> | null;
};
export type CompanyUserProfileEducationTranslationModel = {
    profileEducationId?: number | null;
    schoolName?: string | null;
    programName?: string | null;
    degree?: string | null;
    description?: string | null;
    profileId?: number | null;
    profileTranslationId?: number | null;
    profileTranslation?: CompanyUserProfileTranslationModel | null;
};
export type CompanyUserProfileEducationModel = {
    profileId?: number | null;
    startDate?: string | null;
    endDate?: string | null;
    locationId?: number | null;
    translations?: Array<CompanyUserProfileEducationTranslationModel> | null;
    companyId?: number | null;
    companyUserId?: number | null;
    id?: number | null;
    url?: string | null;
    links?: Array<Link> | null;
};
export type CompanyUserProfileEmployerTranslationModel = {
    profileEmployerId?: number | null;
    name?: string | null;
    title?: string | null;
    description?: string | null;
    profileId?: number | null;
    profileTranslationId?: number | null;
    profileTranslation?: CompanyUserProfileTranslationModel | null;
};
export type CompanyUserProfileEmployerModel = {
    profileId?: number | null;
    startDate?: string | null;
    endDate?: string | null;
    isCurrent?: boolean;
    translations?: Array<CompanyUserProfileEmployerTranslationModel> | null;
    companyId?: number | null;
    companyUserId?: number | null;
    id?: number | null;
    url?: string | null;
    links?: Array<Link> | null;
};
export type CompanyUserProfileExtSkillTranslationModel = {
    profileExtSkillId?: number | null;
    title?: string | null;
    profileId?: number | null;
    profileTranslationId?: number | null;
    profileTranslation?: CompanyUserProfileTranslationModel | null;
};
export type CompanyUserProfileExtSkillModel = {
    profileId?: number | null;
    translations?: Array<CompanyUserProfileExtSkillTranslationModel> | null;
    companyId?: number | null;
    companyUserId?: number | null;
    id?: number | null;
    url?: string | null;
    links?: Array<Link> | null;
};
export type CompanyUserProfileLanguageModel = {
    profileId?: number | null;
    language?: ProfileLanguageModel | null;
    level?: number | null;
    companyId?: number | null;
    companyUserId?: number | null;
    id?: number | null;
    url?: string | null;
    links?: Array<Link> | null;
};
export type CompanyUserProfileReferenceTranslationModel = {
    profileReferenceId?: number | null;
    company?: string | null;
    position?: string | null;
    text?: string | null;
    profileId?: number | null;
    profileTranslationId?: number | null;
    profileTranslation?: CompanyUserProfileTranslationModel | null;
};
export type CompanyUserProfileReferenceModel = {
    profileId?: number | null;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    telephone?: string | null;
    profileWorkExperienceId?: number | null;
    translations?: Array<CompanyUserProfileReferenceTranslationModel> | null;
    companyId?: number | null;
    companyUserId?: number | null;
    id?: number | null;
    url?: string | null;
    links?: Array<Link> | null;
};
export type CompanyUserProfileSkillHistoryModel = {
    id?: number | null;
    changeDateTime?: string | null;
    level?: number | null;
    profileId?: number | null;
    keywordId?: number | null;
    favourite?: boolean;
};
export type CompanyUserProfileSkillTranslationModel = {
    keywordId?: number | null;
    keywordSynonymId?: number | null;
    keywordSynonym?: KeywordSynonymModel | null;
    keyword?: KeywordModel | null;
    profileId?: number | null;
    profileTranslationId?: number | null;
    profileTranslation?: CompanyUserProfileTranslationModel | null;
};
export type CompanyUserProfileSkillModel = {
    profileId?: number | null;
    level?: number | null;
    levelGoal?: number | null;
    levelGoalDeadline?: string | null;
    keyword?: KeywordModel | null;
    changeHistory?: Array<CompanyUserProfileSkillHistoryModel> | null;
    translations?: Array<CompanyUserProfileSkillTranslationModel> | null;
    favourite?: boolean;
    numberOfDaysWorkExperience?: number;
    companyId?: number | null;
    companyUserId?: number | null;
    id?: number | null;
    url?: string | null;
    links?: Array<Link> | null;
};
export type CompanyUserProfileTrainingTranslationModel = {
    profileTrainingId?: number;
    title?: string | null;
    description?: string | null;
    issuer?: string | null;
    supplier?: string | null;
    profileId?: number | null;
    profileTranslationId?: number | null;
    profileTranslation?: CompanyUserProfileTranslationModel | null;
};
/**
 *
 *
 * Kurs = 0
 *
 * Certifiering = 1
 */
export enum TrainingType {
    Course = 0,
    Certification = 1
}
export type CompanyUserProfileTrainingModel = {
    profileId?: number | null;
    id?: number | null;
    trainingType?: TrainingType | null;
    year?: number | null;
    code?: string | null;
    translations?: Array<CompanyUserProfileTrainingTranslationModel> | null;
    expireDate?: string | null;
    companyId?: number | null;
    companyUserId?: number | null;
    url?: string | null;
    links?: Array<Link> | null;
};
export type CompanyUserProfileWorkExperienceTranslationModel = {
    profileWorkExperienceId?: number | null;
    employer?: string | null;
    title?: string | null;
    description?: string | null;
    profileId?: number | null;
    profileTranslationId?: number | null;
    profileTranslation?: CompanyUserProfileTranslationModel | null;
};
export type CompanyUserProfileWorkExperienceModel = {
    profileId?: number | null;
    id?: number | null;
    startDate?: string | null;
    endDate?: string | null;
    isCurrent?: boolean | null;
    translations?: Array<CompanyUserProfileWorkExperienceTranslationModel> | null;
    locationId?: number | null;
    skills?: Array<CompanyUserProfileSkillModel> | null;
    companyId?: number | null;
    companyUserId?: number | null;
    url?: string | null;
    links?: Array<Link> | null;
};
export type CompanyUserProfileFullModel = {
    employers?: Array<CompanyUserProfileEmployerModel> | null;
    workExperience?: Array<CompanyUserProfileWorkExperienceModel> | null;
    education?: Array<CompanyUserProfileEducationModel> | null;
    training?: Array<CompanyUserProfileTrainingModel> | null;
    references?: Array<CompanyUserProfileReferenceModel> | null;
    skills?: Array<CompanyUserProfileSkillModel> | null;
    extSkills?: Array<CompanyUserProfileExtSkillModel> | null;
    commitments?: Array<CompanyUserProfileCommitmentModel> | null;
    languages?: Array<CompanyUserProfileLanguageModel> | null;
    userId?: string | null;
    id?: number | null;
    companyId?: number | null;
    companyUserId?: number | null;
    createdWhen?: string | null;
    updatedWhen?: string | null;
    publishedWhen?: string | null;
    presentation?: CompanyUserProfilePresentationModel | null;
    profileTranslationId?: number;
    profileTranslation?: CompanyUserProfileTranslationModel | null;
    translations?: Array<CompanyUserProfileTranslationModel> | null;
    links?: Array<Link> | null;
};
export class CompanyUserProfileService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get profile by company user id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserProfileFullModel All went well
     * @throws ApiError
     */
    companyUserProfile(companyId: number, companyUserId: number): CancelablePromise<CompanyUserProfileFullModel>;
    /**
     * Create Profile for user
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileCommitmentAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileBaseModel Created
     * @throws ApiError
     */
    newCompanyUserProfile(companyId: number, companyUserId: number, requestBody?: CompanyUserProfileAddEditModel): CancelablePromise<any | CompanyUserProfileBaseModel>;
}
/**
 *
 *
 * AllResumesOfLanguage = 3
 *
 * Profile = 5
 */
export enum SaveToApiOption {
    AllResumesOfLanguage = 3,
    Profile = 5
}
export type CompanyUserProfileCommitmentAddEditModel = {
    title: string;
    description?: string | null;
    isCurrent?: boolean | null;
    startDate?: string | null;
    endDate?: string | null;
    url?: string | null;
    saveTo?: SaveToApiOption;
};
export class CompanyUserProfileCommitmentService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get profile commitment by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id ProfileCommitment Id
     * @returns CompanyUserProfileCommitmentModel All went well
     * @throws ApiError
     */
    companyUserProfileCommitment(companyId: number, companyUserId: number, id: number): CancelablePromise<CompanyUserProfileCommitmentModel>;
    /**
     * Update Profile Commitment
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileCommitmentAddEditModel
     * @returns CompanyUserProfileCommitmentModel All went well
     * @throws ApiError
     */
    updateCompanyUserProfileCommitment(id: number, companyId: number, companyUserId: number, requestBody?: CompanyUserProfileCommitmentAddEditModel): CancelablePromise<CompanyUserProfileCommitmentModel>;
    /**
     * Delete Commitment
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId Company User Id
     * @returns any All went well
     * @throws ApiError
     */
    deleteCompanyUserProfileCommitment(id: number, companyId: number, companyUserId: number): CancelablePromise<any>;
    /**
     * Create Profile Commitment
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileCommitmentAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileCommitmentModel Created
     * @throws ApiError
     */
    newCompanyUserProfileCommitment(companyId: number, companyUserId: number, requestBody?: CompanyUserProfileCommitmentAddEditModel): CancelablePromise<any | CompanyUserProfileCommitmentModel>;
}
export type CompanyUserProfileEducationAddEditModel = {
    schoolName: string;
    programName: string;
    degree?: string | null;
    description?: string | null;
    location?: LocationModel | null;
    isCurrent?: boolean | null;
    startDate?: string | null;
    endDate?: string | null;
    url?: string | null;
    saveTo?: SaveToApiOption;
};
export class CompanyUserProfileEducationService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get profile education by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id ProfileEducation Id
     * @returns CompanyUserProfileEducationModel All went well
     * @throws ApiError
     */
    companyUserProfileEducation(companyId: number, companyUserId: number, id: number): CancelablePromise<CompanyUserProfileEducationModel>;
    /**
     * Update Profile Education
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id
     * @param requestBody CompanyUserProfileEducationAddEditModel
     * @returns CompanyUserProfileEducationModel All went well
     * @throws ApiError
     */
    updateCompanyUserProfileEducation(companyId: number, companyUserId: number, id: number, requestBody?: CompanyUserProfileEducationAddEditModel): CancelablePromise<CompanyUserProfileEducationModel>;
    /**
     * Delete Profile Education
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId Company User Id
     * @returns any All went well
     * @throws ApiError
     */
    deleteCompanyUserProfileEducation(id: number, companyId: number, companyUserId: number): CancelablePromise<any>;
    /**
     * Create Profile Education
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileEducationAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileEducationModel Created
     * @throws ApiError
     */
    newCompanyUserProfileEducation(companyId: number, companyUserId: number, requestBody?: CompanyUserProfileEducationAddEditModel): CancelablePromise<any | CompanyUserProfileEducationModel>;
}
export type CompanyUserProfileEmployerAddEditModel = {
    name: string;
    title?: string | null;
    description?: string | null;
    isCurrent?: boolean | null;
    startDate?: string | null;
    endDate?: string | null;
    url?: string | null;
    saveTo?: SaveToApiOption;
};
export class CompanyUserProfileEmployerService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get profile employer by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id ProfileEmployer Id
     * @returns CompanyUserProfileEmployerModel All went well
     * @throws ApiError
     */
    companyUserProfileEmployer(companyId: number, companyUserId: number, id: number): CancelablePromise<CompanyUserProfileEmployerModel>;
    /**
     * Update Profile Employer
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id
     * @param requestBody CompanyUserProfileEmployerAddEditModel
     * @returns CompanyUserProfileEmployerModel All went well
     * @throws ApiError
     */
    updateCompanyUserProfileEmployer(companyId: number, companyUserId: number, id: number, requestBody?: CompanyUserProfileEmployerAddEditModel): CancelablePromise<CompanyUserProfileEmployerModel>;
    /**
     * Delete Profile Employer
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId Company User Id
     * @returns any All went well
     * @throws ApiError
     */
    deleteCompanyUserProfileEmployer(id: number, companyId: number, companyUserId: number): CancelablePromise<any>;
    /**
     * Create Employer profile item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileEmployerAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileEmployerModel Created
     * @throws ApiError
     */
    newCompanyUserProfileEmployer(companyId: number, companyUserId: number, requestBody?: CompanyUserProfileEmployerAddEditModel): CancelablePromise<any | CompanyUserProfileEmployerModel>;
}
export type CompanyUserProfileExtSkillAddEditModel = {
    title: string;
    saveTo?: SaveToApiOption;
};
export class CompanyUserProfileExtSkillService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get profile external skill by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id ProfileExtSkill Id
     * @returns CompanyUserProfileExtSkillModel All went well
     * @throws ApiError
     */
    companyUserProfileExtSkill(companyId: number, companyUserId: number, id: number): CancelablePromise<CompanyUserProfileExtSkillModel>;
    /**
     * Update Extra Skill Profile Item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id
     * @param requestBody CompanyUserProfileExtraSkillAddEditModel
     * @returns CompanyUserProfileExtSkillModel All went well
     * @throws ApiError
     */
    updateCompanyUserProfileExtSkill(companyId: number, companyUserId: number, id: number, requestBody?: CompanyUserProfileExtSkillAddEditModel): CancelablePromise<CompanyUserProfileExtSkillModel>;
    /**
     * Delete Extra Skill Profile Item
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId Company User Id
     * @returns any All went well
     * @throws ApiError
     */
    deleteCompanyUserProfileExtSkill(id: number, companyId: number, companyUserId: number): CancelablePromise<any>;
    /**
     * Create Extra Skill Profile Item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileExtSkillAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileExtSkillModel Created
     * @throws ApiError
     */
    newCompanyUserProfileExtSkill(companyId: number, companyUserId: number, requestBody?: CompanyUserProfileExtSkillAddEditModel): CancelablePromise<any | CompanyUserProfileExtSkillModel>;
}
/**
 *
 *
 * InProgress = 0
 *
 * Completed = 1
 *
 * Failed = 2
 */
export enum LongRunningStatus {
    InProgress = 0,
    Completed = 1,
    Failed = 2
}
export type ImportProfileAsyncOperation = {
    profile?: CompanyUserProfileBaseModel | null;
    readonly operationId?: number;
    readonly status?: LongRunningStatus;
    readonly errors?: Array<string> | null;
};
export class CompanyUserProfileImportService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Create new profile import for a user.
     * This will start an async operation.
     * - If the operation is started successfully, the response will be `202 Accepted` and the `Location` header will contain the URL to get the status of the operation.
     * - If the operation is not started successfully, the response will be `400 Bad Request`
     * @param companyId
     * @param companyUserId
     * @param formData
     * @returns any Accepted
     * @throws ApiError
     */
    createCompanyUserProfileImport(companyId: number, companyUserId: number, formData?: {
        File: Blob;
        MapSkillExperienceYearsToLevel?: boolean;
    }): CancelablePromise<any>;
    /**
     * Get current status of the async profile import operation.
     * This will return the status of an async operation.
     * - If the operation is still in progress, the response will be `202 Accepted`
     * - If the operation is completed successfully, the response will be `200 OK` and the `status` property will be `Completed`
     * - If the operation is completed with errors, the response will be `200 OK` and the `status` property will be `Failed`
     * @param companyId
     * @param companyUserId
     * @param operationId
     * @returns ImportProfileAsyncOperation Success
     * @returns any Accepted
     * @throws ApiError
     */
    getCompanyUserProfileImport(companyId: number, companyUserId: number, operationId: number): CancelablePromise<ImportProfileAsyncOperation | any>;
}
/**
 *
 *
 * Enstaka ord och fraser = 0
 *
 * Grundläggande kunskaper = 1
 *
 * Goda kunskaper = 2
 *
 * Flytande = 3
 *
 * Modersmål = 4
 */
export enum LanguageLevel {
    Level0 = 0,
    Level1 = 1,
    Level2 = 2,
    Level3 = 3,
    Level4 = 4
}
export type CompanyUserProfileLanguageAddModel = {
    saveTo?: SaveToApiOption;
    languageId: number;
    level?: LanguageLevel;
};
export type CompanyUserProfileLanguageEditModel = {
    languageId: number;
    level?: LanguageLevel;
};
export class CompanyUserProfileLanguageService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get profile language by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id ProfileLanguage Id
     * @returns CompanyUserProfileLanguageModel All went well
     * @throws ApiError
     */
    companyUserProfileLanguage(companyId: number, companyUserId: number, id: number): CancelablePromise<CompanyUserProfileLanguageModel>;
    /**
     * Update Language Profile Item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id
     * @param requestBody CompanyUserProfileExtraSkillAddEditModel
     * @returns CompanyUserProfileLanguageModel All went well
     * @throws ApiError
     */
    updateCompanyUserProfileLanguage(companyId: number, companyUserId: number, id: number, requestBody?: CompanyUserProfileLanguageEditModel): CancelablePromise<CompanyUserProfileLanguageModel>;
    /**
     * Delete Language Profile Item
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId Company User Id
     * @returns any All went well
     * @throws ApiError
     */
    deleteCompanyUserProfileLanguage(id: number, companyId: number, companyUserId: number): CancelablePromise<any>;
    /**
     * Create Language Profile Item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileLanguageAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileLanguageModel Created
     * @throws ApiError
     */
    newCompanyUserProfileLanguage(companyId: number, companyUserId: number, requestBody?: CompanyUserProfileLanguageAddModel): CancelablePromise<any | CompanyUserProfileLanguageModel>;
}
export class CompanyUserProfileLanguagesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get Available Profile Languages
     * @returns ProfileLanguageModel All went well
     * @throws ApiError
     */
    profileLanguages(): CancelablePromise<Array<ProfileLanguageModel>>;
}
export type CompanyUserProfilePresentationEditModel = {
    title?: string | null;
    description?: string | null;
    personalDescription?: string | null;
    saveTo?: SaveToApiOption;
};
export class CompanyUserProfilePresentationService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get profile presentation
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserProfilePresentationModel All went well
     * @throws ApiError
     */
    companyUserProfilePresentation(companyId: number, companyUserId: number): CancelablePromise<CompanyUserProfilePresentationModel>;
    /**
     * Edit Profile Presentation
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfilePresentationEditModel
     * @returns CompanyUserProfilePresentationModel All went well
     * @throws ApiError
     */
    updateCompanyUserProfilePresentation(companyId: number, companyUserId: number, requestBody?: CompanyUserProfilePresentationEditModel): CancelablePromise<CompanyUserProfilePresentationModel>;
}
export type CompanyUserProfileReferenceAddEditModel = {
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    telephone?: string | null;
    company?: string | null;
    position?: string | null;
    text?: string | null;
    profileWorkExperienceId?: number | null;
    saveTo?: SaveToApiOption;
};
export class CompanyUserProfileReferenceService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get profile reference by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id ProfileReference Id
     * @returns CompanyUserProfileReferenceModel All went well
     * @throws ApiError
     */
    companyUserProfileReference(companyId: number, companyUserId: number, id: number): CancelablePromise<CompanyUserProfileReferenceModel>;
    /**
     * Update Profile Reference Item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id
     * @param requestBody CompanyUserProfileReferenceAddEditModel
     * @returns CompanyUserProfileReferenceModel All went well
     * @throws ApiError
     */
    updateCompanyUserProfileReference(companyId: number, companyUserId: number, id: number, requestBody?: CompanyUserProfileReferenceAddEditModel): CancelablePromise<CompanyUserProfileReferenceModel>;
    /**
     * Delete Profile Reference Item
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId Company User Id
     * @returns any All went well
     * @throws ApiError
     */
    deleteCompanyUserProfileReference(id: number, companyId: number, companyUserId: number): CancelablePromise<any>;
    /**
     * Create Profile Reference Item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileReferenceAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileReferenceModel Created
     * @throws ApiError
     */
    newCompanyUserProfileReference(companyId: number, companyUserId: number, requestBody?: CompanyUserProfileReferenceAddEditModel): CancelablePromise<any | CompanyUserProfileReferenceModel>;
}
export class CompanyUserProfilesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get profiles list
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserProfileBaseModel All went well
     * @throws ApiError
     */
    companyUserProfiles(companyId: number, companyUserId: number): CancelablePromise<Array<CompanyUserProfileBaseModel>>;
}
export type CompanyUserProfileSkillAddModel = {
    keywordSynonymId?: number | null;
    name?: string | null;
    level?: number | null;
    saveTo?: SaveToApiOption;
};
export type CompanyUserProfileSkillEditModel = {
    keywordSynonymId?: number | null;
    level?: number;
    saveTo?: SaveToApiOption;
};
export class CompanyUserProfileSkillService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get profile skill by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id ProfileSkill Id
     * @returns CompanyUserProfileSkillModel All went well
     * @throws ApiError
     */
    companyUserProfileSkill(companyId: number, companyUserId: number, id: number): CancelablePromise<CompanyUserProfileSkillModel>;
    /**
     * Update Profile Skill
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id
     * @param requestBody CompanyUserProfileSkillEditModel
     * @returns CompanyUserProfileSkillModel All went well
     * @throws ApiError
     */
    updateCompanyUserProfileSkill(companyId: number, companyUserId: number, id: number, requestBody?: CompanyUserProfileSkillEditModel): CancelablePromise<CompanyUserProfileSkillModel>;
    /**
     * Delete Profile Skill
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId Company User Id
     * @returns any All went well
     * @throws ApiError
     */
    deleteCompanyUserProfileSkill(id: number, companyId: number, companyUserId: number): CancelablePromise<any>;
    /**
     * Add Skill to profile
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileSkillAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileSkillModel Created
     * @throws ApiError
     */
    newCompanyUserProfileSkill(companyId: number, companyUserId: number, requestBody?: CompanyUserProfileSkillAddModel): CancelablePromise<any | CompanyUserProfileSkillModel>;
}
export type CompanyUserProfileTrainingAddEditModel = {
    title?: string | null;
    year?: number;
    issuer?: string | null;
    supplier?: string | null;
    code?: string | null;
    description?: string | null;
    trainingType?: TrainingType;
    url?: string | null;
    expireDate?: string | null;
    saveTo?: SaveToApiOption;
};
export class CompanyUserProfileTrainingService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get profile training by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id ProfileTraining Id
     * @returns CompanyUserProfileTrainingModel All went well
     * @throws ApiError
     */
    companyUserProfileTraining(companyId: number, companyUserId: number, id: number): CancelablePromise<CompanyUserProfileTrainingModel>;
    /**
     * Update Profile Training Item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id
     * @param requestBody CompanyUserProfileTrainingAddEditModel
     * @returns CompanyUserProfileTrainingModel All went well
     * @throws ApiError
     */
    updateCompanyUserProfileTraining(companyId: number, companyUserId: number, id: number, requestBody?: CompanyUserProfileTrainingAddEditModel): CancelablePromise<CompanyUserProfileTrainingModel>;
    /**
     * Delete Profile Training Item
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId Company User Id
     * @returns any All went well
     * @throws ApiError
     */
    deleteCompanyUserProfileTraining(id: number, companyId: number, companyUserId: number): CancelablePromise<any>;
    /**
     * Create Profile Training Item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserProfileTrainingAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileTrainingModel Created
     * @throws ApiError
     */
    newCompanyUserProfileTraining(companyId: number, companyUserId: number, requestBody?: CompanyUserProfileTrainingAddEditModel): CancelablePromise<any | CompanyUserProfileTrainingModel>;
}
export type CompanyUserProfileWorkExperienceSkillAddModel = {
    keywordSynonymId: number;
    name: string;
};
export type CompanyUserProfileWorkExperienceAddEditModel = {
    title: string;
    description: string;
    employer: string;
    startDate: string;
    endDate?: string | null;
    isCurrent?: boolean | null;
    location?: LocationModel | null;
    url?: string | null;
    skills?: Array<CompanyUserProfileWorkExperienceSkillAddModel> | null;
    saveTo?: SaveToApiOption;
};
export class CompanyUserProfileWorkExperienceService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get profile work experience by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id ProfileWorkExperience Id
     * @returns CompanyUserProfileWorkExperienceModel All went well
     * @throws ApiError
     */
    companyUserProfileWorkExperience(companyId: number, companyUserId: number, id: number): CancelablePromise<CompanyUserProfileWorkExperienceModel>;
    /**
     * Update Profile Work Experience
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id
     * @param requestBody CompanyUserProfileWorkExperienceAddEditModel
     * @returns CompanyUserProfileWorkExperienceModel All went well
     * @throws ApiError
     */
    updateCompanyUserProfileWorkExperience(companyId: number, companyUserId: number, id: number, requestBody?: CompanyUserProfileWorkExperienceAddEditModel): CancelablePromise<CompanyUserProfileWorkExperienceModel>;
    /**
     * Delete Profile Work Experience Item
     * @param id Profile Item Id
     * @param companyId Company Id
     * @param companyUserId Company User Id
     * @returns any All went well
     * @throws ApiError
     */
    deleteCompanyUserProfileWorkExperience(id: number, companyId: number, companyUserId: number): CancelablePromise<any>;
    /**
     * Create WorkExperience Profile Item
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody CompanyUserWorkExperienceAddEditModel
     * @returns any All went well
     * @returns CompanyUserProfileWorkExperienceModel Created
     * @throws ApiError
     */
    newCompanyUserProfileWorkExperience(companyId: number, companyUserId: number, requestBody?: CompanyUserProfileWorkExperienceAddEditModel): CancelablePromise<any | CompanyUserProfileWorkExperienceModel>;
}
export type CommitmentBlockItemModel = {
    url?: string | null;
    title?: string | null;
    description?: string | null;
    startDate?: string;
    endDate?: string | null;
    parentBlockItemId?: number | null;
    parentBlockItemUpdated?: boolean | null;
    profileTranslationId?: number | null;
    updated?: string | null;
    discarded?: string | null;
    id?: string;
    disabled?: boolean;
};
export type CommitmentBlockModel = {
    hideInEdit?: boolean;
    hideTitle?: boolean;
    hideDescription?: boolean;
    hideText?: boolean;
    hideUrl?: boolean;
    data?: Array<CommitmentBlockItemModel> | null;
    blockId?: string;
    updated?: string | null;
    heading?: string | null;
};
export type LocationBlockModel = {
    locationId?: number;
    googleId?: string | null;
    name?: string | null;
    street?: string | null;
    streetNumber?: string | null;
    zipCode?: string | null;
    city?: string | null;
    country?: string | null;
    countryCode?: string | null;
    formattedAddress?: string | null;
    phoneNumber?: string | null;
    latitude?: string | null;
    longitude?: string | null;
    webSiteUrl?: string | null;
    displayName?: string | null;
};
export type EducationBlockItemModel = {
    url?: string | null;
    schoolName?: string | null;
    programName?: string | null;
    degree?: string | null;
    description?: string | null;
    location?: LocationBlockModel | null;
    startDate?: string;
    endDate?: string | null;
    parentBlockItemId?: number | null;
    parentBlockItemUpdated?: boolean | null;
    profileTranslationId?: number | null;
    updated?: string | null;
    discarded?: string | null;
    id?: string;
    disabled?: boolean;
};
export type EducationBlockModel = {
    hideInEdit?: boolean;
    hideTitle?: boolean;
    hideDescription?: boolean;
    hideText?: boolean;
    data?: Array<EducationBlockItemModel> | null;
    blockId?: string;
    updated?: string | null;
    heading?: string | null;
};
export type EmployerBlockItemModel = {
    title?: string | null;
    name?: string | null;
    description?: string | null;
    startDate?: string;
    endDate?: string | null;
    url?: string | null;
    parentBlockItemId?: number | null;
    parentBlockItemUpdated?: boolean | null;
    profileTranslationId?: number | null;
    updated?: string | null;
    discarded?: string | null;
    id?: string;
    disabled?: boolean;
};
export type EmployerBlockModel = {
    hideInEdit?: boolean;
    hideTitle?: boolean;
    hideDescription?: boolean;
    hideText?: boolean;
    data?: Array<EmployerBlockItemModel> | null;
    blockId?: string;
    updated?: string | null;
    heading?: string | null;
};
export type ExtraSkillItemBlockModel = {
    title?: string | null;
    parentBlockItemId?: number | null;
    parentBlockItemUpdated?: boolean | null;
    profileTranslationId?: number | null;
    updated?: string | null;
    discarded?: string | null;
    id?: string;
    disabled?: boolean;
};
export type ExtraSkillBlockModel = {
    data?: Array<ExtraSkillItemBlockModel> | null;
    blockId?: string;
    updated?: string | null;
    heading?: string | null;
};
export type ImageBlockModel = {
    imageId?: number | null;
    companyImageId?: number | null;
    imageOriginalUrl?: string | null;
    imageFileName?: string;
    extension?: string | null;
    blockId?: string;
    updated?: string | null;
    heading?: string | null;
};
export type HighlightedWorkExperienceBlockItemModel = {
    title?: string | null;
    description?: string | null;
    descriptionHtml?: string | null;
    employer?: string | null;
    location?: LocationBlockModel | null;
    startDate?: string;
    endDate?: string | null;
    url?: string | null;
    logotype?: ImageBlockModel | null;
    parentBlockItemId?: number | null;
    parentBlockItemUpdated?: boolean | null;
    profileTranslationId?: number | null;
    updated?: string | null;
    discarded?: string | null;
    id?: string;
    disabled?: boolean;
};
export type HighlightedWorkExperienceBlockModel = {
    numberOfItemsInList?: number;
    titleLength?: number;
    descriptionLength?: number;
    employerLength?: number;
    hideInEdit?: boolean;
    hideTitle?: boolean;
    hideDescription?: boolean;
    hideText?: boolean;
    useAdvancedFormatting?: boolean;
    editorSettings?: string | null;
    data?: Array<HighlightedWorkExperienceBlockItemModel> | null;
    blockId?: string;
    updated?: string | null;
    heading?: string | null;
};
export type LanguageItemBlockModel = {
    culture?: string | null;
    lang?: string | null;
    country?: string | null;
    name?: string | null;
    level?: number;
    languageId?: number | null;
    parentBlockItemId?: number | null;
    parentBlockItemUpdated?: boolean | null;
    profileTranslationId?: number | null;
    updated?: string | null;
    discarded?: string | null;
    id?: string;
    disabled?: boolean;
};
export type LanguageBlockModel = {
    data?: Array<LanguageItemBlockModel> | null;
    blockId?: string;
    updated?: string | null;
    heading?: string | null;
};
export type PresentationBlockModel = {
    discarded?: string | null;
    title?: string | null;
    description?: string | null;
    personalDescription?: string | null;
    /**
     * @deprecated
     */
    readonly personalDescriptionHeading?: string | null;
    subHeading?: string | null;
    useAdvancedFormatting?: boolean;
    editorSettings?: string | null;
    hideSubHeading?: boolean;
    personalPresentationLength?: number;
    showPersonalPresentation?: boolean;
    titleLength?: number;
    descriptionLength?: number;
    employerLength?: number;
    blockId?: string;
    updated?: string | null;
    heading?: string | null;
};
export type ReferenceBlockItemModel = {
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    telephone?: string | null;
    company?: string | null;
    position?: string | null;
    text?: string | null;
    workExperience?: string | null;
    workExperienceId?: number | null;
    parentBlockItemId?: number | null;
    parentBlockItemUpdated?: boolean | null;
    profileTranslationId?: number | null;
    updated?: string | null;
    discarded?: string | null;
    id?: string;
    disabled?: boolean;
};
export type ReferenceBlockModel = {
    hideDescription?: boolean;
    hideInEdit?: boolean;
    data?: Array<ReferenceBlockItemModel> | null;
    blockId?: string;
    updated?: string | null;
    heading?: string | null;
};
export type SkillBlockItemModel = {
    name?: string | null;
    level?: number;
    keywordTypeId?: number | null;
    keywordTypeName?: string | null;
    numberOfDaysWorkExperience?: number | null;
    lastWorkExperienceDate?: string | null;
    keywordSynonymId?: number;
    parentBlockItemId?: number | null;
    parentBlockItemUpdated?: boolean | null;
    profileTranslationId?: number | null;
    updated?: string | null;
    discarded?: string | null;
    id?: string;
    disabled?: boolean;
};
export type SkillByCategoryBlockItemModel = {
    keywordTypeId?: number | null;
    name?: string | null;
    description?: string | null;
    skills?: Array<SkillBlockItemModel> | null;
    parentBlockItemId?: number | null;
    parentBlockItemUpdated?: boolean | null;
    profileTranslationId?: number | null;
    updated?: string | null;
    discarded?: string | null;
    id?: string;
    disabled?: boolean;
};
export type SkillByCategoryBlockModel = {
    data?: Array<SkillByCategoryBlockItemModel> | null;
    blockId?: string;
    updated?: string | null;
    heading?: string | null;
};
export type SkillModelModel = {
    hideInEdit?: boolean;
    hideTitle?: boolean;
    hideDescription?: boolean;
    hideText?: boolean;
    data?: Array<SkillBlockItemModel> | null;
    blockId?: string;
    updated?: string | null;
    heading?: string | null;
};
export type TextBlockModel = {
    description?: string | null;
    text?: string | null;
    hideInEdit?: boolean;
    hideTitle?: boolean;
    hideDescription?: boolean;
    hideText?: boolean;
    blockId?: string;
    updated?: string | null;
    heading?: string | null;
};
export type TopSkillBlockItemModel = {
    name?: string | null;
    level?: number | null;
    parentBlockItemId?: number | null;
    parentBlockItemUpdated?: boolean | null;
    profileTranslationId?: number | null;
    updated?: string | null;
    discarded?: string | null;
    id?: string;
    disabled?: boolean;
};
export type TopSkillBlockModel = {
    useLevel?: boolean;
    minValue?: number;
    maxValue?: number;
    numberOfItemsInList?: number;
    hideInEdit?: boolean;
    hideTitle?: boolean;
    hideDescription?: boolean;
    hideText?: boolean;
    data?: Array<TopSkillBlockItemModel> | null;
    blockId?: string;
    updated?: string | null;
    heading?: string | null;
};
export type TrainingItemBlockModel = {
    trainingType?: TrainingType;
    url?: string | null;
    title?: string | null;
    description?: string | null;
    issuer?: string | null;
    year?: number;
    supplier?: string | null;
    parentBlockItemId?: number | null;
    parentBlockItemUpdated?: boolean | null;
    profileTranslationId?: number | null;
    updated?: string | null;
    discarded?: string | null;
    id?: string;
    disabled?: boolean;
};
export type TrainingBlockModel = {
    hideInEdit?: boolean;
    hideTitle?: boolean;
    hideDescription?: boolean;
    hideText?: boolean;
    data?: Array<TrainingItemBlockModel> | null;
    blockId?: string;
    updated?: string | null;
    heading?: string | null;
};
export type WorkExperienceBlockItemModel = {
    skills?: Array<SkillBlockItemModel> | null;
    title?: string | null;
    description?: string | null;
    descriptionHtml?: string | null;
    employer?: string | null;
    location?: LocationBlockModel | null;
    startDate?: string;
    endDate?: string | null;
    url?: string | null;
    logotype?: ImageBlockModel | null;
    parentBlockItemId?: number | null;
    parentBlockItemUpdated?: boolean | null;
    profileTranslationId?: number | null;
    updated?: string | null;
    discarded?: string | null;
    id?: string;
    disabled?: boolean;
};
export type WorkExperienceBlockModel = {
    /**
     * @deprecated
     */
    readonly skillsHeading?: string | null;
    subHeading?: string | null;
    hideSubHeading?: boolean;
    hideInEdit?: boolean;
    hideTitle?: boolean;
    hideDescription?: boolean;
    hideText?: boolean;
    useLogotype?: boolean;
    useAdvancedFormatting?: boolean;
    editorSettings?: string | null;
    data?: Array<WorkExperienceBlockItemModel> | null;
    blockId?: string;
    updated?: string | null;
    heading?: string | null;
};
export type ResumeModel = {
    presentation?: PresentationBlockModel | null;
    highlightedWorkExperience?: HighlightedWorkExperienceBlockModel | null;
    skillsByCategory?: SkillByCategoryBlockModel | null;
    topSkills?: TopSkillBlockModel | null;
    workExperience?: WorkExperienceBlockModel | null;
    skills?: SkillModelModel | null;
    employer?: EmployerBlockModel | null;
    training?: TrainingBlockModel | null;
    education?: EducationBlockModel | null;
    language?: LanguageBlockModel | null;
    commitment?: CommitmentBlockModel | null;
    extraSkills?: ExtraSkillBlockModel | null;
    reference?: ReferenceBlockModel | null;
    text?: TextBlockModel | null;
    id?: number;
};
export type ClassicCompanyUserResumeModel = {
    imageId?: number | null;
    parentProfileId?: number;
    profileTranslationId?: number;
    parentCompanyUserResumeId?: number | null;
    resume?: ResumeModel | null;
    id?: number | null;
    companyUserId?: number | null;
    companyId?: number | null;
    created?: CreatedModel | null;
    updated?: UpdatedModel | null;
    title?: string | null;
    description?: string | null;
    slug?: string | null;
    language?: CompanyResumeTemplateLanguageModel | null;
    template?: CompanyResumeTemplateBaseModel | null;
    isPublic?: boolean;
    links?: Array<Link> | null;
};
export class CompanyUserResumeService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get resume by id
     * Requires module: CompanyUserResume.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Resume Id
     * @returns ClassicCompanyUserResumeModel All went well
     * @throws ApiError
     */
    getResume(companyId: number, companyUserId: number, id: number): CancelablePromise<ClassicCompanyUserResumeModel>;
}
export class CompanyUserResumesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get company user resumes list
     * Requires module: CompanyUserResume.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserResumeBaseModel All went well
     * @throws ApiError
     */
    companyUserResumes(companyId: number, companyUserId: number): CancelablePromise<Array<CompanyUserResumeBaseModel>>;
}
/**
 *
 *
 * Procent = 0
 *
 * Timmar = 1
 */
export enum ExtentType {
    Percent = 0,
    Hours = 1
}
export type ProjectAssignmentBaseModel = {
    companyId?: number;
    customerId?: number;
    projectId?: number;
    project?: ProjectBaseModel | null;
    customer?: CompanyCustomerBaseModel | null;
    id?: number;
    title?: string | null;
    description?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    extentType?: ExtentType;
    extent?: number | null;
    links?: Array<Link> | null;
};
export type CompanyUserProjectAssignmentModel = {
    assigned?: Array<ProjectAssignmentBaseModel> | null;
    prospect?: Array<ProjectAssignmentBaseModel> | null;
};
export class CompanyUserRolesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get Roles for CompanyUser by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param id CompanyUser Id
     * @returns CompanyUserProjectAssignmentModel All went well
     * @throws ApiError
     */
    companyUserRoles(companyId: number, id: number): CancelablePromise<CompanyUserProjectAssignmentModel>;
}
export class CompanyUsersService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get company users list
     * @param companyId Company Id
     * @returns CompanyUserExtendedModel All went well
     * @throws ApiError
     */
    companyUsers(companyId: number): CancelablePromise<Array<CompanyUserExtendedModel>>;
}
export class CompanyUsersExtendedService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get extended company users list
     * @param companyId Company Id
     * @returns CompanyUserExtendedModel All went well
     * @throws ApiError
     */
    companyUsersExtended(companyId: number): CancelablePromise<Array<CompanyUserExtendedModel>>;
}
export type CompanyUserSkillModel = {
    companyId?: number;
    companyUserId?: number;
    numberOfDaysWorkExperience?: number;
    profileId?: number | null;
    id?: number | null;
    level?: number | null;
    levelGoal?: number | null;
    levelGoalDeadline?: string | null;
    keyword?: KeywordModel | null;
    favourite?: boolean;
    links?: Array<Link> | null;
};
export class CompanyUserSkillService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get skill by id
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Skill Id
     * @returns CompanyUserSkillModel All went well
     * @throws ApiError
     */
    skill(companyId: number, companyUserId: number, id: number): CancelablePromise<CompanyUserSkillModel>;
}
export class CompanyUserSkillsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get skills list
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserSkillModel All went well
     * @throws ApiError
     */
    skills(companyId: number, companyUserId: number): CancelablePromise<Array<CompanyUserSkillModel>>;
}
export type CompanyUserSubcontractorAddEditModel = {
    firstName: string;
    lastName: string;
    email: string;
    title?: string | null;
    password: string;
    passwordConfirm: string;
    gender: UserGender;
    profileLanguageId?: number | null;
    createProfile?: boolean;
    tariff?: number | null;
    phone?: string | null;
    currencyId?: number | null;
    languageId: number;
    companyCalendarId?: number | null;
    companyAddressId?: number | null;
    companyName?: string | null;
    companyIdentifier?: string | null;
    internalIdentifier?: string | null;
    linkedIn?: string | null;
    rating?: number | null;
};
export type CompanySubcontractorGroupBaseModel = {
    id?: number;
    companyId?: number;
    name?: string | null;
    description?: string | null;
    links?: Array<Link> | null;
};
export type CompanyUserSubcontractorAttachmentModel = {
    companyUserId?: number;
    attachmentType?: AttachmentType;
    companyId?: number | null;
    id?: string | null;
    title?: string | null;
    description?: string | null;
    links?: Array<Link> | null;
};
/**
 *
 *
 * Frånkopplad = 0
 *
 * Aktiv = 1
 */
export enum CompanyUserSubcontractorStatus {
    Disconnected = 0,
    Active = 1
}
export type CompanyUserSubcontractorModel = {
    resumes?: Array<CompanyUserResumeBaseModel> | null;
    defaultCurrency?: CurrencyModel | null;
    tariff?: number | null;
    createdDateTime?: string;
    groups?: Array<CompanySubcontractorGroupBaseModel> | null;
    phone?: string | null;
    tags?: Array<CompanyTagBaseModel> | null;
    attachments?: Array<CompanyUserSubcontractorAttachmentModel> | null;
    /**
     * Disconnected = 0
     * Active = 1
     */
    status?: CompanyUserSubcontractorStatus | null;
    rating?: number | null;
    email?: string | null;
    companyName?: string | null;
    companyIdentifier?: string | null;
    companyAddress?: CompanyAddressModel | null;
    homeAddress?: LocationModel | null;
    image?: CompanyUserImageModel | null;
    desiredAssignment?: string | null;
    internalIdentifier?: string | null;
    twitter?: string | null;
    linkedIn?: string | null;
    homepage?: string | null;
    blog?: string | null;
    gitHub?: string | null;
    companyUserId?: number | null;
    companyId?: number | null;
    seoId?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    /**
     * Employee = 0,
     * Candidate = 10,
     * Subcontractor = 20
     */
    companyUserType?: CompanyUserType | null;
    /**
     * @deprecated
     */
    id?: number | null;
    links?: Array<Link> | null;
};
export class CompanyUserSubcontractorService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get company user by id
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param id CompanyUser Id
     * @returns CompanyUserSubcontractorModel All went well
     * @throws ApiError
     */
    companySubcontractor(companyId: number, id: number): CancelablePromise<CompanyUserSubcontractorModel>;
    /**
     * Delete subcontractor from the system
     * This action is irreversible, use with caution
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param id Subcontractor Id
     * @param firstName Subcontractor FirstName
     * @param lastName Subcontractor LastName
     * @returns any All went well
     * @throws ApiError
     */
    deleteCompanySubcontractor(companyId: number, id: number, firstName?: string, lastName?: string): CancelablePromise<any>;
    /**
     * Add subcontractor
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param requestBody CompanyUserSubcontractorAddEditModel
     * @returns CompanyUserSubcontractorModel All went well
     * @throws ApiError
     */
    addCompanyUserSubcontractor(companyId: number, requestBody?: CompanyUserSubcontractorAddEditModel): CancelablePromise<CompanyUserSubcontractorModel>;
}
export class CompanyUserSubcontractorEventService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get subcontractors events list
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event Id
     * @returns CompanyUserEventModel All went well
     * @throws ApiError
     */
    companyUserSubcontractorEvent(companyId: number, companyUserId: number, id: string): CancelablePromise<CompanyUserEventModel>;
}
export class CompanyUserSubcontractorEventMeetingService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get subcontractor meeting event
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Meeting event Id
     * @returns CompanyUserEventMeetingModel All went well
     * @throws ApiError
     */
    companyUserSubcontractorEventMeeting(companyId: number, companyUserId: number, id: string): CancelablePromise<CompanyUserEventMeetingModel>;
    /**
     * Updates subcontractor meeting event
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @param requestBody Meeting event details
     * @returns CompanyUserEventMeetingModel All went well
     * @throws ApiError
     */
    updateCompanyUserSubcontractorEventMeeting(companyId: number, companyUserId: number, id: string, requestBody?: CompanyUserEventMeetingAddEditModel): CancelablePromise<CompanyUserEventMeetingModel>;
    /**
     * Deletes meeting event
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @returns any All went well
     * @throws ApiError
     */
    deleteCompanyUserSubcontractorEventMeeting(companyId: number, companyUserId: number, id: string): CancelablePromise<any>;
    /**
     * Creates new subcontractor meeting event
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody Meeting event details
     * @returns any All went well
     * @returns CompanyUserEventMeetingModel Created
     * @throws ApiError
     */
    newCompanyUserSubcontractorEventMeeting(companyId: number, companyUserId: number, requestBody?: CompanyUserEventMeetingAddEditModel): CancelablePromise<any | CompanyUserEventMeetingModel>;
}
export class CompanyUserSubcontractorEventNoteService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get subcontractors notes events list
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event Id
     * @returns CompanyUserEventNoteModel All went well
     * @throws ApiError
     */
    companyUserSubcontractorEventNote(companyId: number, companyUserId: number, id: string): CancelablePromise<CompanyUserEventNoteModel>;
    /**
     * Updates subcontractor note event
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @param requestBody Note event details
     * @returns CompanyUserEventNoteModel All went well
     * @throws ApiError
     */
    updateCompanyUserSubcontractorEventNote(companyId: number, companyUserId: number, id: string, requestBody?: CompanyUserEventNoteAddEditModel): CancelablePromise<CompanyUserEventNoteModel>;
    /**
     * Deletes meeting event
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @returns any All went well
     * @throws ApiError
     */
    deleteCompanyUserSubcontractorEventNote(companyId: number, companyUserId: number, id: string): CancelablePromise<any>;
    /**
     * Creates new subcontractors note event
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody Note event details
     * @returns any All went well
     * @returns CompanyUserEventNoteModel Created
     * @throws ApiError
     */
    newCompanyUserSubcontractorEventNote(companyId: number, companyUserId: number, requestBody?: CompanyUserEventNoteAddEditModel): CancelablePromise<any | CompanyUserEventNoteModel>;
}
export class CompanyUserSubcontractorEventsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get subcontractors events list
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param subcontractorId CompanyUser Id
     * @returns CompanyUserEventBaseModel All went well
     * @throws ApiError
     */
    companyUserSubcontractorEvents(companyId: number, subcontractorId: number): CancelablePromise<Array<CompanyUserEventBaseModel>>;
}
export class CompanyUserSubcontractorEventsMeetingsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get subcontractors meetings events list
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserEventBaseModel All went well
     * @throws ApiError
     */
    companyUserSubcontractorEventMeetingList(companyId: number, companyUserId: number): CancelablePromise<Array<CompanyUserEventBaseModel>>;
}
export class CompanyUserSubcontractorEventsNotesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get subcontractors notes events list
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserEventBaseModel All went well
     * @throws ApiError
     */
    companyUserSubcontractorEventsNotes(companyId: number, companyUserId: number): CancelablePromise<Array<CompanyUserEventBaseModel>>;
}
export class CompanyUserSubcontractorEventsTasksService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get subcontractors tasks events list
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns CompanyUserEventBaseModel All went well
     * @throws ApiError
     */
    companyUserSubcontractorEventsTasks(companyId: number, companyUserId: number): CancelablePromise<Array<CompanyUserEventBaseModel>>;
}
export class CompanyUserSubcontractorEventTaskService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Creates new subcontractor task event
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param requestBody Task event details
     * @returns any All went well
     * @returns CompanyUserEventTaskModel Created
     * @throws ApiError
     */
    newCompanyUserSubcontractorEventTask(companyId: number, companyUserId: number, requestBody?: CompanyUserEventTaskAddEditModel): CancelablePromise<any | CompanyUserEventTaskModel>;
    /**
     * Get subcontractors tasks events list
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event Id
     * @returns CompanyUserEventTaskModel All went well
     * @throws ApiError
     */
    companyUserSubcontractorEventTask(companyId: number, companyUserId: number, id: string): CancelablePromise<CompanyUserEventTaskModel>;
    /**
     * Updates subcontractor task event
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @param requestBody Task event details
     * @returns CompanyUserEventTaskModel All went well
     * @throws ApiError
     */
    updateCompanyUserSubcontractorEventTask(companyId: number, companyUserId: number, id: string, requestBody?: CompanyUserEventTaskAddEditModel): CancelablePromise<CompanyUserEventTaskModel>;
    /**
     * Deletes meeting event
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Event id
     * @returns any All went well
     * @throws ApiError
     */
    deleteCompanyUserSubcontractorEventTask(companyId: number, companyUserId: number, id: string): CancelablePromise<any>;
}
export class CompanyUserSubcontractorFileAttachmentService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get subcontractor File Attachment by Id
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param id
     * @param companyId
     * @param attachmentId
     * @returns string All went well
     * @throws ApiError
     */
    getSubcontractorAttachment(id: number, companyId: number, attachmentId: string): CancelablePromise<string>;
}
export type CompanyUserSubcontractorFileAttachmentModel = {
    fileName?: string | null;
    extension?: string | null;
    companyUserId?: number;
    attachmentType?: AttachmentType;
    companyId?: number | null;
    id?: string | null;
    title?: string | null;
    description?: string | null;
    links?: Array<Link> | null;
};
export type CompanyUserSubcontractorFileAttachmentListModel = {
    companyUserId?: number;
    companyId?: number;
    attachments?: Array<CompanyUserSubcontractorFileAttachmentModel> | null;
    links?: Array<Link> | null;
};
export class CompanyUserSubcontractorFileAttachmentsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Upload subcontractor file attachment
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param id Candidate Id
     * @param companyId Company Id
     * @param formData
     * @returns CompanyUserSubcontractorFileAttachmentListModel Created
     * @throws ApiError
     */
    subcontractorAttachment(id: number, companyId: number, formData?: {
        Files: Array<Blob>;
        Title: string;
        Description?: string;
    }): CancelablePromise<CompanyUserSubcontractorFileAttachmentListModel>;
}
/**
 *
 *
 * Tillagd = 0
 *
 * Offererad = 10
 *
 * Avböjd av kund = 20
 *
 * Avböjd av oss = 30
 *
 * Pausad = 40
 */
export enum ProjectAssignmentMemberState {
    Allocated = 0,
    Offered = 10,
    Rejected = 20,
    Revoked = 30,
    Deferred = 40
}
export type ProjectAssignmentMemberStateHistoryModel = {
    state?: ProjectAssignmentMemberState;
    note?: string | null;
};
export type CompanyUserSubcontractorRoleMemberModel = {
    projectAssignmentId?: number;
    assignmentTariff?: number | null;
    currency?: CurrencyModel | null;
    currentState?: ProjectAssignmentMemberStateHistoryModel | null;
    projectAssignment?: ProjectAssignmentBaseModel | null;
};
export type CompanyUserSubcontractorRolesModel = {
    assigned?: Array<CompanyUserSubcontractorRoleMemberModel> | null;
    prospect?: Array<CompanyUserSubcontractorRoleMemberModel> | null;
};
export class CompanyUserSubcontractorRolesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get assigned and prospect roles for subcontractor
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param subcontractorId Subcontractor Id
     * @returns CompanyUserSubcontractorRolesModel All went well
     * @throws ApiError
     */
    getSubcontractorRoles(companyId: number, subcontractorId: number): CancelablePromise<CompanyUserSubcontractorRolesModel>;
    /**
     * Get a specific role, assigned and or prospected, for subcontractor by role id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param subcontractorId Subcontractor Id
     * @param projectAssignmentId Project assignment Id
     * @returns CompanyUserSubcontractorRoleMemberModel All went well
     * @throws ApiError
     */
    getSubcontractorRole(companyId: number, subcontractorId: number, projectAssignmentId: number): CancelablePromise<CompanyUserSubcontractorRoleMemberModel>;
}
export type CompanyUserSubcontractorBaseModel = {
    /**
     * Disconnected = 0
     * Active = 1
     */
    status?: CompanyUserSubcontractorStatus | null;
    rating?: number | null;
    email?: string | null;
    companyName?: string | null;
    companyIdentifier?: string | null;
    companyAddress?: CompanyAddressModel | null;
    homeAddress?: LocationModel | null;
    image?: CompanyUserImageModel | null;
    desiredAssignment?: string | null;
    internalIdentifier?: string | null;
    twitter?: string | null;
    linkedIn?: string | null;
    homepage?: string | null;
    blog?: string | null;
    gitHub?: string | null;
    companyUserId?: number | null;
    companyId?: number | null;
    seoId?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    /**
     * Employee = 0,
     * Candidate = 10,
     * Subcontractor = 20
     */
    companyUserType?: CompanyUserType | null;
    /**
     * @deprecated
     */
    id?: number | null;
    links?: Array<Link> | null;
};
export class CompanyUserSubcontractorsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get subcontractors list
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @returns CompanyUserSubcontractorBaseModel All went well
     * @throws ApiError
     */
    companyUserSubcontractors(companyId: number): CancelablePromise<Array<CompanyUserSubcontractorBaseModel>>;
}
export class CompanyUserTagsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Edit Tags for User
     * Note:
     *
     * Posted tags will replace any existing tags for the user.
     * A new tag will be created if the id for a tag is not provided.
     *
     * Sample request:
     *
     * POST /v0.1/companies/1/users/19870/tags
     * [
         * {
             * "name": "tag-name",
             * "id": 2
             * },
             * {
                 * "name": "tag-new",
                 * },
                 * ]
                 * @param companyId Company Id
                 * @param companyUserId CompanyUser Id
                 * @param requestBody CompanyTagModel[]
                 * @returns CompanyUserModel All went well
                 * @throws ApiError
                 */
    editCompanyUserTags(companyId: number, companyUserId: number, requestBody?: Array<CompanyTagModel>): CancelablePromise<CompanyUserModel>;
}
export class CompanyUserTeamsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get teams for team member
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @returns TeamBaseModel All went well
     * @throws ApiError
     */
    userTeams(companyId: number, companyUserId: number): CancelablePromise<Array<TeamBaseModel>>;
}
/**
 *
 *
 * All = 1
 *
 * Created = 2
 *
 * Updated = 3
 *
 * Borttagen = 4
 */
export enum ActionType {
    All = 1,
    Created = 2,
    Updated = 3,
    Deleted = 4
}
/**
 *
 *
 * All = 1
 *
 * CompanyCandidate = 2
 *
 * CompanyEmployee = 3
 *
 * CompanySubcontractor = 4
 *
 * CompanyCustomer = 5
 *
 * CompanyProject = 6
 *
 * Role = 7
 *
 * PublicAnnouncement = 8
 *
 * Absence = 9
 *
 * CompanyCustomerContact = 10
 */
export enum WebhookEntityType {
    All = 1,
    CompanyCandidate = 2,
    CompanyEmployee = 3,
    CompanySubcontractor = 4,
    CompanyCustomer = 5,
    CompanyProject = 6,
    Role = 7,
    PublicAnnouncement = 8,
    Absence = 9,
    CompanyCustomerContact = 10
}
export type WebhookConfigurationAddModel = {
    entityType?: WebhookEntityType;
    actionType?: ActionType;
};
export type WebhookCredentialsAddModel = {
    headerValue?: string | null;
    isBasicAuthentication?: boolean | null;
    headerName?: string | null;
};
export type WebhookAddModel = {
    companyId?: number | null;
    isActive?: boolean;
    endpointUrl?: string | null;
    configurations?: Array<WebhookConfigurationAddModel> | null;
    credentials?: Array<WebhookCredentialsAddModel> | null;
};
export type WebhookConfigurationModel = {
    entityType?: WebhookEntityType;
    actionType?: ActionType;
};
export type WebhookCredentialsModel = {
    isBasicAuthentication?: boolean | null;
    headerName?: string | null;
};
export type WebhookModel = {
    id?: string;
    isActive?: boolean;
    endpointUrl?: string | null;
    configurations?: Array<WebhookConfigurationModel> | null;
    credentials?: Array<WebhookCredentialsModel> | null;
};
export class CompanyWebhookService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Add Webhook
     * Sample request:
     *
     * POST /v0.1/companies/1/webhooks
     * {
         * "isActive": false,
         * "endpointUrl": "https://webhook.site/7a619ffb-e67c-41fc-8113-083d6013f76c",
         * "configurations": [
             * {
                 * "entityType": 1,
                 * "actionType": 1
                 * }
                 * ],
                 * "credentials": [
                     * {
                         * "isBasicAuthentication": true,
                         * "headerName": "user",
                         * "headerValue": "somevalue"
                         * }
                         * ]
                         * }
                         * @param companyId Company Id
                         * @param requestBody WebhookAddModel
                         * @returns WebhookModel All went well
                         * @throws ApiError
                         */
    newWebhook(companyId: number, requestBody?: WebhookAddModel): CancelablePromise<WebhookModel>;
    /**
     * Requires access level: CompanyAdmin. Requires module: Webhooks.
     * @param companyId
     * @param requestBody
     * @returns WebhookModel Created
     * @throws ApiError
     */
    installWebhookManifest(companyId: number, requestBody?: Array<WebhookAddModel>): CancelablePromise<Array<WebhookModel>>;
    /**
     * Remove webhook
     * Sample request:
     *
     * DELETE /v0.1/companies/1/webhooks/42a3a220-766c-eb11-8e13-000c29b4e92f
     * @param companyId Company Id
     * @param id Webhook Id
     * @returns any All went well
     * @throws ApiError
     */
    removeWebhook(companyId: number, id: string): CancelablePromise<any>;
}
export class CompanyWebhooksService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get company webhooks
     * Sample request:
     *
     * GET /v0.1/companies/1/webhooks
     * @param companyId Company Id
     * @returns WebhookModel All went well
     * @throws ApiError
     */
    companyWebhooks(companyId: number): CancelablePromise<Array<WebhookModel>>;
}
export type AddressInfoBlockViewModel = {
    displayName?: string | null;
    street1?: string | null;
    street2?: string | null;
    zipCode?: string | null;
    city?: string | null;
    country?: string | null;
    email?: string | null;
};
export type CompanyUserInfoBlockViewModel = {
    address?: AddressInfoBlockViewModel | null;
    email?: string | null;
    title?: string | null;
};
export type ICompanyAddressViewModel = {
    addressId?: number;
    street1?: string | null;
    street2?: string | null;
    zipCode?: string | null;
    city?: string | null;
    country?: string | null;
    addressType?: AddressType;
};
export type IContactInfoViewModel = {
    contactInfoId?: number;
    displayName?: string | null;
    url?: string | null;
    email?: string | null;
    phone?: string | null;
    address?: ICompanyAddressViewModel | null;
};
/**
 *
 *
 * None = 0
 *
 * Primary = 1
 *
 * Classic = 2
 *
 * Dynamic = 3
 *
 * PageFlow = 4
 *
 * BlockWorkExperience = 50
 *
 * BlockSkillsByLevel = 51
 *
 * CinodePremium3PageFlow = 70
 *
 * CinodePremium2PageFlow = 71
 *
 * TemplateType = 100
 */
export enum TemplateAssetType {
    None = 0,
    Primary = 1,
    Classic = 2,
    Dynamic = 3,
    PageFlow = 4,
    BlockWorkExperience = 50,
    BlockSkillsByLevel = 51,
    CinodePremium3PageFlow = 70,
    CinodePremium2PageFlow = 71,
    TemplateType = 100
}
export type IDynamicBlockViewModel = {
    readonly viewComponentName?: string | null;
    readonly templateAssetTypes?: Array<TemplateAssetType> | null;
    companyUserResumeId?: number;
    companyUserId?: number;
    isEditable?: boolean;
    partialEditViewPath?: string | null;
    readonly friendlyBlockName?: string | null;
    hasUpdatesInProfile?: boolean;
    heading?: string | null;
    updated?: string | null;
    blockId?: string;
};
/**
 *
 *
 * Original = 0
 *
 * H40W40 = 1
 *
 * H100W100 = 2
 *
 * H200W200 = 3
 *
 * H300W300 = 4
 *
 * W100 = 5
 *
 * H60 = 6
 *
 * H100 = 7
 *
 * H40 = 8
 *
 * W340 = 9
 *
 * W1800 = 10
 *
 * H750W1800 = 11
 *
 * H250 = 12
 *
 * H400W400 = 13
 *
 * W150 = 14
 *
 * W1200 = 15
 */
export enum ImageSize {
    Original = 0,
    H40W40 = 1,
    H100W100 = 2,
    H200W200 = 3,
    H300W300 = 4,
    W100 = 5,
    H60 = 6,
    H100 = 7,
    H40 = 8,
    W340 = 9,
    W1800 = 10,
    H750W1800 = 11,
    H250 = 12,
    H400W400 = 13,
    W150 = 14,
    W1200 = 15
}
export type ITemplateCompany = {
    companyId?: number;
    name?: string | null;
    seoId?: string | null;
    description?: string | null;
    corporateIdentityNumber?: string | null;
    registrationYear?: number;
    isTaxRegistered?: boolean;
    isUsingFreemiumResumes?: boolean;
};
export type ITemplateLogotype = {
    readonly imageUrl?: string | null;
    readonly imageOriginalUrl?: string | null;
    readonly imageSize?: ImageSize;
    readonly imageFileName?: string;
    readonly extension?: string | null;
};
export type ITemplateProfileImage = {
    allowNoProfileImage?: boolean;
    showImage?: boolean;
    readonly useDefaultImage?: boolean;
    companyUserResumeId?: number;
    companyUserId?: number;
    imageId?: number;
    imageUrl?: string | null;
    imageOriginalUrl?: string | null;
    readonly imageSize?: ImageSize;
    readonly imageFileName?: string;
    readonly extension?: string | null;
};
export type ITemplateSharedAssetViewModel = {
    readonly description?: string | null;
    readonly order?: number;
    readonly fileName?: string | null;
    readonly version?: string | null;
};
export type ITemplateStyleAssetViewModel = {
    readonly companyId?: number;
    readonly resumeTemplateId?: number;
    readonly id?: number;
    readonly order?: number;
    readonly fileName?: string | null;
    readonly version?: string | null;
};
export type ITemplateUserInfo = {
    firstname?: string | null;
    lastname?: string | null;
    fullname?: string | null;
    phone?: string | null;
    dateOfBirth?: string | null;
    email?: string | null;
    twitterUserName?: string | null;
    linkedInUserName?: string | null;
    homepageUrl?: string | null;
    bloggUrl?: string | null;
    gitHubUserName?: string | null;
    location?: string | null;
    country?: string | null;
    internalIdentifier?: string | null;
};
/**
 *
 *
 * WkHtmlToPdf = 0
 *
 * Puppeteer = 2
 */
export enum PdfEngineType {
    WkHtmlToPdf = 0,
    Puppeteer = 2
}
/**
 *
 *
 * Portrait = 0
 *
 * Landscape = 1
 */
export enum PdfOrientation {
    Portrait = 0,
    Landscape = 1
}
/**
 *
 *
 * None = 0
 *
 * GroupDocs = 1
 *
 * Aspose = 2
 */
export enum WordEngineType {
    None = 0,
    GroupDocs = 1,
    Aspose = 2
}
export type DynamicTemplateViewModel = {
    blocks?: Array<IDynamicBlockViewModel> | null;
    logotype?: ITemplateLogotype | null;
    id?: number;
    resumeTemplateId?: number;
    companyId?: number;
    companyUserId?: number;
    slug?: string | null;
    title: string;
    description?: string | null;
    logotypeId?: number | null;
    wordEnabled?: boolean;
    profileImageSize?: ImageSize;
    allowNoProfileImage?: boolean;
    hideProfileImageInEdit?: boolean;
    companyLogotypeImageSize?: ImageSize;
    pdfEngineType?: PdfEngineType;
    wordEngineType?: WordEngineType;
    pdfOrientation?: PdfOrientation;
    pdfMarginTop?: number;
    pdfMarginRight?: number;
    pdfMarginBottom?: number;
    pdfMarginLeft?: number;
    customFooterForWkhtml?: boolean;
    pdfFooter?: boolean;
    showPreviewToggle?: boolean;
    contactInfoId?: number | null;
    contactInfo?: IContactInfoViewModel | null;
    userInfo?: ITemplateUserInfo | null;
    companyUserInfo?: CompanyUserInfoBlockViewModel | null;
    profileImage?: ITemplateProfileImage | null;
    company?: ITemplateCompany | null;
    created?: string;
    updated?: string | null;
    languageBranchId?: number | null;
    isPublic?: boolean;
    locked?: boolean;
    currentLanguage?: string | null;
    styleAssets?: Array<ITemplateStyleAssetViewModel> | null;
    customerManagedStyleAsset?: ITemplateStyleAssetViewModel | null;
    sharedStyleAssets?: Array<ITemplateSharedAssetViewModel> | null;
    sharedScriptAssets?: Array<ITemplateSharedAssetViewModel> | null;
    sharedFontAssets?: Array<ITemplateSharedAssetViewModel> | null;
    primaryStyleAssets?: {
        None?: Array<ITemplateSharedAssetViewModel>;
        Primary?: Array<ITemplateSharedAssetViewModel>;
        Classic?: Array<ITemplateSharedAssetViewModel>;
        Dynamic?: Array<ITemplateSharedAssetViewModel>;
        PageFlow?: Array<ITemplateSharedAssetViewModel>;
        BlockWorkExperience?: Array<ITemplateSharedAssetViewModel>;
        BlockSkillsByLevel?: Array<ITemplateSharedAssetViewModel>;
        CinodePremium3PageFlow?: Array<ITemplateSharedAssetViewModel>;
        CinodePremium2PageFlow?: Array<ITemplateSharedAssetViewModel>;
        TemplateType?: Array<ITemplateSharedAssetViewModel>;
    } | null;
    primaryScriptAssets?: {
        None?: Array<ITemplateSharedAssetViewModel>;
        Primary?: Array<ITemplateSharedAssetViewModel>;
        Classic?: Array<ITemplateSharedAssetViewModel>;
        Dynamic?: Array<ITemplateSharedAssetViewModel>;
        PageFlow?: Array<ITemplateSharedAssetViewModel>;
        BlockWorkExperience?: Array<ITemplateSharedAssetViewModel>;
        BlockSkillsByLevel?: Array<ITemplateSharedAssetViewModel>;
        CinodePremium3PageFlow?: Array<ITemplateSharedAssetViewModel>;
        CinodePremium2PageFlow?: Array<ITemplateSharedAssetViewModel>;
        TemplateType?: Array<ITemplateSharedAssetViewModel>;
    } | null;
    templateAssetTypes?: Array<TemplateAssetType> | null;
    isAnsweringToRequest?: boolean;
};
export type DynamicCompanyUserResumeModel = {
    imageId?: number | null;
    parentProfileId?: number;
    profileTranslationId?: number;
    parentCompanyUserResumeId?: number | null;
    resume?: DynamicTemplateViewModel | null;
    id?: number | null;
    companyUserId?: number | null;
    companyId?: number | null;
    created?: CreatedModel | null;
    updated?: UpdatedModel | null;
    title?: string | null;
    description?: string | null;
    slug?: string | null;
    language?: CompanyResumeTemplateLanguageModel | null;
    template?: CompanyResumeTemplateBaseModel | null;
    isPublic?: boolean;
    links?: Array<Link> | null;
};
export class DynamicCompanyUserResumeService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get resume by id
     * Requires module: CompanyUserResume.
     * @param companyId Company Id
     * @param companyUserId CompanyUser Id
     * @param id Resume Id
     * @returns DynamicCompanyUserResumeModel All went well
     * @throws ApiError
     */
    dynamicResume(companyId: number, companyUserId: number, id: number): CancelablePromise<DynamicCompanyUserResumeModel>;
}
export class KeywordSearchService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Search keywords by term
     * @param companyId Company Id
     * @param term Search term
     * @returns KeywordModel All went well
     * @throws ApiError
     */
    searchKeyword(companyId: number, term: string): CancelablePromise<Array<KeywordModel>>;
}
export type MentionTextModel = {
    value?: string | null;
};
export class MentionsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Translates any mention-ids in a text to their human readable form.
     * Translations are access restricted, if you don't have enough access
     * to get the name of an id, it won't be translated.
     * @param companyId Company Id
     * @param requestBody The model with one property, value, which contains the text containing the mentions you're looking to translate.  Example of a text with a mention inside: `"Hello @(1|123456) can you please consider this role?"`
     * @returns string All went well
     * @throws ApiError
     */
    translateMentions(companyId: number, requestBody?: MentionTextModel): CancelablePromise<string>;
}
export type PartnersFilterModel = {
    query?: string | null;
    onlyIncludeConnectedPartners?: boolean;
};
export type CompanyBaseModel = {
    id?: number | null;
    name?: string | null;
    seoId?: string | null;
    description?: string | null;
    links?: Array<Link> | null;
};
/**
 *
 *
 * Anonymiserat = 10
 *
 * Transparent = 20
 *
 * Avisera = 30
 *
 * Boka = 40
 *
 * Matcha = 50
 *
 * Tillgänglighet = 60
 *
 * UserCv = 70
 */
export enum PartnerConnectionTrustType {
    UserViewAnonymous = 10,
    UserViewTransparent = 20,
    UserAssignRequest = 30,
    UserAssignBook = 40,
    UserSkillMatch = 50,
    UserAvailability = 60,
    UserCv = 70
}
export type PartnerConnectionBaseModel = {
    companyId?: number;
    company?: CompanyBaseModel | null;
    partnerId?: number;
    connectedPartnerConnectionId?: number | null;
    partnerCompanyId?: number;
    partnerCompany?: CompanyBaseModel | null;
    grantedTrusts?: Array<PartnerConnectionTrustType> | null;
    receivedTrusts?: Array<PartnerConnectionTrustType> | null;
};
export type PartnerBaseModel = {
    id?: number;
    companyId?: number;
    name?: string | null;
    description?: string | null;
    partnerConnection?: PartnerConnectionBaseModel | null;
    companyUserManager?: CompanyUserBaseModel | null;
    hasTrusts?: boolean;
    isEnabled?: boolean;
};
export type PartnersOverviewModel = {
    partners?: Array<PartnerBaseModel> | null;
    totalItems?: number;
    filter?: PartnersFilterModel | null;
};
export class PartnersService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get Partners by filter
     * Requires access level: PartnerManager. Requires module: Partners.
     * @param companyId Company Id
     * @param requestBody Filter options
     * @returns PartnersOverviewModel All went well
     * @throws ApiError
     */
    searchPartners(companyId: number, requestBody?: PartnersFilterModel): CancelablePromise<PartnersOverviewModel>;
}
/**
 *
 *
 * Låg = 3
 *
 * Medel = 5
 *
 * Hög = 8
 */
export enum ProjectPriority {
    Low = 3,
    Medium = 5,
    High = 8
}
/**
 *
 *
 * Öppen = 0
 *
 * Vunnen = 30
 *
 * Förlorad = 40
 *
 * Avböjd = 50
 *
 * Uppskjuten = 60
 */
export enum ProjectState {
    Open = 0,
    Won = 30,
    Lost = 40,
    Abandoned = 50,
    Suspended = 60
}
export type ProjectAddEditModel = {
    title: string;
    customerId: number;
    description?: string | null;
    identifier?: string | null;
    customerIdentifier?: string | null;
    intermediatorId?: number | null;
    estimatedCloseDate?: string | null;
    estimatedValue?: number | null;
    contractValue?: number | null;
    probability?: number | null;
    pipelineId?: number | null;
    pipelineStageId?: number | null;
    currencyId?: number | null;
    projectState?: ProjectState;
    location?: LocationModel | null;
    teamId?: number | null;
    stateReasonId?: number | null;
    priority?: ProjectPriority;
    /**
     * List of sales managers employee ids
     */
    salesManagerIds?: Array<number> | null;
    /**
     * List of project managers employee ids
     */
    projectManagerIds?: Array<number> | null;
};
export type ProjectAttachmentModel = {
    projectId?: number;
    attachmentType?: AttachmentType;
    companyId?: number | null;
    id?: string | null;
    title?: string | null;
    description?: string | null;
    links?: Array<Link> | null;
};
export type ProjectEventBaseModel = {
    projectId?: number | null;
    /**
     * Meeting = 0
     * Note = 1
     * Task = 2
     */
    type?: EventType;
    id?: string | null;
    companyId?: number | null;
    title?: string | null;
    description?: string | null;
    descriptionHtml?: string | null;
    descriptionDelta?: string | null;
    eventDate?: string;
    links?: Array<Link> | null;
};
export type ProjectReferenceModel = {
    id?: number;
    companyId?: number;
    projectId?: number;
    title?: string | null;
    text?: string | null;
    language?: string | null;
    links?: Array<Link> | null;
};
export type ProjectStateReasonModel = {
    id?: number;
    title?: string | null;
    description?: string | null;
};
export type ProjectStateHistoryModel = {
    state?: ProjectState;
    updated?: string;
    reason?: ProjectStateReasonModel | null;
};
export type ProjectModel = {
    company?: CompanyBaseModel | null;
    customer?: CompanyCustomerBaseModel | null;
    seoId?: string | null;
    locationId?: number | null;
    googleId?: string | null;
    probability?: number | null;
    estimatedValue?: number | null;
    contractValue?: number | null;
    estimatedCloseDate?: string | null;
    managers?: Array<CompanyUserBaseModel> | null;
    /**
     * @deprecated
     */
    salesManager?: CompanyUserBaseModel | null;
    salesManagers?: Array<CompanyUserBaseModel> | null;
    intermediator?: CompanyCustomerBaseModel | null;
    events?: Array<ProjectEventBaseModel> | null;
    customerContacts?: Array<CompanyCustomerContactBaseModel> | null;
    intermediatorContacts?: Array<CompanyCustomerContactBaseModel> | null;
    assignments?: Array<ProjectAssignmentBaseModel> | null;
    attachments?: Array<ProjectAttachmentModel> | null;
    tags?: Array<CompanyTagBaseModel> | null;
    pipelineId?: number | null;
    currentStageId?: number | null;
    currency?: CurrencyModel | null;
    projectReferences?: Array<ProjectReferenceModel> | null;
    /**
     * 0 = Open
     * 30 = Won
     * 40 = Lost
     * 50 = Abandoned
     * 60 = Suspended
     */
    currentState?: ProjectState;
    stateHistory?: Array<ProjectStateHistoryModel> | null;
    createdBy?: CompanyUserBaseModel | null;
    updatedBy?: CompanyUserBaseModel | null;
    createdDateTime?: string;
    updatedDateTime?: string | null;
    teamId?: number | null;
    stateReasonId?: number | null;
    /**
     * List of sales managers employee ids
     */
    salesManagerIds?: Array<number> | null;
    /**
     * List of project managers employee ids
     */
    projectManagerIds?: Array<number> | null;
    priority?: ProjectPriority;
    companyId?: number;
    customerId?: number;
    id?: number;
    title?: string | null;
    description?: string | null;
    identifier?: string | null;
    customerIdentifier?: string | null;
    links?: Array<Link> | null;
};
export class ProjectService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get project by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param id Project Id
     * @returns ProjectModel All went well
     * @throws ApiError
     */
    project(companyId: number, id: number): CancelablePromise<ProjectModel>;
    /**
     * Update project
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param id Project Id
     * @param companyId Company Id
     * @param requestBody ProjectAddEditModel
     * @returns ProjectModel All went well
     * @throws ApiError
     */
    updateCompanyProject(id: number, companyId: number, requestBody?: ProjectAddEditModel): CancelablePromise<ProjectModel>;
    /**
     * Delete project
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param id Project Id
     * @returns any All went well
     * @throws ApiError
     */
    deleteCompanyProject(companyId: number, id: number): CancelablePromise<any>;
    /**
     * Add project
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param requestBody ProjectAddEditModel
     * @returns ProjectModel All went well
     * @throws ApiError
     */
    newCompanyProject(companyId: number, requestBody?: ProjectAddEditModel): CancelablePromise<ProjectModel>;
}
/**
 *
 *
 * Timpris = 0
 *
 * Fastpris = 1
 */
export enum ContractType {
    Hourly = 0,
    Fixed = 1
}
export type ProjectAssignmentAddModel = {
    title: string;
    description?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    rate?: number | null;
    extent?: number | null;
    oralAgreementToDate?: string | null;
    optionToDate?: string | null;
    contractType?: ContractType;
    extentType?: ExtentType;
    currencyId?: number | null;
};
/**
 *
 *
 * Öppen = 0
 *
 * Återkallad = 10
 *
 * Stängd = 20
 */
export enum ProjectAssignmentRequestStatus {
    Open = 0,
    Revoked = 10,
    Closed = 20
}
export type ProjectAssignmentAnnouncementBaseModel = {
    requestId?: number;
    title?: string | null;
    projectId?: number;
    companyId?: number;
    projectAssignmentId?: number;
    createdDateTime?: string;
    deadline?: string;
    price?: number | null;
    readonly contractType?: ContractType;
    description?: string | null;
    descriptionHtml?: string | null;
    currencyCode?: string | null;
    currencyId?: number | null;
    status?: ProjectAssignmentRequestStatus;
    statusText?: string | null;
    isAnnouncedToPartnerNetwork?: boolean | null;
    isPriceNegotiable?: boolean;
    /**
     * @deprecated
     */
    isRemote?: boolean | null;
    /**
     * 0 indicates that the work is to be done on site. 100 means that the position is fully remote.
     */
    remotePercentage?: number | null;
    isAnnouncedToMarket?: boolean | null;
    isEndCustomerAssignment?: boolean | null;
    referenceId?: string | null;
};
export type PartnerRecipientBaseModel = {
    partnerId?: number;
    requestedCompanyUserAnonymousHash?: string | null;
    requestedCompanyUserId?: number | null;
};
export type ProjectAssignmentAnnounceModel = {
    title: string;
    description?: string | null;
    deadline: string;
    price?: number | null;
    isPriceNegotiable?: boolean;
    currencyId?: number | null;
    managerCompanyUserId: number;
    attachmentIds?: Array<string> | null;
    partnerRecipients?: Array<PartnerRecipientBaseModel> | null;
    subcontractorIds?: Array<number> | null;
    announceToPartnerNetwork?: boolean | null;
    announceToMarket?: boolean | null;
    /**
     * @deprecated
     */
    isRemote?: boolean | null;
    /**
     * Accepts values between 0 and 100. 0 indicates that the work is to be done on site. 100 means that the position is fully remote.
     */
    remotePercentage?: number | null;
    isEndCustomerAssignment?: boolean | null;
    /**
     * Set to true if you actually want to publish the announcement to your recipients, if you are developing/testing the endpoint it should be false, then no persist will take place.
     */
    publishForReal?: boolean;
    referenceId?: string | null;
};
export type ProjectAssignmentEditModel = {
    projectAssignmentId: number;
    title: string;
    description?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    rate?: number | null;
    extent?: number | null;
    oralAgreementToDate?: string | null;
    optionToDate?: string | null;
    contractType?: ContractType;
    extentType?: ExtentType;
    currencyId?: number | null;
};
export type ProjectAssignmentMemberModel = {
    companyUserId?: number | null;
    companyId?: number | null;
    id?: number | null;
    seoId?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    companyUserType?: CompanyUserType | null;
    /**
     * Obsolete
     */
    status?: CompanyUserStatus | null;
    projectAssignmentMemberId?: number;
    projectAssignmentMemberState?: ProjectAssignmentMemberState | null;
    links?: Array<Link> | null;
};
export type ProjectAssignmentSkillBaseModel = {
    companyId?: number;
    customerId?: number;
    projectId?: number;
    projectAssignmentId?: number;
    keywordId?: number;
    level?: number;
    keyword?: KeywordModel | null;
    links?: Array<Link> | null;
};
export type ProjectAssignmentModel = {
    company?: CompanyBaseModel | null;
    assigned?: ProjectAssignmentMemberModel | null;
    prospects?: Array<ProjectAssignmentMemberModel> | null;
    seoId?: string | null;
    skills?: Array<ProjectAssignmentSkillBaseModel> | null;
    projectAssignmentMemberId?: number | null;
    rate?: number | null;
    oralAgreementToDate?: string | null;
    optionToDate?: string | null;
    contractType?: ContractType;
    readonly isAssigned?: boolean;
    currency?: CurrencyModel | null;
    companyId?: number;
    customerId?: number;
    projectId?: number;
    project?: ProjectBaseModel | null;
    customer?: CompanyCustomerBaseModel | null;
    id?: number;
    title?: string | null;
    description?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    extentType?: ExtentType;
    extent?: number | null;
    links?: Array<Link> | null;
};
export class ProjectAssignmentService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @deprecated
     * Get projectassignment by id (Obsolete)
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id ProjectAssignment Id
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */
    oldProjectAssignment(companyId: number, projectId: number, id: number): CancelablePromise<ProjectAssignmentModel>;
    /**
     * Get Role by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id ProjectAssignment Id
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */
    projectAssignment(companyId: number, projectId: number, id: number): CancelablePromise<ProjectAssignmentModel>;
    /**
     * Edit Role
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id ProjectAssignment Id
     * @param requestBody ProjectAssignmentEditModel
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */
    updateProjectAssignment(companyId: number, projectId: number, id: number, requestBody?: ProjectAssignmentEditModel): CancelablePromise<ProjectAssignmentModel>;
    /**
     * Delete Role
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id ProjectAssignment Id
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */
    deleteProjectAssignment(companyId: number, projectId: number, id: number): CancelablePromise<ProjectAssignmentModel>;
    /**
     * Add Role
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param requestBody ProjectAssignmentAddEditModel
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */
    newProjectAssignment(companyId: number, projectId: number, requestBody?: ProjectAssignmentAddModel): CancelablePromise<ProjectAssignmentModel>;
    /**
     * Announce a role (ProjectAssignment) to the Partner Network and optionally also to Cinode Market(https://cinode.market/requests).
     * If you are testing, set the "PublishForReal" to "false", otherwise you will publish this announcement for real. When you're testing ("PublishForReal = false) RequestId will be 0 in the response.
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param projectId Project Id
     * @param projectAssignmentId ProjectAssignment Id
     * @param companyId
     * @param requestBody ProjectAssignmentAnnounceModel
     * @returns ProjectAssignmentAnnouncementBaseModel Success
     * @returns any All went well
     * @throws ApiError
     */
    announceProjectAssignment(projectId: number, projectAssignmentId: number, companyId: string, requestBody?: ProjectAssignmentAnnounceModel): CancelablePromise<ProjectAssignmentAnnouncementBaseModel | any>;
}
/**
 *
 *
 * Ej bokad = 0
 *
 * Preliminär = 1
 *
 * Tillsatt = 2
 */
export enum ProjectAssignmentAllocationStatus {
    NotBooked = 0,
    Preliminary = 1,
    Assigned = 2
}
export type ProjectAssignmentMemberEmployeeAddModel = {
    teamId?: number | null;
    companyUserId: number;
    status: ProjectAssignmentAllocationStatus;
};
export type ProjectAssignmentMemberEmployeeEditModel = {
    teamId?: number | null;
    id: number;
    state: ProjectAssignmentMemberState;
    companyUserId: number;
    status: ProjectAssignmentAllocationStatus;
};
export type ProjectAssignmentMemberSubcontractorAddModel = {
    groupId?: number | null;
    currencyId?: number | null;
    tariff?: number | null;
    companyUserId: number;
    status: ProjectAssignmentAllocationStatus;
};
export type ProjectAssignmentMemberSubcontractorEditModel = {
    groupId?: number | null;
    currencyId?: number | null;
    tariff?: number | null;
    id: number;
    state: ProjectAssignmentMemberState;
    companyUserId: number;
    status: ProjectAssignmentAllocationStatus;
};
export class ProjectAssignmentMemberService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Add Role Member Employee
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param roleId Role Id
     * @param requestBody ProjectAssignmentMemberEmployeeAddModel
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */
    addProjectAssignmentMemberEmployee(companyId: number, projectId: number, roleId: number, requestBody?: ProjectAssignmentMemberEmployeeAddModel): CancelablePromise<ProjectAssignmentModel>;
    /**
     * Add Role Member Subcontractor
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param roleId Role Id
     * @param requestBody ProjectAssignmentMemberSubcontractorAddModel
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */
    addProjectAssignmentMemberSubcontractor(companyId: number, projectId: number, roleId: number, requestBody?: ProjectAssignmentMemberSubcontractorAddModel): CancelablePromise<ProjectAssignmentModel>;
    /**
     * Edit Role Member Employee
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param roleId Role Id
     * @param id Role Member Id
     * @param requestBody ProjectAssignmentMemberSubcontractorAddModel
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */
    updateProjectAssignmentMemberEmployee(companyId: number, projectId: number, roleId: number, id: number, requestBody?: ProjectAssignmentMemberEmployeeEditModel): CancelablePromise<ProjectAssignmentModel>;
    /**
     * Edit Role Member Subcontractor
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param roleId Role Id
     * @param id Role Member Id
     * @param requestBody ProjectAssignmentMemberSubcontractorAddModel
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */
    updateProjectAssignmentMemberSubcontractor(companyId: number, projectId: number, roleId: number, id: number, requestBody?: ProjectAssignmentMemberSubcontractorEditModel): CancelablePromise<ProjectAssignmentModel>;
    /**
     * Delete Role Member
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param roleId Role Id
     * @param id Role Member Id
     * @returns ProjectAssignmentModel All went well
     * @throws ApiError
     */
    deleteProjectAssignmentMemberEmployee(companyId: number, projectId: number, roleId: number, id: number): CancelablePromise<ProjectAssignmentModel>;
}
/**
 *
 *
 * Unspecified = 0
 *
 * Medarbetare = 1
 *
 * Partnerkonsult = 2
 *
 * Underkonsult = 3
 */
export enum ProjectAssignmentMemberType {
    Unspecified = 0,
    CompanyUser = 1,
    PartnerCompanyUser = 2,
    CompanyUserSubcontractor = 3
}
/**
 *
 *
 * Inga datum valda = 0
 *
 * Kommande = 1
 *
 * Pågående = 2
 *
 * Avslutat = 3
 */
export enum ProjectAssignmentStatus {
    Unspecified = 0,
    Coming = 1,
    Ongoing = 2,
    Ended = 3
}
export type ProjectAssignmentFilterModel = {
    /**
     * Pipeline Ids can be retrieved from the Project Pipelines endpoint
     */
    pipelines?: Array<number> | null;
    /**
     * 0 - Employee
     * 1 - Partner consultant
     * 2- Subcontractor
     */
    projectAssignmentMemberTypes?: Array<ProjectAssignmentMemberType> | null;
    /**
     * 1 - Upcoming
     * 2 - Ongoing
     */
    projectAssignmentStatuses?: Array<ProjectAssignmentStatus> | null;
    /**
     * Team Id of Employee assigned to Role
     */
    teams?: Array<number> | null;
    /**
     * 0 - Open
     * 30 - Won
     * 40 - Lost
     * 50 - Abandoned
     * 60 - Suspended
     */
    projectStates?: Array<ProjectState> | null;
    projectAssignmentAllocationStatuses?: Array<ProjectAssignmentAllocationStatus> | null;
};
/**
 *
 *
 * Procent = 0
 *
 * Timmar = 1
 */
export enum ProjectAssignmentExtentType {
    Percent = 0,
    Hours = 1
}
/**
 *
 *
 * None = 0
 *
 * Preliminär = 1
 *
 * Tillsatt = 2
 *
 * Offererad = 3
 */
export enum ProjectAssignmentMemberAllocationStatus {
    None = 0,
    Preliminary = 1,
    Assigned = 2,
    Offered = 3
}
export type ProjectAssignmentWithStatusModel = {
    pipelineId?: number | null;
    projectPipelineStageTitle?: string | null;
    customerId?: number;
    projectId?: number;
    /**
     * 0 - Open
     * 30 - Won
     * 40 - Lost
     * 50 - Abandoned
     * 60 - Suspended
     */
    projectState?: ProjectState;
    probability?: number;
    /**
     * Unspecified = 0,
     * Coming = 1,
     * Ongoing = 2,
     * Ended = 3
     */
    projectAssignmentId?: number;
    /**
     * None = 0,
     * Preliminary = 1,
     * Assigned = 2,
     */
    projectAssignmentAllocationStatus?: ProjectAssignmentMemberAllocationStatus;
    /**
     * Unspecified = 0,
     * Employee = 1,
     * Partner Consultant = 2,
     * Subcontractor = 3
     */
    projectAssignmentMemberType?: ProjectAssignmentMemberType;
    startDate?: string | null;
    endDate?: string | null;
    optionToDate?: string | null;
    oralAgreementToDate?: string | null;
    projectAssignmentExtent?: number;
    /**
     * Percent = 0,
     * Hours = 1,
     */
    projectAssignmentExtentType?: ProjectAssignmentExtentType;
    rate?: number | null;
    estimatedCloseDate?: string | null;
    estimatedValue?: number | null;
    assigned?: ProjectAssignmentMemberModel | null;
    prospects?: Array<ProjectAssignmentMemberModel> | null;
};
export class ProjectAssignmentsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get Roles by Filter
     * Rate limited, restricted to once per minute, max 1000 requests per day
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param requestBody Filter options
     * @returns ProjectAssignmentWithStatusModel All went well
     * @throws ApiError
     */
    searchRoles(companyId: number, requestBody?: ProjectAssignmentFilterModel): CancelablePromise<ProjectAssignmentWithStatusModel>;
}
export type ProjectAssignmentSkillAddModel = {
    name: string;
    keywordSynonymId?: number | null;
    level?: number | null;
    isMandatory?: boolean | null;
};
export type ProjectAssignmentSkillEditModel = {
    name?: string | null;
    level?: number | null;
    isMandatory?: boolean | null;
};
export type ProjectAssignmentSkillModel = {
    projectAssignment?: ProjectAssignmentBaseModel | null;
    project?: ProjectBaseModel | null;
    company?: CompanyBaseModel | null;
    customer?: CompanyCustomerBaseModel | null;
    keywordSynonymId?: number;
    keywordSynonym?: KeywordSynonymModel | null;
    isMandatory?: boolean;
    companyId?: number;
    customerId?: number;
    projectId?: number;
    projectAssignmentId?: number;
    keywordId?: number;
    level?: number;
    keyword?: KeywordModel | null;
    links?: Array<Link> | null;
};
export class ProjectAssignmentSkillsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Add Role Skill
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param roleId Role Id
     * @param requestBody ProjectAssignmentMemberSkillAddModel
     * @returns ProjectAssignmentSkillModel All went well
     * @throws ApiError
     */
    addProjectAssignmentSkill(companyId: number, projectId: number, roleId: number, requestBody?: ProjectAssignmentSkillAddModel): CancelablePromise<ProjectAssignmentSkillModel>;
    /**
     * Update Role Skill
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param roleId Role Id
     * @param id Keyword Id
     * @param requestBody ProjectAssignmentMemberSkillAddModel
     * @returns ProjectAssignmentSkillModel All went well
     * @throws ApiError
     */
    updateProjectAssignmentSkill(companyId: number, projectId: number, roleId: number, id: number, requestBody?: ProjectAssignmentSkillEditModel): CancelablePromise<ProjectAssignmentSkillModel>;
    /**
     * Delete Role Skill
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param roleId Role Id
     * @param id Keyword Id
     * @returns ProjectAssignmentSkillModel All went well
     * @throws ApiError
     */
    deleteProjectAssignmentSkill(companyId: number, projectId: number, roleId: number, id: number): CancelablePromise<ProjectAssignmentSkillModel>;
}
export type ProjectEventModel = {
    projectId?: number | null;
    createdByCompanyUserId?: number;
    updatedByCompanyUserId?: number | null;
    created?: string;
    updated?: string | null;
    visibility?: EventVisibility;
    comments?: Array<EventCommentModel> | null;
    /**
     * Meeting = 0
     * Note = 1
     * Task = 2
     */
    type?: EventType;
    id?: string | null;
    companyId?: number | null;
    title?: string | null;
    description?: string | null;
    descriptionHtml?: string | null;
    descriptionDelta?: string | null;
    eventDate?: string;
    links?: Array<Link> | null;
};
export class ProjectEventService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get project event by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @returns ProjectEventModel All went well
     * @throws ApiError
     */
    projectEvent(companyId: number, projectId: number, id: string): CancelablePromise<ProjectEventModel>;
}
export class ProjectEventsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get project events list
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @returns ProjectEventBaseModel All went well
     * @throws ApiError
     */
    projectEvents(companyId: number, projectId: number): CancelablePromise<Array<ProjectEventBaseModel>>;
}
export type ProjectEventMeetingAddEditModel = {
    customerId?: number;
    startDateTime?: string;
    endDateTime?: string;
    /**
     * The desired timezone to be used for StartDateTime and EndDateTime properties. Valid timezone ids can be found at https://nodatime.org/TimeZones
     * If empty, the timezone of the executing user (API account) will be used.
     */
    timezoneId?: string | null;
    assignedToCompanyUserId?: number | null;
    status?: EventStatusValue;
    type?: EventType;
    title: string;
    description?: string | null;
    visibility?: EventVisibility;
};
export type ProjectEventMeetingModel = {
    customerId?: number;
    projectId?: number | null;
    startDateTime?: string;
    endDateTime?: string;
    location?: string | null;
    assignedToCompanyUserId?: number | null;
    status?: EventStatusValue;
    createdByCompanyUserId?: number;
    updatedByCompanyUserId?: number | null;
    created?: string;
    updated?: string | null;
    visibility?: EventVisibility;
    comments?: Array<EventCommentModel> | null;
    /**
     * Meeting = 0
     * Note = 1
     * Task = 2
     */
    type?: EventType;
    id?: string | null;
    companyId?: number | null;
    title?: string | null;
    description?: string | null;
    descriptionHtml?: string | null;
    descriptionDelta?: string | null;
    eventDate?: string;
    links?: Array<Link> | null;
};
export class ProjectEventsMeetingService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get project event meeting by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @returns ProjectEventMeetingModel All went well
     * @throws ApiError
     */
    projectEventMeeting(companyId: number, projectId: number, id: string): CancelablePromise<ProjectEventMeetingModel>;
    /**
     * Update project event meeting
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @param requestBody ProjectEventMeetingAddEditModel
     * @returns ProjectEventMeetingModel All went well
     * @throws ApiError
     */
    updateProjectMeeting(companyId: number, projectId: number, id: string, requestBody?: ProjectEventMeetingAddEditModel): CancelablePromise<ProjectEventMeetingModel>;
    /**
     * Delete project event meeting
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @returns any All went well
     * @throws ApiError
     */
    deleteProjectMeeting(companyId: number, projectId: number, id: string): CancelablePromise<any>;
    /**
     * Add project event meeting
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param requestBody ProjectEventMeetingAddEditModel
     * @returns ProjectEventMeetingModel All went well
     * @throws ApiError
     */
    newProjectMeeting(companyId: number, projectId: number, requestBody?: ProjectEventMeetingAddEditModel): CancelablePromise<ProjectEventMeetingModel>;
}
export class ProjectEventsMeetingsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get project events meetings list
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @returns ProjectEventBaseModel All went well
     * @throws ApiError
     */
    projectEventMeetings(companyId: number, projectId: number): CancelablePromise<Array<ProjectEventBaseModel>>;
}
export type ProjectEventNoteAddEditModel = {
    customerId?: number;
    noteType?: EventNoteType | null;
    noteDate?: string | null;
    /**
     * The desired timezone to be used for NoteDate property. Valid timezone ids can be found at https://nodatime.org/TimeZones
     * If empty, the timezone of the executing user (API account) will be used.
     */
    timezoneId?: string | null;
    assignedToCompanyUserId?: number | null;
    type?: EventType;
    title: string;
    description?: string | null;
    visibility?: EventVisibility;
};
export type ProjectEventNoteModel = {
    customerId?: number;
    projectId?: number | null;
    noteType?: EventNoteType | null;
    noteDate?: string | null;
    assignedToCompanyUserId?: number | null;
    createdByCompanyUserId?: number;
    updatedByCompanyUserId?: number | null;
    created?: string;
    updated?: string | null;
    visibility?: EventVisibility;
    comments?: Array<EventCommentModel> | null;
    /**
     * Meeting = 0
     * Note = 1
     * Task = 2
     */
    type?: EventType;
    id?: string | null;
    companyId?: number | null;
    title?: string | null;
    description?: string | null;
    descriptionHtml?: string | null;
    descriptionDelta?: string | null;
    eventDate?: string;
    links?: Array<Link> | null;
};
export class ProjectEventsNoteService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get project event note by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @returns CustomerEventNoteModel All went well
     * @throws ApiError
     */
    projectEventNote(companyId: number, projectId: number, id: string): CancelablePromise<CustomerEventNoteModel>;
    /**
     * Update project event note
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @param requestBody ProjectEventNoteAddEditModel
     * @returns ProjectEventNoteModel All went well
     * @throws ApiError
     */
    updateProjectNote(companyId: number, projectId: number, id: string, requestBody?: ProjectEventNoteAddEditModel): CancelablePromise<ProjectEventNoteModel>;
    /**
     * Delete project event note
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @returns any All went well
     * @throws ApiError
     */
    deleteProjectNote(companyId: number, projectId: number, id: string): CancelablePromise<any>;
    /**
     * Add project event note
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param requestBody ProjectEventNoteAddEditModel
     * @returns ProjectEventNoteModel All went well
     * @throws ApiError
     */
    newProjectNote(companyId: number, projectId: number, requestBody?: ProjectEventNoteAddEditModel): CancelablePromise<ProjectEventNoteModel>;
}
export class ProjectEventsNotesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get project event notes list
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @returns ProjectEventBaseModel All went well
     * @throws ApiError
     */
    projectEventNotes(companyId: number, projectId: number): CancelablePromise<Array<ProjectEventBaseModel>>;
}
export type ProjectEventTaskAddEditModel = {
    customerId?: number;
    taskType?: EventTaskType | null;
    hasTime?: boolean | null;
    dueDateTime?: string | null;
    /**
     * The desired timezone to be used for DueDateTime property. Valid timezone ids can be found at https://nodatime.org/TimeZones
     * If empty, the timezone of the executing user (API account) will be used.
     */
    timezoneId?: string | null;
    assignedToCompanyUserId?: number | null;
    status?: EventStatusValue;
    type?: EventType;
    title: string;
    description?: string | null;
    visibility?: EventVisibility;
};
export type ProjectEventTaskModel = {
    customerId?: number;
    projectId?: number | null;
    /**
     * NotSpecified = 0
     * Phone = 1
     * Email = 2
     */
    taskType?: EventTaskType | null;
    hasTime?: boolean | null;
    dueDateTime?: string | null;
    assignedToCompanyUserId?: number | null;
    status?: EventStatusValue;
    createdByCompanyUserId?: number;
    updatedByCompanyUserId?: number | null;
    created?: string;
    updated?: string | null;
    visibility?: EventVisibility;
    comments?: Array<EventCommentModel> | null;
    /**
     * Meeting = 0
     * Note = 1
     * Task = 2
     */
    type?: EventType;
    id?: string | null;
    companyId?: number | null;
    title?: string | null;
    description?: string | null;
    descriptionHtml?: string | null;
    descriptionDelta?: string | null;
    eventDate?: string;
    links?: Array<Link> | null;
};
export class ProjectEventsTaskService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get project event task by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @returns ProjectEventTaskModel All went well
     * @throws ApiError
     */
    projectEventTask(companyId: number, projectId: number, id: string): CancelablePromise<ProjectEventTaskModel>;
    /**
     * Update project event task
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @param requestBody ProjectEventTaskAddEditModel
     * @returns ProjectEventTaskModel All went well
     * @throws ApiError
     */
    updateProjectTask(companyId: number, projectId: number, id: string, requestBody?: ProjectEventTaskAddEditModel): CancelablePromise<ProjectEventTaskModel>;
    /**
     * Delete project event task
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Event Id
     * @returns any All went well
     * @throws ApiError
     */
    deleteProjectTask(companyId: number, projectId: number, id: string): CancelablePromise<any>;
    /**
     * Add project event task
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param requestBody ProjectEventTaskAddEditModel
     * @returns ProjectEventTaskModel All went well
     * @throws ApiError
     */
    newProjectTask(companyId: number, projectId: number, requestBody?: ProjectEventTaskAddEditModel): CancelablePromise<ProjectEventTaskModel>;
}
export class ProjectEventsTasksService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get project event tasks list
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @returns ProjectEventBaseModel All went well
     * @throws ApiError
     */
    projectEventTasks(companyId: number, projectId: number): CancelablePromise<Array<ProjectEventBaseModel>>;
}
export type ProjectPipelineStageModel = {
    id?: number;
    title?: string | null;
    description?: string | null;
    order?: number;
    probability?: number | null;
};
export type ProjectPipelineModel = {
    id?: number;
    title?: string | null;
    description?: string | null;
    stages?: Array<ProjectPipelineStageModel> | null;
};
export class ProjectPipelinesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get project pipelines
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @returns ProjectPipelineModel All went well
     * @throws ApiError
     */
    projectPipelines(companyId: number): CancelablePromise<Array<ProjectPipelineModel>>;
}
export class ProjectReferenceService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get project reference by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @param id Project reference Id
     * @returns ProjectReferenceModel All went well
     * @throws ApiError
     */
    projectReference(companyId: number, projectId: number, id: number): CancelablePromise<ProjectReferenceModel>;
}
export class ProjectReferencesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get project reference by id
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @param projectId Project Id
     * @returns ProjectReferenceModel All went well
     * @throws ApiError
     */
    projectReferences(companyId: number, projectId: number): CancelablePromise<Array<ProjectReferenceModel>>;
}
export class ProjectsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get projects list  - please note this endpoint currently only returns projects with the status WON. Please use the SearchProjects endpoint for more options of filtering desired Projects
     * Requires access level: CompanyManager. Requires module: Assignments.
     * @param companyId Company Id
     * @returns ProjectBaseModel All went well
     * @throws ApiError
     */
    projects(companyId: number): CancelablePromise<Array<ProjectBaseModel>>;
}
export class ProjectTagsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Edit Tags for Project
     * Note:
     *
     * Posted tags will replace any existing tags for the project.
     * A new tag will be created, if the id for a tag not provided.
     *
     * Sample request:
     *
     * POST /v0.1/companies/1/projects/19870/tags
     * [
         * {
             * "name": "tag-name",
             * "id": 2
             * },
             * {
                 * "name": "tag-test",
                 * "id": 1
                 * },
                 * ]
                 * @param companyId Company Id
                 * @param projectId Project Id
                 * @param requestBody CompanyTagModel
                 * @returns ProjectModel All went well
                 * @throws ApiError
                 */
    editProjectTags(companyId: number, projectId: number, requestBody?: Array<CompanyTagModel>): CancelablePromise<ProjectModel>;
}
export type RecruitmentSourceModel = {
    id?: number;
    companyId?: number;
    name?: string | null;
};
export class RecruitmentSourcesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get recruitment sources
     * Requires access level: CompanyRecruiter. Requires module: Recruitment.
     * @param companyId Company Id
     * @returns RecruitmentSourceModel All went well
     * @throws ApiError
     */
    recruitmentSources(companyId: number): CancelablePromise<Array<RecruitmentSourceModel>>;
}
/**
 *
 *
 * CreatedDateTime = 0
 *
 * FirstName = 1
 *
 * LastName = 2
 *
 * Status = 3
 *
 * Email = 4
 *
 * UpdatedDateTime = 5
 */
export enum CompanyCandidateQuerySort {
    CreatedDateTime = 0,
    FirstName = 1,
    LastName = 2,
    Status = 3,
    Email = 4,
    UpdatedDateTime = 5
}
export type CompanyCandidateQuerySortPageAndSortByModel = {
    sortBy?: CompanyCandidateQuerySort;
    /**
     * Ascending = 0 (Default)
     * Descending = 1
     */
    sortOrder?: SortOrder;
    page?: number;
    itemsPerPage?: number;
};
export type SearchCompanyCandidateQueryModel = {
    term?: string | null;
    rating?: number | null;
    states?: Array<CompanyCandidateState> | null;
    pipeline?: number | null;
    noRecruiter?: boolean;
    recruiters?: Array<number> | null;
    teams?: Array<number> | null;
    sources?: Array<number> | null;
    pageAndSortBy?: CompanyCandidateQuerySortPageAndSortByModel | null;
};
export type SearchCompanyCandidateResultModel = {
    pagedAndSortedBy?: CompanyCandidateQuerySortPageAndSortByModel | null;
    result?: Array<CompanyCandidateBaseModel> | null;
    hits?: number;
    totalItems?: number;
};
export class SearchCompanyCandidateService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get company candidates list from search criteria
     * Sample request:
     *
     * POST /v0.1/companies/1/candidates/search
     * {
         * "term": "candidate property value",
         * "rating": 3
         * "status": 0,
         * "sources": [],
         * "noRecruiter": false,
         * "recruiters": [],
         * "states": [0],
         * "pipeline": null,
         * "pageAndSortBy": {
             * "page": 1,
             * "itemsPerPage": 15
             * },
             * "pipelines": []
             * }
             * @param companyId Company Id
             * @param requestBody SearchCompanyCandidateQueryModel
             * @returns SearchCompanyCandidateResultModel All went well
             * @throws ApiError
             */
    searchCompanyCandidate(companyId: number, requestBody?: SearchCompanyCandidateQueryModel): CancelablePromise<SearchCompanyCandidateResultModel>;
}
/**
 *
 *
 * CreatedDateTime = 0
 *
 * FirstName = 1
 *
 * LastName = 2
 *
 * Email = 3
 *
 * UpdatedDateTime = 4
 *
 * CustomerId = 5
 */
export enum CompanyCustomerContactQuerySort {
    CreatedDateTime = 0,
    FirstName = 1,
    LastName = 2,
    Email = 3,
    UpdatedDateTime = 4,
    CustomerId = 5
}
export type CompanyCustomerContactQuerySortPageAndSortByModel = {
    sortBy?: CompanyCustomerContactQuerySort;
    /**
     * Ascending = 0 (Default)
     * Descending = 1
     */
    sortOrder?: SortOrder;
    page?: number;
    itemsPerPage?: number;
};
export type SearchCompanyCustomerContactQueryModel = {
    term?: string | null;
    managers?: Array<number> | null;
    customers?: Array<number> | null;
    tags?: Array<number> | null;
    pageAndSortBy?: CompanyCustomerContactQuerySortPageAndSortByModel | null;
};
export type SearchCompanyCustomerContactResultModel = {
    pagedAndSortedBy?: CompanyCustomerContactQuerySortPageAndSortByModel | null;
    result?: Array<CompanyCustomerContactModel> | null;
    hits?: number;
    totalItems?: number;
};
export class SearchCompanyCustomerContactService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get company customer contacts list from search criteria
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param requestBody SearchCompanyCustomerQueryModel
     * @returns SearchCompanyCustomerContactResultModel All went well
     * @throws ApiError
     */
    searchCompanyCustomerContact(companyId: number, requestBody?: SearchCompanyCustomerContactQueryModel): CancelablePromise<SearchCompanyCustomerContactResultModel>;
}
/**
 *
 *
 * CreatedDateTime = 0
 *
 * Name = 1
 *
 * Description = 2
 *
 * Identification = 3
 *
 * SeoId = 4
 *
 * Status = 5
 *
 * Phone = 6
 *
 * Email = 7
 *
 * Fax = 8
 *
 * Homepage = 9
 *
 * CorporateIdentityNumber = 10
 *
 * VATNumber = 11
 *
 * Intermediator = 12
 *
 * UpdatedDateTime = 13
 *
 * LastTouchDateTime = 14
 */
export enum CompanyCustomerQuerySort {
    CreatedDateTime = 0,
    Name = 1,
    Description = 2,
    Identification = 3,
    SeoId = 4,
    Status = 5,
    Phone = 6,
    Email = 7,
    Fax = 8,
    Homepage = 9,
    CorporateIdentityNumber = 10,
    VATNumber = 11,
    Intermediator = 12,
    UpdatedDateTime = 13,
    LastTouchDateTime = 14
}
export type CompanyCustomerQuerySortPageAndSortByModel = {
    sortBy?: CompanyCustomerQuerySort;
    /**
     * Ascending = 0 (Default)
     * Descending = 1
     */
    sortOrder?: SortOrder;
    page?: number;
    itemsPerPage?: number;
};
/**
 *
 *
 * Contains = 0
 *
 * StartsWith = 1
 *
 * EndsWith = 2
 *
 * Equals = 3
 */
export enum StringComparisonOperator {
    Contains = 0,
    StartsWith = 1,
    EndsWith = 2,
    Equals = 3
}
export type SearchCompanyCustomerQueryModel = {
    name?: string | null;
    nameOperator?: StringComparisonOperator;
    identification?: string | null;
    identificationOperator?: StringComparisonOperator;
    corporateIdentityNumber?: string | null;
    corporateIdentityNumberOperator?: StringComparisonOperator;
    pageAndSortBy?: CompanyCustomerQuerySortPageAndSortByModel | null;
};
export type SearchCompanyCustomerResultModel = {
    pagedAndSortedBy?: CompanyCustomerQuerySortPageAndSortByModel | null;
    result?: Array<CompanyCustomerBaseModel> | null;
    hits?: number;
    totalItems?: number;
};
export class SearchCompanyCustomersService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get company customers list from search criteria
     * Requires access level: CompanyManager. Requires module: Customers.
     * @param companyId Company Id
     * @param requestBody SearchCompanyCustomerQueryModel
     * @returns SearchCompanyCustomerResultModel All went well
     * @throws ApiError
     */
    searchCompanyCustomer(companyId: number, requestBody?: SearchCompanyCustomerQueryModel): CancelablePromise<SearchCompanyCustomerResultModel>;
}
/**
 *
 *
 * CreatedDateTime = 0
 *
 * FirstName = 1
 *
 * LastName = 2
 *
 * Email = 3
 *
 * UpdatedDateTime = 4
 */
export enum CompanyUserQuerySort {
    CreatedDateTime = 0,
    FirstName = 1,
    LastName = 2,
    Email = 3,
    UpdatedDateTime = 4
}
export type CompanyUserQuerySortPageAndSortByModel = {
    sortBy?: CompanyUserQuerySort;
    /**
     * Ascending = 0 (Default)
     * Descending = 1
     */
    sortOrder?: SortOrder;
    page?: number;
    itemsPerPage?: number;
};
export type SearchCompanyUserQueryModel = {
    term?: string | null;
    includeDisconnected?: boolean;
    pageAndSortBy?: CompanyUserQuerySortPageAndSortByModel | null;
};
export type SearchCompanyUserResultModel = {
    pagedAndSortedBy?: CompanyUserQuerySortPageAndSortByModel | null;
    result?: Array<CompanyUserExtendedModel> | null;
    hits?: number;
    totalItems?: number;
};
export class SearchCompanyUserService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get company users list from search criteria
     * @param companyId Company Id
     * @param requestBody SearchCompanyUserQueryModel
     * @returns SearchCompanyUserResultModel All went well
     * @throws ApiError
     */
    searchCompanyUser(companyId: number, requestBody?: SearchCompanyUserQueryModel): CancelablePromise<SearchCompanyUserResultModel>;
}
/**
 *
 *
 * CreatedDateTime = 0
 *
 * Title = 1
 *
 * Identifier = 2
 *
 * CustomerIdentifier = 3
 *
 * SeoId = 4
 *
 * UpdatedDateTime = 5
 *
 * LastTouchDateTime = 6
 */
export enum ProjectQuerySort {
    CreatedDateTime = 0,
    Title = 1,
    Identifier = 2,
    CustomerIdentifier = 3,
    SeoId = 4,
    UpdatedDateTime = 5,
    LastTouchDateTime = 6
}
export type ProjectQuerySortPageAndSortByModel = {
    sortBy?: ProjectQuerySort;
    /**
     * Ascending = 0 (Default)
     * Descending = 1
     */
    sortOrder?: SortOrder;
    page?: number;
    itemsPerPage?: number;
};
export type SearchProjectQueryModel = {
    title?: string | null;
    identification?: string | null;
    customerIdentifier?: string | null;
    corporateIdentityNumber?: string | null;
    customerId?: number | null;
    pageAndSortBy?: ProjectQuerySortPageAndSortByModel | null;
    /**
     * Your Project Pipelines can be retrieved from the GET ProjectPipelines endpoint
     */
    pipelines?: Array<number> | null;
    salesManagers?: Array<number> | null;
    customers?: Array<number> | null;
    intermediators?: Array<number> | null;
    /**
     * Open = 0,
     * Won = 30,
     * Lost = 40,
     * Abandoned = 50,
     * Suspended = 60
     */
    projectStates?: Array<ProjectState> | null;
};
export type SearchProjectsResultModel = {
    pagedAndSortedBy?: ProjectQuerySortPageAndSortByModel | null;
    result?: Array<ProjectBaseModel> | null;
    hits?: number;
    totalItems?: number;
};
export class SearchProjectService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get projects list from search criteria
     * Sample request
     * {
         * "pipelines": [4],
         * "projectStates": [0],
         * "PageAndSortBy": {
             * "SortBy": "0",
             * "SortOrder": "1",
             * "Page": "1",
             * "ItemsPerPage": "15",
             * }
             * }
             * SortBy Parameter can be:
             * CreatedDateTime=0 // Default
             * Title=1
             * Identifier=2
             * CustomerIdentifier=3
             * SeoId=4
             * UpdatedDateTime=6
             * LastTouchDateTime=7
             * @param companyId Company Id
             * @param requestBody SearchCompanyCustomerQueryModel
             * @returns SearchProjectsResultModel All went well
             * @throws ApiError
             */
    searchProject(companyId: number, requestBody?: SearchProjectQueryModel): CancelablePromise<SearchProjectsResultModel>;
}
export type FilterModel = {
    name?: string | null;
    values?: Array<number> | null;
};
export type SearchSkillModel = {
    keywordId?: number | null;
    min?: number | null;
    max?: number | null;
};
export type SearchSkillQueryModel = {
    skills?: Array<SearchSkillModel> | null;
    filters?: Array<FilterModel> | null;
};
export type SkillResultModel = {
    keywordId?: number | null;
    keywordSynonymId?: number | null;
    keywordSynonymName?: string | null;
    masterSynonymId?: number | null;
    masterSynonymName?: string | null;
    level?: number | null;
};
export type CompanyUserSearchSkillModel = {
    companyId?: number;
    companyUserId?: number | null;
    /**
     * @deprecated
     */
    readonly firstname?: string | null;
    firstName?: string | null;
    /**
     * @deprecated
     */
    readonly lastname?: string | null;
    lastName?: string | null;
    title?: string | null;
    seoId?: string | null;
    addressId?: number | null;
    addressDisplayName?: string | null;
    teams?: Array<TeamBaseModel> | null;
    skills?: Array<SkillResultModel> | null;
    status?: CompanyUserStatus | null;
    companyCandidateId?: number | null;
    groups?: Array<CompanySubcontractorGroupBaseModel> | null;
    companyUserType?: CompanyUserType;
};
export type SearchSkillResultModel = {
    query?: SearchSkillQueryModel | null;
    hits?: Array<CompanyUserSearchSkillModel> | null;
};
export class SkillSearchService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Search users by skill keyword id
     * @param companyId Company Id
     * @param requestBody SearchSkillQueryModel
     * @returns SearchSkillResultModel All went well
     * @throws ApiError
     */
    searchSkill(companyId: number, requestBody?: SearchSkillQueryModel): CancelablePromise<SearchSkillResultModel>;
}
export type SkillSearchQueryTermModel = {
    term: string;
    min?: number | null;
    max?: number | null;
    limit?: number | null;
};
export class SkillSearchTermService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Search users with skills by term (string value)
     * @param companyId Company Id
     * @param requestBody SkillSearchQueryTermModel
     * @returns SearchSkillResultModel All went well
     * @throws ApiError
     */
    searchSkillTerm(companyId: number, requestBody?: SkillSearchQueryTermModel): CancelablePromise<SearchSkillResultModel>;
}
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class Cinode {
    readonly absence: AbsenceService;
    readonly absences: AbsencesService;
    readonly absenceType: AbsenceTypeService;
    readonly availability: AvailabilityService;
    readonly company: CompanyService;
    readonly companyAddressUsers: CompanyAddressUsersService;
    readonly companyCandidate: CompanyCandidateService;
    readonly companyCandidateEvent: CompanyCandidateEventService;
    readonly companyCandidateEventMeeting: CompanyCandidateEventMeetingService;
    readonly companyCandidateEventMeetings: CompanyCandidateEventMeetingsService;
    readonly companyCandidateEventNote: CompanyCandidateEventNoteService;
    readonly companyCandidateEventNotes: CompanyCandidateEventNotesService;
    readonly companyCandidateEvents: CompanyCandidateEventsService;
    readonly companyCandidateEventTask: CompanyCandidateEventTaskService;
    readonly companyCandidateEventTasks: CompanyCandidateEventTasksService;
    readonly companyCandidateFileAttachment: CompanyCandidateFileAttachmentService;
    readonly companyCandidateFileAttachments: CompanyCandidateFileAttachmentsService;
    readonly companyCandidatePipelines: CompanyCandidatePipelinesService;
    readonly companyCandidates: CompanyCandidatesService;
    readonly companyCandidateSkills: CompanyCandidateSkillsService;
    readonly companyCandidateUriAttachment: CompanyCandidateUriAttachmentService;
    readonly companyCandidateUriAttachments: CompanyCandidateUriAttachmentsService;
    readonly companyCandidateUser: CompanyCandidateUserService;
    readonly companyCapabilities: CompanyCapabilitiesService;
    readonly companyCurrencies: CompanyCurrenciesService;
    readonly companyCustomer: CompanyCustomerService;
    readonly companyCustomerAddress: CompanyCustomerAddressService;
    readonly companyCustomerContact: CompanyCustomerContactService;
    readonly companyCustomerContacts: CompanyCustomerContactsService;
    readonly companyCustomerContactTags: CompanyCustomerContactTagsService;
    readonly companyCustomerEvent: CompanyCustomerEventService;
    readonly companyCustomerEvents: CompanyCustomerEventsService;
    readonly companyCustomerEventsMeeting: CompanyCustomerEventsMeetingService;
    readonly companyCustomerEventsMeetings: CompanyCustomerEventsMeetingsService;
    readonly companyCustomerEventsNote: CompanyCustomerEventsNoteService;
    readonly companyCustomerEventsNotes: CompanyCustomerEventsNotesService;
    readonly companyCustomerEventsTask: CompanyCustomerEventsTaskService;
    readonly companyCustomerEventsTasks: CompanyCustomerEventsTasksService;
    readonly companyCustomerFileAttachment: CompanyCustomerFileAttachmentService;
    readonly companyCustomerManagers: CompanyCustomerManagersService;
    readonly companyCustomers: CompanyCustomersService;
    readonly companyCustomersExtended: CompanyCustomersExtendedService;
    readonly companyCustomerTags: CompanyCustomerTagsService;
    readonly companyImage: CompanyImageService;
    readonly companyImages: CompanyImagesService;
    readonly companyManagers: CompanyManagersService;
    readonly companyProfiles: CompanyProfilesService;
    readonly companyProjectFileAttachment: CompanyProjectFileAttachmentService;
    readonly companyRecruitmentManagers: CompanyRecruitmentManagersService;
    readonly companyResumes: CompanyResumesService;
    readonly companySubcontractorGroup: CompanySubcontractorGroupService;
    readonly companySubcontractorGroupMembers: CompanySubcontractorGroupMembersService;
    readonly companySubcontractorGroups: CompanySubcontractorGroupsService;
    readonly companyTag: CompanyTagService;
    readonly companyTags: CompanyTagsService;
    readonly companyTeam: CompanyTeamService;
    readonly companyTeamManagers: CompanyTeamManagersService;
    readonly companyTeamMember: CompanyTeamMemberService;
    readonly companyTeamMembers: CompanyTeamMembersService;
    readonly companyTeams: CompanyTeamsService;
    readonly companyTeamUsers: CompanyTeamUsersService;
    readonly companyUser: CompanyUserService;
    readonly companyUserConvert: CompanyUserConvertService;
    readonly companyUserEmployeeEvent: CompanyUserEmployeeEventService;
    readonly companyUserEmployeeEventMeeting: CompanyUserEmployeeEventMeetingService;
    readonly companyUserEmployeeEventNote: CompanyUserEmployeeEventNoteService;
    readonly companyUserEmployeeEvents: CompanyUserEmployeeEventsService;
    readonly companyUserEmployeeEventsMeetings: CompanyUserEmployeeEventsMeetingsService;
    readonly companyUserEmployeeEventsNotes: CompanyUserEmployeeEventsNotesService;
    readonly companyUserEmployeeEventsTasks: CompanyUserEmployeeEventsTasksService;
    readonly companyUserEmployeeEventTask: CompanyUserEmployeeEventTaskService;
    readonly companyUserFull: CompanyUserFullService;
    readonly companyUserPermissions: CompanyUserPermissionsService;
    readonly companyUserProfile: CompanyUserProfileService;
    readonly companyUserProfileCommitment: CompanyUserProfileCommitmentService;
    readonly companyUserProfileEducation: CompanyUserProfileEducationService;
    readonly companyUserProfileEmployer: CompanyUserProfileEmployerService;
    readonly companyUserProfileExtSkill: CompanyUserProfileExtSkillService;
    readonly companyUserProfileImport: CompanyUserProfileImportService;
    readonly companyUserProfileLanguage: CompanyUserProfileLanguageService;
    readonly companyUserProfileLanguages: CompanyUserProfileLanguagesService;
    readonly companyUserProfilePresentation: CompanyUserProfilePresentationService;
    readonly companyUserProfileReference: CompanyUserProfileReferenceService;
    readonly companyUserProfiles: CompanyUserProfilesService;
    readonly companyUserProfileSkill: CompanyUserProfileSkillService;
    readonly companyUserProfileTraining: CompanyUserProfileTrainingService;
    readonly companyUserProfileWorkExperience: CompanyUserProfileWorkExperienceService;
    readonly companyUserResume: CompanyUserResumeService;
    readonly companyUserResumes: CompanyUserResumesService;
    readonly companyUserRoles: CompanyUserRolesService;
    readonly companyUsers: CompanyUsersService;
    readonly companyUsersExtended: CompanyUsersExtendedService;
    readonly companyUserSkill: CompanyUserSkillService;
    readonly companyUserSkills: CompanyUserSkillsService;
    readonly companyUserSubcontractor: CompanyUserSubcontractorService;
    readonly companyUserSubcontractorEvent: CompanyUserSubcontractorEventService;
    readonly companyUserSubcontractorEventMeeting: CompanyUserSubcontractorEventMeetingService;
    readonly companyUserSubcontractorEventNote: CompanyUserSubcontractorEventNoteService;
    readonly companyUserSubcontractorEvents: CompanyUserSubcontractorEventsService;
    readonly companyUserSubcontractorEventsMeetings: CompanyUserSubcontractorEventsMeetingsService;
    readonly companyUserSubcontractorEventsNotes: CompanyUserSubcontractorEventsNotesService;
    readonly companyUserSubcontractorEventsTasks: CompanyUserSubcontractorEventsTasksService;
    readonly companyUserSubcontractorEventTask: CompanyUserSubcontractorEventTaskService;
    readonly companyUserSubcontractorFileAttachment: CompanyUserSubcontractorFileAttachmentService;
    readonly companyUserSubcontractorFileAttachments: CompanyUserSubcontractorFileAttachmentsService;
    readonly companyUserSubcontractorRoles: CompanyUserSubcontractorRolesService;
    readonly companyUserSubcontractors: CompanyUserSubcontractorsService;
    readonly companyUserTags: CompanyUserTagsService;
    readonly companyUserTeams: CompanyUserTeamsService;
    readonly companyWebhook: CompanyWebhookService;
    readonly companyWebhooks: CompanyWebhooksService;
    readonly dynamicCompanyUserResume: DynamicCompanyUserResumeService;
    readonly keywordSearch: KeywordSearchService;
    readonly mentions: MentionsService;
    readonly partners: PartnersService;
    readonly project: ProjectService;
    readonly projectAssignment: ProjectAssignmentService;
    readonly projectAssignmentMember: ProjectAssignmentMemberService;
    readonly projectAssignments: ProjectAssignmentsService;
    readonly projectAssignmentSkills: ProjectAssignmentSkillsService;
    readonly projectEvent: ProjectEventService;
    readonly projectEvents: ProjectEventsService;
    readonly projectEventsMeeting: ProjectEventsMeetingService;
    readonly projectEventsMeetings: ProjectEventsMeetingsService;
    readonly projectEventsNote: ProjectEventsNoteService;
    readonly projectEventsNotes: ProjectEventsNotesService;
    readonly projectEventsTask: ProjectEventsTaskService;
    readonly projectEventsTasks: ProjectEventsTasksService;
    readonly projectPipelines: ProjectPipelinesService;
    readonly projectReference: ProjectReferenceService;
    readonly projectReferences: ProjectReferencesService;
    readonly projects: ProjectsService;
    readonly projectTags: ProjectTagsService;
    readonly recruitmentSources: RecruitmentSourcesService;
    readonly searchCompanyCandidate: SearchCompanyCandidateService;
    readonly searchCompanyCustomerContact: SearchCompanyCustomerContactService;
    readonly searchCompanyCustomers: SearchCompanyCustomersService;
    readonly searchCompanyUser: SearchCompanyUserService;
    readonly searchProject: SearchProjectService;
    readonly skillSearch: SkillSearchService;
    readonly skillSearchTerm: SkillSearchTermService;
    readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest?: HttpRequestConstructor);
}
export type ErrorModel = {
    /**
     * CorrelationId
     */
    correlationId?: string | null;
    /**
     * Severity of error
     */
    status?: string | null;
    /**
     * Error description in plain text
     */
    description?: string | null;
    /**
     * Cinode specific error code
     */
    code?: number | null;
    /**
     * Url to help page containing more information
     */
    moreInfo?: string | null;
};
export type ICompanyCandidatePatchDocument = {
    pipelineId?: number | null;
    pipelineStageId?: number | null;
    recruitmentManagerId?: number | null;
    state?: CompanyCandidateState | null;
    availableFromDate?: string | null;
    campaignCode?: string | null;
};
export type ICompanyUserEmployeePatchDocument = {
    status?: CompanyUserStatus;
    employmentStartDate?: string | null;
    employmentEndDate?: string | null;
    employmentNumber?: string | null;
    invoicingGoal?: number | null;
    mobility?: number | null;
    availabilityPercent?: number | null;
    availableFromDate?: string | null;
    title?: string | null;
    email?: string | null;
    taxTable?: string | null;
    baseSalary?: number | null;
    provision?: number | null;
    hourlyTargetRate?: number | null;
    selfCost?: number | null;
    locationId?: number | null;
    defaultCurrencyId?: number | null;
    displayCurrencyId?: number | null;
    firstname?: string | null;
    lastname?: string | null;
    dateOfBirth?: string | null;
    gender?: UserGender;
    companyCalendarId?: number | null;
    timezoneId?: string | null;
    phone?: string | null;
    desiredAssignment?: string | null;
    internalIdentifier?: string | null;
    twitter?: string | null;
    linkedIn?: string | null;
    homepage?: string | null;
    blog?: string | null;
    gitHub?: string | null;
};
export type ValidationModel = {
    /**
     * Collection of validation errors
     */
    errors?: Record<string, Array<string> | null> | null;
};

//# sourceMappingURL=index.d.ts.map
