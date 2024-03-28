import React, { useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import styles from './coctails.module.css'; // Import your CSS file
import 'react-virtualized/styles.css';
import Image from 'next/image';
import {Card,Skeleton} from "@nextui-org/react";

const fetcher = (url) => axios.get(url).then(res => res.data);

function Cocktails() {
    const [searchQuery, setSearchQuery] = useState('');
    const { data, error, isLoading } = useSWR(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`, fetcher);
    const randomArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);
    if (error) return <div>failed to load</div>
    if (isLoading) {
        return (
             <div className={styles.cocktailsContainer}>
                {randomArray.map((drink, index) => (
                    <div key={index} className={styles.cocktailCard}>
                        <Image src={drink.strDrinkThumb} alt={drink.strDrink} className={styles.cocktailImage} width={100} height={200} />
                        <div className={styles.cocktailInfo}>
                            <h3 className={styles.cocktailName}>{drink.strDrink}</h3>
                            <p className={styles.cocktailIngredients}>{drink.strIngredient1}, {drink.strIngredient2}, {drink.strIngredient3}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
        
 


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
    <div className={styles.pageContainer}>
        <form onSubmit={handleSearchSubmit}>
        <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Search..."
        className={styles.inputField}
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
