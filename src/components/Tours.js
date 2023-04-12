import Card from './Card'
function Tours({tours, removeTour}) {
    return (
        <div className='container'>
            <div>
                <h2 className='title'> Plan With Love</h2>
            </div>
            <div className='cards'>
                {/* rather then typing code for 7 cards we can we can use "map" to create onlu 1 card and map all other cards to it */}
                {/* tours mei jho bhi data hai usko map kar do with arrow function */}
                {/* "...tour" clone karta hai */}
                   
                {
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    } )
                }
            </div>
        </div>
    );
}

export default Tours;