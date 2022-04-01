import Resolver from '@forge/resolver';
import {properties} from "@forge/api";
import {
    GetUserInformationResponse,
    RandomUserInfo,
    USER_INFO_PROPERTY_KEY
} from "./models";

const resolver = new Resolver();

resolver.define('getUserInformation', async (req): Promise<GetUserInformationResponse> => {
    const issueKey = req.context.extension.issue.key;

    const userInfo: RandomUserInfo | undefined = await properties.onJiraIssue(issueKey).get(USER_INFO_PROPERTY_KEY);

    if (!userInfo) {
        return {isPresent: false}
    }

    return {isPresent: true, user: userInfo} ;
});

export const handler = resolver.getDefinitions();
