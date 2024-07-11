import "bootstrap/dist/css/bootstrap.min.css"

function Footer() {

    const currentYear = new Date().getFullYear()
    
    return(
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
  <div className="col-md-4 d-flex align-items-center">

    <span className="mb-3 mb-md-0 text-body-secondary">© { currentYear } Kulasiku Baiku</span>
  </div>

  <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">

  </ul>
</footer>


    )

}

export default Footer

