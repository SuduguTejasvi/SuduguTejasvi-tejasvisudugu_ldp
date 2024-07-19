import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import CustomHeader from "../../molecules/Header";
import { CustomGrid, CustomInput } from "../AddBooks/styles";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Text from "../../atoms/Typography";
import CustomButton from "../../atoms/Buttons";
import { dataprops } from "../../../utils/interfaces";
import { v4 as uuidv4 } from 'uuid'; 
import { booksprops } from "../../../utils/interfaces";
import {
    BOOKS_API_URL,
    TITLE_LABEL,
    AUTHOR_LABEL,
    GENRE_LABEL,
    TOTAL_COPIES_LABEL,
    UPDATE_BUTTON_LABEL,
    ADD_BOOK_ROUTE,
    BOOKS_TABLE_ROUTE,
    UPDATE_BOOKS_TITLE,
    FILL_ALL_FIELDS_MESSAGE,
    ENTER_VALID_COPIES_MESSAGE,
    FETCH_BOOKS_ERROR_MSG,
    UPDATE_BOOK_ERROR_MSG
} from "../../../utils/constants";

const UpdateBook: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<booksprops>({
        title: "",
        author: "",
        genre: "",
        totalCopies: 0
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBookData = async () => {
            try {
                const response = await axios.get<booksprops>(`${BOOKS_API_URL}/${id}`);
                const { title, author, genre, totalCopies } = response.data;
                setBook({ title, author, genre, totalCopies });
            } catch (error) {
                console.error(FETCH_BOOKS_ERROR_MSG, error);
            }
        };
        fetchBookData();
    }, [id]);
   
    const updateBooksData = async () => {
        try {
            if (!book.title || !book.author || !book.genre || book.totalCopies === undefined) {
                alert(FILL_ALL_FIELDS_MESSAGE);
                return;
            }
            if (book.totalCopies <= 0) {
                alert(ENTER_VALID_COPIES_MESSAGE);
                return;
            }
            await axios.put(`${BOOKS_API_URL}/${id}`, book);
            navigate(BOOKS_TABLE_ROUTE);
        } catch (error) {
            console.error(UPDATE_BOOK_ERROR_MSG, error);
        }
    };

    const updateBookDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBook(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const addBookData = () => {
        navigate(ADD_BOOK_ROUTE);
    }

    return (
        <CustomGrid>
            <Grid item>
                <CustomHeader headerTitle={UPDATE_BOOKS_TITLE} handleAddBooksData={addBookData} />
            </Grid>
            <Grid item>
                <Text variants="subtitle1" text={TITLE_LABEL} />
                <CustomInput variant="outlined" type="text" name="title" value={book.title} onChange={updateBookDetails} />
                <Text variants="subtitle1" text={AUTHOR_LABEL} />
                <CustomInput variant="outlined" type="text" name="author" value={book.author} onChange={updateBookDetails} />
                <Text variants="subtitle1" text={GENRE_LABEL} />
                <CustomInput variant="outlined" type="text" name="genre" value={book.genre} onChange={updateBookDetails} />
                <Text variants="subtitle1" text={TOTAL_COPIES_LABEL} />
                <CustomInput variant="outlined" type="number" name="totalCopies" value={book.totalCopies} onChange={updateBookDetails} />
                <Grid container sx={{ marginTop: '1rem' }}>
                    <Grid item xs={4}>
                        <CustomButton label={UPDATE_BUTTON_LABEL} handleClick={updateBooksData} variants="contained" />
                    </Grid>
                </Grid>
            </Grid>
        </CustomGrid>
    );
};

export default UpdateBook;
