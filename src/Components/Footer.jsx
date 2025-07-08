import { Link } from "react-router"

function Footer() {
  return (
<footer className="footer grid grid-cols-3 lg:grid-cols-4 bg-base-200 text-base-content p-10">
  <nav>
    <h6 className="footer-title">Quick Links</h6>
    <a className="link link-hover"><Link to='/'>Home</Link></a>
    <a className="link link-hover"><Link to='/playlist'>PlayList</Link></a>
    <a className="link link-hover"><Link to='/browse'>Discover</Link></a>
    <a className="link link-hover"><Link to='/plan'>Plans</Link></a>  
            
  </nav>
  <nav>
    <h6 className="footer-title">Catagories</h6>
    <a className="link link-hover"><Link to='/browse'>Trending</Link></a>
    <a className="link link-hover"><Link to='/browse'>Electronic</Link></a>
    <a className="link link-hover"><Link to='/browse'>Rock</Link></a>
    <a className="link link-hover"><Link to='/browse'>Hiphop</Link></a>
    <a className="link link-hover"><Link to='/browse'>Jazz</Link></a>
    <a className="link link-hover"><Link to='/browse'>Classical</Link></a>
  </nav>
  <nav>
    <h6 className="footer-title">Plans</h6>
    <a className="link link-hover"><Link to='/plan'>Individual</Link></a>
    <a className="link link-hover"><Link to='/plan'>Duo</Link></a>
    <a className="link link-hover"><Link to='/plan'>Familly</Link></a>
    <a className="link link-hover"><Link to='/plan'>Student</Link></a>
  </nav>
  <form>
    <h6 className="footer-title">Subscribe</h6>
    <fieldset className="form-control w-40">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
  )
}

export default Footer