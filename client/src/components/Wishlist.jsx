import SearchBar from "./SearchBar";

const Wishlist = () => {

  return (
    <>
      <div>
        <div id="catagories-bar">
          <button>Men</button>
          <button>Women</button>
          <button>Kids</button>
        </div>

        <div className="secondary-navbar">
          <SearchBar />
          {/* cart button goes here */}
        </div>
        
        <div id="scroll-container">
          <h1 id="scrolling-text">YOUR NIKE WISHLIST</h1>
        </div>

        <div id="space">
          <h3>Online Experience</h3>
        </div>

        <img
          id="wishlist-banner"
          src="https://s3.nikecdn.com/events-platform/pre-prod/NET_Admin/header/2018-12-31_3008_desktop_uk_nl.jpg"
          alt="product and models displayed with holiday backdrop"
        ></img>

        <h2 id="event">Event has ended</h2>
        <h2>YOUR NIKE WISH LIST</h2>
        <h2>Registration Closed</h2>
        <br />
        <br />
        <h2>TBD</h2>
        <h3>Are you a young hero? Someone aged 8-13 who won a
          race, or finished one against the odds? Maybe you got your
          team to a regional competition or helped organize a charity
          sport event? Whatever your proudest moment of 2018 is, we
          want to reward your achievement by giving you a chance to
          win your favourite Nike gear. All you have to do is share your
          proudest moment here and select your favourite Nike shoes
          and apparel in a wish list - then you could win everything in
          it…and more. But first, go grab an adult to fill in this form,
          as adult supervision is required. Good luck!</h3>
        <br />
        <br />
        <h2>We hope that you make 2019 even better!</h2>
        <h3>We'll let you know if you win your wish list, but
          whatever happens, keep showing us what you
          are capable of! #SHOWYOURGAME</h3>
      </div>
    </>
  )
};

export default Wishlist;