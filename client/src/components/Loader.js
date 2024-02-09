import React from 'react';
import { Spinner } from "@nextui-org/react";

function Loader() {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <Spinner size="lg" />
        </div>
    )
}

export default Loader;