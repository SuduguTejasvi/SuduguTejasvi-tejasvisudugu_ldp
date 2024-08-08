import React, { useState } from "react";
import { Grid } from "@mui/material";
import CustomHeader from "../../molecules/Header";
import { CustomGrid, CustomInput } from "./styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Text from "../../atoms/Typography";
import CustomButton from "../../atoms/Buttons";
import { dataprops } from "../../../utils/interfaces";
import { v4 as uuidv4 } from 'uuid';
import {
    ADD_BOOKS_TITLE,
    TITLE_LABEL,
    AUTHOR_LABEL,
    GENRE_LABEL,
    TOTAL_COPIES_LABEL,
    ADD_BUTTON_LABEL,
    BACK_BUTTON_LABEL,
    ALL_FIELDS_REQUIRED_MSG,
    TOTAL_COPIES_GREATER_THAN_ZERO_MSG,
    SUCCESSFULLY_ADDED_MSG,
    FAILED_TO_ADD_MSG,
    BOOKS_API_URL,
    BOOKS_TABLE_ROUTE
} from "../../../utils/constants";

const AddBooks: React.FC = () => {
    const [book, updateBook] = useState<dataprops>({
        id: uuidv4(),
        title: "",
        author: "",
        genre: "",
        totalCopies: 0,
    });

    const navigate = useNavigate();

    const redirectToBooksTable = () => {
        navigate(BOOKS_TABLE_ROUTE);
    };

    const handleUpdateBookData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        updateBook({
            ...book,
            [name]: name === "totalCopies" ? parseInt(value) : value,
        });
    };

    const handleSubmitBookForm = async () => {
        try {
            const { title, author, genre, totalCopies } = book;

            if (!title || !author || !genre || totalCopies === undefined) {
                alert(ALL_FIELDS_REQUIRED_MSG);
                return;
            }

            if (totalCopies <= 0) {
                alert(TOTAL_COPIES_GREATER_THAN_ZERO_MSG);
                return;
            }

            const response = await axios.post(BOOKS_API_URL, book);
            alert(SUCCESSFULLY_ADDED_MSG);
            navigate(BOOKS_TABLE_ROUTE);
        } catch (error) {
            console.error("Error adding book:", error);
            alert(FAILED_TO_ADD_MSG);
        }
    };

    return (
        <CustomGrid>
            <Grid item>
                <CustomHeader headerTitle={ADD_BOOKS_TITLE} handleAddBooksData={handleSubmitBookForm} />
            </Grid>
            <Grid item>
                <Text variants="subtitle1" text={TITLE_LABEL} />
                <CustomInput
                    name="title"
                    variant="outlined"
                    type="text"
                    value={book.title}
                    onChange={handleUpdateBookData}
                />
                <Text variants="subtitle1" text={AUTHOR_LABEL} />
                <CustomInput
                    name="author"
                    variant="outlined"
                    type="text"
                    value={book.author}
                    onChange={handleUpdateBookData}
                />
                <Text variants="subtitle1" text={GENRE_LABEL} />
                <CustomInput
                    name="genre"
                    variant="outlined"
                    type="text"
                    value={book.genre}
                    onChange={handleUpdateBookData}
                />
                <Text variants="subtitle1" text={TOTAL_COPIES_LABEL} />
                <CustomInput
                    name="totalCopies"
                    variant="outlined"
                    type="number"
                    value={book.totalCopies}
                    onChange={handleUpdateBookData}
                />
                <Grid container sx={{ marginTop: '1rem' }}>
                    <Grid item xs={4}>
                        <CustomButton label={ADD_BUTTON_LABEL} handleClick={handleSubmitBookForm} variants="contained" />
                    </Grid>
                    <Grid item xs={4}>
                        <CustomButton label={BACK_BUTTON_LABEL} handleClick={redirectToBooksTable} variants="contained" />
                    </Grid>
                </Grid>
            </Grid>
        </CustomGrid>
    );
}

export default AddBooks;
