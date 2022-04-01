export const SETTINGS_STORAGE_KEY = "app-settings"
export const USER_INFO_PROPERTY_KEY = "user-info"

export interface SettingsStorage {
    gender: "male" | "female" | "random";
}

export interface CreatedIssueEvent {
    issue: Issue,
    atlassianId: string;
    associatedUsers: AssociatedUsers;
}

interface Issue {
    id: string;
    key: string;
    fields: {
        summary?: string;
        issueType?: any;
        creator?: any;
        created?: string;
        project?: any;
        reporter?: User;
        assignee?: User | null;
        updated?: string;
        status?: any;
    };
}

interface AssociatedUsers {
    associatedUsers: User[];
}

interface User {
    accountId: string;
}

export interface RandomUserResponse {
    results: RandomUserInfo[];
}

export interface RandomUserInfo {
    "gender": string,
    "name": {
        "title": string
        "first": string
        "last": string
    },
    "location": {
        "street": {
            "number": number
            "name": string
        },
        "city": string,
        "state": string,
        "country": string,
        "postcode": number
        "coordinates": {
            "latitude": string,
            "longitude": string
        },
        "timezone": {
            "offset": string,
            "description": string
        }
    },
    "email": string,
    "login": {
        "uuid": string
        "username": string
        "password": string
        "salt": string
        "md5": string
        "sha1": string
        "sha256": string
    },
    "dob": {
        "date": string
        "age": number
    },
    "registered": {
        "date": string
        "age": number
    },
    "phone": string
    "cell": string
    "id": {
        "name": string
        "value": string
    },
    "picture": {
        "large": string
        "medium": string
        "thumbnail": string
    },
    "nat": string
}

export interface IssueProperty<T> {
    key: string;
    value: T
}

export interface GetUserInformationResponse {
    isPresent: boolean;
    user?: RandomUserInfo;
}