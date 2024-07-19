import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import CustomHeader from "../../molecules/Header";
import { CustomGrid, CustomInput } from "../AddBooks/styles";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Text from "../../atoms/Typography";
import CustomButton from "../../atoms/Buttons";
import { dataprops } from "../../../utils/interfaces";
import { v4 as uuidv4 } from 'uuid';
import {
    BOOKS_API_URL,
    CONFIRM_DELETE_MSG,
    BOOK_NOT_DELETED_MSG,
    DELETE_BOOK_ERROR_MSG,
    TITLE_LABEL,
    AUTHOR_LABEL,
    GENRE_LABEL,
    TOTAL_COPIES_LABEL,
    DELETE_BUTTON_LABEL,
    ADD_BOOK_ROUTE,
    BOOKS_TABLE_ROUTE,
    DELETE_BOOK_TITLE
} from "../../../utils/constants";

const DeleteBook: React.FC = () => {
    const { id } = useParams();
    const [books, updateBooks] = useState<dataprops>({
        id: "",
        title: "",
        author: "",
        genre: "",
        totalCopies: 0,
    });

    useEffect(() => {
        async function getNewBookData() {
            try {
                const newdata = await axios.get(`${BOOKS_API_URL}/${id}`);
                updateBooks(newdata.data);
            } catch (error) {
                console.error(error);
            }
        }
        getNewBookData();
    }, [id]);

    const navigate = useNavigate();

    const deleteBookData = async () => {
        try {
            const flag = window.confirm(CONFIRM_DELETE_MSG);
            if (flag) {
                await axios.delete(`${BOOKS_API_URL}/${id}`);
                navigate(BOOKS_TABLE_ROUTE);
            } else {
                alert(BOOK_NOT_DELETED_MSG);
            }
        } catch (error) {
            console.error(DELETE_BOOK_ERROR_MSG, error);
            alert(DELETE_BOOK_ERROR_MSG);
        }
    };

    const addBookData = () => {
        navigate(ADD_BOOK_ROUTE);
    };

    return (
        <CustomGrid>
            <Grid item>
                <CustomHeader headerTitle={ DELETE_BOOK_TITLE} handleAddBooksData={addBookData} />
            </Grid>
            <Grid item>
                <Grid container>
                    <Grid item xs={6}>
                        <Text variants="subtitle1" text={TITLE_LABEL} />
                    </Grid>
                    <Grid item xs={6}>
                        <Text variants="subtitle1" text={books.title} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <Text variants="subtitle1" text={AUTHOR_LABEL} />
                    </Grid>
                    <Grid item xs={6}>
                        <Text variants="subtitle1" text={books.author} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <Text variants="subtitle1" text={GENRE_LABEL} />
                    </Grid>
                    <Grid item xs={6}>
                        <Text variants="subtitle1" text={books.genre} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <Text variants="subtitle1" text={TOTAL_COPIES_LABEL} />
                    </Grid>
                    <Grid item xs={6}>
                        <Text variants="subtitle1" text={books.totalCopies.toString()} />
                    </Grid>
                </Grid>
                <Grid container sx={{ marginTop: '1rem' }}>
                    <Grid item xs={4}>
                        <CustomButton label={DELETE_BUTTON_LABEL} handleClick={deleteBookData} variants="contained" />
                    </Grid>
                </Grid>
            </Grid>
        </CustomGrid>
    );
}

export default DeleteBook;
