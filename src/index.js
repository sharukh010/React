import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BooksCollection = [
    {
        title:"Spiritual Anatomy: Meditation, Chakras, and the Journey to the Center",
        name:"Daaji Kamlesh D. Patel",
        url:"https://images-eu.ssl-images-amazon.com/images/I/61PJx0YuQpL._AC_UL600_SR600,400_.jpg",
        id:1,
    },
    {
        title:"Why Bharat Matters",
        name:"S. Jaishankar",
        url:"https://images-eu.ssl-images-amazon.com/images/I/71Hqj4xb0XL._AC_UL600_SR600,400_.jpg",
        id:2

    },
    {
        title:"Atomic Habits",
        name:"James Clear",
        url:"https://images-eu.ssl-images-amazon.com/images/I/81IL8Dy4vmL._AC_UL600_SR600,400_.jpg",
        id:3
    }
]

function SearchBar() {

    let search = "";
    const handleSubmission = (e)=>{
        e.preventDefault();
        getBook(search);
        console.log("search done");
    }
    const SearchText = (e)=>{
        search = e.target.value;
        console.log(search)
    }
    const getBook = (name)=>{
        if(name != ""){
            const book = BooksCollection.find((book)=>book.title.toLowerCase().includes(name.toLowerCase()));
            console.log(book);
        }
    }
  return (
    <div className="search-container">
      <form onSubmit={handleSubmission}>
        <input type="text" placeholder="Search Amazon.in" className = "search-box" onChange = {SearchText} />
        <button type="submit"  className = "search-button" onClick ={()=>console.log("button clicked")} >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
            className = "search-icon"
            >
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
          </svg>
        </button>
</form>
    </div>
  );
}
function BookList() {
    return (
        <>
    <SearchBar/>
    <section className="container">
      <Book
        title="Spiritual Anatomy: Meditation, Chakras, and the Journey to the Center"
        name="Daaji Kamlesh D. Patel"
        url="https://images-eu.ssl-images-amazon.com/images/I/61PJx0YuQpL._AC_UL600_SR600,400_.jpg"
        />
      <Book
        title="Why Bharat Matters"
        name="S. Jaishankar"
        url="https://images-eu.ssl-images-amazon.com/images/I/71Hqj4xb0XL._AC_UL600_SR600,400_.jpg"
        />
      <Book
        title="Atomic Habits"
        name="James Clear"
        url="https://images-eu.ssl-images-amazon.com/images/I/81IL8Dy4vmL._AC_UL600_SR600,400_.jpg"
        />
      <Book
        title="The Power of Your Subconscious Mind: Original Edition | Premium Paperback"
        name="Joseph Murphy"
        url="https://images-eu.ssl-images-amazon.com/images/I/71sBtM3Yi5L._AC_UL600_SR600,400_.jpg"
        />
      <Book
        title="The Psychology Of Money"
        name="Morgan Housel"
        url="https://images-eu.ssl-images-amazon.com/images/I/61-hMfd7NGL._AC_UL600_SR600,400_.jpg"
        />
      <Book
        title="Ikigai"
        name="Francesc Miralles"
        url="https://images-eu.ssl-images-amazon.com/images/I/814L+vq01mL._AC_UL600_SR600,400_.jpg"
        />
    </section>
    </>
  );
}

function Book(details) {
  const { title, name, url } = details;
  return (
    <article className="book">
      <Image url={url} title={title} />
      <div className="description">
        <Title title={title} />
        <Author name={name} />
      </div>
    </article>
  );
}

const Image = (prop) => (
  <img src={prop.url} alt={prop.title} className="book-cover" />
);

const Title = (prop) => <h2 className="book-title">{prop.title}</h2>;

const Author = (prop) => <h4 className="book-author">{prop.name}</h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
