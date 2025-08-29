'use client';
import { useEffect } from 'react';

export default function EcwidStore() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://app.ecwid.com/script.js?store=YOUR_STORE_ID&data_platform=code&data_date=2025-08-29';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return <div id="my-store-ecwid"></div>;
}