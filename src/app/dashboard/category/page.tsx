// "use client";
import React from 'react'

import { Metadata } from 'next';
import CategoryPage from './CategoryPage';

export const metadata: Metadata = {
    title: 'Category | Digicom Dashboard',
    description: 'Category Page of Admin Digicom',
};

function Page() {
    return (
        <CategoryPage />
    )
}

export default Page