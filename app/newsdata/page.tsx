"use client";
import axios from "axios";
import { useEffect, useState } from "react";

function JikanPage() {
    const [thaipost, setThaipost] = useState([]);

    useEffect(() => {
        function fetchThaipost() {
            axios.get('https://www.thaipost.net/columnist-people/943047/').then((res) => {
                console.log(res)
                setThaipost(res.data.data);
            })
        }
        fetchThaipost();

    }, [])

    return <div>
        <h1 className="text-4xl text-center my-5">รายการจากหนังสือพิมพ์ไทยโพสต์</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {thaipost.map((item) => {
                return (
                <div key={item.title} className="bg-gray-700 w-full rounded-xl p-2">
                    <h2 className="text-center text-2xl">{item.title}</h2>
                    <div className="flex justify-center mt-2">
                        <img src={item.images.jpg.image_url} alt="item.title" />
                    </div>
                </div>
                );
            })}
        </div>
    </div>;

}

export default JikanPage;