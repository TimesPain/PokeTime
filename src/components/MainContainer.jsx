import { Heading } from './Heading';
import { SearchSection } from './SearchSection';
import { Features } from './Features';
import { Cta } from './Cta';

import "./MainContainer.css";


export function MainContainer() {
    return (
        <main className="container">
            <Heading />
            <SearchSection />
            <Features />
            <Cta />
        </main>
    );
}