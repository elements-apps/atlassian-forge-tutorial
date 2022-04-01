import {
    CreatedIssueEvent,
    SETTINGS_STORAGE_KEY,
    USER_INFO_PROPERTY_KEY,
    SettingsStorage,
    RandomUserResponse
} from "./models";
import api, {storage, fetch, route, properties} from "@forge/api";

export async function run(event: CreatedIssueEvent, context: any) {
    // retrieve settings
    const settings: SettingsStorage = await storage.get(SETTINGS_STORAGE_KEY) ?? buildDefaultSettings();

    const issueKey = event.issue.key;
    const gender = settings.gender === "random" ? '' : `gender=${settings.gender}`;
    const randomUserUrl = `https://randomuser.me/api/?${gender}`

    console.info("Using gender type", settings.gender)
    console.info("Calling", randomUserUrl)

    // Generate user information
    const userRequest = await fetch(randomUserUrl);
    if (!userRequest.ok) {
        console.error(`Error while retrieving usr info: ${userRequest.status} - ${await userRequest.text()}`)
        return;
    }

    const userInfo = await userRequest.json() as RandomUserResponse;

    try {
        await properties.onJiraIssue(issueKey).set(USER_INFO_PROPERTY_KEY, userInfo.results[0])
    } catch (error) {
        console.error(`Error while adding property to issue ${issueKey}: ${error}`)
        return;
    }

    console.info(`URL added to issue ${issueKey}`)
}

function buildDefaultSettings(): SettingsStorage {
    return {
        gender: "random"
    }
}