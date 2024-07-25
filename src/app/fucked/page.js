"use client"
import React, { useState, useEffect } from 'react';
import Table from "./table";
import axios from 'axios';

export default function Fucked() {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getData();
                const rows = data.data.map((d, i) => {
                    return {
                        key: i,
                        id: d.key,
                        pass: d.pass
                    }
                });
                setRows(rows);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="">
            <Table rows={rows} />
        </div>
    );
}

async function getData() {
    const res = await axios.get("/api/getdata");
    return res.data;
}
