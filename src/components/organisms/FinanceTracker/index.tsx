import React, { useState, useEffect } from "react";
import { CustomBox, CustomGrid } from "../Home/styles";
import { Typography, Grid } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addMoney, deductMoney } from "../../../financestore";
import CustomTypography from "../../atoms/Typography";
import InputGroup from "../../molecules/InputGroup";
import CustomButton from "../../atoms/Button";

const FinanceTracker: React.FC = () => {
    interface Finance {
        money: number,
    }

    interface MoneyProps {
        finance: Finance
    }

    const { user, logout } = useAuth0();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const money = useSelector((state: MoneyProps) => state.finance.money);

    const [incomes, setIncomes] = useState<number>(0);
    const [expenses, setExpenses] = useState<number>(0);

    const [transactionType, setTransactionType] = useState("");
    const [amount, setAmount] = useState(0);

    const getTotalIncome = () => incomes;

    const getTotalExpenses = () => expenses;

    const handleAddTransaction = () => {
        if (transactionType === "income") {
            dispatch(addMoney(amount));
            setIncomes(incomes + amount);
        } else if (transactionType === "expense") {
            if (expenses + amount <= incomes) {
                dispatch(deductMoney(amount));
                setExpenses(expenses + amount);
            } else {
                alert("You don't have enough money to make this transaction");
            }
        }
        setTransactionType("");
        setAmount(0);
    };

    useEffect(() => {
        if (user && !money) {
            navigate("/dashboard");
        }
    }, [user, money, navigate]);

    return (
        <CustomBox>
            <Grid container justifyContent="center" alignItems="center" sx={{ color: "black" }} spacing="5px">
                <Grid item xs={12}>
                    <CustomTypography variants="h6" text={`Welcome, ${user?.name}`} />
                </Grid>
                <Grid xs={12} container direction="column">
                    <Grid item>
                        <CustomTypography variants="subtitle1" text="Finance Tracker" />
                    </Grid>
                    <Grid item>
                        <CustomTypography variants="subtitle1" text={`Your Balance Rs-${money}`} />
                    </Grid>
                </Grid>
                <Grid xs={12} container direction="row">
                    <Grid container xs={6} sx={{ backgroundColor: "#b4ea9e", padding: "5px" }} direction="column">
                        <Grid item>
                            <CustomTypography variants="subtitle1" text="Income" />
                        </Grid>
                        <Grid item>
                            <CustomTypography variants="subtitle1" text={`Rs-${getTotalIncome()}`} />
                        </Grid>
                    </Grid>
                    <Grid container xs={6} sx={{ backgroundColor: "#fe9292", padding: "5px" }} direction="column">
                        <Grid item>
                            <CustomTypography variants="subtitle1" text="Expenses" />
                        </Grid>
                        <Grid item>
                            <CustomTypography variants="subtitle1" text={`Rs-${getTotalExpenses()}`} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle1">Add New Transaction</Typography>
                </Grid>
                <InputGroup inputLabel="Expense/Income" inputChange={(e) => setTransactionType(e.target.value.toLowerCase())} value={transactionType} />
                <InputGroup inputLabel="Add Amount" inputChange={(e) => setAmount(Number(e.target.value))} value={amount} />
                <Grid container xs={12} sx={{ marginTop: "8px" }}>
                    <Grid item xs={6}>
                        <CustomButton variants="contained" handleButtonClick={handleAddTransaction} label="Add New Transaction" />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomButton variants="contained" handleButtonClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} label="Logout" />
                    </Grid>
                </Grid>
            </Grid>
        </CustomBox>
    );
};

export default FinanceTracker;
