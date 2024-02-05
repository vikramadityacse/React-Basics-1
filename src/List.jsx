import PropTypes from 'prop-types'

function List(props){

  const category = props.category;
  const itemList = props.items;


  const listItems = itemList.map(item => <li key={item.id}>
                                          {item.name} : &nbsp;
                                          <b>{item.calorie}</b>
                                        </li>);

    return(<>
            <h3 className="list-category" >{props.category}</h3>
            <ol className="list-items" >{listItems}</ol>
           </>);
}

List.propTypes={
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, name: PropTypes.string, calorie: PropTypes.number}))
}

List.defaultProps = {
  category:"Category",
  items:[],
}

export default List


// import List from './List.jsx'

// function App() {

//   const fruits = [{id: 11, name: "apple", calorie: 105},
//                   {id: 12, name: "orange", calorie: 45}, 
//                   {id: 13, name: "banana", calorie: 105}, 
//                   {id: 14, name: "cocunut", calorie: 159},
//                   {id: 15, name: "pineapple", calorie: 37}];

//   const vegetable = [{id: 6, name: "potato", calorie: 115},
//                      {id: 7, name: "tomato", calorie: 40}, 
//                      {id: 8, name: "onions", calorie: 64}, 
//                      {id: 9, name: "lady finger", calorie: 128},
//                      {id: 10, name: "egg plant", calorie: 160}];

//   return(<>
//             {/* this is known as short-ciruiting */}
//             {fruits.length >0 && <List items={fruits}  category="Fruits"/>} 
//             {vegetable.length >0 &&<List items={vegetable}  category="Vegatabes"/>}
//          </>);
// }

// export default App

// ---------------------------------------------------------------------------------------------------------------//

    // const fruits = [{id: 11, name: "apple", calorie: 95},
    //                 {id: 12, name: "orange", calorie: 45}, 
    //                 {id: 13, name: "banana", calorie: 105}, 
    //                 {id: 14, name: "cocunut", calorie: 159},
    //                 {id: 15, name: "pineapple", calorie: 37}];

    // fruits.sort((a,b) => a.name.localeCompare(b.name)); //lexographically
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); // Reverse lexographically
    
    // fruits.sort((a,b) => a.calorie - b.calorie); // sort according to calorie increasing
    // fruits.sort((a,b) => b.calorie - a.calorie); // sort according to decreasing calorie

    // to only give low cal fruits
    // const lowCalFruits = fruits.filter(fruit => fruit.calorie <100);

    // to get high cal fruits
    // const highCalFruits = fruits.filter(fruit => fruit.calorie >100);