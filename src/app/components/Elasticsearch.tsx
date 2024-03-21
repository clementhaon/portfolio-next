'use client'
import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from 'axios';

//create interface for data user
interface User {
    id: number;
    first_name: string;
    last_name: string;
    address: string;
    country: string;
    car: string;
    car_model_year: number; 
}

//interface for data from elasticsearch
interface Data {
    _index: string;
    _id: string;
    _score: number;
    _source: User;
}

export default function Elasticsearch() {
    //state for data
    const [data, setData] = useState<User[]>([]);
    const [searchColumns, setSearchColumns] = useState<string>('');
    const [totalPages, setTotalPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [search, setSearch] = useState<string>('');
    //state for columns
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70, sortable: false, filterable: false },
        { field: 'first_name', headerName: 'First name', width: 150, sortable: false, filterable: false },
        { field: 'last_name', headerName: 'Last name', width: 150, sortable: false, filterable: false },
        {
          field: 'address',
          headerName: 'Address',
          type: 'string',
          sortable: false,
          filterable: false,
          width: 250,
        },
        {
          field: 'country',
          headerName: 'Country',
          type: 'string',
          sortable: false,
          filterable: false,
          width: 250,
        },
        {
            field: "car",
            headerName: "Car",
            type: "string",
            sortable: false,
            filterable: false,  
            width: 160,
        },
        {
            field: "car_model_year",
            headerName: "Car model year",
            width: 150,
            sortable: false,
            filterable: false,  
            type: "number",
        }
      ];

    //handle change for select
    const handleChange = (event: SelectChangeEvent) => {
        setSearchColumns(event.target.value);
    };

    //fetch data from elasticsearch
    const fetchData = async (page:number) => {
        try {
            const response = await axios.get(`https://klem-online-cloudy.fr/api/get-all?page=${page}&size=100`);

            if (response.data && response.data.success && response.data.data) {
                const jsonData: Data[] = response.data.data;

                // Extraction des données du champ "_source" de chaque élément de la réponse
                const formattedData = jsonData.map(item => item._source);
    
                // Mise à jour de l'état avec les données formatées
                setData(formattedData);
                setTotalPages(10000);
            }
            
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
        }
    };

    //handle page change
    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
        fetchData(value);
    };
    //load the first page
    useEffect(() => {
        fetchData(1);
    }, []); 

    //search data
    useEffect(() => {
        const fetchDataSearch = async () => {
            try {
                const response = await axios.post(`https://klem-online-cloudy.fr/api/search`, {
                    value: search,
                    column: searchColumns
                });
    
                if (response.data && response.data.success && response.data.data) {
                    const jsonData: Data[] = response.data.data;
    
                    // Extraction des données du champ "_source" de chaque élément de la réponse
                    const formattedData = jsonData.map(item => item._source);
        
                    // Mise à jour de l'état avec les données formatées
                    setData(formattedData);
                    setTotalPages(1);
                }
                
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };
        if (search.length > 0) {
            fetchDataSearch();
        } else {
            if (data.length !== 1000) {
                fetchData(1);
            }
        }
       
    }, [search, searchColumns]);

    return (
        <>
            <Box className="flex-center-max-width flex-column">
                <h1>Exemple Elasticsearch Node.js, hébergé sur mon vps</h1>
                <p style={{fontStyle: "italic"}}>{`La data a été générée via Mockaroo et contient un million d'objet`}</p>
                <p style={{fontStyle: "italic"}}>{`Repo back-end : https://github.com/clementhaon/elasticsearch-node-api-playground`}</p>

                <Box className="flex-center-max-width" >
                    <TextField
                    
                    id="outlined-basic" 
                    label="Rechercher" 
                    variant="outlined" 
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setSearch(event.target.value);
                    }} />
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">Colonne</InputLabel>
                        <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={searchColumns}
                        label="Collone"
                        onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>Toutes</em>
                            </MenuItem>
                            <MenuItem value={"id"}>Id</MenuItem>
                            <MenuItem value={"first_name"}>First Name</MenuItem>
                            <MenuItem value={"last_name"}>Last Name</MenuItem>
                            <MenuItem value={"address"}>Address</MenuItem>
                            <MenuItem value={"country"}>Country</MenuItem>
                            <MenuItem value={"car"}>Car</MenuItem>
                            <MenuItem value={"car_model_year"}>Car model year</MenuItem>
                        </Select>
                    </FormControl>
                    <FormHelperText>Si une colonne est sélectionnée une recherche exacte sera effectuée</FormHelperText>

                </Box>
            </Box>
            <div className='flex-center-max-width'>
                <div style={{ width: '100%', maxWidth: "1300px" }}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        pageSizeOptions={[100]}
                    />
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        siblingCount={1}
                        boundaryCount={1}
                    />
                </div>
            </div>
        
        </>
    )
}