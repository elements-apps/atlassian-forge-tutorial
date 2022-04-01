import ForgeUI, {AdminPage, render, Text, Form, RadioGroup, Radio, useState, SectionMessage, Code, Strong } from '@forge/ui';
import {storage} from '@forge/api'
import {SETTINGS_STORAGE_KEY, SettingsStorage} from "./models";

const App = () => {
    const [formState, setFormState] = useState<SettingsStorage>(async () => storage.get(SETTINGS_STORAGE_KEY));
    const [saved, setSaved] = useState<boolean>(false);

    const onSubmit = async (formData: SettingsStorage) => {
        await storage.set(SETTINGS_STORAGE_KEY, formData)
        setFormState(formData);
        setSaved(true)
    };

    return (
        <AdminPage>
            {saved &&
            <SectionMessage title={"Saved!"} appearance={"confirmation"}>
                <Text>Setting are now saved</Text>
            </SectionMessage>}

            <Form onSubmit={onSubmit}>
                <RadioGroup name="gender" label="User gender to generate">
                    <Radio defaultChecked={formState ? formState.gender === "random" : true} label="Random" value="random"/>
                    <Radio defaultChecked={formState?.gender === "male"} label="Male" value="male"/>
                    <Radio defaultChecked={formState?.gender === "female"} label="Female" value="female"/>
                </RadioGroup>
            </Form>

            <Text>Forge Storage content for key <Strong>'{SETTINGS_STORAGE_KEY}'</Strong></Text>
            <Code text={formState ? JSON.stringify(formState, null, 4) : "Nothing in the storage at this moment"} />

        </AdminPage>
    );
};

export const run = render(
    <App/>
);