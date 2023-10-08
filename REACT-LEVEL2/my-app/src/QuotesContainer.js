import React, { useState, useEffect } from "react";
import AddQuote from "./AddQuote";
import QuoteForm from "./QuoteForm";
import QuotesList from "./QuotesList";

const QuotesContainer = (props) => {
  const [quotes, setquotes] = useState([]);

  useEffect(() => {
    //console.log(localStorage.getItem('quotes'))

    const result = JSON.parse(localStorage.getItem("quotes")) || [];
    setquotes(result);
  }, []);

  useEffect(() => {
    localStorage.setItem("quotes", JSON.stringify(quotes));
  }, [quotes]);

  const addItem = (quote) => {
    const result = [quote, ...quotes];
    setquotes(result);
  };

  const removeItem = (id) => {
    const result = quotes.filter((quote) => {
      return quote.id !== id;
    });
    setquotes(result);
  };

  const editItem = (quote) => {
    //  console.log('quote',quote)

    const result = quotes.map((q) => {
      if (q.id === quote.id) {
        return { ...q, ...quote };
      } else {
        return { ...q };
      }
    });
    setquotes(result);
  };

  return (
    <div>
      QuotesContainer
      <QuotesList quotes={quotes} removeItem={removeItem} editItem={editItem} />
      <AddQuote addItem={addItem} />
      {/*  <QuoteForm addItem={addItem}/> */}
    </div>
  );
};

export default QuotesContainer;
