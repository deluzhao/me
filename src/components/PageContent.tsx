interface PageContentProps {
    id :number;
}

function PageContent({id}: PageContentProps) {
    const blurb = " is the content for this page."
    switch (id) {
        case 0: return "A" + blurb;
        case 1: return "B" + blurb;
        case 2: return "C" + blurb;
    }
}

export default PageContent