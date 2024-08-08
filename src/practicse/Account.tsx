import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

interface User {
    name: string;
    phoneno: string;
    amount: number;
}

interface InitialStateProps {
    user: User;
}

const UserAccount: React.FC = () => {
    const data = useSelector((state: InitialStateProps) => state.user);

    return (
        <>
            <Typography variant="h6">Account Details</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} container>
                    <Grid item xs={6}><Typography variant="subtitle1">UserName</Typography></Grid>
                    <Grid item xs={6}><Typography variant="subtitle1">{data.name}</Typography></Grid>
                </Grid>
                <Grid item xs={12} container>
                    <Grid item xs={6}><Typography variant="subtitle1">Mobile no</Typography></Grid>
                    <Grid item xs={6}><Typography variant="subtitle1">{data.phoneno}</Typography></Grid>
                </Grid>
                <Grid item xs={12} container>
                    <Grid item xs={6}><Typography variant="subtitle1">Amount</Typography></Grid>
                    <Grid item xs={6}><Typography variant="subtitle1">{data.amount}</Typography></Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default UserAccount;
