import React from 'react'

const CoffeTime = () => {

    const Data = [
        {
            Name: "Coffee Latte",
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            price: "$2.95"
        },
        {
            Name: "Coffee Moccha Latte",
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            price: "$3.05"
        },
        {
            Name: "Capucino",
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            price: "$5.50"
        },
        {
            Name: "Java Coffee",
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            price: "$3.05"
        }, {
            Name: "Luwak Coffee",
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            price: "$13.00"
        }

    ]
    return (
        <>
            <div className="CoffeTime">
                <div className="chlCoffe1">
                    <img src="img/coffe1.png" alt="" className="img" />
                    {/* <img src="https://img.freepik.com/free-photo/delicious-quality-coffee-cup_23-2150691273.jpg?t=st=1717217300~exp=1717220900~hmac=adef2b24ac273d217e139878a5e82f099d754872d901e1f543dcf8a1104e6888&w=996" alt="" className="img" /> */}
                </div>
                <div className="chlCoffe2">
                    <div className='title'> <b>IT'S COFFEE TIME</b> </div>
                    <h1>We Only Have The Best</h1>
                    {
                        Data.map((item) => <div className="menu-item">
                            <div className="description">
                                <h2>{item.Name}</h2>
                                <p>{item.data}</p>
                            </div>

                            <div className="price">
                                {item.price}
                            </div>

                        </div>)
                    }
                    <button type="button" class="button">More Menu</button>

                </div>
            </div>
        </>
    )
}

export default CoffeTime