import React, { useEffect, useState } from "react";
import { IconButton, Grid, Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import DataActions from "../../molecules/Actions";
import CustomHeader from "../../molecules/Header";
import { useNavigate } from "react-router-dom";
import { dataprops } from '../../../utils/interfaces';
import { StyledTableContainer } from './styles';
import Text from "../../atoms/Typography";
import {
    BOOKS_API_URL,
    CONFIRM_DELETE_MSG,
    BOOK_NOT_DELETED_MSG,
    FETCH_BOOKS_ERROR_MSG,
    DELETE_BOOK_ERROR_MSG,
    DELETE_BOOK_SUCCESS_MSG,
    HEADER_TITLE,
    S_NO_LABEL,
    TITLE_LABEL,
    AUTHOR_LABEL,
    GENRE_LABEL,
    TOTAL_COPIES_LABEL,
    ACTIONS_LABEL,
    BOOKS_TABLE_ROUTE,
    ADD_BOOK_ROUTE
} from "../../../utils/constants";

const BooksTable: React.FC = () => {
    const navigate = useNavigate();
    const [data, setData] = useState<dataprops[]>([]);

    useEffect(() => {
        async function getBooks() {
            try {
                const response = await axios.get(BOOKS_API_URL);
                setData(response.data);
            } catch (error) {
                console.error(FETCH_BOOKS_ERROR_MSG, error);
            }
        }
        getBooks();
    }, []);

    const getBookData = (id: string) => {
        navigate(`/get/${id}`);
    }

    const updateBookData = (id: string) => {
        navigate(`/update/${id}`);
    }

    const deleteBookData = async (id: string) => {
        try {
            const flag = window.confirm(CONFIRM_DELETE_MSG);
            if (flag) {
                await axios.delete(`${BOOKS_API_URL}/${id}`);
                alert(DELETE_BOOK_SUCCESS_MSG);
            } else {
                alert(BOOK_NOT_DELETED_MSG);
            }
            navigate(BOOKS_TABLE_ROUTE);
        } catch (error) {
            console.error(DELETE_BOOK_ERROR_MSG, error);
            alert(DELETE_BOOK_ERROR_MSG);
        }
    }

    const addBookData = () => {
        navigate(ADD_BOOK_ROUTE);
    }

    return (
        <Box sx={{ marginTop: '1rem' }}>
            <Grid container>
                <Grid item xs={12}>
                    <CustomHeader headerTitle={HEADER_TITLE} handleAddBooksData={addBookData} />
                </Grid>
            </Grid>
            <br />
            <StyledTableContainer>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>{S_NO_LABEL}</TableCell>
                                <TableCell align="right">{TITLE_LABEL}</TableCell>
                                <TableCell align="right">{AUTHOR_LABEL}</TableCell>
                                <TableCell align="right">{GENRE_LABEL}</TableCell>
                                <TableCell align="right">{TOTAL_COPIES_LABEL}</TableCell>
                                <TableCell align="right">{ACTIONS_LABEL}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((book, index) => (
                                <TableRow key={book.id}>
                                    <TableCell align="right">{index + 1}</TableCell>
                                    <TableCell align="right">{book.title}</TableCell>
                                    <TableCell align="right">{book.author}</TableCell>
                                    <TableCell align="right">{book.genre}</TableCell>
                                    <TableCell align="right">{book.totalCopies}</TableCell>
                                    <TableCell align="right">
                                        <DataActions
                                            handleGetBooksData={() => getBookData(book.id)}
                                            handleUpdateBooksData={() => updateBookData(book.id)}
                                            handleDeleteBooksData={() => deleteBookData(book.id)}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </StyledTableContainer>
        </Box>
    );
};

export default BooksTable;
