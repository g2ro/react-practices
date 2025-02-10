import React from 'react';
import GroceryItem from './GroceryItem';

function GroceryList({groceries}) {
    
    // const groceryItems = [
    //     <GroceryItem name={'bread'} count={10}/>, 
    //     <GroceryItem name={'milk'} count={5}/>, 
    //     <GroceryItem name={'egg'} count={20}/>
    // ];
    {/* [function(){} = (), function(){} = (), function(){} = ()] 라고 생각하면 이해하기 쉽다
        즉, jsx는 html이 아니다. => <GroceryItem name={'bread'} count={10}/>를 함수라고 생각해라*/}

    // const groceryItems = [];
    // groceries.forEach((grocery) => {
    //     groceryItems.push(<GroceryItem name={grocery.name} count={grocery.count}/> );
    // });

    return (
        <ol className={"grocery-list"}>
            {groceries.map((grocery) => {
                return <GroceryItem name={grocery.name} count={grocery.count} />
            })}
        </ol>
    );
}

export default GroceryList;