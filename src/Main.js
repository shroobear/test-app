import AddToOrderButton from "./AddToOrderButton";

const Main = () => {
    return (
        <main id="main">
            <section id="starters">
                <h2>Starters</h2>
                <ul>
                    <li>
                        <img
                            src="https://www.thespruceeats.com/thmb/IzI21XI-Gg07LQnFEu57xYVnA7w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spinach-and-artichoke-dip-4157518-07-8685813570f34ac89c090084c042266d.jpg"
                            width="300"
                            alt="This is Food" />
                        <p>Artichoke Dip</p>
                        <AddToOrderButton />
                    </li>
                    <li>
                        <img src="https://www.mypricechopper.com/Frontend/Media/Recipes/BakedChickenWings_Web_1110x625.jpg"
                            width="300"
                            alt="This is Food" />
                        <p>Wings</p>
                        <AddToOrderButton />
                    </li>
                    <li>
                        <img src="https://static01.nyt.com/images/2018/12/11/dining/as-garlic-bread/as-garlic-bread-superJumbo.jpg"
                            width="300"
                            alt="This is Food" />
                        <p>Garlic Bread</p>
                        <AddToOrderButton />
                    </li>
                    <li>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Salad_platter.jpg/1200px-Salad_platter.jpg"
                            width="300"
                            alt="This is Food" />
                        <p>Salad</p>
                        <AddToOrderButton />
                    </li>
                </ul>
            </section>
            <section id="pizzas">
                <h2>Pizzas</h2>
                <ul>
                    <li>
                        <img
                            src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
                            width="300"
                            alt="This is pizza" />
                        <p>Cheese</p>
                        <AddToOrderButton />
                    </li>
                    <li>
                        <img src="https://www.jennycancook.com/wp-content/uploads/2013/02/PeppPizza_600.jpg" width="300"
                            alt="This is pizza" />
                        <p>Pepperoni</p>
                        <AddToOrderButton />
                    </li>
                    <li>
                        <img
                            src="https://www.allrecipes.com/thmb/v1Xi2wtebK1sZwSJitdV4MGKl1c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hawaiian-pizza-ddmfs-3x2-132-450eff04ad924d9a9eae98ca44e3f988.jpg"
                            width="300"
                            alt="This is pizza" />
                        <p>Hawaiian</p>
                        <AddToOrderButton />
                    </li>
                </ul>
            </section>
            <section id="desserts">
                <h2>Desserts</h2>
                <ul>
                    <li>
                        <img
                            src="https://static01.nyt.com/images/2021/11/02/dining/dg-Tall-and-Creamy-Cheesecake/dg-Tall-and-Creamy-Cheesecake-threeByTwoMediumAt2X.jpg"
                            width="300" />
                        <p>Cheesecake</p>
                        <button>Add to order</button>
                    </li>
                    <li>
                        <img
                            src="https://www.allrecipes.com/thmb/pH8hoFfytcOT9XVK1DSmxv3L0OU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/140877-easy-eggless-strawberry-ice-cream-ddmfs-3x4-1-092e4d11b59049c8b3843014ea3c57f2.jpg"
                            width="300" />
                        <p>Ice Cream</p>
                        <AddToOrderButton />
                    </li>
                    <li>
                        <img
                            src="https://www.allrecipes.com/thmb/v1Xi2wtebK1sZwSJitdV4MGKl1c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hawaiian-pizza-ddmfs-3x2-132-450eff04ad924d9a9eae98ca44e3f988.jpg"
                            width="300" />
                        <p>Hawaiian</p>
                        <AddToOrderButton />
                    </li>
                </ul>
            </section>
        </main>

    )
}

export default Main;