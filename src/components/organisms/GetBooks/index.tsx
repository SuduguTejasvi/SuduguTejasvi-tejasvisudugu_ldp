import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import CustomHeader from "../../molecules/Header";
import { CustomGrid } from "../AddBooks/styles";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Text from "../../atoms/Typography";
import CustomButton from "../../atoms/Buttons";
import { dataprops } from "../../../utils/interfaces";
import {
    BOOKS_API_URL,
    TITLE_LABEL,
    AUTHOR_LABEL,
    GENRE_LABEL,
    TOTAL_COPIES_LABEL,
    BACK_BUTTON_LABEL,
    ADD_BOOK_ROUTE,
    BOOKS_TABLE_ROUTE,
    GET_BOOKS_TITLE
} from "../../../utils/constants";

const GetBook: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const navigateToBooksTable = () => {
        navigate(BOOKS_TABLE_ROUTE);
    };

    const navigateToAddBook = () => {
        navigate(ADD_BOOK_ROUTE);
    };

    const [book, updateBook] = useState<dataprops>({
        id: "",
        title: "",
        author: "",
        genre: "",
        totalCopies: 0,
    });

    useEffect(() => {
        async function fetchBookData() {
            try {
                const response = await axios.get(`${BOOKS_API_URL}/${id}`);
                updateBook(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchBookData();
    }, [id]);

    return (
        <CustomGrid>
            <Grid item>
                <CustomHeader headerTitle={GET_BOOKS_TITLE} handleAddBooksData={navigateToAddBook} />
            </Grid>
            <Grid item>
                <Grid container>
                    <Grid item xs={6}>
                        <Text variants="subtitle1" text={TITLE_LABEL} />
                    </Grid>
                    <Grid item xs={6}>
                        <Text variants="subtitle1" text={book.title} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <Text variants="subtitle1" text={AUTHOR_LABEL} />
                    </Grid>
                    <Grid item xs={6}>
                        <Text variants="subtitle1" text={book.author} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <Text variants="subtitle1" text={GENRE_LABEL} />
                    </Grid>
                    <Grid item xs={6}>
                        <Text variants="subtitle1" text={book.genre} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <Text variants="subtitle1" text={TOTAL_COPIES_LABEL} />
                    </Grid>
                    <Grid item xs={6}>
                        <Text variants="subtitle1" text={book.totalCopies.toString()} />
                    </Grid>
                </Grid>
                <Grid container sx={{ marginTop: '1rem' }}>
                    <Grid item xs={6}>
                        <CustomButton label={BACK_BUTTON_LABEL} handleClick={navigateToBooksTable} variants="contained" />
                    </Grid>
                </Grid>
            </Grid>
        </CustomGrid>
    );
}

export default GetBook;
