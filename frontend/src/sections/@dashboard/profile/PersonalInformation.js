import { Stack } from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import BasicInformation from "./account/BasicInformation";
import BusinessInformation from "./account/BusinessInformation";
import InvestorInformation from "./account/InvestorInformation";

export default function PersonalInformation() {
    const { user, isAuthenticated } = useAuth();
    const dy = Date.now() % 3;
    return (
        <Stack>
            {dy === 0 && <BasicInformation />}
            {dy === 1 && <BusinessInformation />}
            {dy === 2 && <InvestorInformation />}

        </Stack>
    )
}