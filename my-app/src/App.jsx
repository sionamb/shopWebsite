import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ContactButtons from "./components/ContactButtons";
import ProductImage from "./components/ProductImage";
function App() {
    const [contacts] = useState([
        {
            id: "btnPhone",
            label: "Phone:",
            href: "tel:906-337-2435",
            text: "+1(906) 337-2435",
        },
        {
            id: "btnEmail",
            label: "Email:",
            href: "mailto:farmerjamman@gmail.com",
            text: "farmerjamman@gmail.com",
        },
        {
            id: "btnFacebook",
            label: "Facebook:",
            href: "https://www.facebook.com/TheWoodnSpoon/",
            text: "@TheWoodnSpoon",
        },
    ]);
    const [productImages] = useState([
        [
            {
                src: "../images/interior/cookies.png",
                alt: "Cookies Display",
            },
            {
                src: "../images/interior/woodenWare.png",
                alt: "Woodenware Display",
            },
            {
                src: "../images/interior/copperBracelets.png",
                alt: "Yarn Display",
            },
        ],
        [
            {
                src: "../images/interior/thimbleberryJam.png",
                alt: "Shop Owner Holding Jar of Thimbleberry Jam",
            },
            { src: "../images/interior/jellies.png", alt: "Jellies Display" },
            { src: "../images/interior/yarn.png", alt: "Yarn Display" },
        ],
        [
            { src: "../images/interior/copper.png", alt: "Copper Display" },
            { src: "../images/interior/jamCounter.png", alt: "Jam Display" },
            {
                src: "../images/interior/chowChow.png",
                alt: "Chow-Chow Display",
            },
        ],
    ]);
    return (
        <>
            <Navbar variant="dark" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <Nav.Link href="#products">Products</Nav.Link>
                            <Nav.Link href="#gallery">Product Gallery</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <header>
                <h1>The Wood'n Spoon</h1>
                <h2>Keweenaw's Bounty</h2>
                <h3>
                    Jams, Jellies, Syrups, Bakery, <br />
                    Copper, Woodenware and <br />
                    More!
                </h3>
                <a href="#main">
                    <img
                        src="./images/icons/downArrow.png"
                        alt="Down Arrow"
                        width="75"
                    />
                </a>
            </header>
            <main id="main">
                <div className="about" id="about">
                    <div className="aboutMessage">
                        <h1>About Us</h1>
                        <p>
                            The Wood'n Spoon is a family owned business since
                            1998 located in Mohawk, Michigan that features
                            handmade jams, jellies and syrups, naturally grown
                            produce, and baked goods from Michigan's Keweenaw
                            Peninsula. Many of the wild berries used for the
                            jams, jellies, and syrups are picked in the Keweenaw
                            forests. We grow our own berries for their preserves
                            and fresh produce on their 70-acre farm where we use
                            no chemical pesticides and as many natural practices
                            as possible. We sell yarn made from our sheep and
                            alpacas, some of which is hand dyed in
                            micro-batches. In addition to these products, we
                            offer many local specialties including native
                            copper, agates, datolite, books about the Upper
                            Peninsula, postcards, maple syrup, fruit cakes, and
                            honey from our farm.
                            <hr />
                            If you're interested in visiting The Wood'n Spoon
                            shop you can find us at 174 Stanton Ave, US41,
                            Mohawk, MI 49950. We are open Monday through
                            Saturday from 10:00 AM to 5:00 PM (seasonally).
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <div class="contact" id="contact">
                    <h1>Contact Us</h1>
                    <br />
                    <div class="contactItems">
                        <div class="map col-lg-6 col-md-6 col-12">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5411.266491516916!2d-88.37605396177518!3d47.30196629999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d50a2eacd01da47%3A0x2d85264b90411ade!2sWood&#39;n%20Spoon!5e0!3m2!1sen!2sus!4v1671391033950!5m2!1sen!2sus"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div class="contactInfo col-lg-6 col-md-7 col-12">
                            <div class="contactSection">
                                <h3>Hours</h3>
                                <h5>
                                    Open Seasonally ~ Mid May-October <br />
                                    Monday - Saturday: 10 am to 5 pm <br />
                                    Sunday: Closed
                                </h5>
                                <hr />
                                <h3>Address</h3>
                                <h5>174 Stanton Ave, US41, Mohawk, MI 49950</h5>
                                <hr />
                                {contacts.map((c) => (
                                    <ContactButtons contact={c} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div class="products" id="products">
                    <div class="productHeader">
                        <h1>Products</h1>
                        <hr />
                        <p>
                            At Wood'n Spoon, we craft delicious jams, jellies,
                            syrups, cookies, and breads with fresh and natural
                            ingredients. We offer over 70 different varieties of
                            jams, jellies, and butters made from fruit and
                            berries grown on Michigan's Keweenaw Peninsula.
                            Thimbleberries are a bright red berry in the
                            raspberry family that has a sweet/tart taste and is
                            found throughout the Keweenaw. You can try our
                            Thimbleberry Walnut Cookies or our berry preserves
                            and taste the difference!
                        </p>
                    </div>
                    <br />
                    <h2 id="productEnd">Some of our best sellers include:</h2>

                    <h2>&nbspJams&nbsp</h2>
                    <p>
                        Wild Thimbleberry (4 sizes), Wild Blueberry, Wild
                        Blackberry, Raspberry, Wild Strawberry,
                        Strawberry-Rhubarb, and Tart Cherry
                    </p>
                    <h2>&nbspJellies&nbsp</h2>
                    <p>
                        Wild Blackberry, Wild Chokecherry, Wild Thimbleberry,
                        and Wild Pincherry
                    </p>
                    <h2>&nbspSyrups&nbsp</h2>
                    <p>Wild Thimbleberry, Wild Blueberry, and Raspberry</p>
                    <h2>&nbspChow-Chow&nbsp</h2>
                    <p>
                        We offer hot and regular options for this sweet and sour
                        pickle mixture made with cucumbers, onions, peppers, and
                        cauliflower.
                    </p>
                    <h2>&nbspCookies&nbsp</h2>
                    <p>
                        Moms Gingersnaps, Thimbleberry Walnut, Snickerdoodles,
                        Monster, Cardamon-Honey Snaps
                    </p>
                    <h2>&nbspBreads&nbsp</h2>
                    <p>
                        We freshly bake bread on Mondays, Wednesdays, and
                        Fridays. Some of our popular bread options include
                        Limpa, Potato Buttermilk, Sourdough White, and Whole
                        Wheat.
                    </p>
                    <h2 id="productEnd">...and many more!</h2>

                    <div class="productFooter">
                        <p>
                            In addition to bakery and preserves, the Wood'n
                            Spoon offers a selection of rocks and minerals, such
                            as native copper, datolite, mohawkite, and agates.
                            We also offer a wide selection of woodenware (such
                            as antique Munising bowls), jewelry, yarn, and other
                            local gifts.
                        </p>
                    </div>
                </div>
                <hr />
                <div className="gallery row" id="gallery">
                    <h1>Product Gallery</h1>
                    <hr />
                    <br />
                    {productImages.map((p) => (
                        <ProductImage products={p} />
                    ))}
                </div>
            </main>
            <footer class="footer mt-auto py-3 bg-dark">
                <div class="container text-center">
                    <span class="text-muted">
                        {contacts[1].label} &nbsp;
                        <a href={contacts[1].href}>{contacts[1].text}</a>
                        <br />
                        {contacts[0].label} &nbsp;
                        <a href={contacts[0].href} class="phone">
                            {contacts[0].text}
                        </a>
                    </span>
                </div>
            </footer>
        </>
    );
}

export default App;
