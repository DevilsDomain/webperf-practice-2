import React, { useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import styles from './coctails.module.css'; // Import your CSS file
import 'react-virtualized/styles.css';
import Image from 'next/image';

const fetcher = (url) => axios.get(url).then(res => res.data);

function Cocktails() {
    const [searchQuery, setSearchQuery] = useState('');
    const { data, error, isLoading } = useSWR(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`, fetcher);
  
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
 


    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          setSearchQuery(e.target.value);
        }
      }
    
      const handleSearchSubmit = (e) => {
        e.preventDefault();
        const inputValue = e.target.querySelector('input').value;
        setSearchQuery(inputValue);
      };
  
  return (
    <div>
        <form onSubmit={handleSearchSubmit}>
            <input
                type="text"
                onKeyDown={handleKeyDown}
                placeholder="Search for a cocktail and press Enter..."
            />
        </form>
      <div className={styles.cocktailsContainer}>
        {data.drinks.map((drink, index) => (
          <div key={index} className={styles.cocktailCard}>
            <Image src={drink.strDrinkThumb} alt={drink.strDrink} className={styles.cocktailImage} width={100} height={200} />
            <div className={styles.cocktailInfo}>
              <h3 className={styles.cocktailName}>{drink.strDrink}</h3>
              <p className={styles.cocktailIngredients}>{drink.strIngredient1}, {drink.strIngredient2}, {drink.strIngredient3}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cocktails;
