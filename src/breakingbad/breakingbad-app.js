const fetchQuote=async()=>{
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes/1');
    const data = await res.json();
    return data;
}

export const BreakingBadApp =async (element) => {
    element.innerHTML = `
    Loading...
    `;
    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next';
    
    const renderQuote =(data)=>{
        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel,authorLabel,nextButton);
    }
    
    nextButton.onclick=()=>{
        element.innerHTML = `
    Loading...
    `;
        nextButton.disabled = true;
        fetchQuote().then(data=>renderQuote(data[0]));
        setTimeout(()=>nextButton.disabled = false,500);
    }

    fetchQuote().then(data=>renderQuote(data[0]));

};